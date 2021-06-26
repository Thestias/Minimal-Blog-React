import axios from "axios";

/*

AXIOS treats the XSRF/CSRF protection with different names,
Django expects for a Header with the name of "X-CSRF-Token", which takes the value of a Cookie it sent previously by the name
of "csrftoken".
AXIOS when making a request identifies which Header is the XSRF/CSRF protection by looking for a Header by the name of
"X-XSRF-TOKEN" and his value by a Cookie of the name "XSRF-TOKEN".

So we need to modify the default values for the XSRF/CSRF protection in AXIOS, why it doesnt work the setting the headers
inside the axios.post() request beats me

*/
const axios_instance = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    timeout: 5000,
    xsrfCookieName: 'csrftoken',
    xsrfHeaderName: 'X-CSRFToken'

});

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