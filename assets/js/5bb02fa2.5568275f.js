"use strict";(self.webpackChunkikm_dev_doc=self.webpackChunkikm_dev_doc||[]).push([[821],{5680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>g});var n=a(6540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,g=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return a?n.createElement(g,i(i({ref:t},u),{},{components:a})):n.createElement(g,i({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},347:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>w,default:()=>k,frontMatter:()=>f,metadata:()=>v,toc:()=>b});var n=a(8168),r=a(6540),o=a(5680),i=a(870),l=a(2303),s=a(1682),p=a(6976),u=a(3104);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function c(e){const{lazy:t,block:a,defaultValue:o,values:l,groupId:c,className:d}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=l??g.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),h=(0,s.X)(y,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===o?o:o??g.find((e=>e.props.default))?.props.value??g[0].props.value;if(null!==f&&!y.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:v}=(0,p.x)(),[b,N]=(0,r.useState)(f),O=[],{blockElementScrollPositionUntilNextRender:k}=(0,u.a_)();if(null!=c){const e=w[c];null!=e&&e!==b&&y.some((t=>t.value===e))&&N(e)}const _=e=>{const t=e.currentTarget,a=O.indexOf(t),n=y[a].value;n!==b&&(k(t),N(n),null!=c&&v(c,String(n)))},T=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=O.indexOf(e.currentTarget)+1;t=O[a]??O[0];break}case"ArrowLeft":{const a=O.indexOf(e.currentTarget)-1;t=O[a]??O[O.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,i.A)("tabs-container",m.tabList)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":a},d)},y.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,key:t,ref:e=>O.push(e),onKeyDown:T,onFocus:_,onClick:_},o,{className:(0,i.A)("tabs__item",m.tabItem,o?.className,{"tabs__item--active":b===t})}),a??t)}))),t?(0,r.cloneElement)(g.filter((e=>e.props.value===b))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==b})))))}function d(e){const t=(0,l.A)();return r.createElement(c,(0,n.A)({key:String(t)},e))}const g={tabItem:"tabItem_Ymn6"};function y(e){let{children:t,hidden:a,className:n}=e;return r.createElement("div",{role:"tabpanel",className:(0,i.A)(g.tabItem,n),hidden:a},t)}const h={textContent:"textContent_dAbS",imageContainer:"imageContainer_pzUh"},f={},w="Komet User Guide",v={type:"mdx",permalink:"/install/guide/",source:"@site/src/pages/install/guide/index.md",title:"Komet User Guide",description:"Downloading Komet",frontMatter:{}},b=[{value:"Downloading Komet",id:"downloading-komet",level:2},{value:"Windows",id:"windows",level:3},{value:"iOS",id:"ios",level:3},{value:"First Time Set Up",id:"first-time-set-up",level:2},{value:"Importing and Reading-In Data",id:"importing-and-reading-in-data",level:2}],N={toc:b},O="wrapper";function k(e){let{components:t,...a}=e;return(0,o.yg)(O,(0,n.A)({},N,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"komet-user-guide"},"Komet User Guide"),(0,o.yg)("h2",{id:"downloading-komet"},"Downloading Komet"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Use the ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/ikmdev/komet/releases"},"Komet Releases")," link to download the latest Komet release build for your appropriate operating system.")),(0,o.yg)("div",{className:h.imageContainer},(0,o.yg)("img",{src:"/img/user_guide_images/Komet_User_Guide_One.png",width:"500"})),(0,o.yg)("ol",{start:2},(0,o.yg)("li",{parentName:"ol"},"Save the download file to the location of your choice."),(0,o.yg)("li",{parentName:"ol"},'The Komet installer will automatically create a "Solor" folder in your ',(0,o.yg)("inlineCode",{parentName:"li"},"OSDisk (C:) -> Users -> [your personal user name]")," folder.")),(0,o.yg)(d,{defaultValue:"microsoftos",values:[{label:"Microsoft OS",value:"microsoftos"},{label:"Apple iOS",value:"ios"}],mdxType:"Tabs"},(0,o.yg)(y,{value:"microsoftos",mdxType:"TabItem"},(0,o.yg)("h3",{id:"windows"},"Windows"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"From your browser\u2019s downloads, open the Komet Installer file.")),(0,o.yg)("div",{className:h.imageContainer},(0,o.yg)("img",{src:"/img/user_guide_images/windows1.png",width:"500"})),(0,o.yg)("ol",{start:2},(0,o.yg)("li",{parentName:"ol"},'A message will pop up asking if you want to run the Komet Installer File, click "Run".')),(0,o.yg)("div",{className:h.imageContainer},(0,o.yg)("img",{src:"/img/user_guide_images/windows2.png",width:"500"})),(0,o.yg)("ol",{start:3},(0,o.yg)("li",{parentName:"ol"},"Once complete, nothing will automatically pop-up, so you will need to verify the install was successful by searching in your applications folder or your Operating System\u2019s search feature for the Komet app."))),(0,o.yg)(y,{value:"ios",mdxType:"TabItem"},(0,o.yg)("h3",{id:"ios"},"iOS"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"On Mac, run the installer and follow the onscreen installation instructions until installation is complete.")),(0,o.yg)("div",{className:h.imageContainer},(0,o.yg)("img",{src:"/img/user_guide_images/ios1.png",width:"500"})),(0,o.yg)("ol",{start:2},(0,o.yg)("li",{parentName:"ol"},"Once complete, nothing will automatically pop-up, so you will need to verify the install was successful by searching in your applications folder or your Operating System\u2019s search feature for the Komet app.")))),(0,o.yg)("h2",{id:"first-time-set-up"},"First Time Set Up"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("em",{parentName:"p"},"For Windows"),", go to your search bar or apps folder and open \u201cKomet\u201d. ",(0,o.yg)("em",{parentName:"p"},"For Mac"),", go to your applications folder, search for Komet, and run the desktop version Komet contributed application. ")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"A Komet Startup window will open. Change data source to \u201cOpen SpinedArrayStore\u201d.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Select the data source you would like to use and click \u201cOk\u201d in the bottom right. Proceed to Step 8. ")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"If you do not see a data source, copy and paste the zip file containing the desired data to the ",(0,o.yg)("inlineCode",{parentName:"p"},"OSDisk (C:) -> Users -> [your personal user name] -> Solor")," folder. ")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},'Right click the desired data zip file and select "Unzip Here" so the data is stored in the Solor folder. ')),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Exit and re-open Komet. Change the data source to \u201cOpen SpinedArrayStore\u201d; your data source should appear.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Select the data source you would like to use and click \u201cOk\u201d in the bottom right.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Komet will open and load in with the 'default' view that consists of:"),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"The Navigation activity stream in the left-hand panel."),(0,o.yg)("li",{parentName:"ul"},"The Detail Viewer activity stream in the center panel."),(0,o.yg)("li",{parentName:"ul"},"The Search activity stream in the right-hand panel.")))),(0,o.yg)("div",{className:h.imageContainer},(0,o.yg)("img",{src:"/img/user_guide_images/setUp1.png",width:"500"})),(0,o.yg)("ol",{start:9},(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"As a user, you can click and drag any of these activity streams into a different panel to reorganize as needed.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"To view the new Komet prototype user interface (UI), go to the top menu and select Edit \u2192 New Journal on Windows or View \u2192 New Journal on Mac."))),(0,o.yg)("div",{className:h.imageContainer},(0,o.yg)("img",{src:"/img/user_guide_images/setUp2.png",width:"500"})),(0,o.yg)("p",null,"A Journal window will appear with the new prototype UI."),(0,o.yg)("div",{className:h.imageContainer},(0,o.yg)("img",{src:"/img/user_guide_images/setUp3.png",width:"500"})),(0,o.yg)("h2",{id:"importing-and-reading-in-data"},"Importing and Reading-In Data"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Note:")," This process is to import data after you have finished the initial Komet download and install process."),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},'In the Detail Viewer activity stream (default location: center panel) click drop down button \u201c+\u201d, and click \u201cImport Artifact".')),(0,o.yg)("div",{className:h.imageContainer},(0,o.yg)("img",{src:"/img/user_guide_images/import1.png",width:"500"})),(0,o.yg)("ol",{start:2},(0,o.yg)("li",{parentName:"ol"},"A \u201cSelect your file for import\u201d window will pop up. Click on \u201cSelect A File\u201d button.")),(0,o.yg)("div",{className:h.imageContainer},(0,o.yg)("img",{src:"/img/user_guide_images/import2.png",width:"500"})),(0,o.yg)("ol",{start:3},(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Browse and select the zip file of your choice and click \u201cOpen\u201d.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"A progress bar will monitor the import of your files.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"The files will be displayed in the left panel under \u201cConcept Navigator\u201d."))))}k.isMDXComponent=!0}}]);