function gerarFrase() {
    const tecla = document.getElementById('tecla').value;
    const nome = document.getElementById('nome').value;
    const rg = document.getElementById('rg').value;
    let cargo = document.getElementById('cargo').value;
    const genero = document.getElementById('genero').value;

    const cargosFemininos = {
        'Vice Diretor': 'Vice Diretora',
        'Estagiário': 'Estagiária',
        'Paramédico': 'Paramédica',
        'Socorrista': 'Socorrista',
        'Enfermeiro': 'Enfermeira',
        'Coord. Médico': 'Coord. Médica'
    };

    if (genero === 'Feminino' && cargosFemininos[cargo]) {
        cargo = cargosFemininos[cargo];
    }

    const frase = `bind ${tecla} me ✚ BGO Hospital Center ✚ ${cargo} ✚ ${nome} ✚ RG: ${rg}`;
    const fraseGeradaElement = document.getElementById('fraseGerada');
    fraseGeradaElement.innerText = frase;

    // Adicionando efeito de fade-in na exibição da frase gerada
    fraseGeradaElement.style.opacity = 0;
    setTimeout(() => {
        fraseGeradaElement.style.transition = 'opacity 0.5s';
        fraseGeradaElement.style.opacity = 1;
    }, 100);

    // Mostrar botão de copiar
    document.getElementById('copyButton').style.display = 'block';
}

function copiarFrase() {
    const fraseGeradaElement = document.getElementById('fraseGerada');
    const textArea = document.createElement('textarea');
    textArea.value = fraseGeradaElement.innerText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

    // Exibir pop-up de confirmação
    const popup = document.getElementById('popup');
    popup.style.display = 'block';
    popup.style.opacity = 1;
    setTimeout(() => {
        popup.style.opacity = 0;
        setTimeout(() => {
            popup.style.display = 'none';
        }, 500);
    }, 2000);
}
