
import './App.css';
import Advice from './components/Advice';
import Dice from './components/Dice';

import axios from "axios";
import React from "react";

const baseURL = "https://api.adviceslip.com/advice";

function App(){

  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;


  return (
    <div className="App">
      <Advice id={post.slip.id}
      advice={post.slip.advice}/>
      <Dice />
    </div>
  );
}


export default App;



