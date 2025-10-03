document.getElementById('toggle-btn').addEventListener('click', function() {
    const para = document.getElementById('toggle-paragraph');
    para.style.display = (para.style.display === 'none') ? 'block' : 'none';
});

document.getElementById('color-btn').addEventListener('click', function() {
    const heading = document.getElementById('main-heading');
    // Generate a random color
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    heading.style.color = randomColor;
});