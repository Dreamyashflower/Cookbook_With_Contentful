import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Recipes from "./components/Recipes";
function App() {
  const [assets, setAssets] = useState({});
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
      {assets.map((recipes) => {
        return <Recipes recipe={recipes} key={recipes.sys.id} />;
      })}
    </div>
  );
}

export default App;
