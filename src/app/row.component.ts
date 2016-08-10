/**
 * Created by Code1912 on 2016/8/5.
 */
import {Component,OnInit,Input ,AfterViewInit,Renderer,ViewChild,ElementRef} from  "angular2/core";
import {Router,RouteParams} from 'angular2/router';
import {City} from '../app/city'
import {CityService} from '../app/city.service';
@Component({
    selector:"li[row]",
    templateUrl:"../app/row.component.html",

})
export  class RowComponent implements OnInit,AfterViewInit {
    @Input() city: City;
    @ViewChild("divTitle") divTitle:ElementRef;
    @ViewChild("divCode") divCode:ElementRef;
    constructor(private  _renderer:Renderer) {
        this.city= new City();
    }

    ngOnInit() {

    }
    ngAfterViewInit(){
        console.log( this.divTitle.nativeElement.innerHTML ) ;
        let ele= this._renderer.createElement(this.divTitle.nativeElement,"button",null);
        ele.innerText=";sdfsdfsf"
       // console.log(this._renderer.selectRootElement(".item-title",null));
        console.log("row ngAfterViewInit");
        //this._renderer.invokeElementMethod(this.divCode.nativeElement,"click",null);
    }
    codeFocus(){
        console.log("code clicked")
    }

}