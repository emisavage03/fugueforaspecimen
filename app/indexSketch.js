let simpleShader;

let img0;
let img1;

function preload(){
  // Load the shader
  simpleShader = loadShader('basic.vert', 'basic.frag');
  
  // Load the image
  img0 = loadImage("https://cdn.glitch.global/ccf0778d-bb67-46b0-94e9-9b577851564b/harrietcole.jpg?v=1729024877312");
  img1 = loadImage("https://cdn.glitch.global/ccf0778d-bb67-46b0-94e9-9b577851564b/HeLa-III.jpg?v=1729452967024");
  
  
}

function setup() {
  // shaders require WEBGL mode to work
  createCanvas(.8*windowWidth, (.8*windowWidth)*2, WEBGL);
  
}

function draw() {  

  translate(windowWidth/2, windowHeight/2)
  // shader() sets the active shader with our shader
  shader(simpleShader);
  
  const mx = map(mouseX, 0, width, 0, 0.2);
  const my = map(mouseY, 0, width, 0, 0.2);
  
  // Send the image to the shader
  simpleShader.setUniform("uTexture0", img0);
  simpleShader.setUniform("uTexture1", img1);
  simpleShader.setUniform("uScale", [mx, my]);

  // rect gives us some geometry on the screen
  rect(0,0,width, height);
  
  

  
}
