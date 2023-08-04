import { useState } from "react";


const SearchBar = ({onSearch}) => {

   const [id, setId] = useState("");

   const handleChange = (event) => {
      return setId(event.target.value)
   }

   return (
      <div className="serach-container">
         <div>
           <input type='search' value={id} onChange={handleChange}/>
           <button onClick={() => onSearch(id)}>Agregar</button>
        </div>
      </div>
   );
}

export default SearchBar;