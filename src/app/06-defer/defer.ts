import { Component, signal } from '@angular/core';
import { ChildView } from './child-view/child-view';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-defer',
  imports: [ChildView, CommonModule],
  templateUrl: './defer.html',
  styleUrl: './defer.scss'
})
export class Defer {

  public readyToLoad = signal(false);

  ngOnInit() {
    setTimeout(() => this.readyToLoad.set(true), 5000);
  }
}
