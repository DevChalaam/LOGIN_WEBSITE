import { Component } from "react";
import "./LOGIN2.css";

class Login2 extends Component {

    // SCRIPT JAVASCRIPT WEBSITE
    sendForm = () => {
        let inputUsername = document.getElementById("inputUsername").value;
        let inputEmail = document.getElementById("inputEmail").value;
        let inputPassword = document.getElementById("inputPassword").value;
        let inputCFPassword = document.getElementById("inputCFPassword").value;

        if (!inputUsername) {
            window.alert("Pleases! enter your Username.");
        } else if (!inputEmail) {
            window.alert("Pleases! enter your Email.");
        } else if (!inputPassword) {
            window.alert("Pleases! enter your Password.");
        } else if (!inputCFPassword) {
            window.alert("Pleases! enter your Confirm Password.");
        } else if (inputPassword != inputCFPassword) {
            window.alert("Password and Confirm Password isn't match!");
        } else {
            console.log(`Send data form Username : ${inputUsername} 
Email : ${inputEmail} 
Password : ${inputPassword} 
Confirm Password : ${inputCFPassword}`);
        }

        document.getElementById("inputUsername").value = "";
        document.getElementById("inputEmail").value = "";
        document.getElementById("inputPassword").value = "";
        document.getElementById("inputCFPassword").value = "";
    }

    render() {
        return(
            <div className="main-container">
                <h4 className="txt-login">login</h4>

                <form action="#" method="get" onSubmit={this.sendForm}>
                    <p className="txt-username">Username : </p>
                    <input type="text" className="input-username" id="inputUsername" placeholder="somchai001" /> <br />

                    <p className="txt-email">Email : </p>
                    <input type="email" className="input-email" id="inputEmail" placeholder="somchai.jairai@gmail.com" /> <br />

                    <p className="txt-password">Password : </p>
                    <input type="password" className="input-password" id="inputPassword" placeholder="somchai.jairai@!" /> <br />

                    <p className="txt-cfpassword">Confirm Password : </p>
                    <input type="password" className="input-cfpassword" id="inputCFPassword" placeholder="somchai.jairai@!" /> <br />

                    <a href="#" className="link-forgotpass">Forgot Password!</a> <br />

                    <button className="button-btn">login</button>
                </form>
            </div>
        )
    }
}

export default Login2;