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

       const template = document.querySelector('#tooltips-template');

       this.shadowRoot.appendChild(template.content.cloneNode(true));

}

  // using connected Call back () method so that we could access in the DOM
    connectedCallback() {
        if (this.hasAttribute('text')) {
            this._toolTipText = this.getAttribute('text');
        }
        // const toolTipIcons = document.createElement('span');
        // toolTipIcons.textContent = ' (?)';
        const toolTipIcons = this.shadowRoot.querySelector('span');

        toolTipIcons.addEventListener('mouseenter', this._showTooltips.bind(this));
        toolTipIcons.addEventListener('mouseleave', this._hideTooltips.bind(this));
        this.shadowRoot.appendChild(toolTipIcons);

    }

    _showTooltips() {
     this._toolTipContainers = document.createElement('div');
    //  this._toolTipContainers.textContent = 'I am writing ToolTip Texts';
    this._toolTipContainers.textContent = this._toolTipText;
    this._toolTipContainers.style.backgroundColor = 'lightblue';
    this._toolTipContainers.style.color = 'black';
    this._toolTipContainers.style.position = 'absolute';
    this._toolTipContainers.style.zIndex = '10';
    this.shadowRoot.appendChild(this._toolTipContainers);
    this.style.position = "relative";

    }

    // hiding tooltips and it will hide the data
     _hideTooltips() {
        this.shadowRoot.removeChild(this._toolTipContainers);

     }

}

customElements.define('wc-tooltips', Tooltips);


