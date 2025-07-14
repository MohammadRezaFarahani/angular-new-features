import { Component, OnInit } from '@angular/core';
import { StandaloneService } from './services/standalone-service';
import { ChildComponent } from './child-component/child-component';

@Component({
  selector: 'app-standalone',
  imports: [ChildComponent],
  providers: [StandaloneService],
  templateUrl: './standalone.html',
  styleUrl: './standalone.scss'
})
export class Standalone implements OnInit {
  
  constructor(public service:StandaloneService){

  }

  ngOnInit(): void {
    
  }

}
