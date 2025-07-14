import { Component, DestroyRef, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-destroy-ref',
  imports: [],
  templateUrl: './destroy-ref.html',
  styleUrl: './destroy-ref.scss'
})
export class DestroyRefComponent implements OnInit {

  private sub?:Subscription;

  constructor(private destroyRef:DestroyRef){
      this.sub = interval(2000).subscribe((time)=>{ console.log(time) });

      interval(1000)
      .pipe(takeUntilDestroyed())
      .subscribe((time)=>{
        console.log(time);
      });
    
  }

  ngOnInit(): void {
    
      this.destroyRef.onDestroy(()=>{
        this.sub?.unsubscribe();
      });

  }


  


    }
