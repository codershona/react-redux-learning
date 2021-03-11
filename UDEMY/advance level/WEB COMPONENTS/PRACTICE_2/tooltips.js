class Tooltips extends HTMLElement {
    constructor() {
        super();
        const toolTipIcons =  document.createElement('span');
        toolTipIcons.textContent = ' (?)';
        this.appendChild(toolTipIcons);
        // console.log("Learning web components");
    }

}

customElements.define('wc-tooltips', Tooltips);


