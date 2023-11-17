import { useState, useEffect } from 'react';

export default function useFetch(uri) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    (async () => {
      try {
        const response = await fetch(uri);
        if (response.ok) {
          setLoading(false);
          // console.log(await response.json(), 'Data has been gotten');
          setData(await response.json());
        } else {
          setError('response not okay');
        }
      } catch (err) {
        setLoading(false);
        setError(err);
      }
    })();
  }, [uri]);

  return {
    loading,
    data,
    error,
  };
}
