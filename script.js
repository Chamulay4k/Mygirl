function moverBotao() {
    var button = document.getElementById("nao");
    var pedidoBox = document.querySelector(".pedido-box");
    var pedidoBoxRect = pedidoBox.getBoundingClientRect();

    var randomX = Math.random() * (pedidoBoxRect.width - button.offsetWidth);
    var randomY = Math.random() * (pedidoBoxRect.height - button.offsetHeight);

    button.style.position = "absolute";
    button.style.left = randomX + "px";
    button.style.top = randomY + "px";
}

function mostrarCaixaEmail() {
    document.getElementById("caixa-email").style.display = "block";
}

function enviarConfirmacaoEmail() {
    var email = document.getElementById("email").value;

    // Enviar email de confirmação
    enviarEmailConfirmacao(email);
    // Redirecionar para o vídeo
    window.location.href = "https://www.youtube.com/watch?v=SEo5sZ8ULaM";
}

function enviarEmailConfirmacao(email) {
    // Aqui você pode adicionar a lógica para enviar o email de confirmação
    // Isso pode ser feito com a ajuda de uma ferramenta de backend, como Node.js com Nodemailer ou com o serviço de envio de email do Static Forms.
    // Por exemplo, se estiver usando o Static Forms:
    fetch('https://api.staticforms.xyz/submit', {
        method: 'POST',
        body: JSON.stringify({
            accessKey: '5cb091fb-d228-4c93-8591-d09cc8b9f956',
            email: email,
            subject: 'Confirmação de Namoro',
            message: 'Parabéns! Agora estamos namorando. ❤️'
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            console.log('Email de confirmação enviado para ' + email);
        } else {
            console.error('Erro ao enviar email de confirmação');
        }
    });
}