(function(e){"object"===typeof exports&&"undefined"!==typeof module?module.exports=e():"function"===typeof define&&define.amd?define([],e):("undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:this).fit=e()})(function(){return function(){function e(h,d,f){function g(a,c){if(!d[a]){if(!h[a]){var k="function"==typeof require&&require;if(!c&&k)return k(a,!0);if(b)return b(a,!0);c=Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c;}c=
d[a]={exports:{}};h[a][0].call(c.exports,function(b){return g(h[a][1][b]||b)},c,c.exports,e,h,d,f)}return d[a].exports}for(var b="function"==typeof require&&require,a=0;a<f.length;a++)g(f[a]);return g}return e}()({1:[function(e,h,d){function f(b){if(!b.element.parentElement)return null;var a=window.getComputedStyle(b.element.parentElement),d=parseInt(a.getPropertyValue("height"));a=Math.max(0,parseInt(a.getPropertyValue("width")));var c=window.getComputedStyle(b.element),e=parseInt(c.getPropertyValue("padding-top")),
f=parseInt(c.getPropertyValue("padding-bottom")),g=parseInt(c.getPropertyValue("padding-right"));c=parseInt(c.getPropertyValue("padding-left"));return{cols:Math.floor((a-(g+c)-b._core.viewport.scrollBarWidth)/b._core._renderCoordinator.dimensions.actualCellWidth),rows:Math.floor((d-(e+f))/b._core._renderCoordinator.dimensions.actualCellHeight)}}function g(b){var a=f(b);!a||b.rows===a.rows&&b.cols===a.cols||(b._core._renderCoordinator.clear(),b.resize(a.cols,a.rows))}Object.defineProperty(d,"__esModule",
{value:!0});d.proposeGeometry=f;d.fit=g;d.apply=function(b){b.prototype.proposeGeometry=function(){return f(this)};b.prototype.fit=function(){g(this)}}},{}]},{},[1])(1)});
