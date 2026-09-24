export const getWorkOutData = async () => {
    try{
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/workOutData.json`, {next: {revalidate: 10}});
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch workout data:", error);
        throw new Error("Failed to fetch workout data");
    }
}