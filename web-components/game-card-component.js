class GameCardComponent extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if (this.game) { // se c'è game puoi renderizzare sennò no
            // this.shadowRoot.innerHTML = '';

            // const div = document.createElement('div');
            // this.shadowRoot.appendChild(div);
    
            // const h3 = document.createElement('h3');
            // h3.appendChild(document.createTextNode(this.game.title));
            // div.appendChild(h3); 


            this.shadowRoot.innerHTML = `
            <style>
              .card{
                 display: flex;
                 flex-direction: column;
                 background-color: white;
                 border-radius: 16px;
                 padding: 16px;
                 margin-bottom: 4px;

                }

                .card-title{
                    font-size: x-large;
                    font-weight: bold;
                    
                }
                
                .card-author{
                    font-size: large;
                }

                .card-details{
                    display: flex;
                    
                }

                .card-detail{
                    flex: 1;
                }
             </style>
            `
            
            //mettiamo += per dire di non sovrascrivere lo style con l'html ma di aggiungerlo
            this.shadowRoot.innerHTML += `  
            
            <div class="card">

             <span class="card-title">${this.game.title}</span>
             <span class="card-author">${this.game.author}</span>

            <div class="card-details">
             <span class="card-detail">${this.game.type}</span>
             <span class="card-detail">${this.game.yop}</span>
             <span class="card-detail">${this.game.isMultiplayer ? 'multiplayer' : 'singleplayer'}</span>
            </div>

            </div>
            `

            const deleteBtn = document.createElement('button');
            deleteBtn.appendChild(document.createTextNode('cancellami'));
            this.shadowRoot.querySelector('.card').appendChild(deleteBtn);
            deleteBtn.addEventListener('click', () => this.emitEvent());
        }
      
    }

    emitEvent(){  //questa funzione lancerà un evento e dirà che la card è stata cliccata
        const customEvent = new CustomEvent('card-clicked', {detail: this.game.title}); // diciamo il gioco da rimuovere
        this.dispatchEvent(customEvent);    //dispatchEvent significa "manda l'evento"
    }
}

customElements.define('game-card', GameCardComponent);