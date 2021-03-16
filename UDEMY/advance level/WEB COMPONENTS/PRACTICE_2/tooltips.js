class Tooltips extends HTMLElement {
    constructor() {
        super();
        // const toolTipIcons =  document.createElement('span');
        // toolTipIcons.textContent = ' (?)';
        // this.appendChild(toolTipIcons);
        // console.log("Learning web components");

        this._toolTipContainers;

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
        const toolTipIcons = this.shadowRoot.querySelector('span');

        toolTipIcons.addEventListener('mouseenter', this._showTooltips.bind(this));
        toolTipIcons.addEventListener('mouseleave', this._hideTooltips.bind(this));
        this.shadowRoot.appendChild(toolTipIcons);
        this.style.position = "relative";
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

    _showTooltips() {
    this._toolTipContainers = document.createElement('div');
    this._toolTipContainers.textContent = this._toolTipText;
    this.shadowRoot.appendChild(this._toolTipContainers);
    // this.style.position = "relative";

    }

    // hiding tooltips and it will hide the data
     _hideTooltips() {
        this.shadowRoot.removeChild(this._toolTipContainers);
     }

}

customElements.define('wc-tooltips', Tooltips);


