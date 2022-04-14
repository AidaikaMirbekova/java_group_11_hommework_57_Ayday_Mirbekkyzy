// Lesson 59

function clickLike() {
    const element = document.getElementsByClassName("fa-heart")[0];
    element.addEventListener('click', e => {
        if (element.classList.contains("far")) {
            element.classList.remove("muted")
            element.classList.add("text-danger")
            element.classList.remove("far")
            element.classList.add("fas")

        } else {
            element.classList.remove("text-danger")
            element.classList.add("muted")
            element.classList.remove("fas")
            element.classList.add("far")
        }
    })
}


clickLike();

function addBookmarks() {
    const bookmark = document.getElementsByClassName("bi-bookmark")[0];
    bookmark.addEventListener('click', e => {
        if (bookmark.classList.contains("bi-bookmark")) {
            bookmark.classList.remove("bi-bookmark")
            bookmark.classList.add("bi-bookmark-fill")
        } else {
            bookmark.classList.remove("bi-bookmark-fill")
            bookmark.classList.add("bi-bookmark")
        }
    })
}
addBookmarks();