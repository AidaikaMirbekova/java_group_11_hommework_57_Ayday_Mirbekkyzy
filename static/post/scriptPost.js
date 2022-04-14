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
