import { useContext, useEffect, useState } from "react";
import { Coordinates } from "../context/contextApi";

function useRestaurantsData() {
    const [topRestaurantData, setTopRestaurantData] = useState([]);
    const [topResTitle, setTopResTitle] = useState("");
    const [onlineTitle, setOnlineTitle] = useState("");
    const [onYourMindData, setOnYourMindData] = useState([]);
    const [data, setData] = useState({});
    const {
        coord: { lat, lng },
    } = useContext(Coordinates);

    async function fetchData() {
        try {
            const response = await fetch(
                `/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
            );
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const contentType = response.headers.get("content-type");
            if (!contentType || !contentType.includes("application/json")) {
                const text = await response.text();
                console.error("Received non-JSON response:", text);
                throw new Error("Received non-JSON response");
            }
            const result = await response.json();
            // console.log(result);
            setData(result.data);
            setTopResTitle(result?.data?.cards[1]?.card?.card?.header?.title);
            setOnlineTitle(result?.data?.cards[2]?.card?.card?.title);

            let mainData = result?.data?.cards.find(
                (data) => data?.card?.card?.id == "top_brands_for_you"
            )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

            let mainData2 = result?.data?.cards.find(
                (data) => data?.card?.card?.id == "restaurant_grid_listing"
            )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

            setTopRestaurantData(mainData || mainData2);

            let data2 = result?.data?.cards.find(
                (data) => data?.card?.card?.id == "whats_on_your_mind"
            ).card?.card?.imageGridCards?.info;

            setOnYourMindData(data2);
        } catch (error) {
            console.error("Error fetching restaurant data:", error);
            // Set empty states to prevent UI crashes
            setTopRestaurantData([]);
            setOnYourMindData([]);
            setData({});
        }
    }
    useEffect(() => {
        fetchData();
    }, [lat, lng]);

    return [topRestaurantData, topResTitle, onlineTitle, onYourMindData, data];
}

export default useRestaurantsData;
