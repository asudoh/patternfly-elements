!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r(require("../pfelement/pfelement.umd")):"function"==typeof define&&define.amd?define(["../pfelement/pfelement.umd"],r):e.PfeCard=r(e.PFElement)}(this,function(r){"use strict";r=r&&r.hasOwnProperty("default")?r.default:r;var t=function(){function o(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,r,t){return r&&o(e.prototype,r),t&&o(e,t),e}}();Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var r=this;do{if(r.matches(e))return r;r=r.parentElement||r.parentNode}while(null!==r&&1===r.nodeType);return null}),Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(e,r){if(null==this)throw new TypeError('"this" is null or not defined');var t=Object(this),o=t.length>>>0;if(0===o)return!1;var c,a,n=0|r,f=Math.max(0<=n?n:o-Math.abs(n),0);for(;f<o;){if((c=t[f])===(a=e)||"number"==typeof c&&"number"==typeof a&&isNaN(c)&&isNaN(a))return!0;f++}return!1}});var e=function(e){function o(){return function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,o),function(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!=typeof r&&"function"!=typeof r?e:r}(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,o,{type:o.PfeType}))}return function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}(o,r),t(o,[{key:"html",get:function(){return'<style>:host {\n  --pfe-card--padding:                          calc(var(--pfe-theme--container-spacer, 1rem) * 2);\n  --pfe-card_header--size:                      var(--pfe-theme--font-size--heading--gamma, 21px);\n  --pfe-card--bg:                               var(--pfe-theme--color--surface--base, #dfdfdf);\n  --pfe-broadcasted--color--text:               var(--pfe-theme--color--surface--base--text, #333);\n  --pfe-broadcasted--color--ui-link:            var(--pfe-theme--color--surface--base--link, #00538c);\n  --pfe-broadcasted--color--ui-link--visited:   var(--pfe-theme--color--surface--base--link--visited, #7551a6);\n  --pfe-broadcasted--color--ui-link--hover:     var(--pfe-theme--color--surface--base--link--hover, #00305b);\n  --pfe-broadcasted--color--ui-link--focus:     var(--pfe-theme--color--surface--base--link--focus, #00305b);\n  display: flex;\n  flex-direction: column;\n  justify-items: flex-start;\n  padding: var(--pfe-card--padding);\n  border: var(--pfe-theme--surface--border-width, 1px) var(--pfe-theme--surface--border-style, solid) transparent;\n  border-radius: var(--pfe-theme--surface--border-radius, 0);\n  background: var(--pfe-card--bg);\n  color: var(--pfe-broadcasted--color--text); }\n\na {\n  color: var(--pfe-broadcasted--color--ui-link); }\n\na:visited {\n  color: var(--pfe-broadcasted--color--ui-link--visited); }\n\na:hover {\n  color: var(--pfe-broadcasted--color--ui-link--hover); }\n\na:focus {\n  color: var(--pfe-broadcasted--color--ui-link--focus); }\n\n:host([color="dark"]) {\n  --pfe-card--bg:                               var(--pfe-theme--color--surface--darker, #464646);\n  --pfe-broadcasted--color--text:               var(--pfe-theme--color--surface--darker--text, #fff);\n  --pfe-broadcasted--color--ui-link:            var(--pfe-theme--color--surface--darker--link, #99ccff);\n  --pfe-broadcasted--color--ui-link--visited:   var(--pfe-theme--color--surface--darker--link--visited, #b38cd9);\n  --pfe-broadcasted--color--ui-link--hover:     var(--pfe-theme--color--surface--darker--link--hover, #cce6ff);\n  --pfe-broadcasted--color--ui-link--focus:     var(--pfe-theme--color--surface--darker--link--focus, #cce6ff); }\n\n:host([color="darkest"]) {\n  --pfe-card--bg:                               var(--pfe-theme--color--surface--darkest, #131313);\n  --pfe-broadcasted--color--text:               var(--pfe-theme--color--surface--darkest--text, #fff);\n  --pfe-broadcasted--color--ui-link:            var(--pfe-theme--color--surface--darkest--link, #99ccff);\n  --pfe-broadcasted--color--ui-link--visited:   var(--pfe-theme--color--surface--darkest--link--visited, #b38cd9);\n  --pfe-broadcasted--color--ui-link--hover:     var(--pfe-theme--color--surface--darkest--link--hover, #cce6ff);\n  --pfe-broadcasted--color--ui-link--focus:     var(--pfe-theme--color--surface--darkest--link--focus, #cce6ff); }\n\n:host([color="light"]) {\n  --pfe-card--bg:                               var(--pfe-theme--color--surface--lighter, #ececec);\n  --pfe-broadcasted--color--text:               var(--pfe-theme--color--surface--lighter--text, #333);\n  --pfe-broadcasted--color--ui-link:            var(--pfe-theme--color--surface--lighter--link, #06c);\n  --pfe-broadcasted--color--ui-link--visited:   var(--pfe-theme--color--surface--lighter--link--visited, rebeccapurple);\n  --pfe-broadcasted--color--ui-link--hover:     var(--pfe-theme--color--surface--lighter--link--hover, #003366);\n  --pfe-broadcasted--color--ui-link--focus:     var(--pfe-theme--color--surface--lighter--link--focus, #003366); }\n\n:host([color="lightest"]) {\n  --pfe-card--bg:                               var(--pfe-theme--color--surface--lightest, #fff);\n  --pfe-broadcasted--color--text:               var(--pfe-theme--color--surface--lightest--text, #333);\n  --pfe-broadcasted--color--ui-link:            var(--pfe-theme--color--surface--lightest--link, #06c);\n  --pfe-broadcasted--color--ui-link--visited:   var(--pfe-theme--color--surface--lightest--link--visited, rebeccapurple);\n  --pfe-broadcasted--color--ui-link--hover:     var(--pfe-theme--color--surface--lightest--link--hover, #003366);\n  --pfe-broadcasted--color--ui-link--focus:     var(--pfe-theme--color--surface--lightest--link--focus, #003366); }\n\n:host([color="complement"]) {\n  --pfe-card--bg:                               var(--pfe-theme--color--surface--complement, #0477a4);\n  --pfe-broadcasted--color--text:               var(--pfe-theme--color--surface--complement--text, #fff);\n  --pfe-broadcasted--color--ui-link:            var(--pfe-theme--color--surface--complement--link, #99ccff);\n  --pfe-broadcasted--color--ui-link--visited:   var(--pfe-theme--color--surface--complement--link--visited, #b38cd9);\n  --pfe-broadcasted--color--ui-link--hover:     var(--pfe-theme--color--surface--complement--link--hover, #cce6ff);\n  --pfe-broadcasted--color--ui-link--focus:     var(--pfe-theme--color--surface--complement--link--focus, #cce6ff); }\n\n:host([color="accent"]) {\n  --pfe-card--bg:                               var(--pfe-theme--color--surface--accent, #fe460d);\n  --pfe-broadcasted--color--text:               var(--pfe-theme--color--surface--accent--text, #fff);\n  --pfe-broadcasted--color--ui-link:            var(--pfe-theme--color--surface--accent--link, #99ccff);\n  --pfe-broadcasted--color--ui-link--visited:   var(--pfe-theme--color--surface--accent--link--visited, #b38cd9);\n  --pfe-broadcasted--color--ui-link--hover:     var(--pfe-theme--color--surface--accent--link--hover, #cce6ff);\n  --pfe-broadcasted--color--ui-link--focus:     var(--pfe-theme--color--surface--accent--link--focus, #cce6ff); }\n\n:host([size="small"]) {\n  --pfe-card--padding:        var(--pfe-theme--container-spacer, 1rem); }\n\n.pfe-card__header,\n.pfe-card__body,\n.pfe-card__footer {\n  display: block;\n  margin: 0; }\n\n.pfe-card__header::slotted(h1:first-child),\n.pfe-card__header::slotted(h2:first-child),\n.pfe-card__header::slotted(h3:first-child),\n.pfe-card__header::slotted(h4:first-child),\n.pfe-card__header::slotted(h5:first-child),\n.pfe-card__header::slotted(h6:first-child) {\n  margin-top: 0 !important;\n  font-size: var(--pfe-card_header--size); }\n\n.pfe-card__body::slotted(*:nth-child(2)) {\n  margin-top: 0 !important; }\n\n.pfe-card__footer {\n  margin-top: auto;\n  justify-self: flex-end; }</style>\n<slot class="pfe-card__header" name="header"></slot>\n<slot class="pfe-card__body"></slot>\n<slot class="pfe-card__footer" name="footer"></slot>'}},{key:"styleUrl",get:function(){return"pfe-card.scss"}},{key:"templateUrl",get:function(){return"pfe-card.html"}}],[{key:"tag",get:function(){return"pfe-card"}},{key:"observedAttributes",get:function(){return["color"]}},{key:"PfeType",get:function(){return r.PfeTypes.Container}}]),t(o,[{key:"attributeChangedCallback",value:function(e,r,t){(function e(r,t,o){null===r&&(r=Function.prototype);var c=Object.getOwnPropertyDescriptor(r,t);if(void 0===c){var a=Object.getPrototypeOf(r);return null===a?void 0:e(a,t,o)}if("value"in c)return c.value;var n=c.get;return void 0!==n?n.call(o):void 0})(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"attributeChangedCallback",this).call(this,e,r,t),"color"===e&&this._colorChanged(e,r,t)}},{key:"_colorChanged",value:function(e,r,t){this._updateContext(t)}},{key:"_updateContext",value:function(e){var t=this;["darkest","dark","complement","accent"].includes(e)&&["pfe-cta"].forEach(function(e){[].concat(function(e){if(Array.isArray(e)){for(var r=0,t=Array(e.length);r<e.length;r++)t[r]=e[r];return t}return Array.from(e)}(t.querySelectorAll(""+e))).forEach(function(e){var r=e.closest("[pfe-type=container]");r!==t&&null!==r||e.setAttribute("on","dark")})})}}]),o}();return r.create(e),e});
//# sourceMappingURL=pfe-card.umd.js.map
