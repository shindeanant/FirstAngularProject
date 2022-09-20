import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Helloworld';
  imgUrl="../assets/BL_Logo.jpeg"

  ngOnInit(): void{
    this.title = "Hello from BridgeLabz. "
  }

}
