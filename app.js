let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    // Validación mejorada
    if (!nombre) {
        alert('Por favor, inserte un nombre');
        return;
    }
    
    // Evitar duplicados
    if (amigos.includes(nombre)) {
        alert('¡Este nombre ya está en la lista!');
        return;
    }

    amigos.push(nombre);
    input.value = '';
    actualizarListaAmigos();
}

function actualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.className = 'list-item'; // Clase para el estilo CSS
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    
    if (amigos.length < 2) {
        alert('¡Necesitas al menos 2 amigos para sortear!');
        return;
    }

    const indice = Math.floor(Math.random() * amigos.length);
    const ganador = amigos[indice];
    
    // Aplicando estilos del CSS
    resultado.innerHTML = `
        <li class="result-item">
            🎉 ¡El amigo secreto es: <strong>${ganador}</strong>! 🎉
        </li>
    `;
    
    // Reiniciar el sorteo después de 3 segundos
    setTimeout(() => {
        resultado.innerHTML = '';
        amigos = [];
        actualizarListaAmigos();
    }, 3000);
}
