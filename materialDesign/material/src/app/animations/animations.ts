import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';

export const menuListButton = [
    trigger('menuListButton', [
        state('desplegar', style({ transform: 'rotate(180deg)' })),
        state('replegar', style({ transform: 'rotate(0deg)' })),
        transition('desplegar <=> replegar', [
            animate('700ms ease-in')
        ])
    ])
];
