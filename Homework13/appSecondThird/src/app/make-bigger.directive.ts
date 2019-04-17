import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appMakeBigger]'
})
export class MakeBiggerDirective {
  sizeText:number = 24;
  constructor(private element:ElementRef,
    private render2: Renderer2) {
      render2.listen(element.nativeElement,"click",(ev)=>{
        this.sizeText+=15;
        let sizetex = this.sizeText+"px";
        this.render2.setStyle(this.element.nativeElement,"font-size",  sizetex);
      } )
     }
/*
     @HostListener('mouseover') 
     onMouseOver() {
         //this.render2.setAttribute(this.element.nativeElement, 'value', 'Namaste!');
     }
     @HostListener('mouseleave') 
     onMouseLeave() {
         //this.render2.removeAttribute(this.element.nativeElement, 'value');
     }
     @HostListener('click') 
      performTask() {
        this.render2.setStyle(this.element.nativeElement,"font-size","22px");
      }   
*/
}
