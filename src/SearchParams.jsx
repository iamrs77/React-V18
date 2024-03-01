import { useState, useEffect } from "react";
import Results from "./Results";
import useBreedList from "./useBreedList";
import { useQuery } from "@tanstack/react-query";
import fetchSearch from "./fetchSearch";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
    const [requestParams, setRequestParams] = useState({
        location: "",
        animal: "",
        breed: "",
    });
    const [animal, setAnimal] = useState("");
    const [breeds] = useBreedList(animal);

    const { data } = useQuery({
        queryKey: ["searcn", requestParams],
        queryFn: fetchSearch,
    });

    console.log(data, "data");
    const pets = data?.pets ?? [];

    return (
        <div className="search-params">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    let formData = new FormData(e.target);

                    const obj = {
                        animal: formData.get("animal") ?? "",
                        breed: formData.get("breed") ?? "",
                        location: formData.get("location") ?? "",
                    };

                    setRequestParams(obj);
                }}
            >
                <label htmlFor="location">Location</label>
                <input name="location" id="location" placeholder="Location" />
                <label htmlFor="animal">Animal</label>
                <select
                    id="animal"
                    name="animal"
                    value={animal}
                    onChange={(e) => {
                        setAnimal(e.target.value);
                    }}
                >
                    <option />
                    {ANIMALS.map((animal) => (
                        <option key={animal}>{animal}</option>
                    ))}
                </select>
                <label htmlFor="breed">Breed</label>
                <select id="breed" disabled={breeds.length === 0} name="breed">
                    <option />
                    {breeds.map((breed) => (
                        <option key={breed}>{breed}</option>
                    ))}
                </select>
                <button>Submit</button>
            </form>
            <Results pets={pets} />
        </div>
    );
};

export default SearchParams;
