document.addEventListener('DOMContentLoaded', function() {
    var energyButton = document.getElementById('energy');
    var isAnimating = false;
    var loadingTimeout;
    var typingTimeout;
    var welcomeTimeout;
    var hideWelcomeTimeout;
    var zoomTimeout;

    energyButton.addEventListener('click', function() {
        var conteudoMonitor = document.querySelector('.conteudo-monitor');
        var energyIcon = document.querySelector('.energy-icon');

        // Cancela a animação anterior, se houver
        clearTimeout(loadingTimeout);
        clearTimeout(typingTimeout);
        clearTimeout(welcomeTimeout);
        clearTimeout(hideWelcomeTimeout);
        clearTimeout(zoomTimeout);

        // Desabilita o botão durante a animação
        energyButton.disabled = true;

        // Altera o estado da animação
        isAnimating = !isAnimating;
        if (isAnimating) {
            startAnimation();
        } else {
            showShutdownAnimation();
        }

        // Função para cancelar a animação
        function cancelAnimation() {
            conteudoMonitor.innerHTML = ''; // Limpa o conteúdo
            energyButton.disabled = false; // Habilita o botão
        }

        // Função para iniciar a animação
        function startAnimation() {
            // Comandos a serem exibidos
            const comandos = [
                "@echo off",
                "setlocal",
                "",
                'set "base_path=C:\\Arquivos"',
                'set "path1=%base_path%\\Este Computador"',
                'set "path2=%path1%\\Usuarios"',
                'set "path3=%path2%\\Perfis"',
                'set "path4=%path3%\\Usuario01"',
                'set "path5=%path4%\\Arquivos-Usuario01"',
                'set "final_path=%path5%\\Portfolio DevIago"',
                "",
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
            ];

            // Mostra tela de carregamento
            conteudoMonitor.innerHTML = `
                <div class="loading show">
                    <div class="loading-circle"></div>
                    <div class="loading-text">Loading</div>
                </div>
            `;

            // Adiciona a classe 'show' para a transição
            setTimeout(() => {
                document.querySelector('.loading').classList.add('show');
            }, 10);

            // Simula um tempo de carregamento de 5 segundos
            loadingTimeout = setTimeout(function() {
                conteudoMonitor.innerHTML = '<div class="typing-animation"></div>';
                let typingAnimation = document.querySelector('.typing-animation');

                comandos.forEach((comando, index) => {
                    typingTimeout = setTimeout(() => {
                        typingAnimation.innerHTML += `<div class="typing-text">${comando}</div><br>`;
                        scrollToBottom(); // Rola para o final a cada novo comando
                        // Se for o último comando, exibe a mensagem de boas-vindas após 2 segundos
                        if (index === comandos.length - 1) {
                            welcomeTimeout = setTimeout(() => {
                                typingAnimation.innerHTML = ''; // Limpa o conteúdo anterior
                                typingAnimation.innerHTML = `<div class="welcome-text">Bem Vindo User!</div>`;
                                // Adiciona a classe 'show-welcome' para a transição
                                setTimeout(() => {
                                    typingAnimation.querySelector('.welcome-text').classList.add('show-welcome');
                                    // Remove a mensagem de boas-vindas após 3 segundos
                                    hideWelcomeTimeout = setTimeout(() => {
                                        typingAnimation.querySelector('.welcome-text').classList.remove('show-welcome');
                                        // Adiciona a animação de zoom
                                        typingAnimation.innerHTML = '<div class="tela-monitor"></div>';
                                        setTimeout(() => {
                                            document.querySelector('.tela-monitor').classList.add('zoom-fullscreen');
                                        }, 10);
                                    }, 3000);
                                }, 10);
                            }, 2000); // Exibe após 2 segundos
                        }
                    }, index * 1000); // Ajuste o tempo de exibição de cada linha aqui
                });

                // Habilita o botão após a animação
                energyButton.disabled = false;
            }, 5000); // Após 5 segundos troca para a animação de digitação
        }

        // Função para mostrar a animação de desligamento
        function showShutdownAnimation() {
            // Mostra tela de carregamento
            conteudoMonitor.innerHTML = `
                <div class="loading show">
                    <div class="loading-circle"></div>
                    <div class="loading-text">Turning off</div>
                </div>
            `;

            // Adiciona a classe 'show' para a transição
            setTimeout(() => {
                document.querySelector('.loading').classList.add('show');
            }, 10);

            // Simula um tempo de carregamento de 5 segundos
            loadingTimeout = setTimeout(function() {
                cancelAnimation();
                // Habilita o botão após a animação de desligamento
                energyButton.disabled = false;
            }, 5000);
        }

        // Função para rolar para o final
        function scrollToBottom() {
            conteudoMonitor.scrollTop = conteudoMonitor.scrollHeight;
        }
    });
});