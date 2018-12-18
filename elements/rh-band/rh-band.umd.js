!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("../rhelement/rhelement.umd")):"function"==typeof define&&define.amd?define(["../rhelement/rhelement.umd"],e):r.RhBand=e(r.RHElement)}(this,function(e){"use strict";e=e&&e.hasOwnProperty("default")?e.default:e;var n=function(){function a(r,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(r,a.key,a)}}return function(r,e,n){return e&&a(r.prototype,e),n&&a(r,n),r}}(),o=function r(e,n,a){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var t=Object.getPrototypeOf(e);return null===t?void 0:r(t,n,a)}if("value"in o)return o.value;var d=o.get;return void 0!==d?d.call(a):void 0},r=function(r){function a(){return function(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),function(r,e){if(!r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?r:e}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,a))}return function(r,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(r,e):r.__proto__=e)}(a,e),n(a,[{key:"html",get:function(){return'\n<style>\n:host {\n  display: block;\n  --rh-band--padding__vertical:                 calc( var(--rh-theme--container-spacer, 1rem) * 4);\n  --rh-band--padding__horizontal:               calc( var(--rh-theme--container-spacer, 1rem) * 1);\n  --rh-band--padding:                         var(--rh-band--padding__vertical)  var(--rh-band--padding__horizontal);\n  --rh-band--backgroundColor:                 var(--rh-theme--color--surface--base, #dfdfdf);\n  --rh-band--backgroundPositionX:             center;\n  --rh-band--backgroundPositionY:             center;\n  --rh-band--borderColor:                     transparent;\n  --rh-band--borderTopWidth:                  var(--rh-theme--surface--border-width, 1px);\n  --rh-band--borderBottomWidth:               var(--rh-theme--surface--border-width, 1px);\n  --rh-band--borderStyle:                     var(--rh-theme--surface--border-style, solid);\n  --rh-band_header-title--color:             var(--rh-theme--color--ui-accent, #fe460d);\n  --rh-band_header--layout:                   1fr;\n  --rh-band_body--layout:                     1fr;\n  --rh-band_footer--layout:                   1fr;\n  --rh-band_aside--layout:                    300px;\n  --rh-band--gutter:                          calc(var(--rh-theme--container-spacer, 1rem) * 2);\n  --rh-broadcasted--color--text:              var(--rh-theme--color--surface--base--text, #333);\n  --rh-broadcasted--color--ui-link:           var(--rh-theme--color--surface--base--link, #00538c);\n  --rh-broadcasted--color--ui-link--visited:  var(--rh-theme--color--surface--base--link--visited, #7551a6);\n  --rh-broadcasted--color--ui-link--hover:    var(--rh-theme--color--surface--base--link--hover, #00305b);\n  --rh-broadcasted--color--ui-link--focus:    var(--rh-theme--color--surface--base--link--focus, #00305b);\n  --rh-band--width:                           auto; }\n  :host *, :host *::before, :host *::after {\n    box-sizing: border-box; }\n  @media screen and (min-width: 768px) {\n    :host {\n      --rh-band--width: calc( 768px - calc(var(--rh-band--padding__horizontal) * 4) ); } }\n  @media screen and (min-width: 992px) {\n    :host {\n      --rh-band--width: calc( 992px - calc(var(--rh-band--padding__horizontal) * 4) ); } }\n  @media screen and (min-width: 1200px) {\n    :host {\n      --rh-band--width: calc( 1200px - calc(var(--rh-band--padding__horizontal) * 4) ); } }\n  @media print {\n    :host {\n      --rh-band--padding:    calc(var(--rh-band--padding__vertical) / 2)  var(--rh-band--padding__horizontal); } }\n\n:host([color="dark"]) {\n  --rh-band--backgroundColor:                  var(--rh-theme--color--surface--dark, #464646);\n  --rh-broadcasted--color--text:               var(--rh-theme--color--surface--dark--text, #fff);\n  --rh-broadcasted--color--ui-link:            var(--rh-theme--color--surface--dark--link, #99ccff);\n  --rh-broadcasted--color--ui-link--visited:   var(--rh-theme--color--surface--dark--link--visited, #b38cd9);\n  --rh-broadcasted--color--ui-link--hover:     var(--rh-theme--color--surface--dark--link--hover, #cce6ff);\n  --rh-broadcasted--color--ui-link--focus:     var(--rh-theme--color--surface--dark--link--focus, #cce6ff); }\n\n:host([color="darkest"]) {\n  --rh-band--backgroundColor:                  var(--rh-theme--color--surface--darkest, #131313);\n  --rh-broadcasted--color--text:               var(--rh-theme--color--surface--darkest--text, #fff);\n  --rh-broadcasted--color--ui-link:            var(--rh-theme--color--surface--darkest--link, #99ccff);\n  --rh-broadcasted--color--ui-link--visited:   var(--rh-theme--color--surface--darkest--link--visited, #b38cd9);\n  --rh-broadcasted--color--ui-link--hover:     var(--rh-theme--color--surface--darkest--link--hover, #cce6ff);\n  --rh-broadcasted--color--ui-link--focus:     var(--rh-theme--color--surface--darkest--link--focus, #cce6ff); }\n\n:host([color="accent"]) {\n  --rh-band--backgroundColor:                  var(--rh-theme--color--surface--accent, #fe460d);\n  --rh-broadcasted--color--text:               var(--rh-theme--color--surface--accent--text, #fff);\n  --rh-broadcasted--color--ui-link:            var(--rh-theme--color--surface--accent--link, #99ccff);\n  --rh-broadcasted--color--ui-link--visited:   var(--rh-theme--color--surface--accent--link--visited, #b38cd9);\n  --rh-broadcasted--color--ui-link--hover:     var(--rh-theme--color--surface--accent--link--hover, #cce6ff);\n  --rh-broadcasted--color--ui-link--focus:     var(--rh-theme--color--surface--accent--link--focus, #cce6ff); }\n\n:host([color="complement"]) {\n  --rh-band--backgroundColor:                  var(--rh-theme--color--surface--complement, #0477a4);\n  --rh-broadcasted--color--text:               var(--rh-theme--color--surface--complement--text, #fff);\n  --rh-broadcasted--color--ui-link:            var(--rh-theme--color--surface--complement--link, #99ccff);\n  --rh-broadcasted--color--ui-link--visited:   var(--rh-theme--color--surface--complement--link--visited, #b38cd9);\n  --rh-broadcasted--color--ui-link--hover:     var(--rh-theme--color--surface--complement--link--hover, #cce6ff);\n  --rh-broadcasted--color--ui-link--focus:     var(--rh-theme--color--surface--complement--link--focus, #cce6ff); }\n\n:host([color="light"]) {\n  --rh-band--backgroundColor:                  var(--rh-theme--color--surface--light, #ececec);\n  --rh-broadcasted--color--text:               var(--rh-theme--color--surface--light--text, #333);\n  --rh-broadcasted--color--ui-link:            var(--rh-theme--color--surface--light--link, #06c);\n  --rh-broadcasted--color--ui-link--visited:   var(--rh-theme--color--surface--light--link--visited, rebeccapurple);\n  --rh-broadcasted--color--ui-link--hover:     var(--rh-theme--color--surface--light--link--hover, #003366);\n  --rh-broadcasted--color--ui-link--focus:     var(--rh-theme--color--surface--light--link--focus, #003366); }\n\n:host([color="lightest"]) {\n  --rh-band--backgroundColor:                  var(--rh-theme--color--surface--lightest, #fff);\n  --rh-broadcasted--color--text:               var(--rh-theme--color--surface--lightest--text, #333);\n  --rh-broadcasted--color--ui-link:            var(--rh-theme--color--surface--lightest--link, #06c);\n  --rh-broadcasted--color--ui-link--visited:   var(--rh-theme--color--surface--lightest--link--visited, rebeccapurple);\n  --rh-broadcasted--color--ui-link--hover:     var(--rh-theme--color--surface--lightest--link--hover, #003366);\n  --rh-broadcasted--color--ui-link--focus:     var(--rh-theme--color--surface--lightest--link--focus, #003366); }\n\n:host([size="small"]) {\n  --rh-band--padding:   calc(var(--rh-band--padding__vertical) / 4)  var(--rh-band--padding__horizontal); }\n\n.rh-band__wrapper {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-items: flex-start;\n  padding: calc(var(--rh-band--padding__vertical) / 2) var(--rh-band--padding__horizontal);\n  border: 0px var(--rh-band--borderStyle) var(--rh-band--borderColor);\n  border-top-width: var(--rh-band--borderTopWidth);\n  border-bottom-width: var(--rh-band--borderBottomWidth);\n  background-color: var(--rh-band--backgroundColor);\n  background-position-x: var(--rh-band--backgroundPositionX);\n  background-position-y: var(--rh-band--backgroundPositionY);\n  color: var(--rh-broadcasted--color--text); }\n  @media (min-width: 576px) {\n    .rh-band__wrapper {\n      padding: var(--rh-band--padding); } }\n  @media print {\n    .rh-band__wrapper {\n      background-color: white !important;\n      background-image: none !important;\n      box-shadow: none !important; } }\n\n.rh-band__container, .rh-band__content {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column; }\n  @media (min-width: 768px) {\n    .rh-band__container, .rh-band__content {\n      flex-direction: row; } }\n\n.rh-band__container {\n  margin: 0 auto;\n  max-width: var(--rh-band--width); }\n\n@media (max-width: 768px) {\n  .rh-band__container > *:not(:last-child), .rh-band__content > *:not(:last-child) {\n    margin-bottom: var(--rh-theme--container-spacer, 1rem); } }\n\n.rh-band__main, .rh-band__body {\n  flex: 1; }\n  .rh-band__main > *:not(:last-child), .rh-band__body > *:not(:last-child) {\n    margin-bottom: var(--rh-theme--container-spacer, 1rem); }\n\n.rh-band__header, .rh-band__body, .rh-band__footer, .rh-band__aside {\n  display: block;\n  display: grid;\n  grid-column: 1fr;\n  grid-gap: var(--rh-theme--container-spacer, 1rem); }\n  .rh-band__header::slotted(*), .rh-band__body::slotted(*), .rh-band__footer::slotted(*), .rh-band__aside::slotted(*) {\n    margin-top: 0; }\n\n@media screen and (min-width: 768px) {\n  .rh-band__header {\n    grid-template-columns: var(--rh-band_header--layout); } }\n\n.rh-band__body {\n  flex-grow: 1; }\n  @media screen and (min-width: 768px) {\n    .rh-band__body {\n      grid-template-columns: var(--rh-band_body--layout); }\n      [aside~="full"] .rh-band__body {\n        margin-right: 0;\n        margin-left: 0; } }\n\n@media screen and (min-width: 768px) {\n  .rh-band__footer {\n    grid-template-columns: var(--rh-band_footer--layout); } }\n\n.rh-band__aside {\n  min-width: 240px; }\n  @media screen and (min-width: 768px) {\n    .rh-band__aside {\n      grid-template-columns: var(--rh-band_aside--layout);\n      flex-basis: var(--rh-band_aside--layout); } }\n  @media screen and (min-width: 768px) and (max-width: 992px) {\n    .rh-band__aside {\n      --rh-band_aside--layout: 240px; } }\n\n@media screen and (min-width: 768px) {\n  .rh-band__aside {\n    margin: 0; }\n    [aside~="left"] .rh-band__aside {\n      order: -1;\n      margin-right: var(--rh-band--gutter); }\n    [aside~="right"] .rh-band__aside {\n      order: 2;\n      margin-left: var(--rh-band--gutter); } }\n</style>\n<div class="rh-band__wrapper">\n  <div class="rh-band__container">\n    '+(this.has_slot("aside")&&this.asidePosition.includes("full")&&this.asidePosition.includes("top")?'<slot class="rh-band__aside" name="aside"></slot>':"")+'\n    <section class="rh-band__main">\n      '+(this.has_slot("header")?'<slot class="rh-band__header" name="header"></slot>':"")+'\n      <div class="rh-band__content">\n        '+(this.has_slot("aside")&&!this.asidePosition.includes("full")&&this.asidePosition.includes("top")?'<slot class="rh-band__aside" name="aside"></slot>':"")+'\n        <slot class="rh-band__body"></slot>\n        '+(!this.has_slot("aside")||this.asidePosition.includes("full")||this.asidePosition.includes("top")?"":'<slot class="rh-band__aside" name="aside"></slot>')+"\n      </div>\n      "+(this.has_slot("footer")?'<slot class="rh-band__footer" name="footer"></slot>':"")+"\n    </section>\n    "+(this.has_slot("aside")&&this.asidePosition.includes("full")&&!this.asidePosition.includes("top")?'<slot class="rh-band__aside" name="aside"></slot>':"")+"\n  </div>\n</div>"}},{key:"templateUrl",get:function(){return"rh-band.html"}},{key:"styleUrl",get:function(){return"rh-band.scss"}},{key:"asidePosition",get:function(){return this.getAttribute("aside").split(" ")}}],[{key:"tag",get:function(){return"rh-band"}},{key:"observedAttributes",get:function(){return["aside","img-src"]}},{key:"cascadingAttributes",get:function(){return{aside:".rh-band__wrapper"}}},{key:"rhType",get:function(){return e.rhType.container}}]),n(a,[{key:"connectedCallback",value:function(){o(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this).call(this)}},{key:"attributeChangedCallback",value:function(r,e,n){switch(o(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"attributeChangedCallback",this).call(this,r,e,n),r){case"img-src":this.shadowRoot.querySelector(".rh-band__wrapper").style.backgroundImage=n?"url('"+n+"')":""}}}]),a}();return e.create(r),r});
//# sourceMappingURL=rh-band.umd.js.map