
export default function Validate(values) {


    let errors = {}

    console.log("Validate called")

    if(!values.name) {
        errors.name = '*Full name required.'
    } 
    else if(!(/^[a-zA-Z\s+]*$/.test(values.name))) {
        errors.name = '*Please enter valid name.'
    }

    if(!values.username) {
        errors.username = '*Username required.'
    }else if(!(/^[a-zA-Z0-9\S]+$/.test(values.username))) {
        errors.username = '*Username should contain only letters or digits.'
    }

    if(!values.email) {
        errors.email = '*Email required.'
    } else if(!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(values.email)) {
        errors.email = '*Please enter valid email.'
    }

    if(!values.phoneno) {
        errors.phone = '*Phone no required.'
    } else if(!/^[0-9]{10}$/.test(values.phoneno)) {
        errors.phone = '*Please enter valid phone number.'
    } 

    if(!values.clgname) {
        errors.college = '*College name required.'
    } 

    if(!values.password) {
        errors.password = '*Password required.'
    } else if(values.password !== values.passwordCheck) {
        errors.password = '*Passwords do not match.'
    } 

    console.log(errors)

    return errors;

}