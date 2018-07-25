import { Directive, Input,ViewContainerRef,  TemplateRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appMyNgIf]'
})
export class MyNgIfDirective implements OnInit {

  constructor(
    private viewComtainerRef : ViewContainerRef ,private templateRef : TemplateRef<object>
  ) { }

  ngOnInit(){
    const isbool =true;
    if( isbool ){
      this.viewComtainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewComtainerRef.clear();
    }
  }

}
