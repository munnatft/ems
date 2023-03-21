import { useRef, useState } from "react";
import styles from "./Login.module.css";
import { loginValidation } from "../../utils/validation";
import { setItemInLocalStorage } from "../../utils/helpers";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [error, setError] = useState({
    email:'',
    password:'',
    credential:''
  })
  const emailRef = useRef()
  const passwordRef = useRef()
  const navigate = useNavigate()

  const loginFormSubmitHandler = (e) => {
    e.preventDefault()
    const {hasError,email,password} = loginValidation(emailRef.current.value, passwordRef.current.value)
    if(hasError) {
        setError(prevState => ({
            ...prevState,
            email: email,
            password: password
        }))
        return ;
    }
    setItemInLocalStorage("__LOGGED_IN_USER__", { isUserLoggedIn: true, email: emailRef.current.value })
    navigate("/")
  }
  return (
    <main className={styles.loginContainer}>
      <h1 className={styles.welcome}>Welcome</h1>
      <form className={styles.loginFields} onSubmit={loginFormSubmitHandler} >
        <div className="form-control">
            <input 
                type="text"
                placeholder="user id"
                ref={emailRef}
            />
            {error.email && <p className="errorText">{error.email}</p>}
        </div>
        <div className="form-control">
            <input 
                type="password"
                placeholder="password"
                ref={passwordRef}
            />
            {error.password && <p className="errorText">{error.password}</p>}
        </div>
        { error.credential && <p className={styles.errorText}>{error.credential}</p>}
        <button className={styles.submitBtn}>login</button>
      </form>
    </main>
  )
}

export default Login
