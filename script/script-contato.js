document.addEventListener('DOMContentLoaded', function () {
    // Código para o Menu Hambúrguer
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Verifica se os elementos do menu existem antes de adicionar o evento
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function () {
            navLinks.classList.toggle('show');
            const isExpanded = this.getAttribute('aria-expanded') === 'true' || false;
            this.setAttribute('aria-expanded', !isExpanded);
        });
    }
});



document.getElementById('formContato').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que o formulário recarregue a página

    const meio = document.getElementById('meioComunicacao').value;
    const mensagem = document.getElementById('mensagem').value;
    const nomeCompleto = document.getElementById('nomeCompleto').value;
    
    // Concatena o nome e a mensagem original com uma quebra de linha.
    // O '%0A' é o código para quebra de linha em URLs.
    const mensagemFinal = `Nome: ${nomeCompleto}%0A%0A${mensagem}`;
    const mensagemFinalCodificada = encodeURIComponent(mensagemFinal);

    // Constrói o assunto da mensagem
    const assunto = "Mensagem do Site";
    const assuntoCodificado = encodeURIComponent(assunto);


    // Verifique o meio de comunicação escolhido e redirecione
    if (meio === 'email') {
        window.location.href = `mailto:fernandonevesmaciel@gmail.com?subject=${assuntoCodificado}&body=${mensagemFinalCodificada}`;
    } else if (meio === 'whatsapp') {
        const numeroWhatsApp = '5543991795542';
        window.open(`https://wa.me/${numeroWhatsApp}?text=${mensagemFinalCodificada}`, '_blank');
    } else if (meio === 'telegram') {
        const usuarioTelegram = 'fernandomneves';
        window.open(`https://t.me/${usuarioTelegram}?text=${mensagemFinalCodificada}`, '_blank');
    }
});

