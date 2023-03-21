import { useRef, useState } from "react";
import styles from "./Login.module.css";
import { loginValidation } from "../../utils/validation";

const Login = () => {

  const [error, setError] = useState({
    email:'',
    password:'',
    credential:''
  })
  const emailRef = useRef()
  const passwordRef = useRef()

  const loginFormSubmitHandler = (e) => {
    e.preventDefault()
    const {hasError,email,password} = loginValidation(emailRef.current.value, passwordRef.current.value)
    console.log({hasError,email,password})
    if(hasError) {
        setError(prevState => ({
            ...prevState,
            email: email,
            password: password
        }))
        return ;
    }
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
