import { useState } from "react";

const Carousel = ({ images }) => {
    const [active, setActive] = useState(0);

    let defaultImages = (images.length && images) || [
        "http://pets-images.dev-apis.com/pets/none.jpg",
    ];

    let handleIndexClick = (e) => {
        setActive(+e.target.dataset.index);
    };

    return (
        <div className="carousel">
            <img src={images[active]} alt="animal" />
            <div className="carousel-smaller">
                {defaultImages.map((photo, index) => (
                    // eslint-disable-next-line
                    <img
                        onClick={handleIndexClick}
                        data-index={index}
                        key={index}
                        src={photo}
                        className={index === active ? "active" : ""}
                        alt="animal thumbnail"
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
