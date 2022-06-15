

//class is noting but a collection of statements , methods , constructor, 

export class Customer {

    CustomersData =
        [
            { 'Id': 1, Hobbies: "Playing Cricket", Name: "Robert", Location: "UK", Job: "Sales Person", DOB: "1-1-1980" },
            { 'Id': 2, Name: "James", Hobbies: "Reading Books", Location: "Australia", Job: "Doctor", DOB: "2-2-1981" },
            { 'Id': 3, Name: "Clark", Hobbies: "Watching TV", Location: "Germany", Job: "Lawyer", DOB: "3-3-1982" },
        ]

    getCustomers() {
        return this.CustomersData;
    }

}