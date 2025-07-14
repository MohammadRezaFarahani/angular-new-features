import { Component, model } from '@angular/core';

@Component({
  selector: 'app-child-componenet',
  imports: [],
  templateUrl: './child-componenet.html',
  styleUrl: './child-componenet.scss'
})
export class ChildComponenet {
    checked = model(false);

    toggle()
    {
      this.checked.set(!this.checked())
    }
}
