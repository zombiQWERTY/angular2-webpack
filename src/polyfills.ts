import 'es6-shim';
import 'reflect-metadata';
require('zone.js/dist/zone');

import 'ts-helpers';

const isBuild = process.env.ENV === 'build';

if (!isBuild) {
  Error['stackTraceLimit'] = Infinity;
  require('zone.js/dist/long-stack-trace-zone');
}
