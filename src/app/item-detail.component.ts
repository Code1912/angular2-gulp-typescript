/**
 * Created by Code1912 on 2016/8/4.
 */
import {Component,OnInit} from  "angular2/core";
import {Router,RouteParams} from 'angular2/router';
import {City} from '../app/city'
import {CityService} from '../app/city.service';
@Component({
    selector:"detail",
    templateUrl:"../app/item-detail.component.html"
})
export  class ItemDetailComponent implements OnInit {
    city:City;

    constructor(private _cityService:CityService, private _routeParams:RouteParams) {
    }

    ngOnInit() {
        var code = parseInt(this._routeParams.get("code"));
        this.city=  this._cityService.getCity(code)
    }

    goBack() {
        window.history.back();
    }
}