function initSlider(slider) {
    slider.children[3].addEventListener("change", updateVisual);
    slider.children[3].addEventListener("input", updateVisual);
    function updateVisual(e) {
        e.target.parentElement.children[2].style.left = e.target.value + "em";
        e.target.parentElement.children[1].style.width = e.target.value + "em";
    }
}