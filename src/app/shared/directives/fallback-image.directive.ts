import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appFallbackImage]'
})
export class FallbackImageDirective {
  @Input()
  appFallbackImage = '../../assets/images/no-image.png';

  @HostBinding('src')
  @Input()
  src!: string;

  constructor() {}

  @HostListener('error')
  onError(): void {
    this.src = this.appFallbackImage;
  }
}
