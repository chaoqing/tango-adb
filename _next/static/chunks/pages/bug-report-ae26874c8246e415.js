(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[673],{2356:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/bug-report",function(){return n(793)}])},793:function(e,r,n){"use strict";n.r(r);var i=n(6427),s=n(5034),t=n(5996),o=n(1179),a=n(6195),l=n(627),c=n(2089),g=n(3808),d=n(6663),p=n(8527),u=n.n(p),m=n(396),f=n(2790);let h=new class{async generateBugReport(){await this.bugReport.bugReport().pipeTo((0,f.yH)("bugreport.txt"))}async generateBugReportZStream(){await this.bugReport.bugReportZStream().pipeTo((0,f.yH)("bugreport.zip"))}async generateBugReportZ(){(0,g.z)(()=>{this.bugReportZInProgress=!0});let e=await this.bugReport.bugReportZ({onProgress:this.bugReport.supportsBugReportZProgress?(0,g.aD)((e,r)=>{this.bugReportZProgress=e,this.bugReportZTotalSize=r}):void 0}),r=await m.GLOBAL_STATE.adb.sync();await r.read(e).pipeTo((0,f.yH)("bugreport.zip")),r.dispose(),(0,g.z)(()=>{this.bugReportZInProgress=!1,this.bugReportZProgress=void 0,this.bugReportZTotalSize=void 0})}constructor(){this.bugReport=void 0,this.bugReportZInProgress=!1,this.bugReportZProgress=void 0,this.bugReportZTotalSize=void 0,(0,g.ky)(this,{generateBugReport:g.aD.bound,generateBugReportZStream:g.aD.bound,generateBugReportZ:g.aD.bound}),(0,g.EH)(()=>{m.GLOBAL_STATE.adb?(async()=>{let e=await c.gI.queryCapabilities(m.GLOBAL_STATE.adb);(0,g.z)(()=>{this.bugReport=e})})():(0,g.z)(()=>{this.bugReport=void 0})})}};r.default=(0,d.Pi)(()=>{var e,r;return(0,i.jsxs)(s.K,{...f.LE,children:[(0,i.jsx)(u(),{children:(0,i.jsx)("title",{children:"BugReport - Tango"})}),(0,i.jsx)(t.c,{messageBarType:o.f.info,delayedRender:!1,children:"This is the `bugreport`/`bugreportz` tool in Android"}),(0,i.jsx)(a.v,{children:(0,i.jsx)(l.K,{disabled:!h.bugReport,text:"Generate BugReport",onClick:h.generateBugReport})}),(0,i.jsx)(a.v,{children:(0,i.jsx)(l.K,{disabled:!(null===(e=h.bugReport)||void 0===e?void 0:e.supportsBugReportZStream),text:"Generate Zipped BugReport (Streaming)",onClick:h.generateBugReportZStream})}),(0,i.jsx)(a.v,{children:(0,i.jsxs)(s.K,{horizontal:!0,verticalAlign:"center",tokens:{childrenGap:8},children:[(0,i.jsx)(a.v,{children:(0,i.jsx)(l.K,{disabled:!(null===(r=h.bugReport)||void 0===r?void 0:r.supportsBugReportZ)||h.bugReportZInProgress,text:"Generate Zipped BugReport",onClick:h.generateBugReportZ})}),h.bugReportZInProgress&&(0,i.jsx)(a.v,{children:h.bugReportZTotalSize?(0,i.jsxs)("span",{children:["Progress: ",h.bugReportZProgress," /"," ",h.bugReportZTotalSize]}):(0,i.jsxs)("span",{children:["Generating... Please wait",!h.bugReport.supportsBugReportZProgress&&" (this device does not support progress)"]})})]})})]})})},5996:function(e,r,n){"use strict";n.d(r,{c:function(){return E}});var i,s,t,o,a,l=n(7956),c=n(379),g=n(4411),d=n(589),p=n(9657),u=n(3494),m=n(5126),f=n(1395),h=n(9521),x=n(1179),b=n(3564),v=n(8366),B=((i={})[x.f.info]="Info",i[x.f.warning]="Info",i[x.f.error]="ErrorBadge",i[x.f.blocked]="Blocked2",i[x.f.severeWarning]="Warning",i[x.f.success]="Completed",i),w=(0,d.y)(),R=function(e){switch(e){case x.f.blocked:case x.f.error:case x.f.severeWarning:return"assertive"}return"polite"},S=function(e){switch(e){case x.f.blocked:case x.f.error:case x.f.severeWarning:return"alert"}return"status"},k=g.forwardRef(function(e,r){var n=(0,b.k)(!1),i=n[0],s=n[1].toggle,t=(0,v.M)("MessageBar"),o=e.actions,a=e.className,l=e.children,d=e.overflowButtonAriaLabel,k=e.dismissIconProps,T=e.styles,L=e.theme,y=e.messageBarType,M=void 0===y?x.f.info:y,Z=e.onDismiss,C=void 0===Z?void 0:Z,E=e.isMultiline,N=void 0===E||E,W=e.truncated,P=e.dismissButtonAriaLabel,I=e.messageBarIconProps,_=e.role,j=e.delayedRender,z=void 0===j||j,A=e.expandButtonProps,D=(0,p.pq)(e,p.iY,["className","role"]),H=w(T,{theme:L,messageBarType:M||x.f.info,onDismiss:void 0!==C,actions:void 0!==o,truncated:W,isMultiline:N,expandSingleLine:i,className:a}),G=o||C?{"aria-describedby":t,role:"region"}:{},O=o?g.createElement("div",{className:H.actions},o):null,J=C?g.createElement(f.h,{disabled:!1,className:H.dismissal,onClick:C,iconProps:k||{iconName:"Clear"},title:P,ariaLabel:P}):null;return g.createElement("div",(0,c.pi)({ref:r,className:H.root},G),g.createElement("div",{className:H.content},g.createElement("div",{className:H.iconContainer,"aria-hidden":!0},I?g.createElement(h.J,(0,c.pi)({},I,{className:(0,u.i)(H.icon,I.className)})):g.createElement(h.J,{iconName:B[M],className:H.icon})),g.createElement("div",{className:H.text,id:t,role:_||S(M),"aria-live":R(M)},g.createElement("span",(0,c.pi)({className:H.innerText},D),z?g.createElement(m.U,null,g.createElement("span",null,l)):g.createElement("span",null,l))),!N&&!O&&W&&g.createElement("div",{className:H.expandSingleLine},g.createElement(f.h,(0,c.pi)({disabled:!1,className:H.expand,onClick:s,iconProps:{iconName:i?"DoubleChevronUp":"DoubleChevronDown"},ariaLabel:d,"aria-expanded":i},A))),!N&&O,!N&&J&&g.createElement("div",{className:H.dismissSingleLine},J),N&&J),N&&O)});k.displayName="MessageBar";var T=n(1083),L={root:"ms-MessageBar",error:"ms-MessageBar--error",blocked:"ms-MessageBar--blocked",severeWarning:"ms-MessageBar--severeWarning",success:"ms-MessageBar--success",warning:"ms-MessageBar--warning",multiline:"ms-MessageBar-multiline",singleline:"ms-MessageBar-singleline",dismissalSingleLine:"ms-MessageBar-dismissalSingleLine",expandingSingleLine:"ms-MessageBar-expandingSingleLine",content:"ms-MessageBar-content",iconContainer:"ms-MessageBar-icon",text:"ms-MessageBar-text",innerText:"ms-MessageBar-innerText",dismissSingleLine:"ms-MessageBar-dismissSingleLine",expandSingleLine:"ms-MessageBar-expandSingleLine",dismissal:"ms-MessageBar-dismissal",expand:"ms-MessageBar-expand",actions:"ms-MessageBar-actions",actionsSingleline:"ms-MessageBar-actionsSingleLine"},y=((s={})[x.f.error]="errorBackground",s[x.f.blocked]="errorBackground",s[x.f.success]="successBackground",s[x.f.warning]="warningBackground",s[x.f.severeWarning]="severeWarningBackground",s[x.f.info]="infoBackground",s),M=((t={})[x.f.error]="errorIcon",t[x.f.blocked]="errorIcon",t[x.f.success]="successIcon",t[x.f.warning]="warningIcon",t[x.f.severeWarning]="severeWarningIcon",t[x.f.info]="infoIcon",t),Z=((o={})[x.f.error]="#ff0000",o[x.f.blocked]="#ff0000",o[x.f.success]="#bad80a",o[x.f.warning]="#fff100",o[x.f.severeWarning]="#ff0000",o[x.f.info]="WindowText",o),C=((a={})[x.f.error]="#e81123",a[x.f.blocked]="#e81123",a[x.f.success]="#107c10",a[x.f.warning]="#966400",a[x.f.severeWarning]="#d83b01",a[x.f.info]="WindowText",a),E=(0,l.z)(k,function(e){var r,n,i,s,t,o,a,l,g,d,p,u=e.theme,m=e.className,f=e.onDismiss,h=e.truncated,b=e.isMultiline,v=e.expandSingleLine,B=e.messageBarType,w=void 0===B?x.f.info:B,R=u.semanticColors,S=u.fonts,k=(0,T.sK)(0,T.mV),E=(0,T.Cn)(L,u),N={fontSize:T.ld.xSmall,height:10,lineHeight:"10px",color:R.messageText,selectors:((r={})[T.qJ]=(0,c.pi)((0,c.pi)({},(0,T.xM)()),{color:"WindowText"}),r)},W=[(0,T.GL)(u,{inset:1,highContrastStyle:{outlineOffset:"-6px",outline:"1px solid Highlight"},borderColor:"transparent"}),{flexShrink:0,width:32,height:32,padding:"8px 12px",selectors:{"& .ms-Button-icon":N,":hover":{backgroundColor:"transparent"},":active":{backgroundColor:"transparent"}}}];return{root:[E.root,S.medium,w===x.f.error&&E.error,w===x.f.blocked&&E.blocked,w===x.f.severeWarning&&E.severeWarning,w===x.f.success&&E.success,w===x.f.warning&&E.warning,b?E.multiline:E.singleline,!b&&f&&E.dismissalSingleLine,!b&&h&&E.expandingSingleLine,{background:R[y[w]],boxSizing:"border-box",color:R.messageText,minHeight:32,width:"100%",display:"flex",wordBreak:"break-word",selectors:((n={".ms-Link":{color:R.messageLink,selectors:{":hover":{color:R.messageLinkHovered}}}})[T.qJ]=(0,c.pi)((0,c.pi)({},(0,T.xM)()),{background:"transparent",border:"1px solid ".concat(Z[w]),color:"WindowText"}),n[T.bO]={border:"1px solid ".concat(C[w])},n)},b&&{flexDirection:"column"},m],content:[E.content,((i={display:"flex",width:"100%",lineHeight:"normal"})[k]={display:"grid",gridTemplateColumns:"auto 1fr auto",gridTemplateRows:"1fr auto",gridTemplateAreas:'\n            "icon text close"\n            "action action action"\n          '},i)],iconContainer:[E.iconContainer,((s={fontSize:T.ld.medium,minWidth:16,minHeight:16,display:"flex",flexShrink:0,margin:"8px 0 8px 12px"})[k]={gridArea:"icon"},s)],icon:{color:R[M[w]],selectors:((t={})[T.qJ]=(0,c.pi)((0,c.pi)({},(0,T.xM)()),{color:"WindowText"}),t)},text:[E.text,(0,c.pi)((0,c.pi)({minWidth:0,display:"flex",flexGrow:1,margin:8},S.small),((o={})[k]={gridArea:"text"},o.selectors=((a={})[T.qJ]=(0,c.pi)({},(0,T.xM)()),a),o)),!f&&{marginRight:12}],innerText:[E.innerText,{lineHeight:16,selectors:{"& span a:last-child":{paddingLeft:4}}},h&&{overflow:"visible",whiteSpace:"pre-wrap"},!b&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},!b&&!h&&{selectors:((l={})[k]={overflow:"visible",whiteSpace:"pre-wrap"},l)},v&&{overflow:"visible",whiteSpace:"pre-wrap"}],dismissSingleLine:[E.dismissSingleLine,((g={})[k]={gridArea:"close"},g)],expandSingleLine:E.expandSingleLine,dismissal:[E.dismissal,W],expand:[E.expand,W],actions:[b?E.actions:E.actionsSingleline,((d={display:"flex",flexGrow:0,flexShrink:0,flexBasis:"auto",flexDirection:"row-reverse",alignItems:"center",margin:"0 12px 0 8px",forcedColorAdjust:"auto",MsHighContrastAdjust:"auto"})[k]={gridArea:"action",marginRight:8,marginBottom:8},d.selectors={"& button:nth-child(n+2)":((p={marginLeft:8})[k]={marginBottom:0},p)},d),b&&{marginBottom:8},f&&!b&&{marginRight:0}]}},void 0,{scope:"MessageBar"})},1179:function(e,r,n){"use strict";var i,s;n.d(r,{f:function(){return i}}),(s=i||(i={}))[s.info=0]="info",s[s.error=1]="error",s[s.blocked=2]="blocked",s[s.severeWarning=3]="severeWarning",s[s.success=4]="success",s[s.warning=5]="warning"},5126:function(e,r,n){"use strict";n.d(r,{U:function(){return o}});var i=n(379),s=n(4411),t=n(5983),o=function(e){function r(r){var n=e.call(this,r)||this;return n.state={isRendered:void 0===(0,t.J)()},n}return(0,i.ZT)(r,e),r.prototype.componentDidMount=function(){var e=this,r=this.props.delay;this._timeoutId=window.setTimeout(function(){e.setState({isRendered:!0})},r)},r.prototype.componentWillUnmount=function(){this._timeoutId&&clearTimeout(this._timeoutId)},r.prototype.render=function(){return this.state.isRendered?s.Children.only(this.props.children):null},r.defaultProps={delay:0},r}(s.Component)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=2356)}),_N_E=e.O()}]);
//# sourceMappingURL=bug-report-ae26874c8246e415.js.map