import Person from './person';

class Students extends Person {


    constructor(roll, subject, ids) {
        super(roll, subject)
        this.ids = ids


    }

    printsOne () {
      super.printsOne();
      console.log(`ID's: ${this.ids}`);
    }
}



export default Students;