import { useState, useEffect } from 'react';

interface FetchDataParams {
  url: string;
  page: number;
  pageSize: number;
  search: string;
}

interface Column {
  Header: string;
  accessor: string;
  Cell?: (props: { value: any }) => JSX.Element; // Custom cell rendering
}

interface FetchDataResponse {
  data: any[];
  columns: Column[];
  totalData: number;
  totalPages: number;
  currentPage: number;
}

const useFetchData = ({ url, page, pageSize, search }: FetchDataParams) => {
  const [data, setData] = useState<any[]>([]);
  const [columns, setColumns] = useState<Column[]>([]);
  const [totalData, setTotalData] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(page);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${url}?page=${page}&pageSize=${pageSize}&search=${search}`
        );
        const result: FetchDataResponse = await response.json();
        setData(result.data);
        setColumns(result.columns);
        setTotalData(result.totalData);
        setTotalPages(result.totalPages);
        setCurrentPage(result.currentPage);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [url, page, pageSize, search]);

  return { data, columns, totalData, totalPages, currentPage };
};

export default useFetchData;