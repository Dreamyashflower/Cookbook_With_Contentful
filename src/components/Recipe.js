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
    <div>
      <h1>{recipe.fields.title}</h1>
      <img src={image.fields?.file.url} />
      <
    </div>
  );
}

export default Recipe;
