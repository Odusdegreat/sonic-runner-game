import k from "./kaplayCtx";

k.loadSprite("chemical1-bg", "graphics/chemical1-bg.jpg");
k.loadSprite("platforms", "graphics/platforms.png");
k.loadSprite("sonic", "graphics/sonic.png", {
  sliceX: 8,
  sliceY: 2,
  anims: {
    run: { from: 0, to: 7, loop: true, speed: 30 },
    jump: { from: 8, to: 15, loop: true, speed: 100 },
  },
});
k.loadSprite("rings", "graphics/rings.png", {
  sliceX: 16,
  sliceY: 1,
  anims: {
    run: { from: 0, to: 15, loop: true, speed: 30 },
  },
});
k.loadSprite("motobug", "graphics/motobug.png", {
  sliceX: 5,
  sliceY: 1,
  anims: {
    run: { from: 0, to: 4, loop: true, speed: 8 },
  },
});
k.loadFont("mania", "fonts/mania.ttf");
k.loadSound("rock", "sounds/rock-destroy-6409.mp3");
k.loadSound("young", "young-man-being-hurt-95628.mp3");
k.loadSound("collect", "collect-ring-15982.mp3");
