/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';

const Popular = () => {
    const [popular, setPopular] = useState([]);
    const [perPage, setPerPage] = useState(4);
    const API_RANDOM_URL = "https://www.themealdb.com/api/json/v1/1/random.php";

    async function getPopular() {
        const check = localStorage.getItem("popular");

        if (check) {
            setPopular(JSON.parse(check));
        } else {
            const fetchRandomData = async () => {
                const response = await fetch(API_RANDOM_URL);
                const data = await response.json();
                return data;
            };

            const fetchedData = await Promise.all(Array.from({ length: 9 }, () => fetchRandomData()));
            setPopular(fetchedData);
            localStorage.setItem("popular", JSON.stringify(fetchedData));
        }
    }

    const handleResize = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth <= 768 && screenWidth > 480) {
            setPerPage(2);
        } else if (screenWidth <= 480) {
            setPerPage(1);
        } else {
            setPerPage(4);
        }
    };

    useEffect(() => {
        getPopular();
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Wrapper>
            <h3>Popular Picks</h3>
            <Splide options={{
                perPage: perPage,
                arrows: false,
                pagination: false,
                drag: "free",
                gap: "2rem"
            }}>
                {popular.map((data, index) => {
                    const meal = data.meals ? data.meals[0] : null;
                    if (!meal) return null;
                    return (
                        <SplideSlide key={index}>
                            <Card>
                                <img src={meal.strMealThumb} alt={meal.strMeal} />
                                <Overlay>
                                    <h4>{meal.strMeal}</h4>
                                </Overlay>
                            </Card>
                        </SplideSlide>
                    )
                })}
            </Splide>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    margin: 4rem auto;
    max-width: 1200px; 
`;

const Card = styled.div`
    position: relative;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 

    img {
        width: 100%;
        display: block;
        border-radius: 1rem;
    }
`;

const Overlay = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 1rem;
    background: rgba(0, 0, 0, 0.6);
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;

    h4 {
        color: white;
        margin: 0;
    }
`;

export default Popular;
