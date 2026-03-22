import './style.scss'

let curX : number = 0;
let curY : number = 0;
let tgx : number = 0;
let tgY : number = 0;


document.addEventListener('DOMContentLoaded', () => {
  const interBubble : HTMLDivElement = document.querySelector<HTMLDivElement>('.interactive')!;

  function move() : void {
    curX += (tgx - curX) / 23;
    curY += (tgY - curY) / 23;

    interBubble.style.transform = `translate(${curX}px, ${curY}px)`;
    requestAnimationFrame(() :void => {move()
   } );
  }

  window.addEventListener('mousemove', (e : MouseEvent) => {
    tgx = e.clientX ;
    tgY = e.clientY ;
  })
  move();
})