import { Component, Input, input } from '@angular/core';
import DummyService from './services/dummy-service';

@Component({
  selector: 'app-router-input',
  imports: [],
  templateUrl: './router-input.html',
  styleUrl: './router-input.scss'
})
export class RouterInput {

  constructor(private serivce:DummyService)
  {
    console.log(serivce)
  }

     p = input<string>();
    q = input<string>();
    data = input<{data:string}>();
}
