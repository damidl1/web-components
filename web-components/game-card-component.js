class GameCardComponent extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        const title = this.getAttribute('game-title');
        this.shadowRoot.innerHTML = '';

        const div = document.createElement('div');
        this.shadowRoot.appendChild(div);

        const h3 = document.createElement('h3');
        h3.appendChild(document.createTextNode(title));
        div.appendChild(h3);
    }

}

customElements.define('game-card', GameCardComponent);