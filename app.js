window.addEventListener('load', () => {
    const preload = document.querySelector('.preloader');
    preload.classList.add('preload-finish');

    const loading = document.querySelector('.loading');
    loading.classList.remove('loading');
});