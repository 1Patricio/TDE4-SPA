function carregar(){
    home() //chamando função dentro da função || é como se fosse componente 
    document.getElementById('home').addEventListener('click', home)
    document.getElementById('sobre').addEventListener('click', sobre)
    document.getElementById('contato').addEventListener('click', contato)
}
function home(){
    const main = document.getElementById('main')
    main.innerHTML = `
    <h1> Página Home </h1>
    <p> Minha página pricipal </p> 
    `
}
function sobre(){
    const main = document.getElementById('main')
    main.innerHTML = `
        <h1> Sobre o site </h1>
    `
}
function contato(){
    const main = document.getElementById('main') //isto já é mais ou menos uma orientação orientada a componentes
    main.innerHTML = ` 
        <h2> Cadastro de Cliente</h2>
        <form>
                <input id="nome" type="text" placeholder="Nome...">
                <br>
                <br>
                <input id="email" type="email" placeholder="Email...">
                <br>
                <br>
                <input id="telefone" type="text" placeholder="Telefone...">
                <br>
                <br>
                <button type = "button" id="enviar">Salvar</button>
        </form>
    `
    document.getElementById('enviar').addEventListener('click', enviar)
}

function enviar(){
    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const telefone = document.getElementById('telefone').value

    const contato = { //objeto literal
        nome: nome,
        email: email,
        telefone: telefone
    }
    mostrar(contato)
}

function mostrar(contato){
    const main = document.getElementById('main')

    main.innerHTML +=` 
        <p>Nome: ${contato.nome}</p>
        <p>Email: ${contato.email}</p>
        <p>Telefone: ${contato.telefone}</p>
    `
}