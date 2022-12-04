

function setTheme(){
    const bodyDark = document.body
        bodyDark.classList.toggle("dark-body")

    const darkContainer = document.body.lastElementChild
        darkContainer.classList.toggle("dark-container")
    
    }