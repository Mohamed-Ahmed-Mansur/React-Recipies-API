/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Country from '../components/country';
import Search from '../components/Search';
import { useNavigate } from 'react-router-dom';

const Cuisine = () => {
    const [cuisine, setCuisine] = useState([]);
    const navigate = useNavigate();
    const countriesArr = ["Egyptian", "American", "Italian", "Thai", "Japanese"];

    async function getCountryData(country) {
        const check = localStorage.getItem(country);
        if (check) {
            setCuisine(pre => [...pre, ...JSON.parse(check)]);
        } else {
            const { data: { meals } } = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`);
            // console.log(meals)
            setCuisine(pre => [...pre, ...meals]);
            localStorage.setItem(country, JSON.stringify(meals))
        }
    }

    function getCuisine() {
        countriesArr.map(country => {
            return getCountryData(country);
        });
    }

    function handleClick(meal) {
        console.log(meal);
        navigate(`/Details/${meal.idMeal}`);
    }

    useEffect (() =>{   
        getCuisine();
    }, []);

    console.log("Cuisine component rendered");
    console.log(cuisine)

    return (
        <Container>
            <Search />
            <Country />
            <Grid>
                {cuisine.map((meal) => (
                    <Card key={meal.idMeal} onClick={() => handleClick(meal)}>
                        <img src={meal.strMealThumb} alt={meal.strMeal} />
                        <h4>{meal.strMeal}</h4> 
                    </Card>
      
                ))}
            </Grid>
        </Container>
    );
}

const Container = styled.div`
    padding: 2rem;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 3rem;
    justify-items: center;
    cursor: pointer;
`;

const Card = styled.div`
    width: 100%;
    max-width: 300px;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;

    img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
    }

    h4 {
        margin: 0;
        padding: 1rem;
        text-align: center;
        background-color: #f9f9f9;
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
    }

    &:hover {
        transform: translateY(-5px);
    }
`;

export default Cuisine;
