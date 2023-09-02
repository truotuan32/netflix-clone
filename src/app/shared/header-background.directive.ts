import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core'

@Directive({
    selector: '[headerBackground]'
})
export class HeaderBackgroundDerictive {
    constructor(private el: ElementRef, private readonly renderer: Renderer2) { }

    @HostListener('window:scroll', ['$event'])
    scrollFunc(event: Event) {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (scrollTop > 10) {
            this.renderer.setStyle(this.el.nativeElement, 'background-color', '#141414');
            this.renderer.setStyle(this.el.nativeElement, 'background-image', 'none');
        } else {
            this.renderer.setStyle(this.el.nativeElement, 'background-color', 'transparent');
            this.renderer.setStyle(this.el.nativeElement, 'background-image', 'linear-gradient(180deg, rgba(0, 0, 0, .7) 10%, transparent)');
        }
    }
}