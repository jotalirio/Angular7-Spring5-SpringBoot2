import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Welcome to Angular';
  public course: string = "Angular with Springframework 5 and SpringBoot 2";
  public teacher: string = "Jose Javier Lirio";
}
