class Header{
    /**
     * causes the side panel to open.
     */
    static open(){
        document.getElementById('mobile-header').style.display = 'inline-block';
        document.getElementById('ofuscation').style.display = 'inline-block';
        document.getElementById('ofuscation').onclick = () => {Header.close()}
    }

    /**
     * causes the side panel to close.
     */
    static close(){
        document.getElementById('mobile-header').style.display = 'none';
        document.getElementById('ofuscation').style.display = 'none';
        document.getElementById('ofuscation').onclick = null
    }
}