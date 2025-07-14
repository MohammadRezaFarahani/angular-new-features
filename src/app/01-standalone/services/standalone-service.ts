import { Injectable, signal, WritableSignal } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable()
export class StandaloneService {
    private counter:WritableSignal<number>= signal(0);
    
    public getNumber(){
        return this.counter();
    }

    public serNumber(value:number)
    {
        this.counter.set(value);
    }

}