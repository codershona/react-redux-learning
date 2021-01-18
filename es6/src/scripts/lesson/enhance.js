// enhance object

let hooksSearch = 'This is enhance object';

let submitSearch = 'button.test@com';

const handleSearchHooks = {
    hooksSearch,
    submitSearch,

    isCall() {
        console.log(this.hooksSearch, this.submitSearch);
    }
}

handleSearchHooks.isCall();

console.dir(handleSearchHooks);


