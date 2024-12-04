document.addEventListener("DOMContentLoaded", function() {
    showPage('home');
});

function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.style.display = 'none');
    
    document.getElementById(pageId).style.display = 'block';
    updateProgressBar(pageId);

    window.scrollTo(0, 0);
}

function navigateTo(pageId) {
    showPage(pageId);
}

function updateProgressBar(pageId) {
    const progressBar = document.querySelector('.progress');
    let progressPercentage;
    
    switch(pageId) {
        case 'home':
            progressPercentage = '20%';
            break;
        case 'inspiration':
            progressPercentage = '40%';
            break;
        case 'crochet':
            progressPercentage = '60%';
            break;
        case 'design':
            progressPercentage = '80%';
            break;
        case 'clothing':
            progressPercentage = '100%';
            break;
    }

    progressBar.style.width = progressPercentage;
}