export class Plant {
  id: number;
  name: string;
  timeTOFlower: number;
  fertilizerReq: number;
  pestSuseptibility: number;
  size: string;
  production: number;//per m2
  price: number//per stem cents
}

export const plants: Plant[] = [
  { id: 1, name: 'Rose1', timeTOFlower: 80, fertilizerReq: 2.2, pestSuseptibility: 20, size: "short", production: 230, price: 8 },
  { id: 1, name: 'Rose2', timeTOFlower: 90, fertilizerReq: 2.1, pestSuseptibility: 30, size: "medium", production: 210, price: 10 },
  { id: 1, name: 'Rose3', timeTOFlower: 100, fertilizerReq: 2.3, pestSuseptibility: 50, size: "long", production: 200, price: 15 },
  { id: 1, name: 'Rose4', timeTOFlower: 100, fertilizerReq: 2.5, pestSuseptibility: 40, size: "short", production: 240, price: 8 },
];
