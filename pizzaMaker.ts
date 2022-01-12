type Topping = ['cheese'| 'peppers'|'salami' | 'pepperoni' | 'mushrooms'| 'olives']
 
interface Order {
  name:string;
  toppings: Topping
}

class Pizza implements Order{
  createdOn:Date;
  constructor(
    public name: string,
    public toppings: Topping) {
    this.name = name;
    this.toppings = toppings;
    this.createdOn = new Date();
  }
}

type Topping = ['cheese'| 'peppers'|'salami' | 'pepperoni' | 'mushrooms'| 'olives']
 
interface Order {
  name:string;
  toppings: Topping
}

class Pizza implements Order{
  createdOn:Date;
  constructor(
    public name: string,
    public toppings: Topping) {
    this.name = name;
    this.toppings = toppings;
    this.createdOn = new Date();
  }
}

class PizzaMaker{
  static create({ name, toppings }: Order): Pizza {
    return new Pizza(name, toppings);
  }
}
