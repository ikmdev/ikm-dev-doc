"use strict";(self.webpackChunkikm_dev_doc=self.webpackChunkikm_dev_doc||[]).push([[911],{3407:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});const r={contactContainer:"contactContainer_PEaS",inputGroup:"inputGroup_uYU3"},n={_origin:"https://api.emailjs.com"},s=(e,t,a)=>{if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!a)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class i{constructor(e){this.status=e.status,this.text=e.responseText}}const o=(e,t,a={})=>new Promise(((r,s)=>{const o=new XMLHttpRequest;o.addEventListener("load",(({target:e})=>{const t=new i(e);200===t.status||"OK"===t.text?r(t):s(t)})),o.addEventListener("error",(({target:e})=>{s(new i(e))})),o.open("POST",n._origin+e,!0),Object.keys(a).forEach((e=>{o.setRequestHeader(e,a[e])})),o.send(t)})),l={init:(e,t="https://api.emailjs.com")=>{n._userID=e,n._origin=t},send:(e,t,a,r)=>{const i=r||n._userID;s(i,e,t);const l={lib_version:"3.2.0",user_id:i,service_id:e,template_id:t,template_params:a};return o("/api/v1.0/email/send",JSON.stringify(l),{"Content-type":"application/json"})},sendForm:(e,t,a,r)=>{const i=r||n._userID,l=(e=>{let t;if(t="string"==typeof e?document.querySelector(e):e,!t||"FORM"!==t.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t})(a);s(i,e,t);const m=new FormData(l);return m.append("lib_version","3.2.0"),m.append("service_id",e),m.append("template_id",t),m.append("user_id",i),o("/api/v1.0/email/send-form",m)}};var m=a(6540);function d(){const[e,t]=(0,m.useState)(!1),[a,n]=(0,m.useState)("");return m.createElement("div",{className:r.contactContainer},m.createElement("h1",null,"Get in Touch"),m.createElement("form",{onSubmit:e=>{e.preventDefault(),t(!0),n("Sending...");const a={from_name:e.target.firstName.value+" "+e.target.lastName.value,reply_to:e.target._replyto.value,message:e.target.message.value,to_email:"contact@ikm.dev"};l.send("service_una1dxn","template_v4178vs",a,"8THz3yZai1WS-elbi").then((e=>{console.log(e.status),console.log(e),t(!1),n("Sent!")}),(e=>{console.log(e),t(!1),n("Failed to send")}))}},m.createElement("div",{className:r.inputGroup},m.createElement("input",{type:"text",id:"firstName",name:"firstName",required:!0,placeholder:"First Name"})),m.createElement("div",{className:r.inputGroup},m.createElement("input",{type:"text",id:"lastName",name:"lastName",required:!0,placeholder:"Last Name"})),m.createElement("div",{className:r.inputGroup},m.createElement("input",{type:"email",id:"_replyto",name:"_replyto",required:!0,placeholder:"Email"})),m.createElement("textarea",{id:"message",name:"message",rows:5,required:!0,placeholder:"What's on your mind..."}),m.createElement("br",null),m.createElement("input",{type:"submit",value:e?"Sending...":a||"Send",disabled:e})))}}}]);