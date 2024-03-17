import { Component } from 'react';
import './LOGIN.css';

class Login0 extends Component {
    // SCRITP WEBISTE
    sendData = () => {
        let inputEmail = document.getElementById("inputEmail").value;
        let inputPassword = document.getElementById("inputPassword").value;
        let inputCFPassword = document.getElementById("inputCFPassword").value;

        if (!inputEmail) {
            window.alert("Pleases! enter your email.");
        } else if (!inputPassword) {
            window.alert("Pleases! enter your password.");
        } else if (!inputCFPassword) {
            window.alert("Pleases! enter your confirm password.");
        } else if (inputPassword != inputCFPassword) {
            window.alert("Password and Confirm password isn't match!");
        } else {
            console.log(`Send data Email : ${inputEmail} Password : ${inputPassword} Confirm password : ${inputCFPassword} successfuly!`);
        }

        document.getElementById("inputEmail").value = "";
        document.getElementById("inputPassword").value = "";
        document.getElementById("inputCFPassword").value = "";
    }
    render() {
        return(
            // HTML TAGS
        <div className="main-container">
            <p className="text-login">login</p>

            <form action="#" method="get" onSubmit={this.sendData}>
                <input type="email" className='input-email' id='inputEmail' placeholder='somchai.jairai@gmail.com' /> <br />
                <input type="password" className='input-password' id='inputPassword' placeholder='somchai.jairai' /> <br />
                <input type="password" className='input-cfpassword' id='inputCFPassword' placeholder='somchai.jairai' /> <br />

                <button type='submit' className='button-btn'>login</button>
            </form>
        </div>
        );
    }
}

export default Login0;