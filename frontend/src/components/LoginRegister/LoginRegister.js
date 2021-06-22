import "./LoginRegister.css"
import { useState } from 'react';
import { useHistory } from "react-router-dom";
import { login } from "./utils/authentication.js"

function LoginRegister(props) {
    /*
    Serves a FORM to, either register or login.
    props.act <- Meaning the act of Login or Register
    renderRegister() <- Conditionally renders the Register section
    */
    const history = useHistory()

    const [username, setUsername] = useState([])
    const [password, setPassword] = useState([])
    const [password_conf, setPasswordConf] = useState([])
    const [email, setEmail] = useState([])


    function checkAction(event) {
        if (props.act === 'Register') {
            // pass
        }
        else {
            let login_status = login(event, username, password)
            login_status.then((data) => {
                if (data === 'Logged in') {
                    history.push('/')
                }
            })

        }
    }

    function renderRegister() {
        if (props.act === 'Register') {
            return (
                <div>
                    <div className="label-wrapper">
                        <label className="label" for="password_conf">Password Confirmation</label>
                        <input id="password_conf" type="password" value={email} onChange={(event) => setPasswordConf(event.target.value)} />
                    </div>

                    <div className="label-wrapper">
                        <label className="label" for="email">Email</label>
                        <input id="email" type="email" value={password_conf} onChange={(event) => setEmail(event.target.value)} />
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

            <button class="button">{props.act}</button>
        </form>

    )
}

export default LoginRegister