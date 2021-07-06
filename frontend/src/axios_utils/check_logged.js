import axios from 'axios';

function check_authenticated() {
    // Checks whether a session is valid, returns isAuthenticated and username
    return axios.get('api/session')
        .then(res => {
            return res.data
        })
}


export default check_authenticated