function enviarFormulario(){
    let nome=document.getElementById("nome").value;
    let email=document.getElementById("email").value;
    let mensagem=document.getElementById("mensagem").value;

    //validação dos campos
    if(nome===""||email===""||mensagem===""){
        alert("Preencha todos os campos!");
        return
    }
   //validação do e-mail
   //if(!document.getElementById("email").checkValidity())
   
   if (!email.includes("@")||!email.includes(".")){
    alert("E-mail inválido");
    return;
   } 
   //simulação de envio
   localStorage.setItem("nome",nome);
   localStorage.setItem("email",email);
   localStorage.setItem("mensagem",mensagem);

   alert("Mensagem enviada com sucesso");

   //limpa os campos
   document.getElementById("nome").value="";
   document.getElementById("email").value="";
   document.getElementById("mensagem").value="";
}