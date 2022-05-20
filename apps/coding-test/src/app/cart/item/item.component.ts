import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html'
})
export class ItemComponent {
    @Input() item: string
}