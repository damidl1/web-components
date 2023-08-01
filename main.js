

const searchParams = new URLSearchParams(window.location.search);
console.log(searchParams);

const header = document.getElementById('header');

let color = 'green';

if (searchParams.get('id')) {
    if (searchParams.get('id') === 'pluto') {
        color = 'yellow';
    }

    if (searchParams.get('id') === 'pippoo') {
        color = 'blue';
    }
}
header.setAttribute('title-color', color);