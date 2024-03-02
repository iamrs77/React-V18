import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Carousel from "./Carousel";
import { fetchPet } from "./queryFetches";
import ErrorBoundary from "./ErrorBoundary";
import { useState } from "react";
import Modal from "./Modal";

const Details = () => {
    const [showModal, setShowModal] = useState(false);

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
                    <button onClick={() => setShowModal(true)}>
                        Adopt {pet.name}
                    </button>
                    <p>{pet.description}</p>
                    {showModal ? (
                        <Modal>
                            <div>
                                <h1>Would you like to adopt {pet.name}</h1>
                                <div className="butotns">
                                    <button>Yes</button>
                                    <button onClick={() => setShowModal(false)}>
                                        No
                                    </button>
                                </div>
                            </div>
                        </Modal>
                    ) : null}
                </h2>
            </div>
        </div>
    );
};

const DetailsErrorBoundary = (props) => {
    return (
        <ErrorBoundary>
            <Details {...props} />
        </ErrorBoundary>
    );
};

export default DetailsErrorBoundary;
