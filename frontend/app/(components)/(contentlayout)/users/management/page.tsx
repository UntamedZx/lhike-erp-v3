"use client";

import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import React, { Fragment, useMemo, useState, useEffect } from "react";
import {
	useTable,
	useSortBy,
	useGlobalFilter,
	usePagination,
} from "react-table";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation"; // For Next.js

const UserManagement = () => {
	const [data, setData] = useState([]);
	const [totalRecords, setTotalRecords] = useState(0);
	const [loading, setLoading] = useState(false);
	const [pageSize, setPageSize] = useState(10);
	const [globalFilter, setGlobalFilter] = useState("");
	const [pageIndex, setPageIndex] = useState(0); // Track the page index for pagination
	const [canNextPage, setCanNextPage] = useState(false);
	const [canPreviousPage, setCanPreviousPage] = useState(false);
	const router = useRouter();
	const searchParams = useSearchParams();

	useEffect(() => {
		const token = localStorage.getItem("authToken");
		if (!token) {
			router.push("/");
		}
	}, [router]);

	useEffect(() => {
		const pageParam = searchParams.get("page");
		const pageSizeParam = searchParams.get("pageSize");
		const search = searchParams.get("search");

		// Sync state with query params
		if (pageParam) {
			setPageIndex(Number(pageParam) - 1);
		}
		if (pageSizeParam) {
			const newPageSize = Number(pageSizeParam);
			setPageSize(newPageSize);
			setTablePageSize(newPageSize);
		}
		if (search !== globalFilter) {
			setGlobalFilter(search || "");
		}
	}, [searchParams]); // No `router.push` here

	const fetchData = async (
		pageIndex: number,
		pageSize: number,
		globalFilter: string
	) => {
		setLoading(true);
		try {
			const token = localStorage.getItem("authToken");
			if (!token) {
				router.push("/");
				return;
			}

			const response = await axios.get("http://localhost:5000/users", {
				params: {
					page: pageIndex + 1,
					pageSize,
					search: globalFilter,
				},
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			setData(response.data.data);
			setTotalRecords(response.data.pagination.total_records);
			setCanNextPage(response.data.pagination.next_page !== null);
			setCanPreviousPage(response.data.pagination.prev_page !== null);
			console.log(response.data);
		} catch (error) {
			console.error("Error fetching data:", error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchData(pageIndex, pageSize, globalFilter);
	}, [pageIndex, pageSize, globalFilter]);

	const COLUMNS: any = useMemo(
		() => [
			{
				Header: "Employee ID",
				accessor: "_id",
			},
			{
				Header: "Full Name",
				accessor: "fullName",
			},
			{
				Header: "Username",
				accessor: "userName",
			},
			{
				Header: "Active Status",
				accessor: "isActive",
				Cell: ({ value }: any) => (value ? "Active" : "Inactive"),
			},
		],
		[]
	);

	const tableInstance: any = useTable(
		{
			columns: COLUMNS,
			data: data,
		},
		useGlobalFilter,
		useSortBy,
		usePagination
	);

	const {
		getTableProps,
		headerGroups,
		getTableBodyProps,
		prepareRow,
		setGlobalFilter: setFilter,
		page,
		nextPage,
		previousPage,
		gotoPage,
		state,
		setPageSize: setTablePageSize,
	} = tableInstance;

	const handlePageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const newPageSize = Number(e.target.value);
		setPageSize(newPageSize);
		setTablePageSize(newPageSize);
		setPageIndex(0);
		router.push(`?page=1&pageSize=${newPageSize}&search=${globalFilter}`);
	};

	const handleGlobalFilterChange = (e: any) => {
		setGlobalFilter(e.target.value);
		router.push(`?page=1&pageSize=${pageSize}&search=${e.target.value}`);
	};

	const totalPages = Math.ceil(totalRecords / pageSize); // Total number of pages

	const generatePageNumbers = () => {
		const visiblePages = 5; // Maximum number of visible page numbers
		const halfRange = Math.floor(visiblePages / 2); // Half the range for balancing

		let startPage = Math.max(1, pageIndex + 1 - halfRange); // Start of the range
		let endPage = Math.min(totalPages, pageIndex + 1 + halfRange); // End of the range

		// Adjust range if it exceeds totalPages or starts below 1
		if (endPage - startPage + 1 < visiblePages && endPage < totalPages) {
			endPage = Math.min(totalPages, startPage + visiblePages - 1);
		}

		if (endPage - startPage + 1 < visiblePages && startPage > 1) {
			startPage = Math.max(1, endPage - visiblePages + 1);
		}

		const pages = [];
		for (let i = startPage; i <= endPage; i++) {
			pages.push(i);
		}
		return pages;
	};

	const handlePageNumberClick = (pageNumber: number) => {
		setPageIndex(pageNumber - 1);
		fetchData(pageNumber - 1, pageSize, globalFilter);
		router.push(
			`?page=${pageNumber}&pageSize=${pageSize}&search=${globalFilter}`
		);
	};

	const handlePreviousPage = () => {
		if (canPreviousPage) {
			const prevPageIndex = pageIndex - 1;
			setPageIndex(prevPageIndex);
			fetchData(prevPageIndex, pageSize, globalFilter);
			router.push(
				`?page=${prevPageIndex + 1}&pageSize=${pageSize}&search=${globalFilter}`
			);
		}
	};

	const handleNextPage = () => {
		if (canNextPage) {
			const nextPageIndex = pageIndex + 1;
			setPageIndex(nextPageIndex);
			fetchData(nextPageIndex, pageSize, globalFilter);
			router.push(`?page=${nextPageIndex + 1}&pageSize=${pageSize}`);
		}
	};

	const handleFirstPage = () => {
		setPageIndex(0);
		fetchData(0, pageSize, globalFilter);
		router.push(`?page=1&pageSize=${pageSize}`);
	};

	const handleLastPage = () => {
		const lastPageIndex = Math.floor(totalRecords / pageSize);
		setPageIndex(lastPageIndex);
		fetchData(lastPageIndex, pageSize, globalFilter);
		router.push(`?page=${lastPageIndex}&pageSize=${pageSize}`);
	};

	return (
		<div>
			<Seo title={"User Management"} />
			<Pageheader
				currentpage="User Management"
				activepage="Tables"
				mainpage="User Management"
			/>
			<div className="grid grid-cols-12 gap-6">
				<div className="col-span-12">
					<div className="box">
						<div className="box-body space-y-3">
							<div className="overflow-hidden">
								<div
									id="reactivity-table"
									className="ti-custom-table ti-striped-table ti-custom-table-hover">
									<div className="e-table">
										<div className="flex mb-4">
											<select
												className="selectpage border me-1 text-sm"
												value={pageSize}
												onChange={handlePageSizeChange}>
												{[10, 25, 50].map((size) => (
													<option key={size} value={size}>
														Show {size}
													</option>
												))}
											</select>
											<span className="ms-auto">
												<input
													className="form-control !w-auto"
													placeholder="Search..."
													value={globalFilter}
													onChange={handleGlobalFilterChange}
												/>
											</span>
										</div>
										<div className="table-responsive table-bordered text-center">
											<table
												{...getTableProps()}
												className="border-top-0 table-bordered text-nowrap border-bottom">
												<thead>
													{headerGroups.map((headerGroup: any) => (
														<tr
															{...headerGroup.getHeaderGroupProps()}
															key={Math.random()}>
															{headerGroup.headers.map((column: any) => (
																<th
																	{...column.getHeaderProps(
																		column.getSortByToggleProps()
																	)}
																	key={Math.random()}>
																	<Fragment>
																		<span className="tabletitle">
																			{column.render("Header")}
																		</span>
																		<span>
																			{column.isSorted ? (
																				column.isSortedDesc ? (
																					<i className="fa fa-angle-down"></i>
																				) : (
																					<i className="fa fa-angle-up"></i>
																				)
																			) : (
																				""
																			)}
																		</span>
																	</Fragment>
																</th>
															))}
														</tr>
													))}
												</thead>
												<tbody {...getTableBodyProps()}>
													{loading ? (
														<tr>
															<td
																colSpan={COLUMNS.length}
																className="flex justify-center items-center">
																Loading...
															</td>
														</tr>
													) : data.length === 0 ? (
														<tr>
															<td
																colSpan={COLUMNS.length}
																className="flex justify-center items-center">
																No result found
															</td>
														</tr>
													) : (
														page.map((row: any) => {
															prepareRow(row);
															return (
																<tr {...row.getRowProps()} key={Math.random()}>
																	{row.cells.map((cell: any) => (
																		<td
																			{...cell.getCellProps()}
																			key={Math.random()}>
																			{cell.render("Cell")}
																		</td>
																	))}
																</tr>
															);
														})
													)}
												</tbody>
											</table>
										</div>
										<div className="block sm:flex mt-4">
											<div>
												{data.length === 0 ? (
													<>
														Showing <strong>0 to 0 of 0 entries</strong>
													</>
												) : (
													<>
														Showing{" "}
														<strong>
															{pageIndex * pageSize + 1} to{" "}
															{Math.min(
																totalRecords,
																(pageIndex + 1) * pageSize
															)}{" "}
															of {totalRecords} entries
														</strong>
													</>
												)}
											</div>

											<div className="sm:ms-auto float-right my-1 sm:my-0">
												<button
													className="btn-outline-light tablebutton me-2 mb-2 sm:mb-0"
													onClick={handleFirstPage}
													disabled={pageIndex === 0}>
													{" First "}
												</button>
												{/* Dynamic Page Numbers */}
												{generatePageNumbers().map((page) => (
													<button
														key={page}
														className={`tablebutton me-2 ${
															page === pageIndex + 1
																? "btn-outline-light bg-light" // Add primary background for active page
																: "btn-outline-light hover:bg-light"
														}`}
														onClick={() => handlePageNumberClick(page)}>
														{page}
													</button>
												))}

												<button
													className="btn-outline-light tablebutton me-2 mb-2 sm:mb-0"
													onClick={handleLastPage}
													disabled={pageIndex === totalPages - 1}>
													{" Last "}
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserManagement;
