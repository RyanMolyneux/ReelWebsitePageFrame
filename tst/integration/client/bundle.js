!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e){function n(t){this._actionParameters=t}function o(t){this._actionArguements=t}function i(t){if(!(t instanceof Function))throw new Error("Action.setActionBody method parameter actionBody must an instance of type Function");this._actionBody="("+t+")()"}function r(t,e,r){this._actionParameters,this._actionArguements,this._actionBody,null==t&&(t=[]),null==e&&(e=[]),null==r&&(r=function(){}),n.call(this,t),o.call(this,e),i.call(this,r)}r.prototype.getActionParameters=function(){return this._actionParameters},r.prototype.setActionParameters=n,r.prototype.getActionArguements=function(){return this._actionArguements},r.prototype.setActionArguements=o,r.prototype.getActionBody=function(){return this._actionBody},r.prototype.setActionBody=i,r.prototype.toJsonFormat=function(){return{actionParameters:this.getActionParameters(),actionArguements:this.getActionArguements(),actionBody:this.getActionBody()}},r.prototype.fromJsonFormat=function(t){this.setActionParameters(t.actionParameters),this.setActionArguements(t.actionArguements);this.setActionBody(function(){})},e.Action=r},function(t,e,n){window.WebsitePageFrameClient=n(2).WebsitePageFrameClient,window.Action=n(0).Action,window.Message=n(3).Message},function(t,e){function n(t,e){this._windowElementId=t,this._websiteUrl=e,this._WEBSITE_URL_UNIQUE_FRAGMENT="websitePageFrame",this._postMessageDataReturned}n.prototype.getWindowElementId=function(){return this._windowElementId},n.prototype.setWindowElementId=function(t){this._windowElementId=t},n.prototype.getWebsiteUrl=function(){return this._websiteUrl},n.prototype.setWebsiteUrl=function(t){this._websiteUrl=t},n.prototype.getPostMessageDataReturned=function(){return this._postMessageDataReturned},n.prototype.setPostMessageDataReturned=function(t){this._postMessageDataReturned=t},n.prototype.isWindowLoaded=function(){var t=!1;return null!=this.getPostMessageDataRetured()&&"pong"===this.getPostMessageDataReturned().ping&&(t=!0),t},n.prototype.loadWindow=function(){var t=document.getElementById(this.getWindowElementId());if(null==t)throw new Error("ERROR!!!, method loadPage of call WebsitePageFrame, cannot find iframe element with id "+this.getIframeId());t.setAttribute("src",this.getWebsiteUrl()+"#"+this._WEBSITE_URL_UNIQUE_FRAGMENT),window.addEventListener("message",function(t){this.getWebsiteUrl().includes(t.origin)&&this.setPostMessageDataReturned(t.data)}.bind(this))},n.prototype.postMessage=function(t){this._postMessageDataReturned=null,document.getElementById(this.getWindowElementId()).contentWindow.postMessage(t.toJsonFormat(),this.getWebsiteUrl())},e.WebsitePageFrameClient=n},function(t,e,n){var o=n(0).Action;function i(t){this._action=t}i.prototype.getAction=function(){return this._action},i.prototype.setAction=function(t){this._action=t},i.prototype.toJsonFormat=function(){return{action:this.getAction().toJsonFormat()}},i.prototype.fromJsonFormat=function(t){var e=new o;e.fromJsonFormat(t.action),this.setAction(e)},e.Message=i}]);