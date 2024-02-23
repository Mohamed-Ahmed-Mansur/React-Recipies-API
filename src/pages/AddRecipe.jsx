import React, { useState ,useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { MdCloudUpload } from 'react-icons/md';

const Upload = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px dashed #1475cf;
  width: 100%;
  height: 450px;
 
  margin-bottom: 15px;
  cursor: pointer;
`;
// const option = styled.option`
//   baxkground:white;
//   padding :1rem;

//   cursor: pointer;
// `;

const HiddenInput = styled.input`
  display: none;
`;
const AddRecipe = () => {
  const [recipe, setRecipe] = useState({
    title: '',
    ingredients: [],
    descriptions: '',
    instructions: [],
    Servings: '',
    CookingTimeHours: '',
    CookingTimeMins: '',
    PrepTimeHours: '',
    PrepTimeMins:'',
    Cuisine: '',
    RecipeImage: ''
  });

  const fileInputRef = useRef(null);

  const [inputIngredients, setinputIngredients] = useState([]);
 
  const navigate = useNavigate();

  const handleAddIngrediates = () => {
    setinputIngredients([...inputIngredients, { id: inputIngredients.length }]);
    // console.log([...inputIngredients])
  };
  const [inputInstructions, setinputInstructions] = useState([]);
  
 

  const handleAddInstructions = () => {
    setinputInstructions([...inputInstructions, { id: inputInstructions.length }]);
    // console.log([...inputInstructions])
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe((prevrecipe) => ({
      ...prevrecipe,
      [name]: value,
      
    }));  
  };

  const handleArrayChange = (e , index) => {
    const { name, value } = e.target;
    if(index) {
      recipe[name][index] = value;
    } else {
      recipe[name][0] = value;
    }
    setRecipe(pre => ({...pre, [name]: recipe[name]}));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Recipe submitted:', recipe);
    if (recipe.RecipeImage) {
      console.log('Selected file:', recipe.RecipeImage);
    }
    console.log(recipe);

    navigate('/Home');
    setRecipe({    
      title: '',
      ingredients: [],
      descriptions: '',
      instructions: [],
      Servings: '',
      CookingTimeHours: '',
      CookingTimeMins: '',
      PrepTimeHours: '',
      PrepTimeMins:'',
      Cuisine: '',
      RecipeImage:""})
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    setRecipe({ ...recipe, RecipeImage: file });
  };

  

  return (
    <div className='m-4'>
      <div className='container w-75 m-auto'>
        <hr />
        <div class="text-success"></div>
        <div><h2 class="text-success">Create New Recipe</h2></div>
        <hr />
        <div class="text-success"></div>
        <form className='shadow-lg p-3 mb-5 bg-body-tertiary rounded' onSubmit={handleSubmit}>
          <label htmlFor='title' className=' m-2 fs-6 '>Recipe Title:</label>
          <input type='text' id='title' name='title' placeholder='Recipe Title' className='form-control mb-3'  value={recipe.title}  required onChange={handleChange}></input>
          <label htmlFor='image' className=' m-2 fs-6 '>Recipe Image:</label>
          <Upload className="mb-3 col-8">
           {recipe.RecipeImage ? (
            <img
              src={URL.createObjectURL(recipe.RecipeImage)}
              style={{ width: '100%', height: '100%' }}
              alt="Selected"
            />
          ) : (
            <>
              <MdCloudUpload color="#1475cf" size={60}></MdCloudUpload>
              <p> Browse files to upload</p>
            </>
          )}
          <HiddenInput
            type="file"
            accept="image/*"
            id="RecipeImage"
            name="RecipeImage"
            onChange={handleImage}
            ref={fileInputRef}
            required
          />
          </Upload>
          <label htmlFor='Description' className=' m-2 fs-6'>Description:</label>
          <textarea type='text' id='Description' name='Description' placeholder='Description' className='form-control mb-3' onChange={handleChange}></textarea>
          <label htmlFor='Ingredients' className=' fs-6 m-2'>Ingredients:</label>
          <input type='text' id='Ingredients' name='Ingredients'  value={recipe.ingredients[0]} placeholder='Ingredient #1' className='form-control mb-2' onChange={handleArrayChange}></input>
          {inputIngredients.map((field, index) => (
            <input key={index} type="text" className='form-control mb-2 ' value={recipe.ingredients[index+1]} placeholder={`Ingredient #${index + 2}`} onChange={()=>handleArrayChange(index)} />
          ))}
           <span className=" bi-plus-circle  fs-3  m-2 text-success" onClick={handleAddIngrediates}></span>
          <br />
          <label htmlFor='Instructions' className='  fs-6 m-2'>Instructions:</label>
          <input type='text' id='Instructions' name='Instructions'value={recipe.instructions[0]} placeholder='Instruction #0' className='form-control mb-2' onChange={handleChange}></input>
          {inputInstructions.map((field, index) => (
            <input key={index} type="text" className='form-control mb-2 ' value={recipe.instructions[index+1]}  placeholder={`Instruction #${index + 1}`} onChange={handleChange}/>
          ))}
           <span className="bi bi-plus-circle fs-3 m-2   text-success" onClick={handleAddInstructions}></span>
          <br />
          <label htmlFor='Servings' className=' m-2 fs-6 '>Servings:</label>
          <input type='text' id='Servings' name='Servings' placeholder='Recipe Servings' className='form-control mb-3'  value={recipe.Servings}  required onChange={handleChange}></input>
          
         
         
          <label  className=" m-2 form-label">
            Preparation Time:
          </label>
          <div className="mb-2 d-flex align-items-start">
            <input
              type="number"
              className="form-control m-1 mb-2"
              // id="PrepTime"
              name="PrepTimeHours"
              value={recipe.PrepTimeHours}
              onChange={handleChange}
              required
              placeholder='Hours'
              
            />
            <input
              type="number"
              className="form-control m-1 mb-2"
              // id="PrepTime"
              name="PrepTimeMins"
              value={recipe.PrepTimeMins}
              onChange={handleChange}
              required
              placeholder='Minutes'
            />
          </div>
       
       
          <label htmlFor="CookingTime" className="m-2 form-label">
            Cooking Time:
          </label>
          <div className="mb-2 d-flex align-items-start">
            <input
              type="number"
              className="form-control m-1 mb-2"
              // id="CookingTime"
              name="CookingTimeHours"
              value={recipe.CookingTimeHours}
              onChange={handleChange}
              required
              placeholder='Hours'
            />
            <input
              type="number"
              className="form-control m-1 mb-2"
              // id="CookingTime"
              name="CookingTimeMins"
              value={recipe.CookingTimeMins}
              onChange={handleChange}
              required
              placeholder='Minutes'
            />
         
          </div>

      
          <label htmlFor=' Cuisine' className=' m-2 fs-6 '>Cuisine:</label>
         <select
          id='Cuisine'
          name='Cuisine'
          className='form-select  mb-3'
          value={recipe.Cuisine}
          onChange={handleChange}
          required
          
        >
           <option value='' disabled>Select Cuisine</option>
          <option value='Italian'>Italian</option>
          <option value='American'>American</option>
          <option value='Japanese'>Japanese</option>
          <option value='Egyptian'>Egyptian</option>
        </select>

    
       
          <div className='d-flex justify-content-center  m-4'>
            <button className='btn btn-success w-25'>Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddRecipe;
