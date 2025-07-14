import { ActivatedRouteSnapshot, CanActivateChildFn, CanActivateFn, ResolveFn, RouterStateSnapshot, Routes } from '@angular/router';
import { of } from 'rxjs';
import DummyService from './03-router-input/services/dummy-service';


export const dataResolver: ResolveFn<{ data:string }> =
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
      return of({data:'resolved from resolver'});
};

const canActivateRoute: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  return of(true);
};

export const routes: Routes = [
    {
        path:'stand-alone',
        loadComponent: ()=> import('./01-standalone/standalone').then(l=>l.Standalone)
    },
    {
        path:'control-flow',
        loadComponent: ()=> import('./02-control-flow/control-flow').then(l=>l.ControlFlow)
    },
    {
        path:'router-input/:p',
        loadComponent:()=> import('./03-router-input/router-input').then(l=>l.RouterInput),
        providers:[DummyService],
        canActivate:[ canActivateRoute ],
        resolve:{ data:dataResolver }
    },
    {
        path:'destroy-ref',
        loadComponent:()=> import('./04-destroy-ref/destroy-ref').then(l=>l.DestroyRefComponent)
    },
    {
        path:'signals',
        loadComponent:()=> import('./05-signals/signals').then(l=>l.Signals)
    },
    {
        path:'defer',
        loadComponent:()=> import('./06-defer/defer').then(l=>l.Defer)
    }  
    ,{
        path:'model',
        loadComponent:()=> import('./07-model/model').then(l=>l.Model)
    }
];
