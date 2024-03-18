import { Component, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IListItem, ITEMS } from './Interfaces/ilist-item';
import { ListItemComponent } from './list-item/list-item.component';
import { FormsModule } from '@angular/forms';
import { IfElsePipePipe } from '../../if-else-pipe.pipe';
import { NgIf } from '@angular/common';
import { AddItemComponent } from "./add-item/add-item.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: "app.html",
    styleUrl: "app.css",
    imports: [RouterOutlet, ListItemComponent, FormsModule, IfElsePipePipe, NgIf, AddItemComponent]
})
export class AppComponent {
    title = 'List_Home';
    item_: IListItem = {
        done: false,
        important: false,
        task: '',
        date: null
    }
    List: IListItem[] = ITEMS;
    list: IListItem[] = [...this.List];

    _tag!: string;
    _Up: boolean = false;
    private _find(a: any, tag: string) {
        let res = Object.entries(a).find(x => x[0] == tag);
        res?.push(typeof res[1]);
        return res;
    }
    constructor() {
        // this.load();
        // this.save();
    }
    load() {
        var res = localStorage.getItem('List');
        if (res) this.list = [...this.List = (JSON.parse(res) as IListItem[])];
    }
    save() {
        localStorage.setItem('List', JSON.stringify(this.List));
    }
    searchWord!: string;
    find_by_word() {
        this.list = [...this.List];
        var s = this.searchWord.toLowerCase();
        this.list = this.list.filter(task => task.task.toLowerCase().includes(s));
    }
    reset() {
        this.list = [...this.List];
        this.searchWord = '';
    }
    removeItem(index: number) {
        var val = this.list[index].task;
        var Index = this.List.findIndex(item => item.task == val);
        this.list.splice(index, 1);
        this.List.splice(Index, 1);
        this.save();
    }
    addItem(item: IListItem): void {
        this.list = [item, ...this.list]
        this.save();
    }

    sort_by(tag: string) {
        // this.list = [...this.list];
        var params;
        if (params = this._find(this.item_, tag)) {
            if (tag == this._tag) {
                this._Up = !this._Up;
            } else {
                this._tag = tag;
                this._Up = false;
            }
            switch (tag) {
                case "task":
                    this.list = this.list.sort((a1, a2) => a1.task.localeCompare(a2.task));
                    break;
                case "date":

                    console.log(1);
                    this.list = this.list.sort((a1, a2) =>
                        (a1.date == null && a2.date == null) ? 0 :
                            a1.date == null ? 1 :
                                a2.date == null ? -1 :
                                    a1.date.getTime() - a2.date.getTime());
                    break;
                case "done":
                case "important":
                    this.list = this.list.sort((a1, a2) =>
                        (a1[tag] && !a2[tag]) ? -1 :
                            (!a1[tag] && a2[tag]) ? 1 :
                                0);
                    break;
                default:
                    break;
            }

            if (tag != null && this._Up && tag != 'none')
                this.list = this.list.reverse();
            else this._Up = false;
        }
        else {
            this._tag = '';
            this.list = [...this.List.filter(x => this.list.includes(x))];
        }
    }
}
