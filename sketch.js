// by: zhar

let bolinhaX = 300;
let bolinhaY = 200;
let tamanhodabola = 25;
let movimentoX = 5;
let movimentoY = 5;
let raio = tamanhodabola / 2;
let raio2 = raquete / 2;
let retanguloX = 5;
let retanguloY = 150;
let retanguloC = 10; //comprimento
let retanguloH = 100; //altura
let colidiu = false;

//oponente
let oponenteraqueteX = 585;
let oponenteraqueteY = 150;
let velocidadeYoponente;

//placar
let meuspontos = 0;
let pontosrivais = 0;

//sons

let raquetada;
let relaxa;
let ponto;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background("black");
  mostrarbolinha();
  movimentacaodabola();
  controledetoquedeborda();
  raquete();
  movimentaraqueta();
  colizaocomaraquete();
  raqueteoponente();
  movimentodooponente(); 
  colisaodaminharaquete();
  raqueteoponente();
  placar();
  marcaponto();
  controlederaquetepraborda();
}

function mostrarbolinha() {
  fill("#5E05FC");
  circle(bolinhaX, bolinhaY, tamanhodabola);
}

function movimentacaodabola() {
  bolinhaX += movimentoX;
  bolinhaY += movimentoY;
}

function controledetoquedeborda() {
   
  if (bolinhaX + raio > width || bolinhaX - raio < 0) {
    movimentoX *= -1;
  }
  
  if (bolinhaY + raio > height || bolinhaY - raio < 0) {
    movimentoY *= -1;
  }
} 

function controlederaquetepraborda() {

  if (retanguloY <= 1) { 
   retanguloY = 2; }
  
  if (retanguloY >= 400) { 
   retanguloY = 300; }
}

function raquete() {
  fill("#5E05FC");
  rect(retanguloX, retanguloY, retanguloC, retanguloH);
}

function raqueteoponente() {
  fill("#5E05FC");
  rect(oponenteraqueteX, oponenteraqueteY, retanguloC, retanguloH);
}

function movimentaraqueta() {
  if (keyIsDown(UP_ARROW)) {
    retanguloY -= 15;
  }    
   if (keyIsDown(DOWN_ARROW)) {
    retanguloY += 15;
  }    
}

function colizaocomaraquete() {
  if (bolinhaX - raio < retanguloX + retanguloC && bolinhaY - raio <  retanguloY + retanguloH && bolinhaY + raio > retanguloY ) {
    movimentoX *= -1;
  }
}

function movimentodooponente() {
  velocidadeYoponente = bolinhaY - oponenteraqueteY - retanguloC /2 -60; // modifique esse numera dificultar o nivel 
  oponenteraqueteY += velocidadeYoponente
}

function colisaodaminharaquete() {
  colidiu =  
  collideRectCircle(retanguloX, retanguloY, retanguloC, retanguloH, bolinhaX, bolinhaY, raio);
  if (colidiu) {
    movimentoX *= -1;
  }
}

function colisaodaminharaquete() {
  colidiu =  
  collideRectCircle(oponenteraqueteX, oponenteraqueteY, retanguloC, retanguloH, bolinhaX, bolinhaY, raio);
  if (colidiu) {
    movimentoX *= -1;
  }
}

function placar() {
  textAlign(CENTER, CENTER)
  fill(255);
  text(meuspontos, 150, 26);
  textSize(28);
  fill(255);
  text(pontosrivais, 450, 26);
}

function marcaponto() {
  if (bolinhaX > 589){
    meuspontos += 1;
  }
    if (bolinhaX < 15) {
    pontosrivais += 1;
  }
}

// tive total de 3 erros como nao sabia como corrigir e nao tinha niguem pra ajudar tive que resolver sozinho. Mas foi bem de boas pra arrumar tudo! fiquei com pregriça de procurar ajuda kkk  e fizz o conserto na raça mesmo kkkkkk