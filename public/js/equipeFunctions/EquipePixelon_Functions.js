class Userinfo {

    
    static open(element) {
        element.querySelector('.userinfo').classList.add('open'); 

        element.classList.remove('hover-user-container'); 
        element.removeAttribute('data-balloon-pos'); 

        document.querySelector('.userinfo_close').classList.remove('hidden'); 

        setTimeout(() => {
            element.querySelector('.userinfo').style.opacity = '1'; 
        }, 500);

    }

     /**
     * Feche todos os pop-ups de informações do usuário
     */
    
    static closeAll() {
        document.querySelectorAll('.user-container').forEach(element => {
            if (!element.querySelector('.userinfo').classList.contains('open')) return; 

            element.setAttribute('data-balloon-pos', 'down'); //reativa o balão
            element.classList.add('hover-user-container'); //reativa o hover

            element.querySelector('.userinfo').classList.remove('open'); //fecha o popup
            element.querySelector('.userinfo').style.opacity = 0; // fecha o popup
        })

        document.querySelector('.userinfo_close').classList.add('hidden');
    }
}