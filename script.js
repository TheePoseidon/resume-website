// Smooth scrolling for navigation
document.querySelector('a[href^="#"]').forEach(anchor=> {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    })
})

// Toggle navigation for mobile
function toggleNav() {
     const navList = document.getElementById('navList');
     if (navList.style.display === 'block') {
         navList.style.display = 'none';
     } else {
         navList.style.display = 'block';
     }
}