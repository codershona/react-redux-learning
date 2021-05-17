class ConfirmedLink extends HTMLAnchorElement {

    connectedCallback() {
        this.addEventListener('click', event => {
            if (!confirm('DO YOU REALLY WANT TO DELETE')) {
          event.preventDefault();
         }
        });
    }
}

customElements.define('wc-confirm-link', ConfirmedLink, { extends: 'a' });
// customElements.define('wc-tooltips', Tooltips);
