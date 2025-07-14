import { Component, computed, effect, OnInit, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.scss'
})
export class Signals  {
  public counter:WritableSignal<number> =  signal(0);
  
  doubleCount = computed(() => this.counter() * 2);


  users = signal<number[]>([]);

  constructor(){
    
    effect(()=>{
        console.log( `the counter changed new value is : ${this.counter()}`);

        this.users.update(old => [...old,1]);
    })

  }


  plus()
  {
    this.counter.set(this.counter()+1);
  }



}
