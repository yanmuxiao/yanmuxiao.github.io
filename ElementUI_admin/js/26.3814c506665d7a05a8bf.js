webpackJsonp([26],{501:function(e,n,l){function o(e){l(681)}var a=l(171)(l(561),l(726),o,null,null);e.exports=a.exports},561:function(e,n,l){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o,a=l(115),r=l.n(a);n.default={data:function(){return{data:[{label:"一级 1",children:[{label:"二级 1-1",children:[{label:"三级 1-1-1"}]}]},{label:"一级 2",children:[{label:"二级 2-1",children:[{label:"三级 2-1-1"}]},{label:"二级 2-2",children:[{label:"三级 2-2-1"}]}]},{label:"一级 3",children:[{label:"二级 3-1",children:[{label:"三级 3-1-1"}]},{label:"二级 3-2",children:[{label:"三级 3-2-1"}]}]}],defaultProps:{children:"children",label:"label"},regions:[{name:"region1"},{name:"region2"}],props:{label:"name",children:"zones"},count:1}},methods:(o={handleNodeClick:function(e){console.log(e)},handleCheckChange:function(e,n,l){console.log(e,n,l)}},r()(o,"handleNodeClick",function(e){console.log(e)}),r()(o,"loadNode",function(e,n){var l=this;if(0===e.level)return n([{name:"region1"},{name:"region2"}]);if(e.level>3)return n([]);var o;o="region1"===e.data.name||"region2"!==e.data.name&&Math.random()>.5,setTimeout(function(){var e;e=o?[{name:"zone"+l.count++},{name:"zone"+l.count++}]:[],n(e)},500)}),o)}},638:function(e,n,l){n=e.exports=l(487)(!0),n.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"Tree.vue",sourceRoot:""}])},681:function(e,n,l){var o=l(638);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);l(488)("6dc69701",o,!0)},726:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,l=e._self._c||n;return l("div",[l("br"),e._v(" "),l("h5",[e._v("环形进度条")]),e._v(" "),l("el-tree",{attrs:{data:e.data,props:e.defaultProps},on:{"node-click":e.handleNodeClick}}),e._v(" "),l("br"),e._v(" "),l("h5",[e._v("可选择")]),e._v(" "),l("p",[e._v("适用于需要选择层级时使用。在下例中，由于在点击时才进行该层数据的获取，导致层级不可预知，如果没有下层数据，则点击后下拉按钮会消失。")]),e._v(" "),l("el-tree",{attrs:{data:e.regions,props:e.props,load:e.loadNode,lazy:"","show-checkbox":""},on:{"check-change":e.handleCheckChange}})],1)},staticRenderFns:[]}}});
//# sourceMappingURL=26.3814c506665d7a05a8bf.js.map