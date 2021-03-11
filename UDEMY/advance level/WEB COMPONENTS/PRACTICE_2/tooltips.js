class Tooltips extends HTMLElement {
    constructor() {
        super();
        // const toolTipIcons =  document.createElement('span');
        // toolTipIcons.textContent = ' (?)';
        // this.appendChild(toolTipIcons);
        // console.log("Learning web components");
    }

  // using connected Call back () method so that we could access in the DOM
    connectedCallback() {
        const toolTipIcons =  document.createElement('span');
        toolTipIcons.textContent = ' (?)';
        this.appendChild(toolTipIcons);

    }

}

customElements.define('wc-tooltips', Tooltips);


