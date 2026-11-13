// Calls for pixi and applies it on the page
const app = new PIXI.Application();
await app.init({ resizeTo: window, background: "#1a1028" });
document.body.appendChild(app.canvas);

const dots = new PIXI.Graphics();
app.stage.addChild(dots);

// Remember where the mouse is
const mouse = { x: 0, y: 0 };
window.addEventListener("pointermove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

// Grid with dots that lights up when the mouse hover over it
app.ticker.add(() => {
  dots.clear();
  for (let x = 0; x < app.screen.width; x += 30) {
    for (let y = 0; y < app.screen.height; y += 30) {
      const distance = Math.hypot(x - mouse.x, y - mouse.y);
      dots.circle(x, y, Math.max(1, 8 - distance / 30));
    }
  }
  dots.fill("#a970ff");
});
