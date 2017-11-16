
export const getUseFunction = function() {
  return 'use dependency'+require('./moreDependency').useVar;
};
export const getNotUseFunction = function() {
  return 'not use dependency'+require('./moreDependency').useVar;
};