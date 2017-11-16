// 1. tree shaking need to use es6 import and export, because tree shaking cannot guarantee
// the side-effect of dynamic import/export
//     - import * as SomeFunction from 'some-lib'; > still works

// 2. Dead code eliminate - always false scope << when use uglify

// var useDependency = require('./notUseDependency').getUseFunction();
import * as NotUse from './notUseDependency';


var testString = 'test-string';
var F = false;
if(F){
  testString = 'deleted...s';
}
console.log(testString, NotUse.getUseFunction());