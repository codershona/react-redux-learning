class Tooltips extends HTMLElement {
    constructor() {
        super();
        console.log("Learning web components");
    }

}

customElements.define('wc-tooltips', Tooltips);


