import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustome]'
})
export class CustomeDirective {

  constructor(private el: ElementRef) {
    // this.el.nativeElement.style.backgroundColor = 'Red';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  highlight(color: string): void {
    this.el.nativeElement.style.backgroundColor = color;
  }

  // @Input() set appUnless(condition: boolean) {
  //   if (!condition) {
  //     this.viewContainer.createEmbeddedView(this.tl);
  //   } else if (condition) {
  //     this.viewContainer.clear();
  //   }
  // }

}
