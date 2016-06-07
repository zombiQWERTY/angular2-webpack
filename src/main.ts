import { enableProdMode }                         from '@angular/core';
import { bootstrap }                              from '@angular/platform-browser-dynamic';
import { ELEMENT_PROBE_PROVIDERS }                from '@angular/platform-browser';
import { ROUTER_PROVIDERS }                       from '@angular/router-deprecated';
import { HTTP_PROVIDERS }                         from '@angular/http';

import {AppComponent}                             from './app/app.component';

const ENV_PROVIDERS = [];

const isBuild = process.env.ENV === 'build';
if (isBuild)  { enableProdMode(); }
if (!isBuild) { ENV_PROVIDERS.push(ELEMENT_PROBE_PROVIDERS); }

bootstrap(AppComponent, [
  ...HTTP_PROVIDERS,
  ...ROUTER_PROVIDERS,
  ...ENV_PROVIDERS
])
  .catch(err => console.error(err));
