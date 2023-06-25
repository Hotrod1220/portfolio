import { useState, useEffect } from 'react';

function useFetch(url) {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal })
            .then(res => {
                if (!res.ok) {
                    throw Error("Data could not be obtained from that resource.");
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null)
            })
            .catch(error => {
                setIsPending(false)
                setError(error.message)
            })
            
        return () => abortCont.abort();
    }, [url])

    return { data, isPending, error };
}

export default useFetch;