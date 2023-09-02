import { trigger, state, style, animate, transition } from '@angular/animations';

export const fadeInOutAnimation = trigger('fadeInOut', [
  state('start', style({ opacity: 0, transform: 'scale(0.5)' })),
  state('end', style({opacity: 1, transform: 'scale(1)'})),
  transition('start <=> end', [
    animate('5s'),
  ]),
]);