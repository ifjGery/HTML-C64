function initCheckbox(checkbox) {
    checkbox.children[2].addEventListener('click', (e) => {
        if(e.target.checked) {
             checkbox.children[0].className += " hidden";
        }
        else {
            checkbox.children[0].className = checkbox.children[0].className.replace(" hidden", "");
        } 
    })
}