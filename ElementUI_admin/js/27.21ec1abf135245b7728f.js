webpackJsonp([27],{500:function(t,n,e){function a(t){e(701)}var s=e(171)(e(560),e(746),a,null,null);t.exports=s.exports},560:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{tags:[{name:"标签一",type:""},{name:"标签二",type:"gray"},{name:"标签三",type:"primary"},{name:"标签四",type:"success"},{name:"标签五",type:"warning"},{name:"标签六",type:"danger"}],dynamicTags:["标签一","标签二","标签三"],inputVisible:!1,inputValue:""}},methods:{handleClose:function(t){this.dynamicTags.splice(this.dynamicTags.indexOf(t),1)},showInput:function(){var t=this;this.inputVisible=!0,this.$nextTick(function(n){t.$refs.saveTagInput.$refs.input.focus()})},handleInputConfirm:function(){var t=this.inputValue;t&&this.dynamicTags.push(t),this.inputVisible=!1,this.inputValue=""}}}},658:function(t,n,e){n=t.exports=e(487)(!0),n.push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"Tag.vue",sourceRoot:""}])},701:function(t,n,e){var a=e(658);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e(488)("0d816b88",a,!0)},746:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h5",[t._v("基础用法")]),t._v(" "),e("el-tag",[t._v("标签一")]),t._v(" "),e("el-tag",{attrs:{type:"gray"}},[t._v("标签二")]),t._v(" "),e("el-tag",{attrs:{type:"primary"}},[t._v("标签三")]),t._v(" "),e("el-tag",{attrs:{type:"success"}},[t._v("标签四")]),t._v(" "),e("el-tag",{attrs:{type:"warning"}},[t._v("标签五")]),t._v(" "),e("el-tag",{attrs:{type:"danger"}},[t._v("标签六")]),t._v(" "),e("h5",[t._v("可移除标签")]),t._v(" "),t._l(t.tags,function(n){return e("el-tag",{key:n.name,attrs:{closable:!0,type:n.type}},[t._v("\n\t"+t._s(n.name)+"\n\t")])}),t._v(" "),e("h5",[t._v("动态编辑标签")]),t._v(" "),t._l(t.dynamicTags,function(n){return e("el-tag",{key:n,attrs:{closable:!0,"close-transition":!1},on:{close:function(e){t.handleClose(n)}}},[t._v("\n\t"+t._s(n)+"\n\t")])}),t._v(" "),t.inputVisible?e("el-input",{ref:"saveTagInput",staticClass:"input-new-tag",attrs:{size:"mini"},on:{blur:t.handleInputConfirm},nativeOn:{keyup:function(n){if(!("button"in n)&&t._k(n.keyCode,"enter",13))return null;t.handleInputConfirm(n)}},model:{value:t.inputValue,callback:function(n){t.inputValue=n},expression:"inputValue"}}):e("el-button",{staticClass:"button-new-tag",attrs:{size:"small"},on:{click:t.showInput}},[t._v("+ New Tag")])],2)},staticRenderFns:[]}}});
//# sourceMappingURL=27.21ec1abf135245b7728f.js.map