export class Menu {
    public id: number;
    public name: string;
    public veg: string;
    public price: string;

    constructor( name: string, veg: string, price: string ) {
      
      this.name = name;
      this.veg = veg;
      this.price=price;
    }


}
