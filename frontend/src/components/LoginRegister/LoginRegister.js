import "./LoginRegister.css"
import { useState } from 'react';
import { useHistory } from "react-router-dom";
import { login, register } from "../../axios_utils/login_logout_register";
import Loading from "../LoadingComponent/LoadingComponent";
import { useAuth } from "../../contexts/auth-context";

function LoginRegister(props) {
    /*
    Serves a FORM to, either register or login.
    props.act <- Meaning the act of Login or Register
    renderRegister() <- Conditionally renders the Register section
    */
    const history = useHistory()

    const [loading, setLoading] = useState(false) // To show a loading sing when the form is submitted and before redirecting
    const [username, setUsername] = useState([])
    const [password, setPassword] = useState([])
    const [password_conf, setPasswordConf] = useState([])
    const [email, setEmail] = useState([])


    const { isLogged, setIsLogged } = useAuth() // Importing the Auth context

    function checkAction(event) {
        if (props.act === 'Register') {
            let register_status = register(event, username, password, password_conf, email)
            register_status.then((data) => {
                if (data === 'User Registered') {
                    setLoading(false)
                    history.push('/login')
                }
            })
        }
        else {
            let login_status = login(event, username, password)
            login_status.then((data) => {
                if (data === 'Logged in') {
                    setIsLogged(true)
                    setLoading(false)
                    history.push('/')
                }
            })

        }
    }

    function isLoading() {
        // Checks if an API call was made, if so then replaces the text in the button with a Loading component
        if (loading === true) { return <Loading /> }
        else { return props.act }
    }

    function renderRegister() {
        if (props.act === 'Register') {
            return (
                <div>
                    <div className="label-wrapper">
                        <label className="label" for="password_conf">Password Confirmation</label>
                        <input id="password_conf" type="password" value={password_conf} onChange={(event) => setPasswordConf(event.target.value)} />
                    </div>

                    <div className="label-wrapper">
                        <label className="label" for="email">Email</label>
                        <input id="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                    </div>
                </div>
            )
        }
    };

    return (
        <form method="POST" onSubmit={(event) => checkAction(event)}>
            <div className="label-wrapper">
                <label className="label" htmlFor="username">Username</label>
                <input id="username" type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
            </div>

            <div className="label-wrapper">
                <label className="label" for="password">Password</label>
                <input id="password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
            </div>

            {renderRegister() /* Renders if props.act is Register */}

            <button class="button" onClick={() => setLoading(true)}>
                {isLoading()}
            </button>
        </form>

    )
}

export default LoginRegister