/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Search from '../components/Search';

const Cuisine = () => {
    const [cuisine, setCuisine] = useState([]);
    const countriesArr = ["Egyptian", "American", "Italian", "Thai", "Japanese"];

    async function getCountryData(country) {
        const check = localStorage.getItem(country);
        if (check) {
            setCuisine(pre => [...pre, ...JSON.parse(check)]);
        } else {
            const { data: { meals } } = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`);
            // console.log(meals)
            setCuisine(pre => [...pre, ...meals]);
            localStorage.setItem(country, JSON.stringify(meals));
        }
    }

    function getCuisine() {
        countriesArr.map(country => {
            return getCountryData(country);
        });
    }

    useEffect (() =>{   
        getCuisine();
    }, []);

    console.log("Cuisine component rendered");
    console.log(cuisine)

    return (
        <Container>
            <Search allData={cuisine} />
        </Container>
    );
}

const Container = styled.div`
    padding: 2rem;
`;

export default Cuisine;
