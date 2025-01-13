"use client";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import React, { Fragment } from "react";
import * as Widgetsdata from "@/shared/data/widgets/widgetsdata";
import dynamic from "next/dynamic";
import Link from "next/link";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
	ssr: false,
});

const Dashboard = () => {
	return (
		<Fragment>
			<Seo title={"Sales Warehouse Logistics"} />
			<Pageheader
				currentpage="Sales Warehouse Logistics"
				activepage="Sales Warehouse Logistics"
				mainpage="Sales Warehouse Logistics"
			/>
			<div className="grid grid-cols-12 gap-x-6 border-primary">
				<div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-6 col-span-12 flex flex-col h-full">
					<div className="box flex-grow">
						<div className="box-body">
							<div className="grid grid-cols-12">
								<div className="col-span-6 pe-0">
									<p className="mb-2">
										<span className="text-[1rem]">Today Sales</span>
									</p>
									<p className="mb-2 text-[0.75rem]">
										<span className="text-[1.5625rem] font-semibold leading-none vertical-bottom mb-0">
											₱0.00
										</span>
									</p>
								</div>
								<div className="col-span-6">
									<p className="main-card-icon mb-0">
										<i className="bx bxs-cart-alt text-2xl text-primary"></i>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<hr className="border-t-2 border-primary mb-5" />
			<div className="grid grid-cols-12 gap-x-6">
				<div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-6 col-span-12 flex flex-col h-full">
					<div className="box flex-grow">
						<div className="box-body">
							<div className="grid grid-cols-12">
								<div className="col-span-6 pe-0">
									<p className="mb-2">
										<span className="text-[1rem]">Total Sales(5)</span>
									</p>
									<p className="mb-2 text-[0.75rem]">
										<span className="text-[1.5625rem] font-semibold leading-none vertical-bottom mb-0">
											₱17,596.00
										</span>
									</p>
									<Link
										href="#!"
										scroll={false}
										className="text-[0.75rem] mb-0 text-primary">
										Click to View
										<i className="ti ti-chevron-right ms-1 inline-flex"></i>
									</Link>
								</div>
								<div className="col-span-6">
									<p className="badge bg-success/10 !text-success ltr:float-right rtl:float-left inline-flex">
										<i className="ti ti-caret-up me-1"></i>42%
									</p>
									<p className="main-card-icon mb-0">
										<i className="bx bx-money-withdraw text-2xl text-primary"></i>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-6 col-span-12 flex flex-col h-full">
					<div className="box flex-grow">
						<div className="box-body">
							<div className="grid grid-cols-12">
								<div className="col-span-6 pe-0">
									<p className="mb-2">
										<span className="text-[1rem]">Fulfilled(0)</span>
									</p>
									<p className="mb-2 text-[0.75rem]">
										<span className="text-[1.5625rem] font-semibold leading-none vertical-bottom mb-0">
											₱0.00
										</span>
									</p>
									<Link
										href="#!"
										scroll={false}
										className="text-[0.75rem] mb-0 !text-primary">
										Click to View
										<i className="ti ti-chevron-right ms-1 inline-flex"></i>
									</Link>
								</div>
								<div className="col-span-6">
									<p className="badge bg-danger/10 !text-danger ltr:float-right rtl:float-left inline-flex">
										<i className="ti ti-caret-down me-1"></i>12%
									</p>
									<p className="main-card-icon mb-0">
										<i className="bx bxs-box text-2xl text-primary"></i>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-6 col-span-12 flex flex-col h-full">
					<div className="box flex-grow">
						<div className="box-body">
							<div className="grid grid-cols-12">
								<div className="col-span-6 pe-0">
									<p className="mb-2">
										<span className="text-[1rem]">Unfulfilled(4)</span>
									</p>
									<p className="mb-2 text-[0.75rem]">
										<span className="text-[1.5625rem] font-semibold leading-none vertical-bottom mb-0">
											₱9,347.00
										</span>
									</p>
									<Link
										href="#!"
										scroll={false}
										className="text-[0.75rem] mb-0 text-primary">
										Click to View
										<i className="ti ti-chevron-right ms-1 inline-flex"></i>
									</Link>
								</div>
								<div className="col-span-6">
									<p className="badge bg-success/10 !text-success ltr:float-right rtl:float-left inline-flex">
										<i className="ti ti-caret-up me-1"></i>27%
									</p>
									<p className="main-card-icon mb-0">
										<i className="bx bxl-dropbox text-2xl text-primary"></i>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<hr className="border-t-2 border-primary mb-5" />
			<div className="grid grid-cols-12 gap-x-6">
				<div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-6 col-span-12 flex flex-col h-full">
					<div className="box flex-grow">
						<div className="box-body">
							<div className="grid grid-cols-12">
								<div className="col-span-6 pe-0">
									<p className="mb-2">
										<span className="text-[1rem]">
											SHIPPED OUT(0)
										</span>
									</p>
									<p className="mb-2 text-[0.75rem]">
										<span className="text-[1.5625rem] font-semibold leading-none vertical-bottom mb-0">
											₱0.00
										</span>
                    <span className="block text-[0.625rem] font-semibold text-[#8c9097] dark:text-white/50">(Shipped-out, Pick-up)</span>
									</p>
								</div>
								<div className="col-span-6">
									<p className="badge bg-success/10 !text-success ltr:float-right rtl:float-left inline-flex">
										<i className="ti ti-caret-up me-1"></i>42%
									</p>
									<p className="main-card-icon mb-0">
										<i className="bx bxs-box text-2xl text-primary"></i>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-6 col-span-12 flex flex-col h-full">
					<div className="box flex-grow">
						<div className="box-body">
							<div className="grid grid-cols-12">
								<div className="col-span-6 pe-0">
									<p className="mb-2">
										<span className="text-[1rem]">ODZ/INCOMPLETE(0)</span>
									</p>
									<p className="mb-2 text-[0.75rem]">
										<span className="text-[1.5625rem] font-semibold leading-none vertical-bottom mb-0">
											₱0.00
										</span>
									</p>
								</div>
								<div className="col-span-6">
									<p className="badge bg-danger/10 !text-danger ltr:float-right rtl:float-left inline-flex">
										<i className="ti ti-caret-down me-1"></i>12%
									</p>
									<p className="main-card-icon mb-0">
										<i className="bx bxs-landscape text-2xl text-primary"></i>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-6 col-span-12 flex flex-col h-full">
					<div className="box flex-grow">
						<div className="box-body">
							<div className="grid grid-cols-12">
								<div className="col-span-6 pe-0">
									<p className="mb-2">
										<span className="text-[1rem]">
											UNFULFILLED/LAST MONTH(8)
										</span>
									</p>
									<p className="mb-2 text-[0.75rem]">
										<span className="text-[1.5625rem] font-semibold leading-none vertical-bottom mb-0">
											₱40,796.00
										</span>
									</p>
								</div>
								<div className="col-span-6">
									<p className="badge bg-success/10 !text-success ltr:float-right rtl:float-left inline-flex">
										<i className="ti ti-caret-up me-1"></i>27%
									</p>
									<p className="main-card-icon mb-0">
										<i className="bx bxl-dropbox text-2xl text-primary"></i>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-6 col-span-12 flex flex-col h-full">
					<div className="box flex-grow">
						<div className="box-body">
							<div className="grid grid-cols-12">
								<div className="col-span-6 pe-0">
									<p className="mb-2">
										<span className="text-[1rem]">IN-TRANSIT(5)
										</span>
									</p>
									<p className="mb-2 text-[0.75rem]">
										<span className="text-[1.5625rem] font-semibold leading-none vertical-bottom mb-0">
											₱0.00
										</span>
                    <span className="block text-[0.625rem] font-semibold text-[#8c9097] dark:text-white/50">(Detained, In-transit, Problematic)</span>
									</p>
								</div>
								<div className="col-span-6">
									<p className="badge bg-success/10 !text-success ltr:float-right rtl:float-left inline-flex">
										<i className="ti ti-caret-up me-1"></i>42%
									</p>
									<p className="main-card-icon mb-0">
										<i className="bx bxs-truck text-2xl text-primary"></i>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-6 col-span-12 flex flex-col h-full">
					<div className="box flex-grow">
						<div className="box-body">
							<div className="grid grid-cols-12">
								<div className="col-span-6 pe-0">
									<p className="mb-2">
										<span className="text-[1rem]">ON-DELIVERY(0)</span>
									</p>
									<p className="mb-2 text-[0.75rem]">
										<span className="text-[1.5625rem] font-semibold leading-none vertical-bottom mb-0">
											₱0.00
										</span>
                    <span className="block text-[0.625rem] font-semibold text-[#8c9097] dark:text-white/50">(On-delivery, Delivering)</span>
									</p>
								</div>
								<div className="col-span-6">
									<p className="badge bg-danger/10 !text-danger ltr:float-right rtl:float-left inline-flex">
										<i className="ti ti-caret-down me-1"></i>12%
									</p>
									<p className="main-card-icon mb-0">
										<i className="bx bxs-truck text-2xl text-primary"></i>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-6 col-span-12 flex flex-col h-full">
					<div className="box flex-grow">
						<div className="box-body">
							<div className="grid grid-cols-12">
								<div className="col-span-6 pe-0">
									<p className="mb-2">
										<span className="text-[1rem]">DELIVERED(4) 0.00%</span>
									</p>
									<p className="mb-2 text-[0.75rem]">
										<span className="text-[1.5625rem] font-semibold leading-none vertical-bottom mb-0">
											₱0.00
										</span>
									</p>
								</div>
								<div className="col-span-6">
									<p className="badge bg-success/10 !text-success ltr:float-right rtl:float-left inline-flex">
										<i className="ti ti-caret-up me-1"></i>27%
									</p>
									<p className="main-card-icon mb-0">
										<i className="bx bxs-package text-2xl text-primary"></i>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-6 col-span-12 flex flex-col h-full">
					<div className="box flex-grow">
						<div className="box-body">
							<div className="grid grid-cols-12">
								<div className="col-span-6 pe-0">
									<p className="mb-2">
										<span className="text-[1rem]">FOR RETURN(5)</span>
									</p>
									<p className="mb-2 text-[0.75rem]">
										<span className="text-[1.5625rem] font-semibold leading-none vertical-bottom mb-0">
											₱0.00
										</span>
                    <span className="block text-[0.625rem] font-semibold text-[#8c9097] dark:text-white/50">(For return, Returning)</span>
									</p>
								</div>
								<div className="col-span-6">
									<p className="badge bg-success/10 !text-success ltr:float-right rtl:float-left inline-flex">
										<i className="ti ti-caret-up me-1"></i>42%
									</p>
									<p className="main-card-icon mb-0">
										<i className="bx bxs-truck text-2xl text-primary"></i>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-6 col-span-12 flex flex-col h-full">
					<div className="box flex-grow">
						<div className="box-body">
							<div className="grid grid-cols-12">
								<div className="col-span-6 pe-0">
									<p className="mb-2">
										<span className="text-[1rem]">RETURNED(0)</span>
									</p>
									<p className="mb-2 text-[0.75rem]">
										<span className="text-[1.5625rem] font-semibold leading-none vertical-bottom mb-0">
											₱0.00
										</span>
									</p>
								</div>
								<div className="col-span-6">
									<p className="badge bg-danger/10 !text-danger ltr:float-right rtl:float-left inline-flex">
										<i className="ti ti-caret-down me-1"></i>12%
									</p>
									<p className="main-card-icon mb-0">
										<i className="bx bx-box text-2xl text-primary"></i>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-6 col-span-12 flex flex-col h-full">
					<div className="box flex-grow">
						<div className="box-body">
							<div className="grid grid-cols-12">
								<div className="col-span-6 pe-0">
									<p className="mb-2">
										<span className="text-[1rem]">TOTAL RTS(0) 0.00%</span>
									</p>
									<p className="mb-2 text-[0.75rem]">
										<span className="text-[1.5625rem] font-semibold leading-none vertical-bottom mb-0">
											₱0.00
										</span>
									</p>
								</div>
								<div className="col-span-6">
									<p className="badge bg-success/10 !text-success ltr:float-right rtl:float-left inline-flex">
										<i className="ti ti-caret-up me-1"></i>27%
									</p>
									<p className="main-card-icon mb-0">
										<i className="bx bx-line-chart-down text-2xl text-primary"></i>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Dashboard;
