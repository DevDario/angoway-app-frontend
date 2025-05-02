import { searchScheduleByRouteUseCase } from "../app/api/schedules";
import { useQuery } from "@tanstack/react-query";

export function useSchedule() {

    const useSearchSchedule = (query) => useQuery({
        queryKey: ["routeSchedules"],
        queryFn: searchScheduleByRouteUseCase(query),
        staleTime: 1000 * 60 * 5,
        cacheTime: 1000 * 60 * 10,
    });

    return {
        useSearchSchedule
    }
}
