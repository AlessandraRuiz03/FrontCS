
import { Component } from '@angular/core';

import { WebsocketService } from '../app/services/websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Proyecto';
  ejemplo = 'alessa';

  constructor(public wsService: WebsocketService){


  }
}
