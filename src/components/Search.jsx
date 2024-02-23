/* eslint-disable react-hooks/exhaustive-deps */

// https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
// https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian

import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import styled from 'styled-components';
import SearchResult from './SearchResult';
import CountryList from './countryList';

export default function Search({ allData }) {
  const [data, setData] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState(null);

  const getAllData = async () => {
  
    setData(allData);
    setFilteredRecipes(allData);
  
    console.log(data);
  };

  useEffect(() => {
    getAllData();  
  }, [allData]);

  function search(e) {
    let searchVal = e.target.value;
    let searchResult;

    searchResult = data.filter((el) => {
      return el.strMeal.toLowerCase().includes(searchVal.toLowerCase());
    });

    setFilteredRecipes(searchResult);
  }

  console.log("Search component rendered");
  console.log(allData);

  return (
    <Container>
      <SearchContainer>
        <FaSearchIcon size={24} />
        <SearchInput
          type="text"
          placeholder="Search for recipes..."
          onChange={search}
        />
      </SearchContainer>

      <CountryList />

      <SearchResult filteredData={filteredRecipes}></SearchResult>
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
  padding: 20px;
`;

const SearchContainer = styled.div`
  max-width: 800px;
  position: relative;
  margin: auto;
`;

const SearchInput = styled.input`
  padding: 10px 10px 10px 40px;
  border: none;
  border-radius: 5px;
  outline: none;
  background-color: #333;
  color: #fff;
  width: 100%;

  &::placeholder {
    color: #ccc;
  }
`;

const FaSearchIcon = styled(FaSearch)`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  color: #fff;
  z-index: 1;
`;
