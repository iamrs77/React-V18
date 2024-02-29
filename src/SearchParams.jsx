import { useState, useEffect } from "react";
import Pet from "./Pet";
import useBreedList from "./useBreedList";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
    const [location, setLocation] = useState("");
    const [animal, setAnimal] = useState("");
    const [breed, setBreed] = useState("");
    const [pets, setPets] = useState([]);

    const [breeds] = useBreedList(animal);

    useEffect(() => {
        requestPets();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    let requestPets = async () => {
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`,
        );
        const json = await res.json();
        setPets(json.pets);
    };

    return (
        <div className="search-params">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    requestPets();
                }}
            >
                <label htmlFor="location">Location</label>
                <input
                    name="location"
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
                <label htmlFor="animal">Animal</label>
                <select
                    id="animal"
                    value={animal}
                    onChange={(e) => {
                        setAnimal(e.target.value);
                        setBreed("");
                    }}
                >
                    <option />
                    {ANIMALS.map((animal) => (
                        <option key={animal}>{animal}</option>
                    ))}
                </select>
                <label htmlFor="breed">Breed</label>
                <select
                    id="breed"
                    disabled={breeds.length === 0}
                    value={breed}
                    onChange={(e) => setBreed(e.target.value)}
                >
                    <option />
                    {breeds.map((breed) => (
                        <option key={breed}>{breed}</option>
                    ))}
                </select>
                <button>Submit</button>
            </form>
            {pets.map((pet) => {
                return (
                    <Pet
                        key={pet.id}
                        name={pet.name}
                        animal={pet.animal}
                        breed={animal.breed}
                    />
                );
            })}
        </div>
    );
};

export default SearchParams;
