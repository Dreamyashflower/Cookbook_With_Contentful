import React, { useState, useEffect } from "react";
import axios from "axios";

function Recipe({ recipe }) {
  const [image, setImage] = useState({});
  /* error source possible object in the state */
  useEffect(() => {
    axios
      .get(
        `https://preview.contentful.com/spaces/6did8bhz0z37/environments/master/assets/${recipe.fields.image.sys.id}?access_token=kGj7JMivsAvCApuLy8ILXUYSq0pjNUmorIhF1-FztxA`
      )
      .then((response) => {
        setImage(response.data);
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className='recipeDiv'>
      <h1 className='recipeTitle'>{recipe.fields.title}</h1>
      <h2 className='recipeDesc'>{recipe.fields.description}</h2>
      <img src={image.fields?.file.url} alt={image.title} width='600' className='recipeImage'/>
      <p>{recipe.fields.ingretientsTable}</p>
      <ol>{recipe.fields.preparation}</ol>
    </div>
  );
}

export default Recipe;
