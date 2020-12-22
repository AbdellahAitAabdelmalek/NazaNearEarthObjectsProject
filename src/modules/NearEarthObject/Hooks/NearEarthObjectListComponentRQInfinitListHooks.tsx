import { useQuery } from "react-query";

const url =
  "http://www.neowsapp.com/rest/v1/neo/browse?api_key=y125lgm1Npphd8NEldDxfgTQ5q1NsnCsXzTgjqXw";

const fetchNearEarthObjects = async (page: number) => {
  const res = await fetch(url + "&page=" + page);
  return res.json();
};

export function fetchNearEarthObjectList(
  page: number,
  searchedText: string
): any {
  const {
    data,
    isLoading,
    isError,
    isSuccess,
    isPreviousData,
    isFetching,
  } = useQuery(["NearEarthObjects", page], () => fetchNearEarthObjects(page), {
    keepPreviousData: true,
  });

  return {
    data,
    isLoading,
    isError,
    isSuccess,
    isPreviousData,
    isFetching,
  };
}
