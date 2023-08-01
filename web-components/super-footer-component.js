class SuperFooterComponent extends HTMLElement{   

    constructor(){ 
      super();
      this.attachShadow({mode: 'open'})   
    }
 
    connectedCallback(){  
 
     this.shadowRoot.innerHTML = `
     
     <style>
     @import url('./web-components/super-footer-style.css');
     </style>
     
     <p> ©Game Platform 2023 </p>
     `
    } 
 }
 
 
 customElements.define('super-footer', SuperFooterComponent);