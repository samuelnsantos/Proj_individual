function validar_email(){
    let email = email_user.value;

    if(!email){
        resutlado_senha.innerHTML = `Preencha este campo!`

    }
    else if (email.indexOf("@") >= 0 ){
        resultado_email.innerHTML = `Seu email não possui @`
        
    }
    else if (email.indexOf(".com") >= 0 ){
        resultado_email.innerHTML = `Seu email não possui .com`
    }

}

function validar_senha(){
    let senha = senha_user.value;

    if(!senha){
        resutlado_senha.innerHTML = `Preencha este campo!`
    }
}


function entrar() {

    const email = email_user.value;
    const senha = senha_user.value;

    if(!senha){
        resultado_senha.innerHTML = `Preencha estre campo!`
    }
    if(!email){
        resultado_email.innerHTML = `Preencha estre campo!`
    }
    else{
        finalizarAguardar();

        if (email.indexOf("@") >= 0 ){
            resultado_email.innerHTML = `Seu email não possui @`
            finalizarAguardar();
            
        }
        if (email.indexOf(".com") >= 0 ){
            resultado_email.innerHTML = `Seu email não possui .com`
            finalizarAguardar();
        }

        fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({  //  propriedades do meu json
            email: email,
            senha: senha,
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));      //  Minhas varáveis de sessão
                sessionStorage.EMAIL_USUARIO = json.email;
                sessionStorage.NOME_USUARIO = json.nome;
                sessionStorage.ID_USUARIO = json.id;
                sessionStorage.FK_QUADROS = json.fkEstilo;

                setTimeout(function () {
                    window.location = "./dashboard/cards.html";
                }, 1000); // apenas para exibir o loading

            });

        } else {

            console.log("Houve um erro ao tentar realizar o login!");

            resposta.text().then(texto => {
                console.error(texto);
                finalizarAguardar(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
    }

}
