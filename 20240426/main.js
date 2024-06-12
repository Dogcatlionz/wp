document.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelector('#button');
    const sidebar = document.querySelector('#sidebar');
    let isWide = true; // Initial state is wide (true)

    btn.addEventListener('click', function() {
        if (isWide) {
            sidebar.style.width = '0';
            sidebar.style.opacity = '0'; 
            isWide = false;
        } else {
            sidebar.style.width = '100%';
            sidebar.style.opacity = '1';
            isWide = true;
        }
    });
});
