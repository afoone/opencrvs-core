(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{195:function(t,e,i){"use strict";i.r(e),i.d(e,"frontMatter",(function(){return o})),i.d(e,"metadata",(function(){return s})),i.d(e,"rightToc",(function(){return l})),i.d(e,"Video",(function(){return u})),i.d(e,"default",(function(){return d}));var r=i(2),n=i(10),a=(i(0),i(202)),c=i(204),o={id:"issueACertificate",title:"Issue a certificate"},s={id:"core_functions/issueACertificate",title:"Issue a certificate",description:"export const Video = ({ url }) => (",source:"@site/docs/core_functions/Issue_a_certificate_d1633b6665a344deacbd308f9704ddbb.mdx",permalink:"/opencrvs-core/docs/core_functions/issueACertificate",sidebar:"docs",previous:{title:"Validate & register a vital event",permalink:"/opencrvs-core/docs/core_functions/validateRegisterVitalEvent"},next:{title:"Vital statistics export",permalink:"/opencrvs-core/docs/core_functions/vitalStatisticsExport"}},l=[{value:"Configuration",id:"configuration",children:[]},{value:"User Stories",id:"user-stories",children:[{value:"Download to print",id:"download-to-print",children:[]},{value:"Identify who is collecting the certificate",id:"identify-who-is-collecting-the-certificate",children:[]},{value:"Edit certificate content",id:"edit-certificate-content",children:[]},{value:"Print certificate",id:"print-certificate",children:[]}]}],u=function(t){var e=t.url;return Object(a.b)("div",{style:{position:"relative",paddingBottom:"56.25%",height:0}},Object(a.b)("iframe",{src:e,frameBorder:0,webkitallowfullscreen:!0,mozallowfullscreen:!0,allowFullScreen:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}}))},b={rightToc:l,Video:u};function d(t){var e=t.components,i=Object(n.a)(t,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,i,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This functionality allows either a ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"../system_overview/user_types/registrationAgent"}),Object(a.b)("strong",{parentName:"a"},"Registration Agent"))," or ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"../system_overview/user_types/registrar"}),Object(a.b)("strong",{parentName:"a"},"Registrar"))," to print a certificate, either with or without digital certificates."),Object(a.b)(u,{url:"https://www.loom.com/embed/f04130bd98364626aee0c51bf127d5e7",mdxType:"Video"}),Object(a.b)("h2",{id:"configuration"},"Configuration"),Object(a.b)("p",null,"The certificate can be formatted as per a country's requirements. OpenCRVS also has a ",Object(a.b)("em",{parentName:"p"},"recommended")," certificate based on global best practice."),Object(a.b)("p",null,"The ability to use digital signatures on certificates, print the certificate in advance for handwritten signatures or print on collection."),Object(a.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"pro tip")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"The use of digital signatures has been shown to drastically improve service delivery by reducing the time registration staff need to wait to get handwritten signatures from Registrars. The Audit function effectively tracks every user's actions - this can mitigate the occurrence of any fraudulent activity."))),Object(a.b)("h2",{id:"user-stories"},"User Stories"),Object(a.b)("p",null,"As a ",Object(a.b)("strong",{parentName:"p"},"Registration Agent"),", I want to be able to print a certificate, so that I can collect the signatures of the Registrar before issuance."),Object(a.b)("p",null,"As a ",Object(a.b)("strong",{parentName:"p"},"Registration Agent ",Object(a.b)("em",{parentName:"strong"},"with delegated authority")),", I want to be able to print a certificate with the digital signature of a Registrar, so that I can issue it immediately."),Object(a.b)("p",null,"As a ",Object(a.b)("strong",{parentName:"p"},"Registrar"),", I want to be able to print a certificate, so that I can collect the signatures of the Registrar before issuance."),Object(a.b)("p",null,"As a ",Object(a.b)("strong",{parentName:"p"},"Registrar"),", I want to be able to print a certificate with my digital signature, so that I can issue it immediately."),Object(a.b)("h1",{id:"functionality"},"Functionality"),Object(a.b)("h3",{id:"download-to-print"},"Download to print"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Low connectivity feature:")," The user is required to download the record that they want to print the certificate for. This prevents overloading bandwidth and affecting the user's ability to print the certificate they need to by downloading all records in the workqueue at once."),Object(a.b)("h3",{id:"identify-who-is-collecting-the-certificate"},"Identify who is collecting the certificate"),Object(a.b)("p",null,"The user is required to identify who is collecting the certificate so that there is a record of who collected it."),Object(a.b)("h3",{id:"edit-certificate-content"},"Edit certificate content"),Object(a.b)("p",null,"If the user wants to edit the content of the certificate before printing, they can do so to prevent future change requests for the applicant. This action is captured in the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"../support_functions/audit"}),"audit")," function."),Object(a.b)("h3",{id:"print-certificate"},"Print certificate"),Object(a.b)("p",null,"When the user chooses to print the certificate, it opens in a new tab in PDF format. From this page, the user can print using the device's printer."),Object(a.b)("p",null,"The certificate can be printed with a digital signature in advance or on collection."),Object(a.b)("img",{alt:"Print_certificate",src:Object(c.a)("assets/core_functions/Issue_a_certificate_d1633b6665a344deacbd308f9704ddbb/Print_certificate.png")}))}d.isMDXComponent=!0},202:function(t,e,i){"use strict";i.d(e,"a",(function(){return b})),i.d(e,"b",(function(){return f}));var r=i(0),n=i.n(r);function a(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function c(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function o(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?c(Object(i),!0).forEach((function(e){a(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):c(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function s(t,e){if(null==t)return{};var i,r,n=function(t,e){if(null==t)return{};var i,r,n={},a=Object.keys(t);for(r=0;r<a.length;r++)i=a[r],e.indexOf(i)>=0||(n[i]=t[i]);return n}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)i=a[r],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}var l=n.a.createContext({}),u=function(t){var e=n.a.useContext(l),i=e;return t&&(i="function"==typeof t?t(e):o(o({},e),t)),i},b=function(t){var e=u(t.components);return n.a.createElement(l.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.a.createElement(n.a.Fragment,{},e)}},p=n.a.forwardRef((function(t,e){var i=t.components,r=t.mdxType,a=t.originalType,c=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),b=u(i),p=r,f=b["".concat(c,".").concat(p)]||b[p]||d[p]||a;return i?n.a.createElement(f,o(o({ref:e},l),{},{components:i})):n.a.createElement(f,o({ref:e},l))}));function f(t,e){var i=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=i.length,c=new Array(a);c[0]=p;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,c[1]=o;for(var l=2;l<a;l++)c[l]=i[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,i)}p.displayName="MDXCreateElement"},203:function(t,e,i){"use strict";var r=i(0),n=i(55);e.a=function(){return Object(r.useContext)(n.a)}},204:function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));i(205);var r=i(203);function n(t){var e=(Object(r.a)().siteConfig||{}).baseUrl,i=void 0===e?"/":e;if(!t)return t;return/^(https?:|\/\/)/.test(t)?t:t.startsWith("/")?i+t.slice(1):i+t}},205:function(t,e,i){"use strict";var r=i(8),n=i(20),a=i(206),c="".startsWith;r(r.P+r.F*i(207)("startsWith"),"String",{startsWith:function(t){var e=a(this,t,"startsWith"),i=n(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),r=String(t);return c?c.call(e,r,i):e.slice(i,i+r.length)===r}})},206:function(t,e,i){var r=i(76),n=i(28);t.exports=function(t,e,i){if(r(e))throw TypeError("String#"+i+" doesn't accept regex!");return String(n(t))}},207:function(t,e,i){var r=i(3)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(i){try{return e[r]=!1,!"/./"[t](e)}catch(n){}}return!0}}}]);