import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errMsg, setErr] = useState('');
  const searchApi = async (val) => {
    console.log('hi there');
    try {
      let response = await yelp.get(`/search`, {
        params: {
          limit: 50,
          location: 'CEBU',
          term: val,
        },
      });
      //console.log(response.data.businesses);
      setResults(response.data.businesses);
      //console.log(results);
    } catch (error) {
      console.log(error.message);
      setErr(error.message);
    }
  };
  useEffect(() => {
    searchApi('kinilaw');
  }, []);
  return [searchApi, errMsg, results];
};
