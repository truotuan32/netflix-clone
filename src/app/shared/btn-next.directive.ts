import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBtnNext]'
})
export class BtnNextDirective {

  constructor(private readonly el: ElementRef) {
  }

  @HostListener('click')
  nextFunc(){
    let elm = this.el.nativeElement.parentElement.children[2].children[0];
    let item = elm.getElementsByClassName('slider');
    // console.log(item[0])
    elm.append(item[0])
  }

}
