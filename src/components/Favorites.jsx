import { connect } from "react-redux"
import Card from "./Card"

const Favorites = ({myFavorites}) => {
    return (
        myFavorites.map(character => <Card
        key={character.id}
        id={character.id}
        name={character.name}
        species={character.species}
        origin={character.origin}
        image={character.image}
        onClose={character.onClose}/>)
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