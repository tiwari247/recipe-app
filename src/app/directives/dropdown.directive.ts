import { Directive, ElementRef, HostListener, HostBinding, Renderer2 } from '@angular/core';

@Directive({
    selector: "[appDropDown]"
})
export class DropDownDirective{
    constructor(private element: ElementRef, private renderer: Renderer2){

    }

    @HostListener("click") mouseover(){
        console.log("entered");
        this.renderer.addClass(this.element.nativeElement, "open");
    }
}