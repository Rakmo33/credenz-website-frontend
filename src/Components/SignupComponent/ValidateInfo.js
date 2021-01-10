
export default function Validate(values) {


    let errors = {}

    console.log("Validate called")
    
    if(!values.name) {
        // errors.name = '*Full name required.'
        errors.name = ''
    } 
    else if(!(/^[a-zA-Z\s+]*$/.test(values.name))) {
        errors.name = '*Please enter valid name.'
    }

    if(!values.username) {
       //errors.username = '*Username required.'
       errors.username = ''
    }else if(!(/^[a-zA-Z0-9\S]+$/.test(values.username))) {
        errors.username = '*Username should contain only letters or digits.'
    }

    if(!values.email) {
        //errors.email = '*Email required.'
        errors.email = ''
    } else if(!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(values.email)) {
        errors.email = '*Please enter valid email.'
    }

    if(!values.phoneno) {
        //errors.phone = '*Phone no required.'
       errors.phone = '';
    } else if(!/^[0-9]{10}$/.test(values.phoneno)) {
        errors.phone = '*Please enter valid phone number.'
    } 

    if(!values.clgname) {
        //errors.college = '*College name required.'
        errors.college = '';
    } 

    if(!values.password) {
        errors.password = ''
    } else if(values.password !== values.passwordCheck) {
        errors.password = '*Passwords do not match.'
    } 

    console.log(errors)

    return errors;

}