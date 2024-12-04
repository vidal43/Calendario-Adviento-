document.addEventListener('DOMContentLoaded', function () {
    const pistas = [
        { fecha: '1', contenido: 'En tus manos, transforma el día en algo brillante.', desbloqueada: false },
        { fecha: '2', contenido: 'Una herramienta que combina elegancia con propósito.', desbloqueada: false },
        { fecha: '3', contenido: 'Es capaz de dar forma a momentos ordinarios.', desbloqueada: false },
        { fecha: '4', contenido: 'Un compañero ideal para los rituales de cada día.', desbloqueada: false },
        { fecha: '5', contenido: 'Su diseño grita sofisticación y utilidad.', desbloqueada: false },
        { fecha: '6', contenido: 'Es pequeño en tamaño pero deja huella.', desbloqueada: false },
        { fecha: '7', contenido: 'Te permite moldear tu reflejo como prefieras.', desbloqueada: false },
        { fecha: '8', contenido: 'Una mezcla perfecta entre estilo y funcionalidad.', desbloqueada: false },
        { fecha: '9', contenido: 'Es tan ligero que apenas lo sientes, pero siempre está ahí.', desbloqueada: false },
        { fecha: '10', contenido: 'Lo usarás tanto que será parte de tu esencia.', desbloqueada: false },
        { fecha: '11', contenido: 'Pequeños detalles hacen grandes diferencias.', desbloqueada: false },
        { fecha: '12', contenido: 'Sutil, pero indispensable en tu rutina.', desbloqueada: false },
        { fecha: '13', contenido: 'Una chispa de creatividad al alcance de tu mano.', desbloqueada: false },
        { fecha: '14', contenido: 'Refleja la dedicación en cada instante.', desbloqueada: false },
        { fecha: '15', contenido: 'Un accesorio pensado para brillar contigo.', desbloqueada: false },
        { fecha: '16', contenido: 'Tan práctico como elegante.', desbloqueada: false },
        { fecha: '17', contenido: 'Pequeños gestos, grandes resultados.', desbloqueada: false },
        { fecha: '18', contenido: 'No ocupa mucho espacio, pero siempre será útil.', desbloqueada: false },
        { fecha: '19', contenido: 'Cada día con esto será un poco mejor.', desbloqueada: false },
        { fecha: '20', contenido: 'Encaja perfectamente en el ajetreo diario.', desbloqueada: false },
        { fecha: '21', contenido: 'Un pequeño lujo pensado solo para ti.', desbloqueada: false },
        { fecha: '22', contenido: 'Es más que un objeto; es un momento para ti.', desbloqueada: false },
        { fecha: '23', contenido: 'El regalo perfecto para alguien perfecto.', desbloqueada: false },
        { fecha: '24', contenido: '¡Feliz Navidad! 🎄 Ahora, tu regalo te espera.', desbloqueada: false }
    ];

    const calendarioContainer = document.getElementById('calendario-container');
    const modal = document.getElementById('modal');
    const modalText = document.getElementById('modal-text');
    const closeBtn = document.getElementsByClassName('close')[0];

    const today = new Date().getDate(); // Obtener el día actual

    pistas.forEach(pista => {
        const pistaElement = document.createElement('div');
        pistaElement.classList.add('pista');

        // Desbloquear las pistas hasta el día actual
        if (parseInt(pista.fecha) <= today) {
            pista.desbloqueada = true;
        }

        if (!pista.desbloqueada) {
            pistaElement.classList.add('pista-bloqueada');
            pistaElement.innerHTML = `<p class="fecha">${pista.fecha}</p><p>🎁</p>`;
        } else {
            pistaElement.innerHTML = `<p class="fecha">${pista.fecha}</p><p>Haz clic para ver la pista</p>`;
            pistaElement.addEventListener('click', () => {
                modalText.textContent = pista.contenido;
                modal.style.display = 'flex';
            });
        }

        calendarioContainer.appendChild(pistaElement);
    });

    closeBtn.onclick = function () {
        modal.style.display = 'none';
        modalText.textContent = '';
    };

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            modalText.textContent = '';
        }
    };
});
