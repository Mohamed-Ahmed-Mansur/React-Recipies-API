/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Search from '../components/Search';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Category = () => {
    const [category, setCategory] = useState([]);
    const categoriesArr = JSON.parse(localStorage.getItem("Categories_List")).map(category => {
        return category.strCategory
    });
    // console.log(categoriesArr)

    async function getCategoriesData(category) {
        const check = localStorage.getItem(category);
        if (check) {
            setCategory(pre => [...pre, ...JSON.parse(check)]);
        } else {
            const { data: { meals } } = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
            // console.log(meals)
            setCategory(pre => [...pre, ...meals]);
            localStorage.setItem(category, JSON.stringify(meals));
        }
    }

    function getCategories() {
        categoriesArr.map(country => {
            return getCategoriesData(country);
        });
    }

    useEffect (() =>{   
        getCategories();
    }, []);

    console.log("Cuisine component rendered");
    console.log(category)

    return (
        <>
            <Navbar />
            <Container>
                <Search allData={category} />
            </Container>
            <Footer />
        </>
    );
}

const Container = styled.div`
    padding: 2rem;
`;

export default Category;
