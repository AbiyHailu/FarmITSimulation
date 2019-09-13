export class Pest {
    id:number;
    name:string;
    syptoms:Array<string>
}

export const pests: Pest[] = [
  { id: 1, name: 'Spider Mite', syptoms:["leaf blackness", "test syptom test"]},
  { id: 2, name: 'Downy Mildew', syptoms:["leaf bottom", "test syptom test"]},
  { id: 3, name: 'Aphides', syptoms:["leaf whitness", "test syptom test"]}, 
];