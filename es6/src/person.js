class Persons {

    constructor(names, emails) {
        this.names = names;

        this.emails = emails;

    }

    // get names() {
    //     return this.names
    // }

    // set names(names) {
    //     this.names = names
    // }

    prints() {
        console.log(`NAME: ${this.names}, EMAIL: ${this.emails} `)

    }

}



export default Persons;

