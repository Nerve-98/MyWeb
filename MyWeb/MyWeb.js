window.onload = function() {scrollfunc()};
window.onscroll = function() {scrollfunc()};

function scrollfunc() {
    var header = document.getElementById('header');

    if(document.documentElement.scrollTop > 0.1) {
        if(!header.classList.contains('navbar-fixed')) {
            header.classList.add('navbar-fixed');
            document.getElementsByTagName('body')[0].style.marginTop = '70px';
            header.style.display = 'none';
            setTimeout(function() {
                header.style.display = 'block';
            }, 60);
            
        }
    }
    else {
        if(header.classList.contains('navbar-fixed')) {
            header.classList.remove('navbar-fixed');
            document.getElementsByTagName('body')[0].style.marginTop = '0';
        }
    }

}

function menuToggle() {
    document.getElementById('menu').classList.toggle('show');

}

document.getElementById('toggleBtn').addEventListener('click', menuToggle);