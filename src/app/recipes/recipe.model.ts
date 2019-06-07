import { Ingredient } from '../shared/ingredient.model';

export class Recipe{
    // public name:string;
    // public description:string;
    // public imgPath:string;

    constructor(public name:string, public description:string, public imgPath:string, public ingredients:Ingredient[]){
    }
}