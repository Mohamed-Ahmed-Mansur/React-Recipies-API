/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import SearchResult from '../components/SearchResult';
import CountryList from '../components/countryList';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// import CountryList from '../components/countryList';

export default function Country() {
  const [data, setData] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState(null);

  const { country } = useParams();

  const getAllData = async () => {
    let newData = [];
    let newFilteredRecipes = [];

    if (localStorage[country]) {
      const parsedData = JSON.parse(localStorage.getItem(country));

      newData = [...newData, ...parsedData];
      newFilteredRecipes = [...newFilteredRecipes, ...parsedData];
    }

    setData(newData);
    setFilteredRecipes(newFilteredRecipes);

    console.log(newData);
  };

  useEffect(() => {
    console.log(country);
    getAllData();
  }, [country]);

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
    <>
      <Navbar />
      <Container>
        <SearchContainer>
          <FaSearchIcon size={24} />
          <SearchInput
            type="text"
            placeholder="Search for recipes..."
            onChange={search}
          />
        </SearchContainer>

        <CountryList/>

        <SearchResult filteredData={filteredRecipes}></SearchResult>
      </Container>
      <Footer />
    </>
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