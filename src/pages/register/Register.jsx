import "./register.css"

export default function Register() {
  return (
    <div className="login">
     <div className="loginWrapper">
        <div className="loginLeft">
            <h3 className="loginLogo">Kasif Social</h3>
            <span className="loginDesc">
                Connect with friends and the world you on Kasif Social.
            </span>
        </div>
        <div className="loginRight">
            <div className="loginBox">
                <input placeholder="User-Name" className="loginInput"/>
                <input placeholder="Email" className="loginInput"/>
                <input placeholder="Password" className="loginInput"/>
                <input placeholder="Password-Confirm" className="loginInput"/>
               <button className="loginButton">Log In</button>
                <span className="loginForgot">Forgot Password</span>
                <button className="loginRegisterButton">Create a New Account</button>
            </div>
        </div>
     </div>
    </div>
  )
}
