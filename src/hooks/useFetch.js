import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        const callAPI = async () => {
            try {
                const request = await fetch(url);
                const response = await request.json();
                setData(response);
            } catch (error) {
                alert(error);
            }
        };
        callAPI();
    }, [url]);

    return data;
};

export default useFetch;
