import { NgModule } from '@angular/core';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeComponent } from './recipe.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RecipesRoutingModule } from './recipes-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from '../auth/auth-guard.service';


@NgModule({
    declarations: [
        RecipeComponent,
        RecipeStartComponent,
        RecipeListComponent,
        RecipeEditComponent,
        RecipeItemComponent,
        RecipeDetailComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RecipesRoutingModule,
        SharedModule
    ],
    providers: [AuthGuard]
})

export class RecipesModule{}