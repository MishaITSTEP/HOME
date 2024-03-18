import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessagesComponent } from "../../messages/messages.component";
import { HeroesComponent } from '../../heroes/heroes.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.html',
    styleUrl: './app.css',
    imports: [HeroesComponent, MessagesComponent]
})
export class AppComponent {
  title = 'Heroes';

}
