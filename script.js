let dubaiText=document.getElementById('dubaitext')
let burjkhalifa=document.getElementById('burjkhalifa')
let stars=document.getElementById('stars')
let moon = document.getElementById('moon')

window.addEventListener('scroll',()=>{
    let value=window.scrollY
    dubaiText.style.left=value*-2+'px';
    burjkhalifa.style.top=value*1+'px';
    stars.style.top=value*1+'px';
    moon.style.left = value+'px'
    moon.style.top=value+'px'
    building.style.left = value+'px'
    building.style.bottom=value+'px'
});

document.body.addEventListener('mousemove', function (event) {
    let sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.left = `${event.pageX - 10}px`;
    sparkle.style.top = `${event.pageY - 10}px`;

    document.body.appendChild(sparkle);

    // Remove sparkle after animation ends
    setTimeout(function() {
      sparkle.remove();
    }, 1000);
  });