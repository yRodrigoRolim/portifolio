<div class="background-animation">
    <div class="animation-div" id="animation-div">

        <div class="svg-animation" id="svg-animation">
            <img src="img/primeiro-svg.svg" alt="Animação com svg" id="img-animation-1">
        </div>

        <div class="svg-animation-2" id="svg-animation-2">
            <h1>Meu portifólio web</h1>
            <img src="img/segundo-svg.svg" alt="Segunda Animação com svg" id="img-animation-1">
        </div>
    </div>
</div>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        // Chama sua função aqui
        setTimeout(function() {
            minhaFuncao();
        }, 500);
    });

    function minhaFuncao() {

        const containersvg = document.getElementById("animation-div");
        const divsvg = document.getElementById("svg-animation");
        const divsvg2 = document.getElementById("svg-animation-2");
        const svg1 = document.getElementById("img-animation-1");

        divsvg.classList.add("open-svg-animation");
        divsvg.classList.add("fade-in");
        setTimeout(function() {
            svg1.classList.add("img-svg-animation-1");
            setTimeout(function() {
                divsvg.style.display = "none";
            }, 500);
        }, 1400);

        setTimeout(function() {
            containersvg.classList.add("container-svg-animaton");

            setTimeout(function() {
                divsvg2.style.display = "block";
                divsvg2.classList.add("svg-animation-2-animation");
            }, 2300);

        }, 1500);
        
    }
</script>