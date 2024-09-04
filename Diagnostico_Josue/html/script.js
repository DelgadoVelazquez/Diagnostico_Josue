document.getElementById('color').addEventListener('click', function() {


    const nuevo_color = '#FF6347'; 
    const colorActual = document.body.style.backgroundColor;
    let color_nuevo = nuevo_color;

    document.body.style.backgroundColor = color_nuevo;

});