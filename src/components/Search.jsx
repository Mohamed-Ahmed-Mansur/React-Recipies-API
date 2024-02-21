/* eslint-disable react-hooks/exhaustive-deps */

// https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
// https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian

import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Recipe from './Recipe';
import styled from 'styled-components';

export default function Search() {
  const [data, setData] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  const countriesArr = ['American', 'Japanese', 'Thai', 'Italian', 'Egyptian'];

  const getAllData = async () => {
    for (let key in localStorage) {
      if (countriesArr.includes(key)) {
        setData(pre => [...pre, ...JSON.parse(localStorage.getItem(key))]);
        setFilteredRecipes(pre => [...pre, ...JSON.parse(localStorage.getItem(key))]);
      }
    }
    console.log(data);
  }

  useEffect(() => {
    getAllData();
  }, []);

  function search(e) {
    let searchVal = e.target.value;
    let searchResult;

    searchResult = data.filter((el) => {
      return el.strMeal.toLowerCase().includes(searchVal.toLowerCase());
    })

    console.log(searchResult);

    setFilteredRecipes(searchResult);
  }

  return (
    <Container>
      <SearchContainer>
        <FaSearchIcon size={24}/>
        <SearchInput
          type="text"
          placeholder="Search for recipes..."
          onChange={search}
        />
      </SearchContainer>

      <RecipeList>
        <Recipe data={filteredRecipes} />
      </RecipeList>
    </Container>
  );
}

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const SearchContainer = styled.div`
  position: relative;
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
  grid-template-columns: repeat(auto-fill, minmax( 1fr));
  grid-gap: 10px;
`;

