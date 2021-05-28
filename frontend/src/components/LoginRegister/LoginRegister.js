import "./LoginRegister.css"

function LoginRegister(props) {
    return (
        <form method="POST">
            <div className="label-wrapper">
                <label className="label" for="1">Login</label>
                <input type="text" />
            </div>
            <button className="button">{props.act}</button>
        </form>
    )
}

export default LoginRegister