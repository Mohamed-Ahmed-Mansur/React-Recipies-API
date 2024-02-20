/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Recipe from './Recipe';
import axios from 'axios';
import styled from 'styled-components';

export default function Search({ category }) {
  const [data, setData] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/Data.json');
        setData(res.data);

        if (category) {
          setFilteredRecipes(res.data[category]);
        } else {
          setFilteredRecipes(
            Object.values(res.data).reduce((allRecipes, currentCat) => {
              return allRecipes.concat(currentCat);
            }, [])
          );
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  function search(e) {
    let searchVal = e.target.value;
    let searchResult;

    if (category) {
      searchResult = data[category].filter((el) => {
        return el.strMeal.toLowerCase().includes(searchVal.toLowerCase());
      });
    } else {
      searchResult = Object.values(data).reduce((allrecipes, currentCat) => {
        return allrecipes.concat(
          currentCat.filter((el) => {
            return el.strMeal.toLowerCase().includes(searchVal.toLowerCase());
          })
        );
      }, []);
    }

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
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
`;

