"use strict";(self.webpackChunk_totalsoft_rocket_ui=self.webpackChunk_totalsoft_rocket_ui||[]).push([[535],{"./src/stories/feedback/Dialog/Dialog.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Actions:function(){return Actions},Default:function(){return Default},DefaultActions:function(){return DefaultActions},Dividers:function(){return Dividers},TextContent:function(){return TextContent},TransparentBackground:function(){return TransparentBackground},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Dialog_stories}});var react=__webpack_require__("./.yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),components=__webpack_require__("./src/components/index.ts"),Grid=__webpack_require__("./.yarn/__virtual__/@mui-material-virtual-750dcfbb42/0/cache/@mui-material-npm-5.13.1-adaee7315a-0464af86b7.zip/node_modules/@mui/material/Grid/Grid.js"),jsx_runtime=__webpack_require__("./.yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/jsx-runtime.js"),title="Dialog component",_mocks_text="Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.",objectWithoutPropertiesLoose=(Grid.ZP,components.Zb,__webpack_require__("./.yarn/cache/@babel-runtime-npm-7.21.5-7d058028a3-358f2779d3.zip/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js")),objectWithoutPropertiesLoose_default=__webpack_require__.n(objectWithoutPropertiesLoose),_excluded=["button"],DefaultPreview=function DefaultPreview(_ref){var button=_ref.button,props=objectWithoutPropertiesLoose_default()(_ref,_excluded),_useState=(0,react.useState)(!1),open=_useState[0],setOpen=_useState[1],toggle=(0,react.useCallback)((function(){return setOpen((function(current){return!current}))}),[]);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(components.zx,{children:button,variant:"outlined",onClick:toggle}),(0,jsx_runtime.jsx)(components.Vq,Object.assign({},props,{id:"default-dialog",open:open,onClose:toggle}))]})};DefaultPreview.__docgenInfo={description:"",methods:[],displayName:"DefaultPreview"};var Dialog_DefaultPreview=DefaultPreview,ActionsPreview_excluded=["button"],ActionsPreview=function ActionsPreview(_ref){var button=_ref.button,props=objectWithoutPropertiesLoose_default()(_ref,ActionsPreview_excluded),_useState=(0,react.useState)(!1),open=_useState[0],setOpen=_useState[1],toggle=(0,react.useCallback)((function(){return setOpen((function(current){return!current}))}),[]);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(components.zx,{children:button,variant:"outlined",onClick:toggle}),(0,jsx_runtime.jsx)(components.Vq,Object.assign({},props,{id:"default-dialog",open:open,onClose:toggle,showX:!1,disableBackdropClick:!0,disableEscapeKeyDown:!0,content:(0,jsx_runtime.jsxs)(Grid.ZP,{container:!0,spacing:2,justifyContent:"center",sx:{pt:3},children:[(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,xs:10,children:(0,jsx_runtime.jsx)(components.nv,{label:"username",fullWidth:!0})}),(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,xs:10,children:(0,jsx_runtime.jsx)(components.nv,{label:"password",type:"password",fullWidth:!0})})]}),actions:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(components.zx,{onClick:toggle,color:"primary",variant:"contained",size:"small",children:"cancel"}),(0,jsx_runtime.jsx)(components.zx,{onClick:toggle,color:"primary",variant:"contained",size:"small",children:"continue"})]})}))]})};ActionsPreview.__docgenInfo={description:"",methods:[],displayName:"ActionsPreview"};var _Default$parameters,_Default$parameters2,_Default$parameters2$,_Default$parameters3,_Default$parameters3$,_TextContent$paramete,_TextContent$paramete2,_TextContent$paramete3,_TextContent$paramete4,_TextContent$paramete5,_Dividers$parameters,_Dividers$parameters2,_Dividers$parameters3,_Dividers$parameters4,_Dividers$parameters5,_TransparentBackgroun,_TransparentBackgroun2,_TransparentBackgroun3,_TransparentBackgroun4,_TransparentBackgroun5,_Actions$parameters,_Actions$parameters2,_Actions$parameters2$,_Actions$parameters3,_Actions$parameters3$,_DefaultActions$param,_DefaultActions$param2,_DefaultActions$param3,_DefaultActions$param4,_DefaultActions$param5,Dialog_ActionsPreview=ActionsPreview,Dialog_stories={title:"Components/Feedback/Dialog",component:components.Vq,tags:["autodocs"]},Default={parameters:{docs:{source:{code:'\n        <Button children="basic dialog" variant="outlined" onClick={toggle} />\n        <Dialog id="default-dialog" title="Title" content="Some text content" open={open} onClose={toggle} />\n        ',format:!0}}},args:{title:title,content:_mocks_text},render:function render(args){return(0,jsx_runtime.jsx)(Dialog_DefaultPreview,Object.assign({button:"Open Dialog"},args))}},TextContent={parameters:{docs:{source:{code:'\n        <Button children="basic dialog" variant="outlined" onClick={toggle} />\n        <Dialog id="default-dialog" title="Title" textContent="Some text content" open={open} onClose={toggle} />\n        ',format:!0}}},args:{title:title,textContent:"A Dialog is a type of modal window that appears in front of app content to provide critical information or ask for a decision. Dialogs disable all app functionality when they appear, and remain on screen until confirmed, dismissed, or a required action has been taken. Dialogs are purposefully interruptive, so they should be used sparingly. Simple dialogs can provide additional details or actions about a list item. For example, they can display avatars, icons, clarifying subtext, or orthogonal actions (such as adding an account). A Dialog is a type of modal window that appears in front of app content to provide critical information or ask for a decision. Dialogs disable all app functionality when they appear, and remain on screen until confirmed, dismissed, or a required action has been taken. Dialogs are purposefully interruptive, so they should be used sparingly. Simple dialogs can provide additional details or actions about a list item. For example, they can display avatars, icons, clarifying subtext, or orthogonal actions (such as adding an account). A Dialog is a type of modal window that appears in front of app content to provide critical information or ask for a decision. Dialogs disable all app functionality when they appear, and remain on screen until confirmed, dismissed, or a required action has been taken. Dialogs are purposefully interruptive, so they should be used sparingly. Simple dialogs can provide additional details or actions about a list item. For example, they can display avatars, icons, clarifying subtext, or orthogonal actions (such as adding an account). A Dialog is a type of modal window that appears in front of app content to provide critical information or ask for a decision. Dialogs disable all app functionality when they appear, and remain on screen until confirmed, dismissed, or a required action has been taken. Dialogs are purposefully interruptive, so they should be used sparingly. Simple dialogs can provide additional details or actions about a list item. For example, they can display avatars, icons, clarifying subtext, or orthogonal actions (such as adding an account). A Dialog is a type of modal window that appears in front of app content to provide critical information or ask for a decision. Dialogs disable all app functionality when they appear, and remain on screen until confirmed, dismissed, or a required action has been taken. Dialogs are purposefully interruptive, so they should be used sparingly. Simple dialogs can provide additional details or actions about a list item. For example, they can display avatars, icons, clarifying subtext, or orthogonal actions (such as adding an account). A Dialog is a type of modal window that appears in front of app content to provide critical information or ask for a decision. Dialogs disable all app functionality when they appear, and remain on screen until confirmed, dismissed, or a required action has been taken. Dialogs are purposefully interruptive, so they should be used sparingly. Simple dialogs can provide additional details or actions about a list item. For example, they can display avatars, icons, clarifying subtext, or orthogonal actions (such as adding an account)."},render:function render(args){return(0,jsx_runtime.jsx)(Dialog_DefaultPreview,Object.assign({button:"Open Dialog"},args))}},Dividers={parameters:{docs:{source:{code:'\n        <Button children="basic dialog" variant="outlined" onClick={toggle} />\n        <Dialog id="default-dialog" dividers title="Title" textContent="Some text content" open={open} onClose={toggle} />\n        ',format:!0}}},args:{title:title,textContent:_mocks_text,dividers:!0},render:function render(args){return(0,jsx_runtime.jsx)(Dialog_DefaultPreview,Object.assign({button:"Open Dialog"},args))}},TransparentBackground={parameters:{docs:{source:{code:'\n        <Button children="basic dialog" variant="outlined" onClick={toggle} />\n        <Dialog id="default-dialog" transparentBackdrop title="Title" textContent="Some text content" open={open} onClose={toggle} />\n        ',format:!0}}},args:{title:title,textContent:_mocks_text,transparentBackdrop:!0},render:function render(args){return(0,jsx_runtime.jsx)(Dialog_DefaultPreview,Object.assign({button:"Open Dialog"},args))}},Actions={parameters:{docs:{source:{code:'\n        <Button children={button} variant="outlined" onClick={toggle} />\n        <Dialog\n          id="default-dialog"\n          open={open}\n          onClose={toggle}\n          showX={false}\n          disableBackdropClick={true}\n          disableEscapeKeyDown={true}\n          content={\n            <Grid container spacing={2} justifyContent={\'center\'} sx={{ pt: 3 }}>\n              <Grid item xs={10}>\n                <TextField label="username" fullWidth />\n              </Grid>\n              <Grid item xs={10}>\n                <TextField label="password" type="password" fullWidth />\n              </Grid>\n            </Grid>\n          }\n          actions={\n            <>\n              <Button onClick={toggle} color="primary" variant="contained" size="small">\n                {\'cancel\'}\n              </Button>\n              <Button onClick={toggle} color="primary" variant="contained" size="small">\n                {\'continue\'}\n              </Button>\n            </>\n          }\n        />\n        ',format:!0}}},args:{title:title,textContent:_mocks_text},render:function render(args){return(0,jsx_runtime.jsx)(Dialog_ActionsPreview,Object.assign({button:"Open Dialog"},args))}},DefaultActions={parameters:{docs:{source:{code:'\n        <Button children="basic dialog" variant="outlined" onClick={toggle} />\n        <Dialog id="default-dialog" defaultActions title="Title" textContent="Some text content" open={open} onClose={toggle} />\n        ',format:!0}}},args:{title:title,textContent:_mocks_text,defaultActions:!0},render:function render(args){return(0,jsx_runtime.jsx)(Dialog_DefaultPreview,Object.assign({button:"Open Dialog"},args))}};Default.parameters=Object.assign({},Default.parameters,{docs:Object.assign({},null==(_Default$parameters=Default.parameters)?void 0:_Default$parameters.docs,{source:Object.assign({originalSource:'{\n  parameters: {\n    docs: {\n      source: {\n        code: `\n        <Button children="basic dialog" variant="outlined" onClick={toggle} />\n        <Dialog id="default-dialog" title="Title" content="Some text content" open={open} onClose={toggle} />\n        `,\n        format: true\n      }\n    }\n  },\n  args: {\n    title,\n    content: text\n  },\n  render: args => <DefaultPreview button="Open Dialog" {...args} />\n}'},null==(_Default$parameters2=Default.parameters)||null==(_Default$parameters2$=_Default$parameters2.docs)?void 0:_Default$parameters2$.source),description:Object.assign({story:"Simple dialogs can provide additional details or actions about a list item. For example, they can display avatars, icons, clarifying subtext, or orthogonal actions (such as adding an account).\n\nTouch mechanics:\n- Choosing an option immediately commits the option and closes the menu\n- Touching outside of the dialog, or pressing Back, cancels the action and closes the dialog"},null==(_Default$parameters3=Default.parameters)||null==(_Default$parameters3$=_Default$parameters3.docs)?void 0:_Default$parameters3$.description)})}),TextContent.parameters=Object.assign({},TextContent.parameters,{docs:Object.assign({},null==(_TextContent$paramete=TextContent.parameters)?void 0:_TextContent$paramete.docs,{source:Object.assign({originalSource:'{\n  parameters: {\n    docs: {\n      source: {\n        code: `\n        <Button children="basic dialog" variant="outlined" onClick={toggle} />\n        <Dialog id="default-dialog" title="Title" textContent="Some text content" open={open} onClose={toggle} />\n        `,\n        format: true\n      }\n    }\n  },\n  args: {\n    title,\n    textContent: longText\n  },\n  render: args => <DefaultPreview button="Open Dialog" {...args} />\n}'},null==(_TextContent$paramete2=TextContent.parameters)||null==(_TextContent$paramete3=_TextContent$paramete2.docs)?void 0:_TextContent$paramete3.source),description:Object.assign({story:"Text content of the dialog. If received, it will be wrapped by the MUI DialogContentText component."},null==(_TextContent$paramete4=TextContent.parameters)||null==(_TextContent$paramete5=_TextContent$paramete4.docs)?void 0:_TextContent$paramete5.description)})}),Dividers.parameters=Object.assign({},Dividers.parameters,{docs:Object.assign({},null==(_Dividers$parameters=Dividers.parameters)?void 0:_Dividers$parameters.docs,{source:Object.assign({originalSource:'{\n  parameters: {\n    docs: {\n      source: {\n        code: `\n        <Button children="basic dialog" variant="outlined" onClick={toggle} />\n        <Dialog id="default-dialog" dividers title="Title" textContent="Some text content" open={open} onClose={toggle} />\n        `,\n        format: true\n      }\n    }\n  },\n  args: {\n    title,\n    textContent: text,\n    dividers: true\n  },\n  render: args => <DefaultPreview button="Open Dialog" {...args} />\n}'},null==(_Dividers$parameters2=Dividers.parameters)||null==(_Dividers$parameters3=_Dividers$parameters2.docs)?void 0:_Dividers$parameters3.source),description:Object.assign({story:"To add something more to your dialog design, you can set the `dividers` property to `true` and it will display dividers at the top and bottom of DialogContent."},null==(_Dividers$parameters4=Dividers.parameters)||null==(_Dividers$parameters5=_Dividers$parameters4.docs)?void 0:_Dividers$parameters5.description)})}),TransparentBackground.parameters=Object.assign({},TransparentBackground.parameters,{docs:Object.assign({},null==(_TransparentBackgroun=TransparentBackground.parameters)?void 0:_TransparentBackgroun.docs,{source:Object.assign({originalSource:'{\n  parameters: {\n    docs: {\n      source: {\n        code: `\n        <Button children="basic dialog" variant="outlined" onClick={toggle} />\n        <Dialog id="default-dialog" transparentBackdrop title="Title" textContent="Some text content" open={open} onClose={toggle} />\n        `,\n        format: true\n      }\n    }\n  },\n  args: {\n    title,\n    textContent: text,\n    transparentBackdrop: true\n  },\n  render: args => <DefaultPreview button="Open Dialog" {...args} />\n}'},null==(_TransparentBackgroun2=TransparentBackground.parameters)||null==(_TransparentBackgroun3=_TransparentBackgroun2.docs)?void 0:_TransparentBackgroun3.source),description:Object.assign({story:"By setting the `transparentBackdrop` property to `true`, the backdrop (the outer background) will be transparent."},null==(_TransparentBackgroun4=TransparentBackground.parameters)||null==(_TransparentBackgroun5=_TransparentBackgroun4.docs)?void 0:_TransparentBackgroun5.description)})}),Actions.parameters=Object.assign({},Actions.parameters,{docs:Object.assign({},null==(_Actions$parameters=Actions.parameters)?void 0:_Actions$parameters.docs,{source:Object.assign({originalSource:'{\n  parameters: {\n    docs: {\n      source: {\n        code: `\n        <Button children={button} variant="outlined" onClick={toggle} />\n        <Dialog\n          id="default-dialog"\n          open={open}\n          onClose={toggle}\n          showX={false}\n          disableBackdropClick={true}\n          disableEscapeKeyDown={true}\n          content={\n            <Grid container spacing={2} justifyContent={\'center\'} sx={{ pt: 3 }}>\n              <Grid item xs={10}>\n                <TextField label="username" fullWidth />\n              </Grid>\n              <Grid item xs={10}>\n                <TextField label="password" type="password" fullWidth />\n              </Grid>\n            </Grid>\n          }\n          actions={\n            <>\n              <Button onClick={toggle} color="primary" variant="contained" size="small">\n                {\'cancel\'}\n              </Button>\n              <Button onClick={toggle} color="primary" variant="contained" size="small">\n                {\'continue\'}\n              </Button>\n            </>\n          }\n        />\n        `,\n        format: true\n      }\n    }\n  },\n  args: {\n    title,\n    textContent: text\n  },\n  render: args => <ActionsPreview button="Open Dialog" {...args} />\n}'},null==(_Actions$parameters2=Actions.parameters)||null==(_Actions$parameters2$=_Actions$parameters2.docs)?void 0:_Actions$parameters2$.source),description:Object.assign({story:"To implement additional actions to our Dialog content, take advantage of the `actions` property. It can receive any ReactNode value."},null==(_Actions$parameters3=Actions.parameters)||null==(_Actions$parameters3$=_Actions$parameters3.docs)?void 0:_Actions$parameters3$.description)})}),DefaultActions.parameters=Object.assign({},DefaultActions.parameters,{docs:Object.assign({},null==(_DefaultActions$param=DefaultActions.parameters)?void 0:_DefaultActions$param.docs,{source:Object.assign({originalSource:'{\n  parameters: {\n    docs: {\n      source: {\n        code: `\n        <Button children="basic dialog" variant="outlined" onClick={toggle} />\n        <Dialog id="default-dialog" defaultActions title="Title" textContent="Some text content" open={open} onClose={toggle} />\n        `,\n        format: true\n      }\n    }\n  },\n  args: {\n    title,\n    textContent: text,\n    defaultActions: true\n  },\n  render: args => <DefaultPreview button="Open Dialog" {...args} />\n}'},null==(_DefaultActions$param2=DefaultActions.parameters)||null==(_DefaultActions$param3=_DefaultActions$param2.docs)?void 0:_DefaultActions$param3.source),description:Object.assign({story:"We can set default `Yes/No` actions by passing `defaultActions` property to `true.`\n\nIf `true`, the following properties would be required: `onYes` and @onClose.\n\nThe two default buttons can be configured using `defaultActionsProps` property."},null==(_DefaultActions$param4=DefaultActions.parameters)||null==(_DefaultActions$param5=_DefaultActions$param4.docs)?void 0:_DefaultActions$param5.description)})});var __namedExportsOrder=["Default","TextContent","Dividers","TransparentBackground","Actions","DefaultActions"]}}]);