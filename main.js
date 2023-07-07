const caminho1 = prompt("Você quer seguir para a área de 'Front-End' ou de 'Back-End'? Digite o nome da área:");
let linguagem = "";
if (caminho1 === "Front-End"){
    linguagem = prompt(" bem vindo ao Front-end! Você quer aprender React ou Vue?");
}
else if (caminho1 === "Back-End"){
    linguagem = prompt(" bem vindo ao Back-end! Você quer aprender C# ou Java?");
}
else {
    alert("então você não quer estudar?!  recarregue a pagina caso troque de ideia!");
}


const escolha = prompt("Digite 1 para seguir se especializando na área escolhida ou 2 para seguir se desenvolvendo para se tornar Fullstack");
if (escolha == 1){
    alert(`Continue se especializando em ${linguagem} para dominar a área de ${caminho1}!`);
}
else if (escolha == 2){
    alert(`Chegou a hora de começar a aprender outras linguagens além de ${linguagem} se você quer se tornar Fullstack!`);
}
else {
    alert("Você não inseriu um valor válido!");
}

let msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
while (msg === "ok"){
    let novaTecnologia = prompt("Qual você gostaria de fazer?");
    alert(`${novaTecnologia} é  muito legal!`)
    msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
    }












