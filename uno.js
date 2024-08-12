let currentScene = 0;

const scenes = [
    {
        text: "Eres un astronauta perdido en el espacio. Frente a ti, un vasto vacío y una tenue luz en la distancia.",
        options: [
            { text: "Dirigirse hacia la luz", nextScene: 1 },
            { text: "Permanecer en tu posición", nextScene: 2 }
        ]
    },
    {
        text: "La luz revela ser una estrella moribunda. Cerca de ella, un planeta deshabitado.",
        options: [
            { text: "Aterrizar en el planeta", nextScene: 3 },
            { text: "Continuar flotando", nextScene: 4 }
        ]
    },
    {
        text: "Te quedas esperando, pero el oxígeno se agota. Todo se desvanece lentamente...",
        options: [
            { text: "Reiniciar", nextScene: 0 }
        ]
    },
    {
        text: "Aterrizas en el planeta. Descubres que hay rastros de una antigua civilización.",
        options: [
            { text: "Explorar las ruinas", nextScene: 5 },
            { text: "Buscar recursos para volver", nextScene: 6 }
        ]
    },
    {
        text: "Sigues flotando, pero te das cuenta de que la nave está dañada irreparablemente...",
        options: [
            { text: "Reiniciar", nextScene: 0 }
        ]
    },
    {
        text: "Encuentras una cápsula de escape funcional. Hay esperanza de regresar a casa.",
        options: [
            { text: "Lanzar la cápsula", nextScene: 7 }
        ]
    },
    {
        text: "Recolectas recursos, pero descubres que no son suficientes. Debes seguir buscando.",
        options: [
            { text: "Seguir explorando", nextScene: 5 }
        ]
    },
    {
        text: "Lanzas la cápsula y vuelves a la Tierra, aunque nadie creerá tu historia. Fin.",
        options: [
            { text: "Reiniciar", nextScene: 0 }
        ]
    }
];

function updateScene() {
    const narrative = document.getElementById("narrative");
    const option1 = document.getElementById("option1");
    const option2 = document.getElementById("option2");

    const scene = scenes[currentScene];
    narrative.textContent = scene.text;
    option1.textContent = scene.options[0].text;
    option1.onclick = () => {
        currentScene = scene.options[0].nextScene;
        updateScene();
    };

    if (scene.options[1]) {
        option2.style.display = "inline-block";
        option2.textContent = scene.options[1].text;
        option2.onclick = () => {
            currentScene = scene.options[1].nextScene;
            updateScene();
        };
    } else {
        option2.style.display = "none";
    }
}

updateScene();
