webpackJsonp([2],{27:function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a])}return t},n=i(9),s=(a(n),i(4)),r=a(s),c=i(5),d=i(6),l=a(d),u=i(90),p=a(u);e.default={mixins:[l.default],components:{replyBox:p.default},computed:(0,c.mapState)({user:function(t){return t.user}}),routeData:function(){return{id:"",author_id:"",tab:"share",content:"",title:"",last_reply_at:"",good:!1,top:!1,reply_count:0,visit_count:0,create_at:"",author:{},replies:[],is_collect:!1}},mounted:function(){this.getData()},methods:{getData:function(){var t=this,e=this.$route.params.vid;r.default.get("/api/v1/topic/"+e,{},function(e){var i=e.data,a=e.success;if(i.replies.forEach(function(t){return t.comment=!1}),a)return o(t.$data,i)})},testThing:function(t){return t.indexOf(this.user.id||"")>-1},fabulousItem:function(t){var e=t.ups,i=t.id;if(!this.user.accesstoken)return this.$router.push("/login");var a=e.indexOf(this.user.id);a>-1?e.splice(a,1):e.push(this.user.id),r.default.post("/api/v1/reply/"+i+"/ups")},commentShow:function(t){if(!this.user.accesstoken)return this.$router.push("/login");var e=t.comment;this.replies.forEach(function(t){return t.comment=!1}),t.comment=!e}}}},28:function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=i(4),n=a(o);e.default={props:{reply_id:{type:String,default:""},loginname:{type:String,default:""}},data:function(){return{btnname:"回复",content:""}},methods:{submit:function(){var t=this;this.btnname="回复中...";var e=this.reply_id,i=this.content,a=this.loginname,o=this.$route.params.vid;e&&(i="[@"+a+"](/user/"+a+") "+i),i+='\n\r<br>来自<a href="https://lzxb.github.io/vue-cnode/" target="_blank">vue-cnode手机版</a>',n.default.post("/api/v1/topic/"+o+"/replies",{reply_id:e,content:i},function(e){var i=e.success,a=e.error_msg;i?(t.content="",t.btnname="回复",t.$emit("success")):n.default.msg(a)},function(){t.btnname="回复失败"})}}}},48:function(t,e,i){e=t.exports=i(1)(),e.push([t.id,".reply-box .text[data-v-006e652d]{padding:5px 10px;margin-bottom:10px;border-radius:5px;border:1px solid #eee}.reply-box .text textarea[data-v-006e652d]{box-sizing:border-box;width:100%;line-height:24px;border:none;font-size:13px;resize:none}.reply-box .text textarea[data-v-006e652d]:focus{outline:none}.reply-box .btn[data-v-006e652d]{padding:5px 30px;line-height:24px;border-radius:5px;border:1px solid #24a288;font-size:14px;color:#fff;background:#27af93}.reply-box .btn[data-v-006e652d]:focus{outline:none}.reply-box .msg[data-v-006e652d]{padding:5px 10px;line-height:26px;color:red}",""])},64:function(t,e,i){e=t.exports=i(1)(),e.push([t.id,".datas[data-v-ccda31d2]{padding:10px;border-bottom:1px solid #eee}.datas .tit[data-v-ccda31d2]{position:relative;padding:10px 0;margin:0;line-height:24px;font-weight:700;font-size:22px;text-align:center;color:#222}.datas .bottom .item[data-v-ccda31d2]{padding:0 5px;color:#666}.datas .bottom .item .iconfont[data-v-ccda31d2]{padding-right:3px}.re-list li[data-v-ccda31d2]{padding:10px;border-bottom:1px solid #eee}.re-list .headimg[data-v-ccda31d2]{padding-right:10px}.re-list .headimg .pic[data-v-ccda31d2]{overflow:hidden;display:block;width:28px;height:28px;border-radius:50%;border:1px solid #ddd;background-color:#eee;background-position:50%;background-size:cover}.re-list time[data-v-ccda31d2]{padding-left:10px;font-size:12px}.re-list .num[data-v-ccda31d2]{font-size:13px}.re-list .bottom .icon[data-v-ccda31d2]{position:relative;padding:5px 10px}.re-list .bottom .icon.fabulous[data-v-ccda31d2]{color:#27af93}.re-list .bottom .icon em[data-v-ccda31d2]{font-size:13px;font-style:normal}.re-list .markdown-body[data-v-ccda31d2]{padding:10px 0}.re-list .replies-count[data-v-ccda31d2]{border-left:5px solid #27af93}.re-list .replies-count em[data-v-ccda31d2]{font-style:normal;color:#27af93}.reply[data-v-ccda31d2]{padding:50px 10px}",""])},89:function(t,e,i){var a,o;i(126),a=i(27);var n=i(109);o=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(o=a=a.default),"function"==typeof o&&(o=o.options),o.render=n.render,o.staticRenderFns=n.staticRenderFns,o._scopeId="data-v-ccda31d2",t.exports=a},90:function(t,e,i){var a,o;i(110),a=i(28);var n=i(93);o=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(o=a=a.default),"function"==typeof o&&(o=o.options),o.render=n.render,o.staticRenderFns=n.staticRenderFns,o._scopeId="data-v-006e652d",t.exports=a},93:function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"reply-box"},[_h("form",{on:{submit:function(t){t.preventDefault(),submit(t)}}},[_h("div",{staticClass:"text"},[_h("textarea",{directives:[{name:"model",rawName:"v-model",value:content,expression:"content"}],attrs:{placeholder:loginname?"@"+loginname:"发表你的看法..."},domProps:{value:_s(content)},on:{input:function(t){t.target.composing||(content=t.target.value)}}})])," ",_h("div",{attrs:{flex:"main:right"}},[_m(0)," ",_h("div",{attrs:{"flex-box":"0"}},[_h("button",{staticClass:"btn"},[_s(btnname)])])])])])},staticRenderFns:[function(){with(this)return _h("div",{staticClass:"msg"})}]}},109:function(module,exports){module.exports={render:function(){with(this)return _h("div",[_h("v-header",{attrs:{title:"主题"}},[_h("div",{slot:"left",staticClass:"item",attrs:{flex:"main:center cross:center"},on:{click:function(t){$router.go(-1)}}},[_m(0)])])," ",_h("v-content",{directives:[{name:"scroll-record",rawName:"v-scroll-record"}],attrs:{style:"bottom: 0;"}},[id?_e():_h("v-loading")," ",id?[top||good?_h("div",{staticClass:"common-typeicon",attrs:{flex:""}},[good?_h("div",{staticClass:"icon"},[_m(1)]):_e()," ",top?_h("div",{staticClass:"icon"},[_m(2)]):_e()]):_e()," ",_h("ul",{staticClass:"re-list"},[_h("li",{attrs:{flex:"box:first"}},[_h("div",{staticClass:"headimg"},[_h("router-link",{staticClass:"pic",style:{backgroundImage:"url("+author.avatar_url+")"},attrs:{to:"/user/"+author.loginname}})])," ",_h("div",{staticClass:"bd"},[_h("div",{attrs:{flex:""}},[_h("router-link",{attrs:{"flex-box":"0",to:"/user/"+author.loginname}},[_s(author.loginname)])," ",_h("time",{attrs:{"flex-box":"1"}},[_s(_f("formatDate")(create_at))])," ",_m(3)])])])," "," "," ",_h("li",[_h("div",{staticClass:"datas"},[_h("div",{staticClass:"tit"},[_s(title)])," ",_h("div",{staticClass:"bottom",attrs:{flex:"main:center"}},[_h("div",{staticClass:"item click",attrs:{flex:"main:center cross:center"}},[_m(4)," ",_h("div",{staticClass:"num"},[_s(visit_count)])])," ",_h("div",{staticClass:"item reply",attrs:{flex:"main:center cross:center"}},[_m(5)," ",_h("div",{staticClass:"num"},[_s(reply_count)])])])])," ",_h("div",{staticClass:"markdown-body",domProps:{innerHTML:_s(content)}})])," "," ",_h("li",{staticClass:"replies-count"},["\n                    共(",_h("em",[_s(replies.length)]),")条回复\n                "])," "," ",_l(replies,function(t,e){return _h("li",[_h("div",{attrs:{flex:"box:first"}},[_h("div",{staticClass:"headimg"},[_h("router-link",{staticClass:"pic",style:{backgroundImage:"url("+t.author.avatar_url+")"},attrs:{to:"/user/"+t.author.loginname}})])," ",_h("div",{staticClass:"bd"},[_h("div",{attrs:{flex:""}},[_h("router-link",{attrs:{"flex-box":"0",to:"/user/"+t.author.loginname}},[_s(t.author.loginname)])," ",_h("time",{attrs:{"flex-box":"1"}},[_s(_f("formatDate")(t.create_at))])," ",_h("div",{staticClass:"num",attrs:{"flex-box":"0"}},["#"+_s(e+1)])])," ",_h("div",{staticClass:"markdown-body",domProps:{innerHTML:_s(t.content)}})," ",_h("div",{staticClass:"bottom",attrs:{flex:"dir:right cross:center"}},[_h("div",{staticClass:"icon",on:{click:function(i){commentShow(t,e)}}},[_m(6,!0)])," ",t.author.loginname!==user.loginname?_h("div",{staticClass:"icon",class:{fabulous:testThing(t.ups)},on:{click:function(e){fabulousItem(t)}}},[_m(7,!0)," ",t.ups.length?_h("em",[_s(t.ups.length)]):_e()]):_e()])])])," ",t.comment?_h("reply-box",{attrs:{loginname:t.author.loginname,reply_id:t.id},on:{success:getData}}):_e()])})," "])," ",_h("div",{staticClass:"reply"},[_h("reply-box",{on:{success:getData}})])]:_e()])])},staticRenderFns:[function(){with(this)return _h("i",{staticClass:"iconfont icon-back"})},function(){with(this)return _h("i",{staticClass:"iconfont icon-topic-good"})},function(){with(this)return _h("i",{staticClass:"iconfont icon-topic-top"})},function(){with(this)return _h("div",{staticClass:"num",attrs:{"flex-box":"0"}},["#楼主"])},function(){with(this)return _h("i",{staticClass:"iconfont icon-click"})},function(){with(this)return _h("i",{staticClass:"iconfont icon-comment"})},function(){with(this)return _h("i",{staticClass:"iconfont icon-comment-topic"})},function(){with(this)return _h("i",{staticClass:"iconfont icon-comment-fabulous"})}]}},110:function(t,e,i){var a=i(48);"string"==typeof a&&(a=[[t.id,a,""]]),i(2)(a,{}),a.locals&&(t.exports=a.locals)},126:function(t,e,i){var a=i(64);"string"==typeof a&&(a=[[t.id,a,""]]),i(2)(a,{}),a.locals&&(t.exports=a.locals)}});