import {Component,OnInit} from  "angular2/core";
import { RouteConfig,ROUTER_DIRECTIVES   } from 'angular2/router';
import { ItemDetailComponent}from '../app/item-detail.component';
import { IndexComponent}from '../app/index.component';
import {CityService} from '../app/city.service';
import  {LoginComponent} from '../app/login.component';
// if use selector:"app" ,it's not replace the app element, e.g:<app></app>
@Component({
    selector:"div[app]", // use it as a div has app attribute
    templateUrl:"../app/app.component.html",
    directives: [LoginComponent,ROUTER_DIRECTIVES],
    providers: [CityService],
})

@RouteConfig([
    {path: '/', name: 'Index',   component: IndexComponent,   useAsDefault: true },
    {path:"index",name:"Index",component:IndexComponent},
    {path:"item-detail/:code",name:"Detail",component:ItemDetailComponent}
])
export  class  AppComponent implements  OnInit{
    title:string = 'First App';
    isLogin:boolean=false;
    ngOnInit(){

    }

}