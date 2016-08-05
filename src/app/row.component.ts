/**
 * Created by Code1912 on 2016/8/5.
 */
import {Component,OnInit,Input } from  "angular2/core";
import {Router,RouteParams} from 'angular2/router';
import {City} from '../app/city'
import {CityService} from '../app/city.service';
@Component({
    selector:"li[row]",
    templateUrl:"../app/row.component.html",

})
export  class RowComponent implements OnInit {
    @Input() city: City;

    constructor() {
        this.city= new City();
    }

    ngOnInit() {

    }

}