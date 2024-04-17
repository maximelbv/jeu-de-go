// Variables globales
var boardSize = 19; // Agrandi le plateau à une taille de 13x13
var rootX = 60,
  rootY = 45,
  boxSize = 35; // Réduit la taille des blocs à 35 pixels

// Fonction principale appelée lorsque la page est chargée
window.onload = function () {
  // Initialiser le plateau de jeu
  initializeGame();
};

// Fonction pour initialiser le jeu
function initializeGame() {
  // Dessiner le plateau de jeu sur le canvas
  var canvas = document.getElementsByTagName("canvas")[0];
  var ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  drawBoard(ctx);
}

// Fonction pour dessiner le plateau de jeu sur le canvas
function drawBoard(ctx) {
  // Dessiner le fond du plateau
  ctx.fillStyle = "#F2B06D";
  ctx.fillRect(
    rootX - 40,
    rootY - 40,
    80 + boxSize * (boardSize - 1),
    80 + boxSize * (boardSize - 1)
  );

  // Dessiner les lignes horizontales et verticales
  ctx.strokeStyle = "#000";
  ctx.lineWidth = 2;
  for (var i = 0; i < boardSize; i++) {
    drawLine(ctx, rootX, rootY + i * boxSize, boxSize * (boardSize - 1), 0); // lignes horizontales
    drawLine(ctx, rootX + i * boxSize, rootY, 0, boxSize * (boardSize - 1)); // lignes verticales
  }

  // Dessiner les points sur le plateau
  ctx.fillStyle = "#000";
  //Ligne du haut
  drawPoint(ctx, 9, 3);
  drawPoint(ctx, 9, 15);
  drawPoint(ctx, 15, 3);

  //Ligne du milieu
  drawPoint(ctx, 3, 9);
  drawPoint(ctx, 15, 9);
  drawPoint(ctx, 9, 9);

  //Ligne du bas
  drawPoint(ctx, 3, 3);
  drawPoint(ctx, 3, 15);
  drawPoint(ctx, 15, 15);
}

// Fonction pour dessiner une ligne sur le canvas
function drawLine(ctx, x, y, a, b) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + a, y + b);
  ctx.stroke();
}

// Fonction pour dessiner un point sur le canvas
function drawPoint(ctx, x, y) {
  ctx.beginPath();
  ctx.arc(rootX + boxSize * x, rootY + boxSize * y, 5, 0, 2 * Math.PI);
  ctx.fill();
}
