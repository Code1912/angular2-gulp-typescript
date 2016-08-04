/**
 * Created by Code1912 on 2016/8/4.
 */
//import {Injectable} from 'angular2/core';
import { Http } from 'angular2/http';
import {City} from '../app/city'
import 'rxjs/add/operator/toPromise';

export class CityService {
    constructor(private http: Http) { }
    cityList:Array<City> = [
        new City("Beijing", 1),
        new City("Shanghai", 2),
        new City("New York", 3),
        new City("Chengdu", 4),
        new City("111", 5),
        new City("22", 6),
        new City("33", 7),
        new City("44", 8),
        new City("55", 9),
        new City("66", 10),
        new City("77", 11),
        new City("88", 12),
        new City("99", 13),
        new City("10", 14),
        new City("11", 15),

    ];
    getCities() {
        return Promise.resolve(this.cityList);
       // return   this.cityList;
    }
    getCity(code: number) {
        return this.cityList.filter(h => h.code === code)[0];
    }
}
