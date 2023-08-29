const apiUrl = 'https://api.netlify.com/api/v1/';
// const token = process.env.NETLIFY_ACCESS_TOKEN;
const token = 'UwpTiKClDp56Sgb5tPLuUQMgztlCDSEktiFXAHxe8Ho';

export function getReviews(){
    return fetch(apiUrl + 'forms/64eb7278a7b0640008c67b9e/submissions', {
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

export function pendReview(id){
    return fetch(apiUrl + `submissions/${id}/spam`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
    })
}

export function approveReview(id){
    return fetch(apiUrl + `submissions/${id}/ham`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
    })
}