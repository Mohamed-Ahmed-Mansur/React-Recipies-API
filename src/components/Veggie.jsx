/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';

const Veggie = () => {
    const [veggie, setVeggie] = useState([]);
    const [perPage, setPerPage] = useState(3);
    const API_RANDOM_URL = "https://www.themealdb.com/api/json/v1/1/random.php";

    async function getVeggie() {
        const check = localStorage.getItem("veggie");

        if(check) {
            setVeggie(JSON.parse(check));
        }else {
            const data1 = await fetch(API_RANDOM_URL).then(response => response.json()).then(data => data);
            const data2 = await fetch(API_RANDOM_URL).then(response => response.json()).then(data => data);
            const data3 = await fetch(API_RANDOM_URL).then(response => response.json()).then(data => data);
            const data4 = await fetch(API_RANDOM_URL).then(response => response.json()).then(data => data);
            const data5 = await fetch(API_RANDOM_URL).then(response => response.json()).then(data => data);
            const data6 = await fetch(API_RANDOM_URL).then(response => response.json()).then(data => data);
            const data7 = await fetch(API_RANDOM_URL).then(response => response.json()).then(data => data);
            const data8 = await fetch(API_RANDOM_URL).then(response => response.json()).then(data => data);
            const data9 = await fetch(API_RANDOM_URL).then(response => response.json()).then(data => data);
            setVeggie([data1, data2, data3, data4, data5, data6, data7, data8, data9]);
            localStorage.setItem("veggie", JSON.stringify([data1, data2, data3, data4, data5, data6, data7, data8, data9]));
        }    
    }

    const handleResize = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth <= 768 && screenWidth > 480) {
            setPerPage(1); 
        } else if (screenWidth <= 480){
            setPerPage(1);
        } else {
            setPerPage(3);
        }
    };

    useEffect(() => {
        getVeggie();
        handleResize();
        window.addEventListener('resize', handleResize);
        console.log(veggie);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    console.log("Veggie component rendered")
    // console.log(veggie)

    return ( 
        <div>
            <Wrapper>
                <h3>Veggies</h3>
                <Splide options={{
                    perPage: perPage,
                    arrows: false,
                    pagination: false,
                    drag: "free",
                    gap: "5rem"
                }}>
                    {veggie.map(data => {
                        const [meal] = data.meals || [];
                        return (
                            <SplideSlide key={meal.idMeal}>
                                <Card>
                                    <p>{meal.strMeal}</p>
                                    <img src={meal.strMealThumb} alt={meal.strMeal} />
                                </Card>
                                <Gradient />
                            </SplideSlide>
                        )
                    })}
                </Splide>
            </Wrapper>
        </div>
    );
}

const Wrapper = styled.div`
    margin: 4rem 0rem
`;
const Card = styled.div`
    min-height: 25rem;
    border-radius: 2rem;
    // overflow: hidden;

    img{
        border-radius: 2rem;
        width: 20rem;
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    p{
        position: absolute;
        z-index: 10;
        left: 50%;
        bottom: 0%;
        transform: translate(-50%, 0%);
        color: white;
        width: 100%;
        text-align: center;
        font-weight: 600;
        font-size: 1rem;
        height: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;
export default Veggie;