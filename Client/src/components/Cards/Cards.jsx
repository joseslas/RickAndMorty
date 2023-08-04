import Card from '../Card/Card';
import "./Cards.css"

export default function Cards( {characters, onClose} ) {

   return (
      <div>
         {
            characters.map(({id, name, status, species, gender, origin, image}) => <Card
            key={id}
            id={id}
            name={name}
            status={status}
            species={species}
            gender={gender}
            origin={origin.name}
            onClose={onClose}
            image={image} />)
         }
      </div>
   );
}
