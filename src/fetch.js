import { useState, useEffect} from "react";

export default function useFetch (uri) {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);

    useEffect ( () => {
        setLoading(true);

        const fetchData = async () => {
            try {
                const response = await fetch(uri);
                if (response.ok) {
                    console.log('Data has been gotten');
                    setLoading(false);
                }
                setData(await response.json());
            } catch (err) {
                setError(err)
            };
        };

        fetchData();
    },[uri]);

    //     try {
    //         async function fetchData () {
    //             const response = await fetch(uri);
    //             const data = await response.json();

    //             setLoading(false);

    //             setData(data);
    //         }

    //         fetchData();
    //     } catch (error) {
    //         setError(error);
    //     };
    // }, [uri]);


    return {
        loading,
        data,
        error
    }
};