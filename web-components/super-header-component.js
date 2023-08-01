class SuperHeaderComponent extends HTMLElement{   //per gestire elemento html dobbiamo inserire extends HTMLElement

   constructor(){  // default da inserire nel costruttore da fare sempre per ogni web component
     super();
     this.attachShadow({mode: 'open'})   //serve a gestire quello che in qualche modo in js standard è il document
   }

   connectedCallback(){  // ci dice cosa fare quando il web component viene attivato

    this.render();
   } 

   render(){

    console.log('render', this.getAttribute('title-color'));
    
    this.shadowRoot.innerHTML = '';
    const style = document.createElement('style'); // per inserire il css con shadowRoot
    style.innerHTML = `h1{color: ${this.getAttribute('title-color') || 'red'}}`;
    this.shadowRoot.appendChild(style);


    const h1 = document.createElement('h1');
    h1.appendChild(document.createTextNode(this.getAttribute('super-title') + ' Platform'));
    this.shadowRoot.appendChild(h1);
    
    const page2Link = document.createElement('a');
    page2Link.href = './page2.html';
    page2Link.appendChild(document.createTextNode('vai alla pagina 2'));
    this.shadowRoot.appendChild(page2Link);
    
    // this.shadowRoot.innerHTML = '<h1> Game Platform</h1>' // altro tipo di sintassi per creare elementi


   }
}


customElements.define('super-header', SuperHeaderComponent); //collega il js all'html, quando si usa il tag super-header associaci questa classe (SuperHeaderComponent)