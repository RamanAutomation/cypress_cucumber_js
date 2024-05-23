export class dataBase {

    verifyFirstname() {
        cy.task("queryDb", "SELECT firstname FROM userdetails").then(val => {
            var firstname = val;
            firstname.forEach(Firstname => {
                cy.log(Firstname)
            })

        })
    }
    verifyLastname() {
        cy.task("queryDb", "SELECT lastname FROM userdetails").then(val => {
            var lastname = val
            lastname.forEach(Lastname => {
                cy.log(Lastname)
            });
        })
    }

    VerifyAddressCity(){
        cy.task("queryDb","SELECT address,city FROM userdetails;").then(val =>{
            val.forEach(row=>{
                const {address,city}=row;
                cy.log(`address:${address}, city:${city}`);
            })
        })
    }
}
