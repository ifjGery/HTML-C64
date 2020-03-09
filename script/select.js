function initSelect(select) {
    select.children[0].innerText = select.children[3].children[0].innerText;
    Array.from(select.children[3].children).forEach(option => {
        let li = document.createElement('li');
        li.dataset.value = option.value;
        li.innerText = option.innerText;
        li.addEventListener('click', (e) => {
            select.children[0].innerText = e.target.innerText;
            select.children[3].value = e.target.dataset.value;
            select.children[2].className += " hidden";
        });
        select.children[2].appendChild(li);
    })
    
    select.children[1].addEventListener('click', (e) => {
        if(select.children[2].className.search(" hidden") > -1) {
            select.children[2].className = select.children[2].className.replace(" hidden", "");
        }
        else {
            select.children[2].className += " hidden";
        } 
    })
}