function toggleMode() {
    const html = document.documentElement;
    const img = document.querySelector('#profile img');

    html.classList.toggle('light');

    if(html.classList.contains('light')) {
        img.setAttribute('src', './assets/avatar-light.png');
        img.setAttribute('alt', 'imagem profile2');
    } else {
        img.setAttribute('src', './assets/avatar.png');
        img.setAttribute('alt', 'imagem profile');
    }
}