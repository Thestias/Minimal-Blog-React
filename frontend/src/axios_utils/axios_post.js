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

// This instance is used for POST requests
const axios_instance = axios.create({
    timeout: 5000,
    xsrfCookieName: 'csrftoken',
    xsrfHeaderName: 'X-CSRFToken'

});


export default axios_instance