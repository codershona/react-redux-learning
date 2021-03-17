class Modals extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
         this.shadowRoot.innerHTML = `
         <style>
         #backdrop {
             position: fixed;
             top: 0;
             left: 0;
             width: 100%;
             height: 100vh;
             background: rgba(0,0,0,0.75);
             z-index: 10;
             opacity: 0;
             pointer-events: none;
         }

         #modal {
            position: fixed;
            z-index: 100;
            top: 15vh;
            left: 25%;
            width: 50%;
           // height: 20rem;
            box-shadow: 0 2px 8px rgba(0,0,0,0.26);
            background: white;
            border-radius: 3px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            opacity: 0;
            pointer-events: none;
            
        }

        #main {
          padding: 1rem;
        }

        header {
            font-size: 1.25rem;
        }

        header h1 {
            padding: 1rem;
        }

        #actions {
            border-top: 1px solid #ccc;
            padding: 1rem;
            display: flex;
            justify-content: flex-end;

        }

        #actions button {
            margin: 0 0.25rem;
        }

         </style>


         <div id="backdrop"></div>
         <div id="modal">
           <header>
           <h1>Request Confirm</h1>
           </header>

           <section id="main">
               <slot></slot>
           </section>

           <section id="actions">
           <button>Delete</button>
           <button>YES</button>
       </section>

         </div>


         `;

    }

}


customElements.define('wc-modal', Modals);