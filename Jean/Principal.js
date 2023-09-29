
function changeTxt(clickedDiv) {
    /*Mudando o texto explicativo*/
    const items = document.getElementsByClassName("icon-title");
    if (clickedDiv == items[0]) {
        const texto = document.querySelector(".texto2");
        texto.innerText = "Categoria exclusiva para armazenar certidão de nascimento, identidade, CNH, entre outros...";
    } else if (clickedDiv == items[1]) {
        var texto = document.querySelector(".texto2");
        texto.innerText = "Nesta aba é possível guardar diversos tipos de comprovantes em categorias diferentes.";
    } else if (clickedDiv == items[2]) {
        var texto = document.querySelector(".texto2");
        texto.innerText = "Guarde aqui suas notas fiscais para acessá-las facilmente.";
    } else {
        var texto = document.querySelector(".texto2");
        texto.innerText = "Nesta seção você consegue criar sua própria categoria para armazenar diversos tipos de arquivos.";
    }
}

function restoreTxt(){
    texto = document.querySelector(".texto2");
    texto.innerText = "Categoria exclusiva para armazenar certidão de nascimento, identidade, CNH, entre outros...";
}

/*Abrindo aba arquivos*/
function openAbaArquivos() {
    const abaCriarPasta = document.getElementById("abaCriarPasta");
    const abaArquivo = document.getElementById("abaArquivo");
    const main = document.querySelector("main");
    if (abaArquivo.open) {
        abaArquivo.close();
        abaCriarPasta.close();
        main.style.filter = 'none';
    } else {
        abaArquivo.show();
        main.style.filter = 'blur(6px) brightness(0.8)';
    }
}

function openAbaCriarPasta() {
    const abaCriarPasta = document.getElementById("abaCriarPasta");
    if (abaCriarPasta.open) {
        abaCriarPasta.close();
    } else {
        abaCriarPasta.show();
    }
}

function openAbaLogin() {
    const abaCadastro = document.getElementById("abaCadastro");
    const abaLogin = document.getElementById("abaLogin");
    const main = document.querySelector("main");
    if (abaLogin.open) {
        abaLogin.close();
        main.style.filter = 'none';
    } else if (!abaCadastro.open) {
        abaLogin.show();
        main.style.filter = 'blur(6px) brightness(0.8)';
    }
}

function openAbaCadastro() {
    const main = document.querySelector("main");
    const abaLogin = document.getElementById("abaLogin");
    const abaCadastro = document.getElementById("abaCadastro");
    abaLogin.close();
    abaCadastro.show();
    main.style.filter = 'blur(6px) brightness(0.8)';
}

function closeAbaCadastro() {
    const main = document.querySelector("main");
    const abaCadastro = document.getElementById("abaCadastro");
    abaCadastro.close();
    main.style.filter = 'none';
}

function criarPasta() {
    // Aumenta a altura da arquivos-box
    const arquivosBox = document.getElementById("arquivos-box");
    var alturaAtual = parseFloat(getComputedStyle(arquivosBox).height);
    var novaAltura = alturaAtual + 95.75;
    arquivosBox.style.height = `${novaAltura}px`;

    // Cria uma div de classe input-wrapper
    var divCriada = document.createElement('div');
    divCriada.classList.add("input-wrapper");
    var criarPastaBtn = document.getElementById("criarPastaBtn");
    arquivosBox.insertBefore(divCriada, criarPastaBtn);
}

window.addEventListener('resize', centerDiv);

function centerDiv() {
    const abaLogin = document.getElementById("abaLogin");
    const abaCadastro = document.getElementById("abaCadastro");
    abaLogin.style.top = `${window.innerHeight / 2}px`;
    abaLogin.style.left = `${window.innerWidth / 2}px`;

    abaCadastro.style.top = `${window.innerHeight / 2}px`;
    abaCadastro.style.left = `${window.innerWidth / 2}px`;
}