import axios_instance from './axios_post'

export async function login(event, username, password) {
    event.preventDefault();
    let login_status = await axios_instance.post("/api/login/", {
        data: {
            "username": username,
            "password": password
        }
    })

    if (login_status.status === 200 && login_status.data.info) {
        return 'Logged in'
    }
}

export async function register(event, username, password, password_conf, email) {
    event.preventDefault()
    let register_status = await axios_instance.post("/api/register/", {
        "username": username,
        "password": password,
        "password2": password_conf,
        "email": email
    })

    if (register_status.status === 201) {
        return "User Registered"
    }
}