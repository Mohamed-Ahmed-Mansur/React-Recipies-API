import React from 'react';

export default function Recipe({ data }) {
//   console.log(data);

  return data.length < 1 ? (
    <span style={{ display: 'none' }}></span>
  ) : (
    <div className="container">
      <div className="row">
          {data?.map((meal) => (
            <div key={meal.idMeal} className="col-md-3">
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                width={100}
                className="meal-image"
              />
              <div className="meal-details">
                <h6>{meal.strMeal}</h6>
               
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
