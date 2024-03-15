import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IListItem, ITEMS } from './ilist-item';
import { ListItemComponent } from './list-item/list-item.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, ListItemComponent],
    templateUrl: "app.html",
    styleUrl: "app.css"
})
export class AppComponent {
    title = 'List_Home';
    // properties
    list: IListItem[] = ITEMS;

    constructor() {
        console.log(this.list);
    }
}
