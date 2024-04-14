document.addEventListener('DOMContentLoaded', function () {
    const electricShape = document.getElementById('electricShape');

    document.addEventListener('mousemove', function (e) {
        // Obtener la posición del cursor
        const x = e.clientX;
        const y = e.clientY;

        // Establecer la posición del elemento eléctrico
        electricShape.style.left = x + 'px';
        electricShape.style.top = y + 'px';
    });
});
