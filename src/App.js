import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Recipe from "./components/Recipe";
function App() {
  const [assets, setAssets] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://preview.contentful.com/spaces/6did8bhz0z37/environments/master/entries?access_token=kGj7JMivsAvCApuLy8ILXUYSq0pjNUmorIhF1-FztxA`
      )
      .then((response) => {
        setAssets(response.data.items);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
      <h2 className='subHeader'>the ultimate online cookbook</h2>
      <h1 className='titleHeader'>nom nom</h1>
      {assets &&
        assets.map((recipeCollection) => {
          return (
            <Recipe recipe={recipeCollection} key={recipeCollection.sys.id} />
          );
        })}
    </div>
  );
}

export default App;
