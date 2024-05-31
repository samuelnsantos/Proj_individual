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
    else if(tel.length <11){
        resultado_tel.innerHTML = caracteres;
    }
    else if(tel.length == 11){
        resultado_tel.innerHTML = ``;
    }
}

function validar_senha(){
    const senha = input_senha.value;
    let vazio = `*Preencha este campo!`;
    let caracteres_min = `*Precisa ter no mínimo 7 caracteres`

    if(senha == ""){
        resultado_senha.innerHTML = vazio;
    }
    else if(senha.length <7){
        resultado_senha.innerHTML = caracteres_min;
    }
    else{
        resultado_senha.innerHTML = ``;

    }
}


function validar_senhaC(){
    const senhaC = input_senhaC.value;
    const senha = input_senha.value;

    let vazio = `*Preencha este campo!`;
    let senhas_diferentes = "*As senhas não são idẽnticas!";
    let nao_tem_numero = `A senha deve ter um número`;


    if(senhaC == ""){
        resultado_senhaC.innerHTML = vazio;
    }
    else if (senhaC != senha){
        resultado_senhaC.innerHTML = senhas_diferentes;
    }
    else{
        resultado_senhaC.innerHTML = ``;
    }
}

function cadastrar(){    
    const listaNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const listaCaracteres =  ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', '[', ']', '{', '}', ';', ':', '"','|', ',', '.', '<', '>', '/', '?'];
    const listaLetraM = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    const senha = input_senha.value;
    const senhaC = input_senhaC.value;
    let possui_numero = false;
    let possui_letraM = false;
    let possui_caracter = false;
    let senhas_diferentes = "*As senhas não são idẽnticas!";
    let mensagem = "";

    for(let posicao=0;posicao<=9;posicao++){
        if(senha.indexOf(posicao) >=0){
            possui_numero=true;
            break;
        }
    }

    for(let posicao=0;posicao<=listaCaracteres.length;posicao++){
        if (senha.indexOf(listaCaracteres[posicao]) >=0 ) {
            possui_caracter = true;
            break;
        }
    }

    for(posicao=0;posicao<=listaLetraM.length;posicao++){
        if(senha.indexOf(listaLetraM[posicao]) >=0 ){
            possui_letraM = true;
            break;
        }
    }

    if(senha != senhaC){
        resultado_senhaC.innerHTML = senhas_diferentes;
        resultado_senha.innerHTML = mensagem;
    }

    if (!possui_numero) {
        mensagem = `Não possui número. `;
    }

    if (!possui_caracter) {
        mensagem = `Não possui caracteres especiais. `;
    }

    if (!possui_letraM) {
        mensagem = `Não possui letra maiúscula. `;
    }

    resultado_senha.innerHTML = mensagem
    
    if (resultado_senhaC.innerHTML == `` && resultado_senha.innerHTML == `` 
        && resultado_email.innerHTML ==`` && resultado_tel.innerHTML == `` ){
        alert(`Cadastro concluído`);
    }

}