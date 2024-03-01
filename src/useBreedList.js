// import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchBreedList";

export default function useBreedList(animal) {
    const { data, status } = useQuery({
        queryKey: ["breeds", animal],
        queryFn: fetchBreedList,
    });
    return [data?.breeds ?? [], status];
}

// earlier implemented it using useEffect

// const [breedList, setBreedList] = useState([]);
//     const [status, setStatus] = useState("unloaded");

//     useEffect(() => {
//         if (!animal) {
//             setBreedList([]);
//         } else if (localCache[animal]) {
//             setBreedList(localCache[animal]);
//         } else {
//             requestBreedList();
//         }

//         async function requestBreedList() {
//             setBreedList([]);
//             setStatus("loading");

//             const res = await fetch(
//                 `http://pets-v2.dev-apis.com/breeds?animal=${animal}`,
//             );
//             const json = await res.json();

//             localCache[animal] = json.breeds || [];
//             setBreedList(localCache[animal]);
//             setStatus("loaded");
//         }
//     }, [animal]);
