import { useQuery } from "@tanstack/react-query";
import {
    getRoutes,
    getRoutesCount,
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