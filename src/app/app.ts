import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Standalone } from "./01-standalone/standalone";
import { ControlFlow } from './02-control-flow/control-flow';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ControlFlow, RouterLink,Standalone],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'angular-new-features';
}
