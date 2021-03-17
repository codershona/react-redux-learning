class Modals extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.isOpen = false;

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

         :host([opacity]) #backdrop,
         :host([opened]) #modal {
             opacity: 1;
             pointer-events: all;

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
            // font-size: 1.25rem;
            padding: 1rem;
        }

        ::slotted(h1) {
            font-size: 1.25rem;
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
           <slot name="title">
           Can You Confirm the project!!!
           </slot>
           </header>

           <section id="main">
               <slot></slot>
           </section>

           <section id="actions">
           <button id="cancel-btn">DELETE</button>
           <button id="confirm-btn">YES</button>
       </section>

         </div>


         `;

         const slots = this.shadowRoot.querySelectorAll('slot');
         slots[1].addEventListener('slotchange', event => {
             console.dir(slots[1].assignedNodes());
         });

         const cancelButton = this.shadowRoot.querySelector('#cancel-btn');
         const confirmButton = this.shadowRoot.querySelector('#confirm-btn');

         cancelButton.addEventListener('click', this._cancel.bind(this));
         confirmButton.addEventListener('click', this._confirm.bind(this));
        // cancelButton.addEventListener('cancel', () => {
        //  console.log('CANCEL PLEASE!!!!');
        // });

    }

   attributeChangedCallback(name, oldValue, newValue) {


        // opening the modal via css:
        // if (name === 'opened') {
            if (this.hasAttribute('opened')) {

                this.isOpen = true;
                // this.shadowRoot.querySelector('#backdrop').style.opacity = 1;
                // this.shadowRoot.querySelector('#backdrop').style.pointerEvents = 'all';
                // this.shadowRoot.querySelector('#modal').style.opacity = 1;
                // this.shadowRoot.querySelector('#modal').style.pointerEvents = 'all';
            // }

        } else {
            this.isOpen = false;
       }
    }


    static get observedAttributes() {
        return ['opened'];
    }


    open() {
        this.setAttribute('opened', '');
        // this.isOpen; // this will define as false
        this.isOpen = true;

    }

    // _hide() will represent private method & hide() will represent public method

    hide() {

        if (this.hasAttribute('opened')) {
            this.removeAttribute('opened');

        }
       this.isOpen = false;
    }

    _cancel(event) {
        this.hide();
        const cancelEvent = new Event('cancel', { bubbles: true, composed: true }); // composed: false will not show CANCELLED!!
        event.target.dispatchEvent(cancelEvent);

    }

    _confirm() {
        this.hide();
        const confirmEvent = new Event('confirm');
        this.dispatchEvent(confirmEvent);
    }

}


customElements.define('wc-modal', Modals);