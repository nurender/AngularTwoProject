import { Directive, ElementRef, OnInit, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective implements OnInit {

  @Input() bgColor;
  constructor(
    private Nur : ElementRef
  ) { 
    // Nur.nativeElement.style.backgroundColor = 'gold';
  }

  ngOnInit() {
    this.Nur.nativeElement.style.backgroundColor = this.bgColor;

  }
  @HostListener('mouseenter') onmouseenter(){
    this.Nur.nativeElement.style.backgroundColor = "gold"
  }
  @HostListener('mouseleave') onmouseleave(){

    this.Nur.nativeElement.style.backgroundColor = this.bgColor;
  }

}
