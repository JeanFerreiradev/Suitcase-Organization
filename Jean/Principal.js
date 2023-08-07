function moveBar(clickedDiv) {
    var bar = document.getElementById("bar");
    var container = document.getElementById("linha");
    var containerRect = container.getBoundingClientRect();
    var clickedDivRect = clickedDiv.getBoundingClientRect();
    var offsetX = (clickedDivRect.left - containerRect.left) - 73;

    bar.style.width = clickedDivRect.width + 'px';
    bar.style.transform = `translateX(${offsetX}px)`;

    /*Mudando o texto explicativo*/
    var divs = document.getElementsByClassName("tituloArquivo");
    if (clickedDiv == divs[0]) {
        var texto = document.querySelector(".texto2");
        texto.innerText = "Categoria exclusiva para armazenar certidão de nascimento, identidade, CNH, entre outros...";
    } else if (clickedDiv == divs[1]) {
        var texto = document.querySelector(".texto2");
        texto.innerText = "Nesta aba é possível guardar diversos tipos de comprovantes em categorias diferentes.";
    } else if (clickedDiv == divs[2]) {
        var texto = document.querySelector(".texto2");
        texto.innerText = "Guarde aqui suas notas fiscais para acessá-las facilmente.";
    } else {
        var texto = document.querySelector(".texto2");
        texto.innerText = "Nesta seção você consegue criar sua própria categoria para armazenar diversos tipos de arquivos.";
    }
}

// function changeTxt(clickedDiv) {
//     var divs = document.getElementsByClassName("tituloArquivo");
//     if (clickedDiv == divs[0]) {
//         var elementoP = clickedDiv.querySelector('p');
//         elementoP.textContent = "Categoria exclusiva para armazenar certidão de nascimento, identidade, CNH, entre outros...";
//     } else if (clickedDiv == divs[1]) {
//         var elementoP = clickedDiv.querySelector('p');
//         elementoP.textContent = "Nesta aba é possível guardar diversos tipos de comprovantes em categorias diferentes.";
//     } else if (clickedDiv == divs[2]) {
//         var elementoP = clickedDiv.querySelector('p');
//         elementoP.textContent = "Guarde aqui suas notas fiscais para acessá-las facilmente.";
//     } else {
//         var elementoP = clickedDiv.querySelector('p');
//         elementoP.textContent = "Nesta seção você consegue criar sua própria categoria para armazenar diversos tipos de arquivos.";
//     }
// }