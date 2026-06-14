//Código JavaScript que implementa a function para enviar formulário
function enviarFormulario(){
    //retorna os valores digitados nos campos do formulário
    let nome=document.getElementById("nome").value;
    let email=document.getElementById("email").value;
    let mensagem=document.getElementById("mensagem").value;

    //validação dos campos obrigatórios (nome, e-mail, mensagem)
    if(nome===""||email===""||mensagem===""){
        //retorna mensagem de alerta se um dos campos estiver vazio
        alert("Preencha todos os campos!");
        return //interrompe a execução da função caso campos obrigatórios esteja vazios
    }

   //valida se o formato do e-mail é valido (se possui "@" e ".")
    if (!email.includes("@")||!email.includes(".")){
        //retorna mensagem de alerta se o formato do e-mail informado não for válido
    alert("E-mail inválido");//interrompe a execução da função caso formato do e-mail inválido
    return;
   } 

   //simulação de envio (dados armazenados no Local Storage do navegador)
   localStorage.setItem("nome",nome);
   localStorage.setItem("email",email);
   localStorage.setItem("mensagem",mensagem);
   //menagem de confirmação de envio para o usuário
   alert("Mensagem enviada com sucesso");

   //limpa os campos do formulário após o envio
   document.getElementById("nome").value="";
   document.getElementById("email").value="";
   document.getElementById("mensagem").value="";
}