import { useState } from "react";

const SearchParams = () => {
    const [location, setLocation] = useState("");

    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">Location</label>
                <input
                    name="location"
                    id="location"
                    onChange={(e) => setLocation(e.target.value)}
                    value={location}
                />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default SearchParams;
