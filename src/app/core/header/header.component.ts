import { Component, EventEmitter, Output } from "@angular/core";
import { RecipeService } from '../../recipes/recipe.service';
import { AuthService } from '../../auth/auth.service';

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html"
})
export class HeaderComponent{
    @Output() activeLink = new EventEmitter<boolean>();

    constructor(private recipeService: RecipeService, private authService:AuthService){}

    onLinkClick(value: boolean){
        console.log("header comp : "+value);
        this.activeLink.emit(value);
    }

    onSaveData(){
        this.recipeService.saveToDB().subscribe((response)=>{
            console.log(response);
        });
    }

    onFetchData(){
        // this.recipeService.fetchFromDB().subscribe((response)=>{
        //     console.log(response);
        // });
        this.recipeService.fetchFromDB();
    }

    onLogout(){
        this.authService.logout();
    }

}