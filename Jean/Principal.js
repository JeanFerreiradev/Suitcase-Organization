function moveBar(clickedDiv) {
    var bar = document.getElementById("bar");
    var container = document.getElementById("linha");
    var containerRect = container.getBoundingClientRect();
    var clickedDivRect = clickedDiv.getBoundingClientRect();
    var offsetX = (clickedDivRect.left - containerRect.left) - 73;

    bar.style.width = clickedDivRect.width + 'px';
    bar.style.transform = `translateX(${offsetX}px)`;
}