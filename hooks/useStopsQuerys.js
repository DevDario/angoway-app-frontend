import { useQuery } from "@tanstack/react-query";
import { getStops } from "../app/api/stops.usecase";

export const useGetStops = () =>
    useQuery({
        queryKey: ["stops"],
        queryFn: getStops,
        staleTime: 1000 * 60 * 5,
    });