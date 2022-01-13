import React, { useState } from 'react';

const Form = (props) => {
    let [firstName, setFirst] = useState("")
    let [lastName, setLast] = useState("")
    let [email, setEmail] = useState("")
    let [password, setPass] = useState("")
    let [conPassword, setConPass] = useState("")
    return (
        <div>
            <form action="">
                <label htmlFor="firstName">First Name: </label>
                <input type="text" id="firstName" onChange= {(e)=> setFirst(e.target.value)}/>
                {firstName.length < 2 && firstName.length> 0?
                <p>First Name must be at lease 2 Characters</p>:
                ""
                }
                <br />
                <label htmlFor="lastName">Last Name: </label>
                <input type="text" id="lastName" onChange= {(e)=> setLast(e.target.value)}/>
                {lastName.length < 2 && lastName.length> 0?
                <p>Last Name must be at lease 2 Characters</p>:
                ""
                }
                <br />
                <label htmlFor="email">Email: </label>
                <input type="email" id="email" onChange= {(e)=> setEmail(e.target.value)}/>
                {email.length < 5 && email.length> 0?
                <p>Email must be at least 5 Characters</p>:
                ""
                }
                <br />
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" onChange= {(e)=> setPass(e.target.value)}/>
                {password.length < 8 && password.length> 0?
                <p>Password must be at lease 8 Characters</p>:
                ""
                }
                <br />
                <label htmlFor="conPassword">Confirm Password: </label>
                <input type="password" id="conPassword" onChange= {(e)=> setConPass(e.target.value)}/>
                {password!==conPassword && conPassword.length > 0?
                <p>Password and Confirm Password must match</p>:
                ""
                }
                <br />
                <input type="submit" value="Create Account" />
            </form>
        </div>
    )
}

export default Form;