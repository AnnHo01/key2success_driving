const apiUrl = 'https://api.netlify.com/api/v1/';
const token = process.env.NETLIFY_ACCESS_TOKEN;

export function getReviews(){
    return fetch(apiUrl + `forms/${process.env.FORM_ID}/submissions`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
    })
}

export function getSubmission(id){
    return fetch(apiUrl + `submissions/${id}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
    })
}

export function deleteSubmission(id){
    return fetch(apiUrl + `submissions/${id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
    })
}