import {getCsrfToken} from "./csrf";

export async function toggleFavorite() {
    // Assuming this function is bound to an element, 'this' refers to that element
    let queryId = this.dataset.id; // or this.getAttribute('data-id');
    let favoriteUrl = this.dataset.url; // or this.getAttribute('data-url');

    try {
        let response = await fetch(favoriteUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCsrfToken()
            },
            body: JSON.stringify({})
        });

        let data = await response.json();
        let is_favorite = data.is_favorite;
        let selector = `.query_favorite_toggle[data-id='${queryId}']`;
        let element = document.querySelector(selector);

        if (element) {
            if (is_favorite) {
                element.classList.remove("bi-heart");
                element.classList.add("bi-heart-fill");
            } else {
                element.classList.remove("bi-heart-fill");
                element.classList.add("bi-heart");
            }
        }
    } catch (error) {
        console.error('Error: ', error);
        alert("error");
    }
}
