const API = '/api/Air.json';

function get() {
    return fetch(API).then(r => r.json())
}

export default { get };