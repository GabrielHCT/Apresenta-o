window.onload = function() {
    var backgroundSelect = document.getElementById('background-select');

    var savedBackground = localStorage.getItem('background');
    if (savedBackground) {
        document.body.className = savedBackground;
    }

    backgroundSelect.onchange = function() {
        document.body.classList.remove('bg1', 'bg2', 'bg3', 'bg4', 'bg5');

        document.body.classList.add(this.value);
        localStorage.setItem('background', this.value);
    };
};