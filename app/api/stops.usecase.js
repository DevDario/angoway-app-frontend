export const getStops = async () => {
    const token = getToken();
    const response = await api.get("/stops/all", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};