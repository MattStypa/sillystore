module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t){e.exports=require("react")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(r(0));t.default=n.default.createContext({})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setStore=t.Provider=t.connect=void 0;var n=i(r(3)),o=r(6),u=i(o);function i(e){return e&&e.__esModule?e:{default:e}}t.connect=n.default,t.Provider=u.default,t.setStore=o.setStore},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(r(0)),o=i(r(1)),u=i(r(4));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t){return function(r){return n.default.createElement(o.default.Consumer,null,function(o){return n.default.createElement(u.default,{component:e,inherit:r,store:o,watched:t})})}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=f(r(0)),i=r(5),a=f(i);function f(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),n=r.props.watched;return Array.isArray(n)||(n=[n]),r.state={props:{},watched:n},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.default.Component),o(t,[{key:"shouldComponentUpdate",value:function(e){if(!(0,a.default)(this.props.inherit,e.inherit))return!0;for(var t=0;t<this.state.watched.length;t++)if(!(0,i.is)(this.props.store[this.state.watched[t]],e.store[this.state.watched[t]]))return!0;return!1}},{key:"render",value:function(){return u.default.createElement(this.props.component,n({store:this.state.props},this.props.inherit))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var r={};return t.watched.forEach(function(t){return r[t]=e.store[t]}),{props:r}}}]),t}();t.default=c},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.is=u,t.default=function(e,t){if(u(e,t))return!0;if("object"!==(void 0===e?"undefined":n(e))||null===e||"object"!==(void 0===t?"undefined":n(t))||null===t)return!1;var r=Object.keys(e),i=Object.keys(t);if(r.length!==i.length)return!1;for(var a=0;a<r.length;a++)if(!o.call(t,r[a])||!u(e[r[a]],t[r[a]]))return!1;return!0};var o=Object.prototype.hasOwnProperty;function u(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setStore=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=a(r(0)),i=a(r(1));function a(e){return e&&e.__esModule?e:{default:e}}var f=function(){},c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state=n({},e.store),f=function(){return r.setState.apply(r,arguments)},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.default.PureComponent),o(t,[{key:"render",value:function(){return u.default.createElement(i.default.Provider,{value:this.state},u.default.Children.only(this.props.children))}}]),t}();t.default=c,t.setStore=function(){return f.apply(void 0,arguments)}}]);