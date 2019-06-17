import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class ShoppingListService{
    ingredients:Ingredient[] = [new Ingredient("Garam Masala", 1),new Ingredient("Hara dhaniya", 2)];

    receiveIngredient = new EventEmitter<Ingredient>();

    // ingredientsChanged = new EventEmitter<Ingredient[]>();
    ingredientsChanged = new Subject<Ingredient[]>();

    editIngredient = new Subject<number>();

    getIngredients(){
        return this.ingredients.slice();
    }
//
    getIngredient(index: number){
        return this.ingredients[index];
    }

    onEditIngredient(index: number, newIngredient: Ingredient){
        console.log(this.ingredients[index]);
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addToIngredients(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]){//add ingredients to shopping list
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(oldIngredient: Ingredient){
        this.ingredients = this.ingredients.filter((ingredient)=>{
            return ingredient !== oldIngredient;
        });
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient2(index: number){
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }


}