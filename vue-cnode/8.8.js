webpackJsonp([8],{22:function(t,e,s){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o])}return t},n=s(4),r=o(n),i=s(8),c=o(i),d=s(5),f=s(10);e.default={data:function(){return{form:{accesstoken:""},status:!1}},methods:a({},(0,d.mapActions)([f.USER_SIGNIN]),{submit:function(){var t=this;this.status||(this.status=!0,r.default.post("/api/v1/accesstoken",this.form,function(e){c.default.object(e)?e.success?(r.default.toast("登录成功"),t.USER_SIGNIN({avatar_url:e.avatar_url,id:e.id,loginname:e.loginname,accesstoken:t.form.accesstoken}),t.$router.go(-1)):r.default.toast(e.error_msg):r.default.toast("登录失败"),t.status=!1},function(){r.default.toast("登录失败"),t.status=!1}))}})}},58:function(t,e,s){e=t.exports=s(1)(),e.push([t.id,".form[data-v-43b5eacf]{width:80%;padding:0 10%;margin-top:-50px}.form .line[data-v-43b5eacf]{padding:20px 0}.form .text[data-v-43b5eacf]{box-sizing:border-box;width:100%;padding:5px 10px;line-height:28px;border-radius:5px;border:1px solid #ddd;font-size:14px}.form .btn[data-v-43b5eacf]{width:100%;line-height:38px;border-radius:5px;border:1px solid #24a288;font-size:14px;color:#fff;background:#27af93}",""])},84:function(t,e,s){var o,a;s(120),o=s(22);var n=s(103);a=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(a=o=o.default),"function"==typeof a&&(a=a.options),a.render=n.render,a.staticRenderFns=n.staticRenderFns,a._scopeId="data-v-43b5eacf",t.exports=o},103:function(module,exports){module.exports={render:function(){with(this)return _h("div",[_h("v-header",{attrs:{title:"登录"}},[_h("div",{slot:"left",staticClass:"item",attrs:{flex:"main:center cross:center"},on:{click:function(t){$router.go(-1)}}},[_m(0)])])," ",_h("v-content",{attrs:{flex:"main:center cross:center",style:"bottom: 0;"}},[_h("form",{staticClass:"form",on:{submit:function(t){t.preventDefault(),submit(t)}}},[_h("div",{staticClass:"line"},[_h("input",{directives:[{name:"model",rawName:"v-model",value:form.accesstoken,expression:"form.accesstoken"}],staticClass:"text",attrs:{type:"text",placeholder:"Access Token"},domProps:{value:_s(form.accesstoken)},on:{input:function(t){t.target.composing||(form.accesstoken=t.target.value)}}})])," ",_h("div",{staticClass:"line"},[_h("button",{staticClass:"btn"},[_s(status?"正在登录中":"登录")])])])])])},staticRenderFns:[function(){with(this)return _h("i",{staticClass:"iconfont icon-back"})}]}},120:function(t,e,s){var o=s(58);"string"==typeof o&&(o=[[t.id,o,""]]),s(2)(o,{}),o.locals&&(t.exports=o.locals)}});