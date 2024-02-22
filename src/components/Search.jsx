/* eslint-disable react-hooks/exhaustive-deps */

// https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
// https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian

import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Recipe from './SearchResult';
import styled from 'styled-components';
import Country from './countryList';
import Cuisine from '../pages/cuisine';
import CountryList from './countryList';
import SearchResult from './SearchResult';

export default function Search() {
  const [data, setData] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState(null);

  const countriesArr = ['American', 'Japanese', 'Thai', 'Italian', 'Egyptian'];

  const getAllData = async () => {
    let newData = [];
    let newFilteredRecipes = [];
  
    for (let key in localStorage) {
      if (countriesArr.includes(key)) {
        const parsedData = JSON.parse(localStorage.getItem(key));
  
        newData = [...newData, ...parsedData];
        newFilteredRecipes = [...newFilteredRecipes, ...parsedData];
      }
    }
  
    setData(newData);
    setFilteredRecipes(newFilteredRecipes);
  
    console.log(newData);
  };

  useEffect(() => {
    getAllData();
  }, []);

  function search(e) {
    let searchVal = e.target.value;
    let searchResult;

    searchResult = data.filter((el) => {
      return el.strMeal.toLowerCase().includes(searchVal.toLowerCase());
    });

    console.log(searchResult);

    setFilteredRecipes(searchResult);
  }

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

      <CountryList></CountryList>

      <SearchResult cuisine={filteredRecipes}></SearchResult>
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

const RecipeList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(1fr));
  grid-gap: 10px;
`;
