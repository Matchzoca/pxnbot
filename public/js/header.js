class Header{
    
    /**
    * faz com que o painel lateral abra.
    */
    static open(){
        document.getElementById('mobile-header').style.display = 'inline-block';
        document.getElementById('ofuscation').style.display = 'inline-block';
        document.getElementById('ofuscation').onclick = () => {Header.close()}
    }

    /**
    * faz com que o painel lateral feche.
    */
    static close(){
        document.getElementById('mobile-header').style.display = 'none';
        document.getElementById('ofuscation').style.display = 'none';
        document.getElementById('ofuscation').onclick = null
    }
}