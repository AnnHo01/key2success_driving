const apiUrl = 'https://api.netlify.com/api/v1/';

export function getReviews(){
    const token = process.env.NETLIFY_ACCESS_TOKEN;
    return fetch(apiUrl + `forms/${process.env.FORM_ID}/submissions`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
    })
}

export function getSubmission(id){
    const token = process.env.NETLIFY_ACCESS_TOKEN;
    return fetch(apiUrl + `submissions/${id}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
    })
}

export function deleteSubmission(id){
    const token = process.env.NETLIFY_ACCESS_TOKEN;
    return fetch(apiUrl + `submissions/${id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
    })
}

export function pendReview(id){
    const token = process.env.NETLIFY_ACCESS_TOKEN;
    return fetch(apiUrl + `submissions/${id}/spam`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
    })
}

export function approveReview(id){
    const token = process.env.NETLIFY_ACCESS_TOKEN;
    return fetch(apiUrl + `submissions/${id}/ham`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
    })
}