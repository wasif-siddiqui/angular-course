import { Directive, HostBinding, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[highlighted]',
  exportAs: 'hl'
})
export class HighlightedDirective {

  @Input('highlighted')
  isHighlighted=false;

  @Output()
  toggleHighlight = new EventEmitter();

  constructor() { 
    console.log('Directive Created.. ');
  }

  @HostBinding('class.highlighted')
  get cssClasses() {
    return this.isHighlighted;
  }

  @HostListener('mouseover')
  mouseover() {
    this.isHighlighted = true;
    this.toggleHighlight.emit(String(this.isHighlighted));
  }

  @HostListener('mouseleave')
  mouseleave () {
    this.isHighlighted = false;
    this.toggleHighlight.emit(String(this.isHighlighted));
  }

  toggle() {
    this.isHighlighted = !this.isHighlighted;
    this.toggleHighlight.emit(String(this.isHighlighted));
  }

}
