import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from "./components/Detail/Detail"
import Form from "./components/Form/Form"
import Favorites from './components/Favorites/Favorites';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
const URL = 'http://localhost:3001/rickandmorty/login/';

function App() {

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const location = useLocation();
   let [characters, setCharacters] = useState([]);

   const login = async (userData) => {
      try {

         const { email, password } = userData;
         const { data } = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;
         setAccess(access);
         access && navigate('/home');

      } catch (error) {

         console.log(error);
         
      }
   }

   // const login = (userData) => {
   //    const { email, password } = userData;
   //    const URL = 'http://localhost:3001/rickandmorty/login/';
   //    axios(URL + `?email=${email}&password=${password}`)
   //    .then(({ data }) => {
   //       const { access } = data;
   //       setAccess(data);
   //       access && navigate('/home');
   //    });
   // }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const onSearch = async (id) => {
      try {
         const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
         if(data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          } 
      } catch (error) {
         alert('¡No hay personajes con este ID!');
      }
   }

   // const onSearch = (id) => {
   //    axios(`http://localhost:3001/rickandmorty/character/${id}`)
   //    .then(({ data }) => {
   //       if (data.name) {
   //          setCharacters((oldChars) => [...oldChars, data]);
   //       } else {
   //          alert('¡No hay personajes con este ID!');
   //       }
   //    });
   // }

   const onClose = (id) => {
      setCharacters(characters.filter((character) => character.id !== Number(id)))
   }


   return (
      <div className='App'>
         {location.pathname !== "/" && <Nav onSearch={onSearch}/>}
         <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/' element={<Form login={login}/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
         </Routes>
      </div>
   );
}

export default App;
