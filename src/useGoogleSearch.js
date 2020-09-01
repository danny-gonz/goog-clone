import { useEffect, useState } from 'react';
const API_KEY = process.env.REACT_APP_GOOGLE_APIKEY;
const CONTEXT_KEY = process.env.REACT_APP_GOOGLE_CONTEXTKEY;
const useGoogleSearch = term => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then(response => response.json())
        .then(result => {
          setData(result);
        });
    };
    fetchData();
  }, [term]);
  return { data };
};

export default useGoogleSearch;
