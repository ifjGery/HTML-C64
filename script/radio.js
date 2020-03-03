function initRadio(radio) {
    radio.children[2].addEventListener('click', (e) => {
        e.target.parentElement.children[0].className += " hidden";
        Array.from(document.querySelectorAll(".input-radio input[name=\"" + e.target.name +"\"]")).forEach(element => {
            if(element !== e.target) {
                element.parentElement.children[0].className = 
                    element.parentElement.children[0].className.replace(" hidden", "");
            }
        });
    })
}