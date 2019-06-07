import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shoppinglist.service';
import { NgForm } from '@angular/Forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  // @ViewChild("nameInput") name:ElementRef;
  // @ViewChild("amountInput") amount:ElementRef;
  @ViewChild('f') submittedForm:NgForm;
  // @Output() ingredient = new EventEmitter<Ingredient>();
  subscription: Subscription;
  editableIndex:number;
  editMode = false;
  editableIngredient: Ingredient;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.editIngredient.subscribe((index: number)=>{
      this.editableIndex = index;
      this.editMode = true;
      this.editableIngredient = this.shoppingListService.getIngredient(index);
      this.submittedForm.setValue({
        nameInput : this.editableIngredient.name,
        amountInput : this.editableIngredient.amount
      });
      console.log(this.editableIndex + " " + this.editMode);
    });
  }

  onClear(){
    this.submittedForm.reset();
    this.editMode = false;
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  // addToIngredients(){
  //   // this.ingredient.emit(new Ingredient(this.name.nativeElement.value, this.amount.nativeElement.value));
  //   // this.shoppingListService.receiveIngredient.emit(new Ingredient(this.name.nativeElement.value, this.amount.nativeElement.value));
  //   this.shoppingListService.addToIngredients(new Ingredient(this.name.nativeElement.value, this.amount.nativeElement.value));
  // }

  onAddItem(form: NgForm){
    let newIngredient = new Ingredient(form.value.nameInput, form.value.amountInput);
    if(this.editMode){
      this.shoppingListService.onEditIngredient(this.editableIndex, newIngredient);
    }else{
      this.shoppingListService.addToIngredients(newIngredient);
    }
    this.editMode = false;
    form.reset();    
  }

  onDelete(){
    // this.shoppingListService.deleteIngredient(this.editableIngredient);
    this.shoppingListService.deleteIngredient2(this.editableIndex);
    this.onClear();
  }

}
