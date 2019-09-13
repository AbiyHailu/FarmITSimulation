export class pesticide {
    id:number;
    name:string;
    purpose:Array<string>;
    efficency:number;//percentage
    envImpact: number;
    price:number
}

export const pesticides: pesticide[] = [
  { id: 1, name: 'Selecron', purpose:["Spider Mite ", "Aphides"], efficency:50, envImpact:30, price:20},
  { id: 2, name: 'testDowny' , purpose:["Downy"], efficency:70, envImpact:20, price:30},
   { id: 2, name: 'test2Downy' , purpose:["Downy"], efficency:60 ,envImpact:20, price:20},
];