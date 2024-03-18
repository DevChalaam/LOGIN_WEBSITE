import { Component } from 'react';
import './LOGIN1.css';

class Login1 extends Component {
    sendLoginForm = () => {
        let inputUsername = document.getElementById("inputUsername").value;
        let inputEmail = document.getElementById("inputEmail").value;
        let inputPassword = document.getElementById("inputPassword").value;
        let inputCFPassword = document.getElementById("inputCFPassword").value;

        if (!inputUsername) {
            window.alert("Plases! enter your username.");
        } else if (!inputEmail) {
            window.alert("Plases! enter your email.");
        } else if (!inputPassword) {
            window.alert("Plases! enter your password.");
        } else if (!inputCFPassword) {
            window.alert("Plases! enter your confirm password.");
        } else if (inputPassword != inputCFPassword) {
            window.alert("Password and Confirm password isn't match!");
        } else {
            console.log(`Send data Username : ${inputUsername} Email : ${inputEmail} Password : ${inputPassword} Confirm password : ${inputCFPassword} Successfuly!`);
        }

        document.getElementById("inputUsername").value = "";
        document.getElementById("inputEmail").value = "";
        document.getElementById("inputPassword").value = "";
        document.getElementById("inputCFPassword").value = "";
    }
    render() {
        return(
            <div className="main-container">
            <p className="txt-login">login</p>
            
            <form action="#" method="get" onSubmit={this.sendLoginForm}>
                <input type="text" className="input-username" placeholder='somchai001' id='inputUsername' /> <br />
                <input type="email" className="input-email" placeholder='somchai.jairai@gmail.com' id='inputEmail' /> <br />
                <input type="password" className='input-password' placeholder='somchai.jairai' id='inputPassword' /> <br />
                <input type="password" className='input-cfpassword' placeholder='somchai.jairai' id='inputCFPassword' /> <br />

                <button type='submit' className="button-btn">login</button>
            </form>
        </div> 
        );
    }
}

export default Login1;