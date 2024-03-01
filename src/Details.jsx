import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Carousel from "./Carousel";
import { fetchPet } from "./queryFetches";

const Details = () => {
    let { id } = useParams(); //useparams gets id from browserrouter component in app.jsx
    const { isPending, error, data } = useQuery({
        queryKey: ["details", id],
        queryFn: fetchPet,
    });

    if (isPending) {
        return (
            <div className="loading-pane">
                <h2 className="loader">@</h2>
            </div>
        );
    }

    if (error) {
        console.log(error.message);
    }

    const pet = data.pets[0];

    return (
        <div className="details">
            <Carousel images={pet.images} />
            <div>
                <h1>{pet.name}</h1>
                <h2>
                    {pet.animal} - {pet.breed} - {pet.city} - {pet.state}
                    <button>Adopt {pet.name}</button>
                    <p>{pet.description}</p>
                </h2>
            </div>
        </div>
    );
};

export default Details;
