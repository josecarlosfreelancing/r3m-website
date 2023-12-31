// Map number x from range [a, b] to [c, d]
const map = (x, a, b, c, d) => (x - a) * (d - c) / (b - a) + c;

// Linear interpolation
const lerp = (a, b, n) => (1 - n) * a + n * b;

const clamp = (num, min, max) => num <= min ? min : num >= max ? max : num;

// Gets the mouse position
const getMousePos = (e) => {
    
    let posx = 0;
    let posy = 0;
    if (!e) {e = window.event;console.log(e)}
    if (e.pageX || e.pageY) {
        posx = e.pageX;
        posy = e.pageY;
    }
    else if (e.clientX || e.clientY)    {
        posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
        
    return { x : posx, y : posy }
};

// Generate a random float.
const getRandomFloat = (min, max) => (Math.random() * (max - min) + min).toFixed(2);

export { map, lerp, clamp, getMousePos, getRandomFloat };