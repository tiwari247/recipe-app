import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { ShoppingListService } from '../shopping-list/shoppinglist.service';
import { RecipeService } from '../recipes/recipe.service';
import { AuthService } from '../auth/auth.service';
import { AppRoutingModule } from '../app-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../shared/auth.interceptor';

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent
    ],
    providers: [ShoppingListService,RecipeService, AuthService, {provide: HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}]
})
export class CoreModule{

}