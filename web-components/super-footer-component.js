class SuperFooterComponent extends HTMLElement{   

    constructor(){ 
      super();
      this.attachShadow({mode: 'open'})   
    }
 
    connectedCallback(){  
 
        this.render();
    } 


    render(){

      this.shadowRoot.innerHTML = `
     
      <link rel="stylesheet" href="./web-components/super-footer-style.css">
      <p>©Game Platform 2023</p>
      `
    }
 }
 
 
 customElements.define('super-footer', SuperFooterComponent);