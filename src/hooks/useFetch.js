import {useState, useEffect} from "react";
import Axios from "axios";

const useFetch = url => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchResource = async () => {
            try {
                let res = await Axios.get(url);
                let data = await res.data;
                setData(data);
                setLoading(false);
                console.log(data);
            } catch (error) {
                setLoading(false);
                setError(error);
            }
        };
        fetchResource();
    }, [url]);

    return {data, loading, error}
};

export default useFetch