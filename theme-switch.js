const searchParams = new URLSearchParams(window.location.search);

let themeCss='./style.css' 

if (searchParams.get('id')) {
    if (searchParams.get('id') === 'pluto') {
        themeCss='./dark-style.css'
        
    }
    if (searchParams.get('id') === 'pippo') {
        themeCss='./style.css' 
    }
}

// document.getElementById('main-style').href = themeCss;

const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = themeCss;
document.head.appendChild(link);