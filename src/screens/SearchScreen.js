import React, { useReducer } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from './components/SearchBar';
import useResult from '../hooks/useResult';
import ResultsList from './components/ResultsList';
const reducer = (state, action) => {
  console.log(action.payload);
  return { ...state, search: action.payload };
};

const SearchScreen = () => {
  const [state, dispatch] = useReducer(reducer, { search: '' });
  const [searchApi, errMsg, results] = useResult();
  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };
  return (
    <>
      <SearchBar
        SearchInput={(val) => dispatch({ payload: val })}
        onEnd={() => searchApi(state.search)}
      />

      {errMsg ? <Text>Something went wrong</Text> : null}
      {results.length > 0 ? (
        <ScrollView>
          <ResultsList
            results={filterResultsByPrice('₱')}
            title='Cost Effective'
            //navigation={navigation}
          />
          <ResultsList
            results={filterResultsByPrice('₱₱')}
            title='Bit Pricier'
            //navigation={navigation}
          />
          <ResultsList
            results={filterResultsByPrice('₱₱₱')}
            title='Big Spender'
            //navigation={navigation}
          />
        </ScrollView>
      ) : null}
    </>
  );
};
const styles = StyleSheet.create({});
export default SearchScreen;
