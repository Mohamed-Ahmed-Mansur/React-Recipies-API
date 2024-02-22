import React from 'react';
import styled from 'styled-components';
import ClipLoader from "react-spinners/ClipLoader";

 const SearchResult = ({cuisine}) => {
    console.log(cuisine)
   
    
    if (!cuisine) {
        return <div className='text-center'>
            <ClipLoader color="#198754" />
        </div>
      }
    
      if (cuisine.length === 0) {
        return <NoDataContainer>No data found</NoDataContainer>;
      }

    return (
        <Container>
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


const NoDataContainer = styled.div`
  padding: 2rem;
  text-align: center;
  font-size: 1.5rem;
  color: #333;
`;

export default SearchResult;
