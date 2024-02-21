import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const API_CATEGORIES_LIST_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";

  async function getCategories() {
    const check = localStorage.getItem("Categories_List");

    if (check) {
      setCategories(JSON.parse(check));
    } else {
      const { categories } = await fetch(API_CATEGORIES_LIST_URL).then(res => res.json()).then(data => data);
      setCategories(categories);
      localStorage.setItem("Categories_List", JSON.stringify(categories));
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div>
      <h2>Categories</h2>
      <br />
      <Container>
        {categories.map(category => (
          <Category key={category.idCategory}>
            <CategoryImage src={category.strCategoryThumb} alt={category.strCategory} />
            <CategoryName>{category.strCategory}</CategoryName>
          </Category>
        ))}
      </Container>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const Category = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
`;

const CategoryImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
`;

const CategoryName = styled.h4`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

export default Categories;
