        
            // Variáveis do jogo
            let numeroSecreto = Math.floor(Math.random() * 10) + 1;
            let tentativas = 0;
            const maxTentativas = 3;

            // Elementos do DOM
            const inputPalpite = document.getElementById("palpiteInput");
            const btnVerificar = document.getElementById("verificarBtn");
            const btnReiniciar = document.getElementById("reiniciarBtn");
            const resultado = document.getElementById("resultado");
            const contadorTentativas = document.getElementById("tentativas");

            // Função para verificar o palpite
            function verificarPalpite() {
                const palpite = parseInt(inputPalpite.value);

                // Validação
                if (isNaN(palpite) || palpite < 1 || palpite > 10) {
                    resultado.textContent = "⚠️ Digite um número entre 1 e 10!";
                return;
                }   

                tentativas++;
                contadorTentativas.textContent = `Tentativas: ${tentativas}`;

                // Comparação
                if (palpite === numeroSecreto) {
                    resultado.textContent = `Acertou, Miseravi! 🎉 (Número: ${numeroSecreto})`;
                    fimDoJogo(true);
                } else if (tentativas >= maxTentativas) {
                    resultado.textContent = `Fim de jogo! O número era ${numeroSecreto}.`;
                    fimDoJogo(false);
                } else {
                    resultado.textContent = palpite < numeroSecreto ? "É MAIOR! ⬆️" : "É MENOR! ⬇️";
                    inputPalpite.value = ""; // Limpa o input
                }
            }

            // Finaliza o jogo
            function fimDoJogo(vitoria) {
                inputPalpite.disabled = true;
                btnVerificar.style.display = "none";
                btnReiniciar.style.display = "inline-block";
            }

            // Reinicia o jogo
            function reiniciarJogo() {
                numeroSecreto = Math.floor(Math.random() * 10) + 1;
                tentativas = 0;
                inputPalpite.value = "";
                inputPalpite.disabled = false;
                resultado.textContent = "";
                contadorTentativas.textContent = "Tentativas: 0";
                btnVerificar.style.display = "inline-block";
                btnReiniciar.style.display = "none";
                console.log("Novo número secreto:", numeroSecreto);
            }

            // Event Listeners
            btnVerificar.addEventListener("click", verificarPalpite);
            btnReiniciar.addEventListener("click", reiniciarJogo);

            // Verifica ao pressionar Enter
            inputPalpite.addEventListener("keyup", function(event) {
                if (event.key === "Enter") {
                    verificarPalpite();
                }
            })