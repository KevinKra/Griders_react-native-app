import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useRestaurants from "../hooks/useRestaurants";
import ResultsList from "../components/ResultsList";

// useEffect === Hook version of componentDidMount

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, restaurants, errorMessage] = useRestaurants();
  const filterRestaurants = cost =>
    restaurants.filter(restaurant => restaurant.price === cost);

  return (
    <>
      <SearchBar
        term={term}
        // onTermChange={newTerm => setTerm(newTerm)}
        // onTermSubmit={() => searchApi()}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text style={{ marginLeft: 15 }}>Found {restaurants.length} results</Text>
      <ScrollView>
        <ResultsList title="Cost Effective" restaurants={filterRestaurants("$")} />
        <ResultsList title="Bit Pricier" restaurants={filterRestaurants("$$")} />
        <ResultsList title="Big Spender" restaurants={filterRestaurants("$$$")} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
