(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[495],{3845:function(e,r,t){"use strict";var a=t(4836);r.Z=void 0;var o=a(t(4938)),n=t(5893),l=(0,o.default)((0,n.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"}),"LockOutlined");r.Z=l},9661:function(e,r,t){"use strict";t.d(r,{Z:function(){return j}});var a=t(3366),o=t(7462),n=t(7294),l=t(6010),i=t(4780),s=t(948),c=t(1657),u=t(8169),d=t(5893),m=(0,u.Z)((0,d.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),f=t(1588),h=t(4867);function p(e){return(0,h.Z)("MuiAvatar",e)}(0,f.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);let g=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],v=e=>{let{classes:r,variant:t,colorDefault:a}=e;return(0,i.Z)({root:["root",t,a&&"colorDefault"],img:["img"],fallback:["fallback"]},p,r)},x=(0,s.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver(e,r){let{ownerState:t}=e;return[r.root,r[t.variant],t.colorDefault&&r.colorDefault]}})(({theme:e,ownerState:r})=>(0,o.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===r.variant&&{borderRadius:(e.vars||e).shape.borderRadius},"square"===r.variant&&{borderRadius:0},r.colorDefault&&(0,o.Z)({color:(e.vars||e).palette.background.default},e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===e.palette.mode?e.palette.grey[400]:e.palette.grey[600]}))),Z=(0,s.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,r)=>r.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),b=(0,s.ZP)(m,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,r)=>r.fallback})({width:"75%",height:"75%"}),w=n.forwardRef(function(e,r){let t=(0,c.Z)({props:e,name:"MuiAvatar"}),{alt:i,children:s,className:u,component:m="div",imgProps:f,sizes:h,src:p,srcSet:w,variant:j="circular"}=t,y=(0,a.Z)(t,g),k=null,C=function({crossOrigin:e,referrerPolicy:r,src:t,srcSet:a}){let[o,l]=n.useState(!1);return n.useEffect(()=>{if(!t&&!a)return;l(!1);let o=!0,n=new Image;return n.onload=()=>{o&&l("loaded")},n.onerror=()=>{o&&l("error")},n.crossOrigin=e,n.referrerPolicy=r,n.src=t,a&&(n.srcset=a),()=>{o=!1}},[e,r,t,a]),o}((0,o.Z)({},f,{src:p,srcSet:w})),S=p||w,_=S&&"error"!==C,M=(0,o.Z)({},t,{colorDefault:!_,component:m,variant:j}),R=v(M);return k=_?(0,d.jsx)(Z,(0,o.Z)({alt:i,src:p,srcSet:w,sizes:h,ownerState:M,className:R.img},f)):null!=s?s:S&&i?i[0]:(0,d.jsx)(b,{className:R.fallback}),(0,d.jsx)(x,(0,o.Z)({as:m,ownerState:M,className:(0,l.Z)(R.root,u),ref:r},y,{children:k}))});var j=w},922:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/register",function(){return t(9339)}])},3346:function(e,r,t){"use strict";t.d(r,{M:function(){return a}});let a="https://blog.faculdaderealiza.com.br:3030"},9339:function(e,r,t){"use strict";t.r(r);var a=t(5893),o=t(7294),n=t(6720),l=t(9520),i=t(1927),s=t(9306),c=t(4285),u=t(7357),d=t(3845),m=t(5861),f=t(9661),h=t(3321),p=t(1163),g=t(8167),v=t(3346);let x=()=>{let[e,r]=o.useState({nome:"",email:"",password:""}),t=(0,p.useRouter)(),[x,Z]=o.useState(""),b=e=>{r(r=>({...r,[e.target.name]:e.target.value}))},w=async r=>{r.preventDefault();try{await g.Z.post("".concat(v.M,"/api/register"),e),alert("Usu\xe1rio cirado com sucesso"),t.push("/login")}catch(a){Z(a.response.data.message)}};return(0,a.jsx)(i.Z,{theme:s.r,children:(0,a.jsxs)(l.Z,{component:"main",maxWidth:"xs",sx:{paddingTop:10},children:[(0,a.jsx)(n.ZP,{}),(0,a.jsxs)(u.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,a.jsx)(f.Z,{sx:{m:1,bgcolor:"primay.main"},children:(0,a.jsx)(d.Z,{})}),(0,a.jsx)(m.Z,{component:"h1",variant:"h5",children:"Cadastre-se"}),(0,a.jsxs)(u.Z,{component:"form",onSubmit:w,noValidate:!0,sx:{mt:1},children:[(0,a.jsx)(c.Z,{margin:"normal",required:!0,fullWidth:!0,id:"nome",label:"Nome",name:"nome",autoComplete:"nome",autoFocus:!0,onChange:b}),(0,a.jsx)(c.Z,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email",name:"email",autoComplete:"email",autoFocus:!0,onChange:b}),(0,a.jsx)(c.Z,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Senha",type:"password",id:"password",autoComplete:"current-password",onChange:b}),(0,a.jsx)(h.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2,color:"#fff",bgcolor:"pallete.primary.main","&:hover":{backgroundColor:"pallete.primary.dark"}},onClick:w,children:"Cadastrar"})]})]})]})})};r.default=x}},function(e){e.O(0,[882,774,888,179],function(){return e(e.s=922)}),_N_E=e.O()}]);