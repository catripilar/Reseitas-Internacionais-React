import React, { useState } from 'react';
import './App.css';
import Axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import Receita from './componentes/Receita'
import Alerta from './componentes/Alerta';
function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState("");
  const APP_ID = "48474873";
  const APP_KEY = "4b6e8ca815dcd39bc141db4e3557c254";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  const getD = async () => {
    if (query !== "") {
      const resu = await Axios.get(url);
      if (!resu.data.more) {return setAlert('Não existe comida com esse nome..');}
      setRecipes(resu.data.hits); setQuery(""); setAlert("");
    }else{setAlert('escreva algo..');}
  };
  const pesquisa = e => { e.preventDefault(); getD(); }
  const enter = e => { setQuery(e.target.value); }
  return (
    <div className='App'>
      <h1>Receitas Internacionais</h1>
      {alert !== "" && <Alerta alert={alert}/>}
      <form className='search-form' onSubmit={pesquisa}>
        <input type='text' placeholder='Sua Comida' autocomplete='off' onChange={enter} value={query} />
        <input type='submit' value='Pesquisar' />
      </form>
      <div className='recipes'>
        {recipes !== [] && recipes.map(recipe => <Receita key={uuidv4()} recipe={recipe} />)}
      </div>
    </div>
  );
}

export default App;
