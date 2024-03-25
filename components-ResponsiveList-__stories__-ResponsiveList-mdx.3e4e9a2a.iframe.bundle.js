"use strict";(globalThis.webpackChunkmonday_ui_react_core=globalThis.webpackChunkmonday_ui_react_core||[]).push([[3583,4249],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/ResponsiveList/__stories__/ResponsiveList.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Overview:()=>Overview,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ResponsiveList_stories_ResponsiveList_stories});__webpack_require__("../../node_modules/react/index.js");var react_resizable=__webpack_require__("../../node_modules/react-resizable/index.js"),Open=__webpack_require__("./src/components/Icon/Icons/components/Open.tsx"),Alert=__webpack_require__("./src/components/Icon/Icons/components/Alert.tsx"),Activity=__webpack_require__("./src/components/Icon/Icons/components/Activity.tsx"),Search=__webpack_require__("./src/components/Icon/Icons/components/Search.tsx"),CloseSmall=__webpack_require__("./src/components/Icon/Icons/components/CloseSmall.tsx"),Broom=__webpack_require__("./src/components/Icon/Icons/components/Broom.tsx"),Group=__webpack_require__("./src/components/Icon/Icons/components/Group.tsx"),Moon=__webpack_require__("./src/components/Icon/Icons/components/Moon.tsx"),API=__webpack_require__("./src/components/Icon/Icons/components/API.tsx"),Sun=__webpack_require__("./src/components/Icon/Icons/components/Sun.tsx"),Bolt=__webpack_require__("./src/components/Icon/Icons/components/Bolt.tsx"),ResponsiveList=__webpack_require__("./src/components/ResponsiveList/ResponsiveList.jsx"),Menu=__webpack_require__("./src/components/Menu/Menu/Menu.tsx"),MenuItem=__webpack_require__("./src/components/Menu/MenuItem/MenuItem.tsx"),SplitButton=__webpack_require__("./src/components/SplitButton/SplitButton.tsx"),Search_Search=__webpack_require__("./src/components/Search/Search.tsx"),Button=__webpack_require__("./src/components/Button/Button.tsx"),Icon=__webpack_require__("./src/components/Icon/Icon.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),ResponsiveList_stories=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/components/ResponsiveList/__stories__/ResponsiveList.stories.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ResponsiveList_stories.A,options);ResponsiveList_stories.A&&ResponsiveList_stories.A.locals&&ResponsiveList_stories.A.locals;var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const ResponsiveList_stories_ResponsiveList_stories={title:"Layout/ResponsiveList",component:ResponsiveList.A};var ContainerForDemonstration=function ContainerForDemonstration(_ref){var children=_ref.children;return(0,jsx_runtime.jsx)("div",{style:{width:"100%"},children:(0,jsx_runtime.jsx)("div",{style:{width:"80%"},children:(0,jsx_runtime.jsx)(react_resizable.ResizableBox,{height:48,width:700,handle:(0,jsx_runtime.jsx)("span",{className:"custom-handle custom-handle-se",children:(0,jsx_runtime.jsx)(Icon.A,{icon:Open.A,iconSize:20,clickable:!1,className:"icon-resizer"})}),handleSize:[12,12],className:"resizable-container",minConstraints:[200,48],maxConstraints:[850,48],children})})})};ContainerForDemonstration.displayName="ContainerForDemonstration";var componentTemplate=function componentTemplate(responseListProps){var secondaryContent=(0,jsx_runtime.jsxs)(Menu.A,{children:[(0,jsx_runtime.jsx)(MenuItem.A,{icon:Alert.A,title:"Watch out"}),(0,jsx_runtime.jsx)(MenuItem.A,{icon:Activity.A,title:"History"})]});return(0,jsx_runtime.jsx)(ContainerForDemonstration,{children:(0,jsx_runtime.jsxs)(ResponsiveList.A,_objectSpread(_objectSpread({id:"Knobs",className:"responsive-story",menuButtonSize:ResponsiveList.A.menuButtonSizes.MEDIUM},responseListProps),{},{children:[(0,jsx_runtime.jsx)(SplitButton.A,{size:SplitButton.A.sizes.MAIN,marginRight:!0,secondaryDialogContent:secondaryContent,children:"Add Item"}),(0,jsx_runtime.jsx)("div",{className:"responsive-lst-search",responsiveListPlaceholder:(0,jsx_runtime.jsx)(Search_Search.A,{id:"search-icon-inside",size:Search_Search.A.sizes.MEDIUM,placeholder:"search for content",iconName:Search.A,secondaryIconName:CloseSmall.A}),children:(0,jsx_runtime.jsx)(Search_Search.A,{size:Search_Search.A.sizes.MEDIUM,placeholder:"search for content",iconName:Search.A,secondaryIconName:CloseSmall.A})}),(0,jsx_runtime.jsxs)(Button.A,{kind:Button.A.kinds.TERTIARY,marginLeft:!0,children:[(0,jsx_runtime.jsx)(Icon.A,{icon:Broom.A,ignoreFocusStyle:!0,className:"responsive-icon-margin"}),"Clean"]}),(0,jsx_runtime.jsx)(Button.A,{kind:Button.A.kinds.TERTIARY,marginLeft:!0,children:(0,jsx_runtime.jsx)(Icon.A,{icon:Group.A,ignoreFocusStyle:!0})}),(0,jsx_runtime.jsx)(Button.A,{kind:Button.A.kinds.TERTIARY,marginLeft:!0,children:(0,jsx_runtime.jsx)(Icon.A,{icon:Moon.A,ignoreFocusStyle:!0})}),(0,jsx_runtime.jsx)(Button.A,{kind:Button.A.kinds.TERTIARY,marginLeft:!0,children:(0,jsx_runtime.jsx)(Icon.A,{icon:API.A,ignoreFocusStyle:!0})}),(0,jsx_runtime.jsx)(Button.A,{kind:Button.A.kinds.TERTIARY,marginLeft:!0,children:(0,jsx_runtime.jsx)(Icon.A,{icon:Sun.A,ignoreFocusStyle:!0})}),(0,jsx_runtime.jsx)(Button.A,{kind:Button.A.kinds.TERTIARY,marginLeft:!0,children:(0,jsx_runtime.jsx)(Icon.A,{icon:Bolt.A,ignoreFocusStyle:!0})})]}))})};componentTemplate.displayName="componentTemplate";var Overview={render:componentTemplate.bind({}),name:"Overview",args:{}};Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:'{\n  render: componentTemplate.bind({}),\n  name: "Overview",\n  args: {}\n}',...Overview.parameters?.docs?.source}}};const __namedExportsOrder=["Overview"]},"./src/components/ResponsiveList/__stories__/ResponsiveList.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_home_runner_work_monday_ui_react_core_monday_ui_react_core_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),_ResponsiveList_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/ResponsiveList/__stories__/ResponsiveList.stories.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",h2:"h2",p:"p"},(0,_home_runner_work_monday_ui_react_core_monday_ui_react_core_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.RP)(),props.components),{PropsTable,UsageGuidelines}=_components;return PropsTable||_missingMdxReference("PropsTable",!0),UsageGuidelines||_missingMdxReference("UsageGuidelines",!0),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.W8,{of:_ResponsiveList_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"responsivelist",children:"ResponsiveList"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#props",children:"Props"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#usage",children:"Usage"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#feedback",children:"Feedback"})}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:'ResponsiveList is a helper component, it is in charge of "moving" elements when there container is overflowing. It moves them to a list at the end of the container.\n(the blue handle is a resize handler - not part of the component)'}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.gG,{of:_ResponsiveList_stories__WEBPACK_IMPORTED_MODULE_4__.Overview})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(PropsTable,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(UsageGuidelines,{guidelines:["Use this component when you want to handle different screen sizes","Make sure to limit the parent size so the list can 'decide' when to collapse"]})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_monday_ui_react_core_monday_ui_react_core_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.RP)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)};function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/components/ResponsiveList/__stories__/ResponsiveList.stories.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".custom-handle{position:absolute;width:20px;height:20px;display:flex;justify-content:center;align-items:center;color:var(--sb-primary-color);border-radius:var(--sb-border-radius-small);padding:2px}.custom-handle:hover{background:var(--sb-primary-background-hover-color)}.custom-handle .icon-resizer{transform:rotate(45deg)}.custom-handle-se{bottom:0;right:-8px;cursor:ew-resize}.resizable-container{position:relative}.responsive-story{display:flex;align-items:center}.responsive-story .responsive-icon-margin{margin-right:8px}.responsive-story .responsive-lst-search{width:250px}","",{version:3,sources:["webpack://./src/components/ResponsiveList/__stories__/ResponsiveList.stories.scss"],names:[],mappings:"AAAA,eACE,iBAAA,CACA,UAAA,CACA,WAAA,CACA,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,6BAAA,CACA,2CAAA,CACA,WAAA,CACA,qBACE,mDAAA,CAEF,6BACE,uBAAA,CAKJ,kBACE,QAAA,CACA,UAAA,CACA,gBAAA,CAGF,qBACE,iBAAA,CAGF,kBACE,YAAA,CACA,kBAAA,CACA,0CACE,gBAAA,CAGF,yCACE,WAAA",sourcesContent:[".custom-handle {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: var(--sb-primary-color);\n  border-radius: var(--sb-border-radius-small);\n  padding: 2px;\n  &:hover {\n    background: var(--sb-primary-background-hover-color);\n  }\n  .icon-resizer {\n    transform: rotate(45deg);\n\n  }\n\n}\n.custom-handle-se {\n  bottom: 0;\n  right: -8px;\n  cursor: ew-resize;\n}\n\n.resizable-container {\n  position: relative;\n}\n\n.responsive-story {\n  display: flex;\n  align-items: center;\n  .responsive-icon-margin {\n    margin-right: 8px;\n  }\n\n  .responsive-lst-search {\n    width: 250px;\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);