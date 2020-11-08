import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appCreationDate]'
})
export class CreationDateDirective implements OnInit {
  @Input() creationDate: string;

  constructor(private render: Renderer2, private elementRef: ElementRef) {}

  public ngOnInit(): void {
    const date = new Date(this.creationDate)
    const twoWeeksAgoDate = new Date().setDate(new Date().getDate() - 14);
    const currentDate = new Date().getTime();
    if (date.getTime() > twoWeeksAgoDate) {
      this.render.addClass(this.elementRef.nativeElement, 'border--green');
    }

    if (date.getTime() > currentDate) {
      this.render.addClass(this.elementRef.nativeElement, 'border--blue');
    }
  }
}
