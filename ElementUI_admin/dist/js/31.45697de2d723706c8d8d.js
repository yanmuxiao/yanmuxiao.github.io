webpackJsonp([31],{495:function(t,e,a){function i(t){a(680)}var n=a(171)(a(555),a(725),i,null,null);t.exports=n.exports},555:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{typhographyRule:[{mainTitle:"主标题",example:"用 Element 快速搭建页面",cssStyle:"20px Extra large"},{mainTitle:"标题",example:"用 Element 快速搭建页面",cssStyle:"18px large"},{mainTitle:"主标题",example:"用 Element 快速搭建页面",cssStyle:"20px Extra large"},{mainTitle:"小标题",example:"用 Element 快速搭建页面",cssStyle:"16px Medium"},{mainTitle:"正文",example:"用 Element 快速搭建页面",cssStyle:"14px Small"},{mainTitle:"正文（小）",example:"用 Element 快速搭建页面",cssStyle:"20px Extra large"},{mainTitle:"辅助文字",example:"用 Element 快速搭建页面",cssStyle:"12px Extra Extra Small"}]}},methods:{}}},637:function(t,e,a){e=t.exports=a(487)(!0),e.push([t.i,".typography-box{height:200px;width:200px;position:relative;border:1px solid #eaeefb;font-size:40px;color:#1f2d3d;text-align:center;line-height:162px;padding-bottom:36px;box-sizing:border-box;display:inline-block;margin-right:17px;border-radius:4px}.typography-name{position:absolute;bottom:0;width:100%;height:35px;border-top:1px solid #eaeefb;font-size:14px;color:#8492a6;line-height:35px;text-align:left;text-indent:10px;font-family:Helvetica Neue}.typo-PingFang{font-family:PingFang SC}.typo-Hiragino{font-family:Hiragino Sans GB}.typo-Microsoft{font-family:Microsoft YaHei}.typo-Helvetica{font-family:Helvetica}.typo-Arial{font-family:Arial}","",{version:3,sources:["D:/GitProject/vue-cli-project/src/views/basic/Typography.vue"],names:[],mappings:"AACA,gBACE,aAAc,AACd,YAAa,AACb,kBAAmB,AACnB,yBAA0B,AAC1B,eAAgB,AAChB,cAAe,AACf,kBAAmB,AACnB,kBAAmB,AACnB,oBAAqB,AACrB,sBAAuB,AACvB,qBAAsB,AACtB,kBAAmB,AACnB,iBAAmB,CACpB,AACD,iBACE,kBAAmB,AACnB,SAAU,AACV,WAAY,AACZ,YAAa,AACb,6BAA8B,AAC9B,eAAgB,AAChB,cAAe,AACf,iBAAkB,AAClB,gBAAiB,AACjB,iBAAkB,AAClB,0BAA4B,CAC7B,AACD,eACE,uBAAyB,CAC1B,AACD,eACE,4BAA8B,CAC/B,AACD,gBACE,2BAA6B,CAC9B,AACD,gBACE,qBAAuB,CACxB,AACD,YACE,iBAAmB,CACpB",file:"Typography.vue",sourcesContent:["\n.typography-box {\n  height: 200px;\n  width: 200px;\n  position: relative;\n  border: 1px solid #eaeefb;\n  font-size: 40px;\n  color: #1f2d3d;\n  text-align: center;\n  line-height: 162px;\n  padding-bottom: 36px;\n  box-sizing: border-box;\n  display: inline-block;\n  margin-right: 17px;\n  border-radius: 4px;\n}\n.typography-name {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 35px;\n  border-top: 1px solid #eaeefb;\n  font-size: 14px;\n  color: #8492a6;\n  line-height: 35px;\n  text-align: left;\n  text-indent: 10px;\n  font-family: Helvetica Neue;\n}\n.typo-PingFang {\n  font-family: PingFang SC;\n}\n.typo-Hiragino {\n  font-family: Hiragino Sans GB;\n}\n.typo-Microsoft {\n  font-family: Microsoft YaHei;\n}\n.typo-Helvetica {\n  font-family: Helvetica;\n}\n.typo-Arial {\n  font-family: Arial;\n}\n"],sourceRoot:""}])},680:function(t,e,a){var i=a(637);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(488)("3a3ea047",i,!0)},725:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"el-layout"},[a("h4",[t._v("Typography 字体")]),t._v(" "),a("p",[t._v("我们对字体进行统一规范，力求在各个操作系统下都有最佳展示效果。")]),t._v(" "),a("div",{staticClass:"el-section"},[a("h4",[t._v("中文字体")]),t._v(" "),a("el-row",{attrs:{gutter:8}},[a("el-col",{attrs:{span:6}},[a("div",{staticClass:"typography-box typo-PingFang"},[t._v("\n\t\t      \t\t和畅惠风\n\t\t      \t\t"),a("div",{staticClass:"typography-name"},[t._v("PingFang SC")])])]),t._v(" "),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"typography-box typo-Hiragino"},[t._v("\n\t\t      \t\t和畅惠风\n\t\t      \t\t"),a("div",{staticClass:"typography-name"},[t._v("Hiragino Sans GB")])])]),t._v(" "),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"typography-box typo-Microsoft"},[t._v("\n\t\t      \t\t和畅惠风\n\t\t      \t\t"),a("div",{staticClass:"typography-name"},[t._v("Microsoft YaHei")])])]),t._v(" "),a("el-col",{attrs:{span:6}})],1)],1),t._v(" "),a("div",{staticClass:"el-section"},[a("h4",[t._v("英文／数字字体")]),t._v(" "),a("el-row",{attrs:{gutter:8}},[a("el-col",{attrs:{span:6}},[a("div",{staticClass:"typography-box typo-Helvetica-neue"},[t._v("\n\t\t      \t\tRGag\n\t\t      \t\t"),a("div",{staticClass:"typography-name"},[t._v("Helvetica Neue")])])]),t._v(" "),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"typography-box typo-Helvetica"},[t._v("\n\t\t      \t\tRGag\n\t\t      \t\t"),a("div",{staticClass:"typography-name"},[t._v("Helvetica")])])]),t._v(" "),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"typography-box typo-Arial"},[t._v("\n\t\t      \t\tRGag\n\t\t      \t\t"),a("div",{staticClass:"typography-name"},[t._v("Arial")])])]),t._v(" "),a("el-col",{attrs:{span:6}})],1)],1),t._v(" "),a("div",{staticClass:"el-section"},[a("h4",[t._v("字体使用规范")]),t._v(" "),[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.typhographyRule}},[a("el-table-column",{attrs:{prop:"mainTitle",label:"类型",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"example",label:"例子",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"cssStyle",label:"样式"}})],1)]],2)])},staticRenderFns:[]}}});
//# sourceMappingURL=31.45697de2d723706c8d8d.js.map