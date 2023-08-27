const apiUrl = 'https://api.netlify.com/api/v1/';
// const token = process.env.NETLIFY_ACCESS_TOKEN;
const token = 'UwpTiKClDp56Sgb5tPLuUQMgztlCDSEktiFXAHxe8Ho';

export function getReviews(){
    return fetch(apiUrl + '', {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
    })
}