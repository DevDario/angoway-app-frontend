import { useQuery } from "@tanstack/react-query";
import { getProfileDetails } from "../app/api/profile";

export const useGetProfileDetails = () =>
    useQuery({
        queryKey: ["profile-details"],
        queryFn: getProfileDetails,
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 10
    })