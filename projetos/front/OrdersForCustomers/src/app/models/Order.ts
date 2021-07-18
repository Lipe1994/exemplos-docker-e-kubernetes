

    export class Customer {
        id: string;
        name: string;
    }

    export class Order {
        id: string;
        number: number;
        customer: Customer;
        description: string;
    }

