import React, { useState } from 'react';


function Registration({ propName, propAge, propEmail }) {
const [name, setName] = useState(propName) ;
const [age, setAge] = useState(propAge);
const [email, setEmail] = useState(propEmail)
const [nameIsValid, setNameIsValid] = useState(validateName(name));
const [ageIsValid, setAgeIsValid] = useState(validateAge(age));
const [emailIsValid, setEmaillsValid] = useState(validatemail(propEmail))

function validatemail(email) {
const regExp = /.+@.+\..+/i
if ( email.match(regExp)){
return true;
};};
 
function validateName(name) {
return name.length > 2;
};

function validateAge(age) {
return age >= 10
};

function onNameChange(e) {
let val = e.target.value;
let valid = validateName(val);
setName(val)
setNameIsValid(valid)
}

function onAgeChange(e) {
var val = e.target.value;
var valid = validateAge(val);
setAge(val)
setAgeIsValid(valid)
}

function onEmailChange(e) {
var val = e.target.value;
var valid = validatemail(val);
setEmail(val)
setEmaillsValid(valid)
}

function handleSubmit(e) {
    e.preventDefault();
    if (nameIsValid === true && ageIsValid === true && emailIsValid === true)
    {alert(`Имя: ${name} Bospact: ${age} Moura: ${email}` );
    }
}

    let nameColor = nameIsValid === true ? 'green' : 'red'; 
    let ageColor = ageIsValid === true ? 'green' : 'red';
    let emailColor = emailIsValid === true ? "green" : "red";
    return (
     <>
    <form onSubmit={handleSubmit}>
        <p>
            <label>Имя:</label><br />
            <input type="text" value={name}
            onChange={onNameChange}
            style={{ borderColor: nameColor }}
            />
        </p>
        <p>
            <label>€mail:</label><br />
            <input type="text" value={email}
            onChange={onEmailChange}
            style={{ borderColor: emailColor }}
            />
        </p>
        <p>
            <label>Bospact:</label><br />
            <input type="number" value={age}
            onChange={onAgeChange} style={{ borderColor: ageColor }}
            />
        </p>
        <input type='submit' value='send' />
    </form>
    </>
    )
}
 export default Registration;
    
