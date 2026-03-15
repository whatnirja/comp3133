class Customer {
    firstName!: string;
    lastName!: string;

    greeter(): void {
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }
}

let customer = new Customer();
customer.firstName = "Nirja";
customer.lastName = "Dabhi";
customer.greeter();