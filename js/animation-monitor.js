document.addEventListener('DOMContentLoaded', function() {
    var startButton = document.getElementById('start');
    var isShutdown = false;

    startButton.addEventListener('click', function() {
        var telaMonitor = document.querySelector('.tela-monitor');

        // Altera o estado do botão
        isShutdown = !isShutdown;
        if (isShutdown) {
            startButton.textContent = 'SHUTDOWN';
            startButton.classList.add('shutdown');
        } else {
            startButton.textContent = 'START';
            startButton.classList.remove('shutdown');
        }

        // Restante do seu código aqui...

        // Função para rolar para o final
        function scrollToBottom() {
            telaMonitor.scrollTop = telaMonitor.scrollHeight;
        }

        // Comandos a serem exibidos
        const comandos = [
            "@echo off",
            "setlocal",
            "",
            "rem Define o caminho de cada diretório",
            'set "base_path=C:\\Arquivos"',
            'set "path1=%base_path%\\Este Computador"',
            'set "path2=%path1%\\Usuarios"',
            'set "path3=%path2%\\Perfis"',
            'set "path4=%path3%\\Usuario01"',
            'set "path5=%path4%\\Arquivos-Usuario01"',
            'set "final_path=%path5%\\Portfolio DevIago"',
            "",
            "rem Navegar passo a passo",
            "echo Navegando para %base_path%",
            'cd /d "%base_path%"',
            "",
            "echo Navegando para %path1%",
            'cd "Este Computador"',
            "",
            "echo Navegando para %path2%",
            'cd "Usuarios"',
            "",
            "echo Navegando para %path3%",
            'cd "Perfis"',
            "",
            "echo Navegando para %path4%",
            'cd "Usuario01"',
            "",
            "echo Navegando para %path5%",
            'cd "Arquivos-Usuario01"',
            "",
            "echo Navegando para %final_path%",
            'cd "Portfolio DevIago"',
            "",
            "echo Navegação concluída. Você está agora em %cd%"
        ];

        // Mostra tela de carregamento
        telaMonitor.innerHTML = `
            <div class="loading">
                <div class="loading-circle"></div>
                <div class="loading-text">Loading</div>
            </div>
        `;

        // Simula um tempo de carregamento de 5 segundos
        setTimeout(function() {
            telaMonitor.innerHTML = '<div class="typing-animation"></div>';
            let typingAnimation = document.querySelector('.typing-animation');

            comandos.forEach((comando, index) => {
                setTimeout(() => {
                    typingAnimation.innerHTML += `<div class="typing-text">${comando}</div><br>`;
                    scrollToBottom(); // Rola para o final a cada novo comando
                }, index * 1000); // Ajuste o tempo de exibição de cada linha aqui
            });
        }, 5000); // Após 5 segundos troca para a animação de digitação
    });
});
