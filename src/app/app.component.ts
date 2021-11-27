import { Component } from '@angular/core';

@Component({
  selector: 'sen-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'senior-project-front';
  display: boolean;

  toggleDisplay = () => {
    this.display = true;
  }

  onHideSidebar = (display: boolean) => {
    this.display = false;
  }

}
