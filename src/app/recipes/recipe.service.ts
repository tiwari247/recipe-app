import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shoppinglist.service';
import { Subject } from 'rxjs';
// import { Http } from '@angular/http';
import { HttpClient, HttpParams } from "@angular/common/http";
import { AuthService } from '../auth/auth.service';

@Injectable()
export class RecipeService{
    //https://ng-recipe-book-f6ca6.firebaseio.com/
    recipes:Recipe[] = [];
    recipesChanged = new Subject<Recipe[]>();
    constructor(private slService: ShoppingListService, 
        // private http:Http,
        private httpClient:HttpClient,
        private authService:AuthService){
        this.recipes = [
            new Recipe("Pasta", "Pasta was first perfected by CPT", "https://ohsheglows.com/wp-content/uploads/2017/02/10minuteveganpasta-6481.jpg", [new Ingredient("Chat Masala", 3), new Ingredient("Meetha Masala", 2)]),
            new Recipe("Maggie", "Maggie is indian food originated in Uttrakhand by a person named CPT", "https://craftlog.com/m/i/3805446=s1280=h960", [new Ingredient("Chat Masala", 1), new Ingredient("Khatta Masala", 1)]),
        ];  
    }
    // https://www.vegrecipesofindia.com/wp-content/uploads/2018/09/poha-recipe-1.jpg
    // receiveRecipe = new EventEmitter<Recipe>();
    
    getRecipes(){
        return this.recipes.slice();
    }

    sendIngredients(ingredients: Ingredient[]){//Send ingredients to Shopping List service
        this.slService.addIngredients(ingredients);
    }

    getRecipe(index:number){
        return this.recipes[index];
    }

    saveRecipe(recipe: Recipe){
        console.log("Save");
        this.recipes.push(recipe);
        // this.http.put('https://ng-recipe-book-f6ca6.firebaseio.com/data.json', this.recipes);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index:number, recipe:Recipe){
        console.log("Update");
        this.recipes[index] = recipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index:number){
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }

    saveToDB(){
        let token = this.authService.getToken();
        // return this.httpClient.put('https://ng-recipe-book-f6ca6.firebaseio.com/data.json?auth='+token, this.recipes);
        
        // return this.httpClient.put('https://ng-recipe-book-f6ca6.firebaseio.com/data.json', this.recipes, {
            // Can use interceptor instead for passing this params with every request
            // params: new HttpParams().set('auth', token) 
        // });

        //Using interceptors
        return this.httpClient.put('https://ng-recipe-book-f6ca6.firebaseio.com/data.json', this.recipes);
    }

    fetchFromDB(){
        let token = this.authService.getToken();
        
        // this.httpClient.get<Recipe[]>('https://ng-recipe-book-f6ca6.firebaseio.com/data.json', {
            // Can use interceptor instead for passing this params with every request
        //     observe: "body",
        //     responseType: "json",
        //     params: new HttpParams().set('auth', token)
        // }).subscribe((recipes)=>{
        //     this.recipes = recipes;
        //     this.recipesChanged.next(this.recipes.slice());
        // });

        //Using interceptors
        this.httpClient.get<Recipe[]>('https://ng-recipe-book-f6ca6.firebaseio.com/data.json').subscribe((recipes)=>{
            this.recipes = recipes;
            this.recipesChanged.next(this.recipes.slice());
        });
    }
}