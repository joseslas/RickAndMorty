const Validation = (userData) => {
    let errors = {};
    if(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(userData.email)) {
        errors.email = "Email invalido";
    } else if(!userData.email) {
        errors.email = "Debes escribir un email";
    } else if(userData.email.length > 35) {
        errors.email = "Tu email es mayor a 35 caracteres"
    } else if(!userData.password) {
        errors.password = "Debe escribir almenos un caracter"
    } 

    return errors
}

export default Validation;