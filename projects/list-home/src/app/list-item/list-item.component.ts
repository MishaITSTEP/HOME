import { Component, Input, Output, input, output, EventEmitter } from '@angular/core';
import { IListItem } from '../Interfaces/ilist-item';
import { DatePipe, LowerCasePipe, NgIf, UpperCasePipe } from '@angular/common';

@Component({
    selector: 'app-list-item',
    standalone: true,
    imports: [DatePipe, NgIf],
    templateUrl: "list-item.html",
    styleUrl: "list-item.css"
})
export class ListItemComponent {
    @Input() index: number = -1;
    @Input() item: IListItem =
        {
            important: false,
            done: false,
            date: null,
            task: "Empty"
        };
    @Output() removeItemEvent = new EventEmitter<number>();
    item_remoteItem(i: number) {
        this.removeItemEvent.emit(i);
    }
}
