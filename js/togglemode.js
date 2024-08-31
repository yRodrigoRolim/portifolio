const checkbox = document.getElementById('togglemode');
        let mode = "light"; // Variável persistente para o modo

        // Adiciona um listener para o evento 'change'
        checkbox.addEventListener('change', function () {
            togglemode();
        });

        function togglemode() {
            const animationBackground = document.querySelectorAll(".trade-mode-background");
            const animationText = document.querySelectorAll(".trade-mode-text");

            // Background
            animationBackground.forEach(function (div) {
                if (mode === "light") {
                    div.classList.remove("background-light");
                    div.classList.add("background-dark");
                } else if (mode === "dark") {
                    div.classList.remove("background-dark");
                    div.classList.add("background-light");
                }
            });
            // Color
            animationText.forEach(function (div) {
                if (mode === "light") {
                    div.classList.remove("text-dark");
                    div.classList.add("text-light");
                } else if (mode === "dark") {
                    div.classList.remove("text-light");
                    div.classList.add("text-dark");
                }
            });
            
            // Alterna o modo
            mode = (mode === "light") ? "dark" : "light";
            console.log(`Switched to ${mode} mode`);
        }