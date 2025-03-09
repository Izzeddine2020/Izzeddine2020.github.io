// Add smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add image modal functionality
const images = document.querySelectorAll('.zoom-effect');
images.forEach(image => {
    image.addEventListener('click', () => {
        const modal = document.createElement('div');
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0,0,0,0.8)';
        modal.style.zIndex = '1000';
        modal.innerHTML = `
            <img src="${image.src}" 
                 style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); max-width: 90%; max-height: 90%;">
            <span style="position: absolute; top: 20px; right: 30px; color: white; font-size: 40px; cursor: pointer;" 
                  onclick="this.parentElement.remove()">&times;</span>
        `;
        document.body.appendChild(modal);
    });
});

// Dynamic date in footer
const footer = document.createElement('footer');
footer.innerHTML = `
    <p>© ${new Date().getFullYear()} My Website. All rights reserved.</p>
    <div class="social-links">
        <a href="#"><i class="fab fa-youtube"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-github"></i></a>
    </div>
`;
document.body.appendChild(footer);
