import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: "[highlight]"
})
export class HighlightDirective{
    constructor(elementRef: ElementRef){
        elementRef.nativeElement.style.background = "transparent";
    }
}