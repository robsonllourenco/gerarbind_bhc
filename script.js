function gerarFrase() {
    const tecla = document.getElementById('tecla').value;
    const nome = document.getElementById('nome').value;
    const rg = document.getElementById('rg').value;
    let cargo = document.getElementById('cargo').value;
    const genero = document.getElementById('genero').value;

    const cargosFemininos = {
        'Diretor Executivo': 'Diretora Executiva',
        'Vice Diretor': 'Vice Diretora',
        'Coordenador Geral': 'Coordenadora Geral',
        'Coordenador Administrativo': 'Coordenadora Administrativa',
        'Coordenador Médico': 'Coordenadora Médica',
        'Coordenador Auxiliar': 'Coordenadora Auxiliar',
        'Supervisor Geral': 'Supervisora Geral',
        'Médico Chefe': 'Médica Chefe',
        'Médico Supervisor': 'Médica Supervisora',
        'Médico Residente': 'Médica Residente',
        'Auxiliar Médico': 'Auxiliar Médica',
        'Enfermeiro': 'Enfermeira',
        'Paramédico': 'Paramédica',
        'Socorrista': 'Socorrista',
        'Residente': 'Residente'
    };

    // Se for gênero feminino, ajusta o cargo
    if (genero === 'Feminino' && cargosFemininos[cargo]) {
        cargo = cargosFemininos[cargo];
    }

    // Criação da frase com os dados fornecidos
    const frase = `bind ${tecla} me ✚ Medical Center / SAMU ✚ ${cargo} ✚ ${nome} ✚ RG: ${rg}`;
    const fraseGeradaElement = document.getElementById('fraseGerada');
    fraseGeradaElement.innerText = frase;

    // Exibição da frase gerada com efeito de fade-in simplificado
    fraseGeradaElement.style.opacity = 0;
    setTimeout(() => {
        fraseGeradaElement.style.transition = 'opacity 0.5s';
        fraseGeradaElement.style.opacity = 1;
    }, 100);

    // Exibir botão de copiar após gerar a bind
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

    // Exibir pop-up de confirmação de cópia
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
