/*

Case sentitive
por tag: getElementeByTagName()
por Id: getElementById()
por nome: getElementsByName()
por classe: getElementsByClass
por seletor: querySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')

nome.style.width ='100%'
email.style.width = '100%'

function validaNome (){
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome Inválido"
        txtNome.style.color = "red"
    } else {
        txtNome.innerHTML = "Nome Válido"
        txtNome.style.color ="green"
    }

}


function validaEmail(){
    let txtEmail = document.querySelector('#email')
    if (email.value.indexOf('@') == -1) {
        txtEmail.innerHTML = "Email invádlido"
        txtEmail.style.color ="red"
    } else {
        txtEmail.innerHTML = "Email Válido"
        txtEmail.style.color ="green"
    }
}



