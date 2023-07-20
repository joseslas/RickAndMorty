const Validation = (userData) => {
    let errors = {};
    if(!/\S+@\S+\.\S+/.test(userData.email)) {
        errors.email = "Email invalido";
    } else if(!userData.email) {
        errors.email = "Debes escribir un email";
    } else if(userData.email.length > 35) {
        errors.email = "Tu email es mayor a 35 caracteres"
    } else if(!userData.password) {
        errors.password = "Debe escribir almenos un caracter"
    } else if(userData.password.length < 6 || userData.password.length > 10) {
        errors.password = "Tu contraseña debe estar en los 6 y 10 caracteres"
    }

    return errors
}

export default Validation;