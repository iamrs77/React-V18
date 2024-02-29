import Pet from "./Pet";

const Results = ({ pets }) => {
    console.log(pets);
    return (
        <div className="search">
            {!pets.length ? (
                <div>No Pets Found</div>
            ) : (
                pets.map((pet) => {
                    // {...pet} is basically spreading out the properties
                    return (
                        <Pet
                            key={pet.id}
                            id={pet.id}
                            animal={pet.animal}
                            breed={pet.breed}
                            name={pet.name}
                            images={pet.images}
                            location={`${pet.city}, ${pet.state}`}
                        />
                    );
                })
            )}
        </div>
    );
};

export default Results;
