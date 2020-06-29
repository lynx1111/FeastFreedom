export class Cart {
    public id: number;
    public name: string;
    public veg: string;
    public price: string;
    public userid: number;

    constructor( name: string, veg: string, price: string,userid: number ) {
      
      this.name = name;
      this.veg = veg;
      this.price=price;
      this.userid=userid;
    }


}