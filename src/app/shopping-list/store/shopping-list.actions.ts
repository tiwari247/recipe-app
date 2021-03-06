import { Ingredient } from 'src/app/shared/ingredient.model';
import { Action } from '@ngrx/store';

export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const ADD_INGREDIENTS = "ADD_INGREDIENTS";
export const EDIT_INGREDIENT = "EDIT_INGREDIENT";
export const DELETE_INGREDIENT = "DELETE_INGREDIENT";

export class AddIngredient implements Action{
    readonly type = ADD_INGREDIENT;
    constructor(public payload: Ingredient){
        
    }
}

export class AddIngredients implements Action{
    readonly type = ADD_INGREDIENTS;
    constructor(public payload: Ingredient[]){
        
    }
}

export class EditIngredient implements Action{
    readonly type = EDIT_INGREDIENT;
    constructor(public payload: {index:number, ingredient:Ingredient}){
        
    }
}

export class DeleteIngredient implements Action{
    readonly type = DELETE_INGREDIENT;
    constructor(public payload: number){
        
    }
}

export type ShoppingListActions = AddIngredient|AddIngredients|EditIngredient|DeleteIngredient;