

// const searchParams = new URLSearchParams(window.location.search);
// console.log(searchParams);

// const header = document.getElementById('header');

// let color = 'green';

// if (searchParams.get('id')) {
//     if (searchParams.get('id') === 'pluto') {
//         color = 'yellow';
//     }

//     if (searchParams.get('id') === 'pippo') {
//         color = 'blue';
//     }
// }

// header.setAttribute('title-color', color);
// header.render();

function changeTitleColor() {
    
    const header = document.getElementById('header');
    header.setAttribute('title-color', 'pink'); // va a cambiare attributo all'header
    
}





// esempio fetch per task reddit

fetch('https://www.reddit.com/r/aww/new.json')
.then(resp => resp.json())
.then(res => {
    const data = res.data;
    const posts = data.children;
    console.log(posts);
});

//creare una pagina web che permetta di visualizzare 
//gli ultimi 25 post del subreddit /aww ('https://www.reddit.com/r/aww/new.json')
//usare i web component

//1) permettere all'utente di cambiare il tema


