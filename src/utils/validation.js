const errorMessage = {
    userId: "ENTER VALID EMAIL ADDRESS",
    password: "8-16 characters , 1 Special Character, 1 Uppercase, 1 Lowercase, 1 number",
    firstName: "ENTER VALID FIRST NAME",
    phoneNo: "ENTER VALID PHONE NUMBER",
    domain: "PLEASE SELECT DOMAIN",
}

const regex = {
    email: /^[\w-.]+@([\w]+\.)+[\w]{2,4}$/,
    password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/,
    firstName: /^[A-Za-z]+(?: [A-Za-z]*)?$/,
    phoneNumber: /^(\+\d{1,3}[- ]?)?\d{10}$/,
}

export const loginValidation = (emailVal,passwordVal) => {
    let emailErrorMsg = ''
    let passwordErrorMsg = ''
    let hasError = false

    if(!regex.email.test(emailVal)) {
        hasError = true
        emailErrorMsg = errorMessage.userId
    }
    if(!regex.password.test(passwordVal)) {
        hasError = true
        passwordErrorMsg= errorMessage.password
    }

    return {
        hasError,
        email: emailErrorMsg,
        password: passwordErrorMsg
    }
}

export const employeeFormValidation = (employee) => {
    const {firstNameVal, emailVal, phoneNumberVal, domainVal} = employee;
    let hasError = false;
    let firstNameMsg = ''
    let emailMsg = ''
    let phoneNumberMsg = ''
    let domainMsg = ''

    if(!regex.firstName.test(firstNameVal)) {
        hasError=true
        firstNameMsg = errorMessage.firstName
        console.log(firstNameMsg)
    }
    if(!regex.phoneNumber.test(phoneNumberVal)) {
        hasError=true
        phoneNumberMsg = errorMessage.phoneNo
    }
    if(!regex.email.test(emailVal)) {
        hasError=true
        emailMsg = errorMessage.userId
    }
    if(domainVal.length === 0) {
        hasError=true
        domainMsg = errorMessage.domain
    }

    return {
        hasError,
        firstName: firstNameMsg,
        email: emailMsg,
        phoneNumber: phoneNumberMsg,
        domain: domainMsg
    }
}