const DATA_API_URL = 'https://api.netlify.com/api/v1/';
const DATA_API_TOKEN = process.env.NEXT_PUBLIC_NETLIFY_ACCESS_TOKEN;

export function getReviews(){
    return fetch(DATA_API_URL + `forms/${process.env.NEXT_PUBLIC_FORM_ID}/submissions`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + DATA_API_TOKEN,
        },
    })
}

export function getSubmission(id){
    return fetch(DATA_API_URL + `submissions/${id}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + DATA_API_TOKEN,
        },
    })
}

export function deleteSubmission(id){
    return fetch(DATA_API_URL + `submissions/${id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + DATA_API_TOKEN,
        },
    })
}

export function pendReview(id){
    return fetch(DATA_API_URL + `submissions/${id}/spam`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + DATA_API_TOKEN,
        },
    })
}

export function approveReview(id){
    return fetch(DATA_API_URL + `submissions/${id}/ham`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + DATA_API_TOKEN,
        },
    })
}