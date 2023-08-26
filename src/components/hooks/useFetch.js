import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

     // useEffect: calls a function after every re render - (second argument for dependencies: empty array[] lets it run only once on page refresh)
    useEffect(() => {
        // Abort controller
        const abortCont = new AbortController();

        // Using setTimeout to simulate some time taken(1000ms) to get data
        setTimeout(() => {
            // Handling errors while fetching data
            fetch(url, {signal: abortCont.signal})
                .then((response) => {
                    if (!response.ok) {
                        throw Error("Echoke");
                    }
                    return response.json()
                }
                ).then((data) => {
                    setError(null);
                    setData(data);
                    setIsPending(false);
                })
                .catch((err) => {
                    // Check if error is an abort error to prevent further state update for isPending state
                    if (err.name === 'AbortError') {
                        console.log("Fetch aborted");
                    } 
                    else {
                    setIsPending(false);
                    setError(err.message);
                    }
                })
        }, 1000);
        // Cleanup function to stop updating state when moving from a component to another to prevent errors
        return () => abortCont.abort();

    }, [url]);

    return { data: data, isPending: isPending, error: error}
}

export default useFetch;