import { Directive, OnInit, Inject, ElementRef } from "@angular/core";
import { JQ_Token } from "./jQuery.service";


@Directive({
  selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {
  private el: HTMLElement;

  constructor(ref: ElementRef, @Inject(JQ_Token) private $: any) {
    this.el = ref.nativeElement;
  }

  ngOnInit() {
    this.el.addEventListener('click', e => {
      this.$('#simple-modal').modal('show')
    });
  }
}
