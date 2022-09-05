import "./App.css";
import React from "react";
import axios from "axios";

function App() {
  axios
    .get(
      `https://preview.contentful.com/spaces/6did8bhz0z37/environments/master/entries?access_token=kGj7JMivsAvCApuLy8ILXUYSq0pjNUmorIhF1-FztxA`
    )
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => console.log(err));

  return <div className="App"></div>;
}

export default App;
