import { useQuery } from "@tanstack/react-query";
import {
    getRoutes,
    getRoutesCount,
    queryByOriginOrDestination
} from "../app/api/routes.usecases";

export const useGetRoutes = () =>
    useQuery({
        queryKey: ["routes"],
        queryFn: getRoutes,
        staleTime: 1000 * 60 * 5,
    });


export const useGetRoutesCount = () =>
    useQuery({
        queryKey: ["routes-count"],
        queryFn: getRoutesCount,
        staleTime: 1000 * 60 * 5,
    });

export const useQueryRoutes = (query) =>
    useQuery({
        queryKey: ["routes", query],
        queryFn: () => queryByOriginOrDestination(query),
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 10,
        enabled: query.trim().length > 0,
    });