import { useQuery } from "@tanstack/react-query";
import {
    findSchedulesByRoute,
    getRoutes,
    getRoutesCount,
    handleSuggestions,
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

export const useQuerySchedulesByRoutes = (query) =>
    useQuery({
        queryKey: ["routes", query],
        queryFn: () => findSchedulesByRoute(query),
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 10,
        enabled: query.trim().length > 0,
    });

export const useGetRouteDetailsSuggestions = (route,lat,lng) =>
    useQuery({
        queryKey: ["routes", {lat:lat,lng:lng}],
        queryFn: () => handleSuggestions(route, lat,lng),
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 10,
        enabled: lat!==undefined,
    });