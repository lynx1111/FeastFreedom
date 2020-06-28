import { Menu } from './menu';

export class Kitchen {
    public id: number;
    public name: string;
    public day: string;
    public time: string;
    public menu: Menu;

    constructor( name: string, day: string, time: string, menu: Menu ) {
      
      this.name = name;
      this.day = day;
      this.time=time;
      this.menu=menu;
    }


}