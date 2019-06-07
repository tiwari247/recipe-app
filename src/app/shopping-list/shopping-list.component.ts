import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shoppinglist.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients:Ingredient[] = [];
  subscription:Subscription;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    // this.shoppingListService.receiveIngredient.subscribe((ingredient:Ingredient)=>{
    //   this.ingredients.push(ingredient);
    // });
    this.subscription = this.shoppingListService.ingredientsChanged.subscribe((ingredients: Ingredient[])=>{
      this.ingredients = ingredients;
    });
  }

  onEdit(index: number){
    console.log(index);
    this.shoppingListService.editIngredient.next(index);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  // addIngredient(data: Ingredient){
  //   this.ingredients.push(data);
  // }

}
