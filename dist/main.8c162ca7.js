parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
var n=document.querySelector("#html"),r=0,a="/* 你好，我叫隋鑫\n*接下来我要展示一下我的前端功底\n*首先准备一个div\n*/\n#div1{\n   width: 200px;\n   height: 200px;\n   \n}\n/*接下来我把一个div变成八卦\n*注意看好了\n*首先把div变成一个圆\n*/\n#div1{\n    border-radius: 50%;\n    border:none;\n    -moz-box-shadow:5px 8px 17px #333333;\n     -webkit-box-shadow:5px 8px 17px #333333;\n      box-shadow:5px 8px 17px #333333;\n}\n/*接下来我把它变成黑白\n*/\n#div1{\n    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%);\n}\n/* 然后我再加两个圈\n*/\n#div1::before{\n    width: 100px;\n    height: 100px;\n    \n   top:0;\n    left:50%;\n    background:#000;\n    transform: translateX(-50%);\n    border-radius: 50%;\n    border:none;\n    background:#000;\n    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 23%, rgba(0,0,0,1) 23%, rgba(14,8,8,1) 100%);\n}\n#div1::after{\n    width: 100px;\n    height: 100px;\n    \n    bottom:0;\n    left:50%;\n    background:#fff;\n    transform: translateX(-50%);  \n    border-radius: 50%;\n    border: none;\n    background: radial-gradient(circle, rgba(14,8,8,1) 0%, rgba(0,0,0,1) 22%, rgba(255,255,255,1) 22%, rgba(255,255,255,1) 100%); \n}\n\n",e="",o=document.querySelector("#css"),d=function d(){r<a.length&&setTimeout(function(){"\n"===a[r]?e+="<br>":" "===a[r]?e+="&nbsp":e+=a[r],n.innerHTML=e,o.innerHTML=a.substring(0,r),r+=1,window.scrollTo(0,999999),html.scrollTo(0,999999),d()},10)};d.apply(null);
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.8c162ca7.js.map