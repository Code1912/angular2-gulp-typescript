/**
 * Created by Code1912 on 2016/8/4.
 */
import {Component,OnInit} from  "angular2/core";
import {Router} from 'angular2/router';
import {City} from '../app/city'
import {CityService} from '../app/city.service';
import {RowComponent} from '../app/row.component'

//import {Injectable} from 'angular2/core';


@Component({
    selector:"index",
    templateUrl:"../app/index.component.html",
    directives:[RowComponent]
})
export  class IndexComponent  implements  OnInit {
    public cityList:Array<City>;
    _cityService:CityService;
    _router:Router;
    constructor(  cityService :CityService,  router:Router) {
        this._cityService=cityService;
        this._router=router;
    }

    ngOnInit() {
        this._cityService.getCities().then(p=>{
            this.cityList=p;
        })
        console.log("index")
    }
    showDetail(city:City){
      this._router.navigate(["Detail",{code:city.code}]);
    }
}