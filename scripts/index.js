function random(){
    // Uma poesia mostrada aleatoriamente
}
function login(){
    
    document.getElementById("dtitulo").style="display: none";
    document.getElementById("cadastroOuLogin").style="display: grid";
}
function loginOuCadastro( direcionador){
    if(direcionador == 0){
        window.location.href = "cadastro.html";
    }else if( direcionador == 1){
        window.location.href = "login.html";
    }
}
function listaPoesias(){
    // Aqui serão listadas poesias do banco;
}
function listaAutores(){
    // Aqui serão listadas poesias do banco;
}