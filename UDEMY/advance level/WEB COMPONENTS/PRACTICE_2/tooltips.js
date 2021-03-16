class Tooltips extends HTMLElement {
    constructor() {
        super();
        // this._toolTipContainers;
        this._toolTipIcon;
        this._toolTipVisible = false;
        this._toolTipText = 'This was a dummy TEXTS';

        // this._toolTipText = this.getAttribute('text');
       this.attachShadow({
           mode: 'open'
       });

       // const template = document.querySelector('#tooltips-template');
       // this.shadowRoot.appendChild(template.content.cloneNode(true));

       this.shadowRoot.innerHTML = `
       <style>
        div {
            font-weight: normal;
            background-color: lightblue;
            color: black;
            position: absolute;
            top: 1.7rem;
            left: 0.76rem;
            z-index: 10;
            padding: 0.14rem;
            border-radius: 2.8px;
            box-shadow: 1px 1px 6px rgba(0,0,0,0.26);

        }

        :host(.important) {
            background: var(--color-primary, #ccc);
            padding: 0.16rem;
        }

        :host-context(p) {
           font-weight: bold;
        }

        .highlight {
            background-color: red;
        }

        ::slotted(.highlight) {
        border-bottom: 1px dotted blue;
        }

        .icon {
            background: black;
            color: white;
            padding: 0.14rem 0.4rem;
            text-align: center;
            border-radius: 50%;

        }

       </style>

       <slot> SOME DEFAULT </slot>
       <span class="icon"> ? </span>

       `;
}

  // using connected Call back () method so that we could access in the DOM
    connectedCallback() {
        if (this.hasAttribute('text')) {
            this._toolTipText = this.getAttribute('text');
        }
        this._toolTipIcon = this.shadowRoot.querySelector('span');

        this._toolTipIcon.addEventListener('mouseenter', this._showTooltips.bind(this));
        this._toolTipIcon.addEventListener('mouseleave', this._hideTooltips.bind(this));
        // this.shadowRoot.appendChild(toolTipIcons);
        this.style.position = "relative";
        this._render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
       // console.log(name, oldValue, newValue);
       if (oldValue === newValue) {
           return;
       }

       if (name === 'text') {
           this._toolTipText = newValue;
       }
    }

    static get observedAttributes() {
        return ['text'];
    }

    _render() {
        let toolTipContainers = this.shadowRoot.querySelector('div');
       if (this._toolTipVisible) {
        toolTipContainers = document.createElement('div');
        toolTipContainers.textContent = this._toolTipText;
        this.shadowRoot.appendChild(toolTipContainers);
       } else {
           if (toolTipContainers) {
        this.shadowRoot.removeChild(toolTipContainers);
           }
       }
    }

    disconnectedCallback() {
       // console.log('Disconnected!!!');
       this._toolTipIcon.removeEventListener('mouseenter', this._showTooltips);
       this._toolTipIcon.removeEventListener('mouseleave', this._hideTooltips);

    }

    _showTooltips() {
    // this._toolTipContainers = document.createElement('div');
    // this._toolTipContainers.textContent = this._toolTipText;
    // this.shadowRoot.appendChild(this._toolTipContainers);
    // this.style.position = "relative";

    this._toolTipVisible = true;
    this._render();

    }

    // hiding tooltips and it will hide the data
     _hideTooltips() {
        // this.shadowRoot.removeChild(this._toolTipContainers);

         this._toolTipVisible = false;
         this._render();
    }

}

customElements.define('wc-tooltips', Tooltips);


