const fetchCollection = async (collection: string) => {
    const url_base = import.meta.env.VITE_CM_API_URL;
    const url_full = `${url_base}/${collection}`;
    const res = await fetch(url_full);
    console.log(url_full);
    if (!res.ok) throw new Error("Network response was not ok");
    return res.json();
};

export default fetchCollection;
