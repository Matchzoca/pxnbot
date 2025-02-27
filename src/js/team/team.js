class Userinfo {

    /**
     * Opens a user information popup
     * @param {Object} element Element Object
     */
    static open(element) {
        element.querySelector('.userinfo').classList.add('open'); // adiciona a classe para realmente aparecer

        element.classList.remove('hover-user-container'); // faz com que o container não suba ao passar o mouse
        element.removeAttribute('data-balloon-pos'); // faz com que não apareça o balão ao passar o mouse

        document.querySelector('.userinfo_close').classList.remove('hidden'); // ativa o sistema de fechar automaticamente ao clicar fora

        setTimeout(() => {
            element.querySelector('.userinfo').style.opacity = '1'; //depois que a animação acabar, ele fique fixo em opacidade 1
        }, 500);

    }

    /**
     * Close all user information popup
     */
    static closeAll() {
        document.querySelectorAll('.user-container').forEach(element => {
            if (!element.querySelector('.userinfo').classList.contains('open')) return; //retorna se o popup não estiver ativo

            element.setAttribute('data-balloon-pos', 'down'); //reativa o balão
            element.classList.add('hover-user-container'); //reativa o hover

            element.querySelector('.userinfo').classList.remove('open'); //fecha o popup
            element.querySelector('.userinfo').style.opacity = 0; // fecha o popup
        })

        document.querySelector('.userinfo_close').classList.add('hidden'); // desativa o sistema de fechar automaticamente ao clicar fora
    }
}