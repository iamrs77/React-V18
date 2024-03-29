export const fetchSearch = async ({ queryKey }) => {
    const { animal, location, breed } = queryKey[1];

    const res = await fetch(
        `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`,
    );
    if (!res.ok) {
        throw new Error("Pet search not okay, try again");
    }

    return res.json();
};
