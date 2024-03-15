import { Component, Input } from '@angular/core';
import { IListItem } from '../ilist-item';

@Component({
    selector: 'app-list-item',
    standalone: true,
    imports: [],
    templateUrl: "list-item.html",
    styleUrl: "list-item.css"
})
export class ListItemComponent {
    @Input() task: IListItem =
        {
            important: false,
            done: false,
            date: null,
            task: "Empty"
        };
}
