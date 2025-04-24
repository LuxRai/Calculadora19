// Matrix Rain (ya estaba en tu proyecto)
const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = ['19', '❶❾', '⓲', '⑲', '𝟏𝟗', '𝟷𝟿', '🄣', '🄸🄽🄴🄼🄰🄿🄸🄿', '➊➒'];
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array.from({ length: columns }, () => 1);
let offsetX = 0;
let offsetY = 0;

function drawMatrixRain() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#00ffcc';
  ctx.font = fontSize + 'px Poppins';
  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    const x = (i * fontSize) + offsetX;
    const y = drops[i] * fontSize + offsetY;
    ctx.fillText(text, x, y);
    if (y > canvas.height && Math.random() > 0.975) drops[i] = 0;
    drops[i]++;
  }
}
setInterval(drawMatrixRain, 35);
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
document.addEventListener('mousemove', e => {
  offsetX = (e.clientX - window.innerWidth / 2) * 0.01;
  offsetY = (e.clientY - window.innerHeight / 2) * 0.01;
});

// -------------------- LÓGICA DEL CÁLCULO + MONO MODE ------------------------

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function calcular() {
  const resultados = document.getElementById("resultados");
  const glitchSound = document.getElementById("glitchSound");
  const bailaloRocky = document.getElementById("bailaloRocky");
  const pantallaRota = document.getElementById("pantallaRota");
  const resultadoFinal = document.getElementById("resultadoFinal");
  const celebracion = document.getElementById("celebracion");
  const monoSound = document.getElementById("monoSound");
  const monoFeoSound = document.getElementById("monoFeoSound");
  const monoFeo = document.getElementById("monoFeo");

  const inputNumero = document.getElementById("inputNumero").value;
  const colorPantaletas = document.getElementById("colorPantaletas").value.trim().toLowerCase();

  resultados.innerHTML = "";
  pantallaRota.classList.remove("mostrar");
  resultadoFinal.classList.add("oculto");
  resultadoFinal.innerHTML = "";
  celebracion.classList.add("oculto");
  bailaloRocky.pause(); bailaloRocky.currentTime = 0;
  glitchSound.pause(); glitchSound.currentTime = 0;
  monoSound.pause(); monoSound.currentTime = 0;
  monoFeoSound.pause(); monoFeoSound.currentTime = 0;
  monoFeo.classList.add("oculto");

  // ------------------- SECUENCIA FALSA DE CÁLCULOS -------------------
  const pasos = [
    "Inicializando núcleo de lógica cuántica...",
    "Aplicando la Transformada Cuántica de Fourier...",
    "Calculando el logaritmo hiperbólico inverso del módulo de torsión...",
    "Normalizando los vectores en espacio de Hilbert...",
    "Estabilizando entropía relacional...",
    "Resolviendo la matriz de Schrödinger imaginaria...",
    "Ejecutando backpropagation del hiperespacio...",
    "Invirtiendo ecuación de onda en campo electromagnético...",
    "Compilando coeficientes de la secuencia Fibonacci en π...",
    "Verificando con álgebra de Lie..."
  ];
  for (let i = 0; i < pasos.length; i++) {
    const paso = document.createElement("div");
    paso.textContent = pasos[i];
    paso.className = "resultado-step";
    resultados.appendChild(paso);
    await sleep(800);
  }

  // ---------------------- VALIDACIÓN PARA MODO MONO --------------------
  if (parseInt(inputNumero) === 598 && colorPantaletas === "uruguay") {
    activarModoMono();
  } else if (parseInt(inputNumero) === 19) {
    bailaloRocky.play();
    celebracion.classList.remove("oculto");
    mostrarResultado();
  } else {
    pantallaRota.classList.add("mostrar");
    glitchSound.play();
    mostrarResultado();
  }
}

function mostrarResultado() {
  const resultadoFinal = document.getElementById("resultadoFinal");
  resultadoFinal.innerHTML = `
    💥 Resultado final: 19 💥
    <br><button class="recalcular" onclick="reiniciar()">🔄 Volver a Calcular</button>
  `;
  resultadoFinal.classList.remove("oculto");
}

function reiniciar() {
  location.reload();
}

// ----------------------- MONO MODE + BANANAS + JUMPSCARE -----------------------

async function activarModoMono() {
  let monoCount = 0;
  const monoSound = document.getElementById("monoSound");
  const monoFeoSound = document.getElementById("monoFeoSound");
  const monoFeo = document.getElementById("monoFeo");

  crearMonoAnimado();
  const bananaInterval = setInterval(crearBanana, 300);

  const soundInterval = setInterval(() => {
    monoSound.play();
    monoCount++;
    if (monoCount >= 19) {
      clearInterval(soundInterval);
      clearInterval(bananaInterval);
      setTimeout(() => {
        activarMonoFeo();
      }, 2000);
    }
  }, 2000);
}

function crearMonoAnimado() {
  const mono = document.createElement('img');
  mono.src = "mono.png";
  mono.className = "mono-animado";
  mono.style.position = "fixed";
  mono.style.width = "100px";
  mono.style.zIndex = 130;
  document.body.appendChild(mono);

  function animarMono() {
    gsap.to(mono, {
      duration: 1,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      ease: "power1.inOut",
      onComplete: animarMono
    });
  }
  animarMono();
}

function crearBanana() {
  const banana = document.createElement('img');
  banana.src = "banana.png";
  banana.className = "banana-cayendo";
  banana.style.position = "fixed";
  banana.style.top = "-50px";
  banana.style.left = Math.random() * window.innerWidth + "px";
  banana.style.width = "50px";
  banana.style.zIndex = 120;
  document.body.appendChild(banana);

  gsap.to(banana, {
    duration: Math.random() * 3 + 2,
    y: window.innerHeight + 100,
    rotation: Math.random() * 360,
    ease: "power2.in",
    onComplete: () => banana.remove()
  });
}

function activarMonoFeo() {
  const monoFeo = document.getElementById("monoFeo");
  monoFeo.classList.add("mostrar");
  const monoFeoSound = document.getElementById("monoFeoSound");
  monoFeoSound.play();

  // Pantalla completa
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  } else if (document.documentElement.webkitRequestFullscreen) {
    document.documentElement.webkitRequestFullscreen();
  }

  // Vibración rápida
  const vibrar = gsap.to(monoFeo, {
    keyframes: [
      { x: "-5px", y: "-5px" },
      { x: "5px", y: "-5px" },
      { x: "5px", y: "5px" },
      { x: "-5px", y: "5px" }
    ],
    duration: 0.05,
    repeat: -1,
    yoyo: true
  });

  // Parar todo a los 3 segundos
  setTimeout(() => {
    vibrar.kill();
    monoFeo.classList.add("oculto");
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
    location.reload();
  }, 3000);
}
