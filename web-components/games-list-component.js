class GamesListComponent extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        fetch('./games-data.json')
        .then(resp => resp.json())
        .then(res => this.render(res));
    }

     render(games){
      // this.shadowRoot.innerHTML = '';
        // const ul = document.createElement('ul');
        // this.shadowRoot.appendChild(ul);

        // for (let i = 0; i < games.length; i++) {
        //     const game = games[i];
            
        //     const li = document.createElement('li');
        //     li.appendChild(document.createTextNode(game.title));

        //     ul.appendChild(li);
        // }

        this.shadowRoot.innerHTML = '';
        const mainContainer = document.createElement('div');
        this.shadowRoot.appendChild(mainContainer);

        for (let i = 0; i < games.length; i++) {
            const game = games[i];
            
            const cardComponent = document.createElement('game-card');
            cardComponent.setAttribute('game-title', game.title);

            mainContainer.appendChild(cardComponent);
        }
  }
}

customElements.define('games-list', GamesListComponent);