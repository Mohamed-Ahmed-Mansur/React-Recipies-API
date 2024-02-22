import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Veggie = () => {
  const [veggie, setVeggie] = useState([]);
  const API_RANDOM_URL = 'https://www.themealdb.com/api/json/v1/1/random.php';

  async function getVeggie() {
    const check = localStorage.getItem('veggie');

    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      const fetchRandomData = async () => {
        const response = await fetch(API_RANDOM_URL);
        const data = await response.json();
        return data;
      };

      const fetchedData = await Promise.all(
        Array.from({ length: 9 }, () => fetchRandomData())
      );
      setVeggie(fetchedData);
      localStorage.setItem('veggie', JSON.stringify(fetchedData));
    }
  }

  useEffect(() => {
    getVeggie();
  }, []);

  return (
    <Wrapper>
      <h3><b>Veggies</b></h3>
      <Splide
        options={{
          arrows: false,
          pagination: false,
          drag: 'free',
          gap: '2rem',
          perPage: 4,
          breakpoints: {
            768: {
              perPage: 2,
            },
            480: {
              perPage: 1,
            },
          },
        }}
      >
        {veggie.map((data) => {
          const [meal] = data.meals || [];
          return (
            <SplideSlide key={meal.idMeal}>
              <Card>
                <Overlay>
                  <h4>{meal.strMeal}</h4>
                </Overlay>
                <img src={meal.strMealThumb} alt={meal.strMeal} />
              </Card>
            </SplideSlide>
          );
        })}
      </Splide>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  border-radius: 2rem;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    border-radius: 2rem;
    display: block;
    object-fit: cover;
    transition: transform 0.3s ease-in-out;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 2rem;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;

  h4 {
    color: white;
    margin: 0;
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
  }

  ${Card}:hover & {
    opacity: 1;
  }
`;

export default Veggie;
