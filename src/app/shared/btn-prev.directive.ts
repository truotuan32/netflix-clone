import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBtnPrev]'
})
export class BtnPrevDirective {

  constructor(private readonly el:ElementRef) { }

  @HostListener('click')
  prevFunc(){
    let elm = this.el.nativeElement.parentElement.children[2].children[0];
    let item = elm.getElementsByClassName('slider');
    elm.prepend(item[item.length - 1])
  }
}
