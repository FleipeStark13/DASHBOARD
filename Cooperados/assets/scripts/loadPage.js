function showLogo() {
    const logo = document.getElementById('tef');
    logo.style.display = 'block';
    logo.style.opacity = 1    
    setInterval(() => {
        logo.style.opacity = 0;
        document.body.style.backgroundColor = '#FFF'
        setInterval(() => {
            logo.style.display = 'none'
        }, 1500)
    }, 1000)

}