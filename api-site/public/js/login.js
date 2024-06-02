// function validar_email(){
//     let email = email_user.value;

//     if(!email){
//         resutlado_senha.innerHTML = `Preencha este campo!`

//     }
//     else if (email.indexOf("@") == -1 ){
//         resultado_email.innerHTML = `Seu email não possui @`
        
//     }
//     else if (email.indexOf(".com") == -1){
//         resultado_email.innerHTML = `Seu email não possui .com`
//     }

// }

// function validar_senha(){
//     let senha = senha_user.value;

//     if(!senha){
//         resutlado_senha.innerHTML = `Preencha este campo!`
//     }
// }


function entrar() {
    aguardar();

    var formulario = new URLSearchParams(new FormData(document.getElementById("form_login")));

    console.log("FORM LOGIN: ", formulario.get("login"));
    console.log("FORM SENHA: ", formulario.get("senha"));

    fetch("/usuarios/autenticar", {
        method: "POST",
        body: formulario
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));

                //  CRIEI VARIÁVEL DE SESSÃO NO JSON PARA PODER USAR POSTERIORMENTE - AULAS DE PI
                sessionStorage.LOGIN_USUARIO = json.login;
                sessionStorage.NOME_USUARIO = json.nome;
                sessionStorage.ID_USUARIO = json.id;
                sessionStorage.fkEstilo = json.fkEstilo;
                

                setTimeout(function () {
                    window.location = "/index.html";
                }, 1000);
            });

        } else {

            console.log("Erro de login!");

            resposta.text().then(texto => {
                console.error(texto);
                // limparFormulario();
                finalizarAguardar(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}

function validarSessao() {
    aguardar();

    //  CRIEI UMA VARIÁVEL DE SESSÃO PARA FICAR ARMAZENADA E CONSEGUIR PUXAR PARA USAR NO MEU GRAF
    let login = sessionStorage.LOGIN_USUARIO;
    let nome = sessionStorage.NOME_USUARIO;
    let fk = sessionStorage.fkEstilo;

    let h1Titulo = document.getElementById("h1_titulo");

    if (login != null && nome != null) {
        // window.alert(`Seja bem-vindo, ${nome}!`);
        h1Titulo.innerHTML = `${login}`;

        finalizarAguardar();
    } else {
        window.location = "login.html";
    }
}

function sair() {
    aguardar();
    sessionStorage.clear();
    finalizarAguardar();
    window.location = "login.html";
}