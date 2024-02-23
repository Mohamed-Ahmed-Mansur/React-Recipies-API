import React from 'react';
import { useSelector } from 'react-redux';
import YouTube from 'react-youtube';

const Details = () => {
    const state = useSelector((st) => st.getrecpie.getrecpie);
    
    console.log(state);

    return (
        <div>
            {state.map((u, index) => (
                <div key={index} className='container m-2'>
                    <img src={u.strMealThumb} alt='recpie'/>
                    <p>Area: {u.strArea}</p>
                    <p>Category: {u.strCategory}</p>
                    <div>
                        <h2>Ingredients:</h2>
                        <p>{u.strIngredient1}</p>
                        <p>{u.strIngredient2}</p>
                        <p>{u.strIngredient3}</p>
                        <p>{u.strIngredient4}</p>
                        <p>{u.strIngredient5}</p>
                        <p>{u.strIngredient6}</p>
                        <p>{u.strIngredient7}</p>
                        <p>{u.strIngredient8}</p>
                    </div>
                    <YouTube videoId={u.strYoutube.split('=')[1]} />
                    <h4>sourceRecpie: <a href={u.strSource}>{u.strSource}</a></h4>
                </div>
            ))}
        </div>
    );
}

export default Details;
