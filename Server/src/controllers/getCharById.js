const URL = "https://rickandmortyapi.com/api/character/";
const axios = require("axios")

const getCharById = async (req, res) => {
    try {
        const { id } = req.params;

        const { data } = await axios(`${URL}${id}`);
        if(data.name) {
            const character = {
                id: data.id,
                status: data.status,
                name: data.name,
                species: data.species,
                origin: data.origin,
                image: data.image,
                gender: data.gender
            }
            return res.status(200).json(character);
        }

        throw new Error("Personaje no encontrado");

    } catch (error) {
        error.message.includes("404") ?
        res.status(404).json("Not Found")
        : res.status(500).send(error.message)
    }
}

// const getCharById = (req, res) => {
//     const { id } = req.params

//     axios(`${URL}${id}`)
//     .then(response => response.data)
//     .then(({id, status, name, species, origin, image, gender}) => {
//         if(name) {
//             const character = {id, name, status, species, origin, image, gender};
//             return res.status(200).json(character)
//         }
//         return res.status(404).json("Not found")
//     })
//     .catch(error => res.status(500).send(error.message))
// }


module.exports = getCharById;