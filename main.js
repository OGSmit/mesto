(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}var n=function(){function e(t,n,r,o,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._templateSelector=n,this._name=t.name,this._link=t.link,this._alt="Изображение ".concat(t.name),this._element=this._getTemplate(),this._handleCardClick=r,this._handleCardDelete=o,this._cardId=t._id,this._cardOwner=t.owner,this.likesArray=t.likes,this._handlerLike=i,this._isLiked=t.isLiked,this._isMine=t.isMine}var n,r;return n=e,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".place-card").cloneNode(!0)}},{key:"_addLikeCard",value:function(e,t){this._handlerLike(e,t)}},{key:"generateCard",value:function(){return this._cardImage=this._element.querySelector(".place-card__image"),this._element.querySelector(".place-card__subtitle").textContent=this._name,this._cardImage.src=this._link,this._cardImage.alt=this._alt,this._element.id=this._cardId,this._element.owner=this._cardOwner,void 0===this.likesArray&&(this.likesArray=[]),void 0===this._isMine&&(this._isMine=!0),this._isLiked?this._element.querySelector(".place-card__buttons-like").classList.add("place-card__buttons-like_active"):this._element.querySelector(".place-card__buttons-like").classList.remove("place-card__buttons-like_active"),0===this.likesArray.length?this._element.querySelector(".place-card__like-counter").style="visibility: hidden;":this._element.querySelector(".place-card__like-counter").textContent=this.likesArray.length,this._isMine||(this._buttonImage=this._element.querySelector(".place-card__buttons-delete"),this._buttonImage.style="visibility: hidden;"),this._setEventListener(),this._element}},{key:"_setEventListener",value:function(){var e=this;this._element.querySelector(".place-card__buttons-delete").addEventListener("click",(function(t){e._handleCardDelete(t)})),this._element.querySelector(".place-card__buttons-like").addEventListener("click",(function(t){e._handlerLike(e._element.id,e._isLiked,t)})),this._element.querySelector(".place-card__image").addEventListener("click",(function(){e._handleCardClick(e._name,e._link)}))}},{key:"_removeCard",value:function(e){e.target.closest(".place-card").remove()}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var i=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._config=t,this._formElement=n,this._inputList=Array.from(n.querySelectorAll(this._config.inputSelector)),this._buttonElement=n.querySelector(this._config.submitButtonSelector)}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));t.classList.add(this._config.errorClass),t.textContent=e.validationMessage,e.classList.add(this._config.typeError)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));t.classList.remove(this._config.errorClass),t.textContent="",e.classList.remove(this._config.typeError)}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_hasInvalidInput",value:function(e){return e.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput(this._inputList)?this.disabledButton():(this._buttonElement.classList.remove(this._config.inactiveButtonClass),this._buttonElement.disabled=!1)}},{key:"_setEventListener",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState(e._buttonElement)}))}))}},{key:"disabledButton",value:function(){this._buttonElement.classList.add(this._config.inactiveButtonClass),this._buttonElement.disabled=!0}},{key:"enableValidation",value:function(){this._toggleButtonState(this._buttonElement),this._setEventListener()}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),c={formSelector:".popup__form",inputSelector:".popup__inputs",submitButtonSelector:".popup__buttons-save",inactiveButtonClass:"popup__buttons-save_invalid",inputErrorClass:"popup__input-error",errorClass:"popup__input-error_visible",typeError:"popup__inputs_type_error"};function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==a(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===a(o)?o:String(o)),r)}var o}var l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupBySelector=document.querySelector(t),this._bindHandleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupBySelector.classList.add("popup_opened"),document.addEventListener("keydown",this._bindHandleEscClose)}},{key:"close",value:function(){this._popupBySelector.classList.remove("popup_opened"),document.removeEventListener("keydown",this._bindHandleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListener",value:function(){var e=this;this._popupBySelector.addEventListener("mousedown",(function(t){t.target.classList.contains("popup")&&e.close()})),this._popupBySelector.querySelector(".popup__buttons-close").addEventListener("click",(function(){e.close()}))}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==s(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===s(o)?o:String(o)),r)}var o}function p(){return p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},p.apply(this,arguments)}function y(e,t){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},y(e,t)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(r);if(o){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function c(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(n=i.call(this,e))._callBackSubmit=t,n._form=n._popupBySelector.querySelector(".popup__form"),n._inputList=n._popupBySelector.querySelectorAll(".popup__inputs"),n}return t=c,(n=[{key:"getInputValues",value:function(){var e=this;return this._obj={},this._inputList.forEach((function(t){e._obj[t.name]=t.value})),this._obj}},{key:"setEventListeners",value:function(){var e=this;p(d(c.prototype),"setEventListener",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._objectFromInputs=e.getInputValues(),e._callBackSubmit(e._objectFromInputs)}))}},{key:"loadingState",value:function(){this._form.querySelector(".popup__buttons-save").textContent="Сохранение..."}},{key:"normalState",value:function(){this._form.querySelector(".popup__buttons-save").textContent="Сохранить"}},{key:"open",value:function(){p(d(c.prototype),"open",this).call(this)}},{key:"close",value:function(){p(d(c.prototype),"close",this).call(this),this._form.reset()}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(l);function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==v(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===v(o)?o:String(o)),r)}var o}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=g(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},m.apply(this,arguments)}function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},b(e,t)}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(r);if(o){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this,e))._imageFromPopup=document.querySelector(e).querySelector(".popup__image"),t._popupSubtitle=document.querySelector(e).querySelector(".popup__subtitle"),t}return t=c,(n=[{key:"open",value:function(e,t){m(g(c.prototype),"open",this).call(this),this._imageFromPopup.src=t,this._imageFromPopup.alt=e,this._popupSubtitle.textContent=e}},{key:"close",value:function(){m(g(c.prototype),"close",this).call(this)}},{key:"setEventListeners",value:function(){m(g(c.prototype),"setEventListener",this).call(this)}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(l);function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==k(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==k(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===k(o)?o:String(o)),r)}var o}var E=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.url=t.url,this.headers=t.headers}var t,n;return t=e,(n=[{key:"getInitialCard",value:function(){return fetch("".concat(this.url,"/cards"),{headers:this.headers}).then(this._checkResponse).catch((function(e){return console.log(e)}))}},{key:"getProfile",value:function(){return fetch("".concat(this.url,"/users/me"),{headers:this.headers}).then(this._checkResponse).catch((function(e){return console.log(e)}))}},{key:"removeCard",value:function(e){return fetch("".concat(this.url,"/cards/").concat(e),{method:"DELETE",headers:this.headers}).then(this._checkResponse).catch((function(e){return console.log(e)}))}},{key:"addCard",value:function(e){return fetch("".concat(this.url,"/cards"),{method:"POST",headers:this.headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkResponse).catch((function(e){return console.log(e)}))}},{key:"editAvatar",value:function(e){return fetch("".concat(this.url,"/users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify({avatar:e.avatar})}).then(this._checkResponse).catch((function(e){return console.log(e)}))}},{key:"editProfile",value:function(e){return fetch("".concat(this.url,"/users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._checkResponse).catch((function(e){return console.log(e)}))}},{key:"addlikeCard",value:function(e){return fetch("".concat(this.url,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this.headers}).then(this._checkResponse).catch((function(e){return console.log(e)}))}},{key:"removelikeCard",value:function(e){return fetch("".concat(this.url,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this.headers}).then(this._checkResponse).catch((function(e){return console.log(e)}))}},{key:"_checkResponse",value:function(e){return e.ok?(console.log(e),e.json()):console.log("api.getInitialCard catch some Error")}}])&&w(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==P(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==P(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===P(o)?o:String(o)),r)}var o}var L=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._containerBySelector=document.querySelector(n),this._renderer=r}var t,n;return t=e,(n=[{key:"rendererAll",value:function(e){var t=this;this._items=e,this._items.forEach((function(e){t._renderer(e)}))}},{key:"addItemAppend",value:function(e){this._item=e,this._containerBySelector.append(this._item)}},{key:"addItemPrepend",value:function(e){this._item=e,this._containerBySelector.append(this._item)}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==O(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==O(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===O(o)?o:String(o)),r)}var o}var q=function(){function e(t,n){var r=t.name,o=t.about;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._dataName=document.querySelector(r),this._dataAbout=document.querySelector(o),this._avatarImage=document.querySelector(n)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._dataName.textContent,about:this._dataAbout.textContent}}},{key:"setUserInfo",value:function(e){this._data=e,this._dataName.textContent=this._data.name,this._dataAbout.textContent=this._data.about}},{key:"setUserAvatar",value:function(e){this._data=e,this._avatarImage.src=this._data.avatar}},{key:"getUserId",value:function(){return this._userId=this._data._id,this._userId}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),I=document.querySelector("#popup_confirm"),B=document.querySelector("#popup_edit-profile"),T=document.querySelector("#popup_add-card"),R=B.querySelector(".popup__inputs_type_name"),A=B.querySelector(".popup__inputs_type_hobby"),x=document.querySelector(".profiles__buttons-edit"),U=document.querySelector(".profiles__buttons-add"),D=document.querySelector(".profiles__buttons-avatar"),V=document.querySelector("#popup_edit-avatar"),M=(document.querySelector(".place-card__buttons-like"),new i(c,B)),N=new i(c,T),F=new i(c,V),H=new h("#popup_edit-profile",(function(e){H.loadingState(),X.editProfile(e).then((function(t){console.log(t),K.setUserInfo(e),H.close(),H.normalState()})).catch((function(e){return console.log(e)}))})),J=new h("#popup_add-card",(function(e){J.loadingState(),X.addCard(e).then((function(t){console.log(t),J.close(),J.normalState();var n=Z(e);document.querySelector(".profile-content").prepend(n)})).catch((function(e){return console.log(e)}))})),z=new S("#popup_image"),G=new L({renderer:function(e){G.addItemAppend(Z(e))}},".profile-content"),K=new q({name:".profiles__name",about:".profiles__subtitle"},".profiles__avatar"),Q=new h("#popup_edit-avatar",(function(){Q.loadingState();var e=Q.getInputValues();X.editAvatar(e).then((function(t){console.log(t),Q.close(),Q.normalState(),K.setUserAvatar(e)})).catch((function(e){console.log(e)}))})),W=new l("#popup_confirm"),X=new E({url:"https://mesto.nomoreparties.co/v1/cohort-60",headers:{authorization:"0ea15e75-4859-43c3-ab57-7a6ebeb67038","Content-Type":"application/json"}}),Y=function(e,t,n){t?X.removelikeCard(e).then((function(){n.target.classList.toggle("place-card__buttons-like_active")})).catch((function(e){return console.log(e)})):X.addlikeCard(e).then((function(){n.target.classList.toggle("place-card__buttons-like_active")})).catch((function(e){return console.log(e)}))};function Z(e){return new n(e,"#template",$,ee,Y).generateCard()}function $(e,t){z.open(e,t)}function ee(e){W.open();var t=e.target.closest(".place-card");I.querySelector(".popup__buttons-save").addEventListener("click",(function(e){e.preventDefault(),X.removeCard(t.id).then((function(e){t.remove(),W.close()})).catch((function(e){return console.log(e)}))}))}x.addEventListener("click",(function(){H.open(),M.disabledButton();var e=K.getUserInfo();R.value=e.name,A.value=e.about})),U.addEventListener("click",(function(){J.open(),N.disabledButton()})),D.addEventListener("click",(function(){Q.open(),F.disabledButton()})),M.enableValidation(),N.enableValidation(),F.enableValidation(),J.setEventListeners(),H.setEventListeners(),z.setEventListeners(),Q.setEventListeners(),W.setEventListener(),X.getProfile().then((function(e){X.getInitialCard().then((function(e){e.forEach((function(e){e.likes.find((function(e){return e._id===K.getUserId()}))?e.isLiked=!0:e.isLiked=!1})),e.forEach((function(e){e.owner._id===K.getUserId()?e.isMine=!0:e.isMine=!1})),G.rendererAll(e)})).catch((function(e){return console.log(e)})),K.setUserInfo(e),K.setUserAvatar(e)})).catch((function(e){return console.log(e)}))})();