import {Component,Provider} from  "angular2/core";
import { RouteConfig,ROUTER_DIRECTIVES   } from 'angular2/router';
import { ItemDetailComponent}from '../app/item-detail.component';
import { IndexComponent}from '../app/index.component';
import {CityService} from '../app/city.service';
@Component({
    selector:"app",
    templateUrl:"../app/app.component.html",
    directives: [ROUTER_DIRECTIVES],
    providers: [CityService]
})

@RouteConfig([

    {path:"index",name:"Index",component:IndexComponent,useAsDefault:true},
    {path:"item-detail",name:"Detail",component:ItemDetailComponent}
])
export  class  AppComponent {
    title:string = 'First App';
}