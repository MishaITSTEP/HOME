import { Component, EventEmitter, Input, OnInit, Output, input, output } from '@angular/core';
import { ListItemComponent } from '../list-item/list-item.component';
import { IListItem } from '../Interfaces/ilist-item';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  standalone: true,
  templateUrl: './add-item.html',
  styleUrl: './add-item.css',
  imports: [FormsModule, ListItemComponent, ReactiveFormsModule]
})
export class AddItemComponent implements OnInit {
  item!: IListItem;
  constructor(private fb: FormBuilder) { this.item = this.creationForm.value; }
  ngOnInit(): void { this.creationForm.valueChanges.subscribe(() => this.item = this.creationForm.value); }


  public creationForm: FormGroup = this.fb.group({
    done: new FormControl<boolean>(false),
    important: new FormControl<boolean>(true),
    task: new FormControl<string>(''),
    date: new FormControl<Date>(new Date())
  });
  //  new FormGroup({
  //   done: new FormControl<boolean>(false),
  //   important: new FormControl<boolean>(false),
  //   task: new FormControl<string>("a"),
  //   date: new FormControl<Date>(new Date())
  // });


  @Output() addItemEvent = new EventEmitter<IListItem>();
  create(): void {
    // check model is valid
    if (!this.creationForm.valid) {
      alert("Invalid data!");
      return;
    }

    // get created user
    const user = this.creationForm.value as IListItem;
    console.log(user);


    this.addItemEvent.emit(Object.assign({}, user) as IListItem);
  }
}
