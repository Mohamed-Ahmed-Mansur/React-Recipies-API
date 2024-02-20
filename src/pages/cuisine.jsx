/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Country from '../components/country';
import Search from '../components/Search';

const Cuisine = () => {
    const [cuisine, setCuisine] = useState([]);
    const { country } = useParams();

    async function getCuisine() {
        const check = localStorage.getItem(country);

        if (check) {
            setCuisine(JSON.parse(check));
        } else {
            const { data: { meals } } = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`);
            setCuisine(meals);
            localStorage.setItem(country, JSON.stringify(meals));
        }  
    }

    useEffect (() =>{   
        getCuisine();
    }, [country]);

    return (
        <Container>
            <Search />
            <Country />
            <Grid>
                {cuisine.map((item) => (
                    <Card key={item.idMeal}>
                        <img src={item.strMealThumb} alt={item.strMeal} />
                        <h4>{item.strMeal}</h4> 
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
