class Tooltips extends HTMLElement {
    constructor() {
        super();
        // const toolTipIcons =  document.createElement('span');
        // toolTipIcons.textContent = ' (?)';
        // this.appendChild(toolTipIcons);
        // console.log("Learning web components");

        this._toolTipContainers;
    }

  // using connected Call back () method so that we could access in the DOM
    connectedCallback() {
        const toolTipIcons = document.createElement('span');
        toolTipIcons.textContent = ' (?)';
        toolTipIcons.addEventListener('mouseenter', this._showTooltips.bind(this));
        toolTipIcons.addEventListener('mouseleave', this._hideTooltips.bind(this));
        this.appendChild(toolTipIcons);

    }

    _showTooltips() {
     this._toolTipContainers = document.createElement('div');
     this._toolTipContainers.textContent = 'I am writing ToolTip Texts';
     this.appendChild(this._toolTipContainers);

    }

    // hiding tooltips and it will hide the data
     _hideTooltips() {
        this.removeChild(this._toolTipContainers);


     }

}

customElements.define('wc-tooltips', Tooltips);


