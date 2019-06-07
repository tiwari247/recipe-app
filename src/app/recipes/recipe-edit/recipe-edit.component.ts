import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/Forms';
// import { INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS } from '@angular/platform-browser-dynamic/src/platform_providers';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number; 
  isEdit = false;
  formGroup: FormGroup;

  constructor(private route:ActivatedRoute, private recipeService: RecipeService, private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params)=>{
      this.id = +params["id"];
      this.isEdit = params['id'] !=null;
      console.log(this.isEdit);
      this.initForm();
    });   
  }
  
  private initForm(){
    let recipeName = '';
    let imgPath = '';
    let description = '';
    let recipeIngredient = new FormArray([]);
    const recipe = this.recipeService.getRecipe(this.id);
    if(this.isEdit){
      recipeName = recipe.name;
      imgPath = recipe.imgPath;
      description = recipe.description;
      if(recipe['ingredients']){
        for(let ingredient of recipe.ingredients){
          recipeIngredient.push(new FormGroup({
            name: new FormControl(ingredient.name, Validators.required),
            amount: new FormControl(ingredient.amount, [Validators.required, Validators.pattern('[0-9]*')])
          }));
        }
      }
    }

    this.formGroup = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      imgPath: new FormControl(imgPath, Validators.required),
      description: new FormControl(description, Validators.required),
      ingredients: recipeIngredient
    });
  }

  onSubmit(){
    let name = this.formGroup.value['name'];
    let imagePath = this.formGroup.value['imgPath'];
    let description = this.formGroup.value['description'];
    let ingredients = this.formGroup.value['ingredients'];
    let rec = new Recipe(name, description, imagePath, ingredients);
    if(this.isEdit){
      console.log(this.formGroup.get('name').value);
      this.recipeService.updateRecipe(this.id, rec);
    }else{
      this.recipeService.saveRecipe(rec);
    }
    this.router.navigate(['/recipes']);
  }

  onCancel(){
    this.router.navigate(['/recipes']);
  }

  onAddIngredient(){
    (<FormArray>this.formGroup.get('ingredients')).push(new FormGroup({
      name: new FormControl(null, Validators.required),
      amount: new FormControl(null, [Validators.required, Validators.pattern('[0-9]*')])
    }));
  }
}