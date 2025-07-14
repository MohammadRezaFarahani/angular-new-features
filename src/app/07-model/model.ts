import { Component, signal } from '@angular/core';
import { ChildComponenet } from './child-componenet/child-componenet';

@Component({
  selector: 'app-model',
  imports: [ChildComponenet],
  templateUrl: './model.html',
  styleUrl: './model.scss'
})
export class Model {
  checked = signal(false);
}
