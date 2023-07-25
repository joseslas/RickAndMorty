import { connect } from "react-redux"
import Card from "./Card"
import { filterCards, orderCards } from "../redux/actions"
import { useDispatch } from "react-redux"
import { useState } from "react"

const Favorites = ({myFavorites}) => {

    const [aux, setAux] = useState(false);

    const dispatch = useDispatch();

    const handlerOrder = (event) => {
        dispatch(orderCards(event.target.value));
        setAux(!aux);
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }

    return (
        <div>

            <select onChange={handlerOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>

            <select onChange={handleFilter}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">GenderLess</option>
                <option value="unknown">Unknown</option>
            </select>

           { 

           myFavorites.map(character => <Card
        key={character.id}
        id={character.id}
        name={character.name}
        species={character.species}
        origin={character.origin}
        image={character.image}
        onClose={character.onClose}/>)
        
        }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(
    mapStateToProps,
    null
)(Favorites);