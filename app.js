// const menu = document.querySelector('#mobile-menu');

// const menuLinks = document.querySelector('.nav-menu');

//     menu.addEventListener('click', function() {
//     menu.classList.toggle('is-active');
//     menuLinks.classList.toggle('active');
//     }


function togglePopup(element) {
    // Close any open popups first (optional)
    document.querySelectorAll('.pop-word').forEach(el => {
    if (el !== element) el.classList.remove('show');
    });
    // Toggle current
    element.classList.toggle('show');
    }
;