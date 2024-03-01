import { useParams } from "react-router-dom";

const Details = () => {
    let { id } = useParams(); //useparams gets id from browserrouter component in app.jsx
    return <h2>hi {id}</h2>;
};

export default Details;
