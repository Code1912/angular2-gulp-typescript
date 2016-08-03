/**
 * Created by Code1912 on 2016/8/1.
 */
/// <reference path="../node_modules/angular2/typings/browser.d.ts" />
import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './app/app.component';
import { enableProdMode } from 'angular2/core';
import {ROUTER_PROVIDERS} from 'angular2/router';
enableProdMode();
bootstrap(AppComponent,[ROUTER_PROVIDERS]);
