function validar_email(){
    const email = input_email.value;

    let vazio = `*Preencha este campo!`;
    let arroba = `*Seu email não possui @`;
    let com = `*Seu email não possui .com`;

    if (email == "" ){
        resultado_email.innerHTML = vazio;
    }
    else if(email.indexOf("@") === -1){
        resultado_email.innerHTML = arroba;
    }   
    else if(email.indexOf(".com") === -1){
        resultado_email.innerHTML = com;
    }
    else{
        resultado_email.innerHTML = ``;
    }
    
}

function validar_tel(){
    const tel = input_tel.value;

    let vazio = `*Preencha este campo!`;
    let caracteres = `*Seu telefone não possui 11 caracteres`;
    let com = `*Seu email não possui .com`;
    
    if (tel == "" ){
        resultado_tel.innerHTML = vazio;
    }
    else if(tel.length <11 || tel.length >11){
        resultado_tel.innerHTML = caracteres;
    }
    else if(tel.length == 11){
        resultado_tel.innerHTML = ``;
    }
}

function validar_senha(){
    const senha = input_senha.value;
    const tem_numero = /[0-9]/.test(senha);
    const tem_letraM = /[A-Z]/.test(senha);
    const tem_caractereE = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(senha);
    
    let vazio = `*Preencha este campo!`;
    let caracteres_min = `*Precisa ter no mínimo 7 caracteres`
    let nao_tem_numero = `*Não possui um número`;
    let nao_tem_letraM = `*Não possui uma letra maíuscula`;
    let nao_tem_caractere = `*Não possui um caractere Especial`;

    if(senha == ""){
        resultado_senha.innerHTML = vazio;
    }
    else if(senha.length <7){
        resultado_senha.innerHTML = caracteres_min;
    }
    else if(!tem_numero){
        resultado_senha.innerHTML = nao_tem_numero;
    } 
    else if(!tem_letraM){
        resultado_senha.innerHTML = nao_tem_letraM;
    }
    else if(!tem_caractereE){
        resultado_senha.innerHTML = nao_tem_caractere;
    }
    else{
        resultado_senha.innerHTML = ``
    }
}


function validar_senhaC(){
    const senhaC = input_senhaC.value;
    const senha = input_senha.value;

    let vazio = `*Preencha este campo!`;
    let caracteres_min = `Precisa ter no mínimo 7 caracteres`
    // let caracteres_especiais = `A sua senha não tem caracteres especiais!`;
    let senhas_diferentes = "As senhas não são idẽnticas!";

    let validar_numero = true;
    let tem_numero = ``;
    let nao_tem_numero = `A senha deve ter um número`;


    if(senhaC == ""){
        resultado_senhaC.innerHTML = vazio;
    }
    else if(senhaC.length <7){
        resultado_senhaC.innerHTML = caracteres_min;
    }
    else if (senhaC != senha){
        resultado_senhaC.innerHTML = senhas_diferentes;
    }
    else{
        resultado_senhaC.innerHTML = ``;
    }
}

function cadastrar(){    
    if (resultado_senhaC.innerHTML == `` && resultado_senha.innerHTML == `` 
        && resultado_email.innerHTML ==`` && resultado_tel.innerHTML == `` ){
        alert(`Cadastro concluído`);
    }
}