(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("NmYn"),l=a.n(i),o=a("Wbzz"),c=a("Xrax"),s=a("k4MR"),b=a("TSYQ"),u=a.n(b),m=a("QH2O"),d=a("qKvR"),p=function(e){var t,a=e.title,n=e.tabs,r=void 0===n?[]:n;return Object(d.b)("div",{className:u()(m.pageHeader,(t={},t[m.withTabs]=r.length,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:m.text},a)))))},h=a("BAC9"),f=function(e){var t=e.relativePagePath,a=e.repository,n=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,i=r.baseUrl,l=r.subDirectory,c=i+"/edit/"+r.branch+l+"/src/pages"+t;return i?Object(d.b)("div",{className:"bx--row "+h.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:h.link,href:c},"Edit this page on GitHub"))):null},g=a("FCXl"),x=a("dI71"),j=a("I8xM"),O=function(e){function t(){return e.apply(this,arguments)||this}return Object(x.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=l()(e,{lower:!0,strict:!0}),i=r===n,c=new RegExp(n+"/?(#.*)?$"),s=a.replace(c,r);return Object(d.b)("li",{key:e,className:u()((t={},t[j.selectedItem]=i,t),j.listItem)},Object(d.b)(o.Link,{className:j.link,to:""+s},e))}));return Object(d.b)("div",{className:j.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",null,Object(d.b)("ul",{className:j.list},r))))))},t}(r.a.Component),v=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,i=t.frontmatter,b=void 0===i?{}:i,u=t.relativePagePath,m=t.titleType,h=b.tabs,x=b.title,j=b.theme,T=b.description,N=b.keywords,P=Object(o.useStaticQuery)("2456312558").site.pathPrefix,w=P?n.pathname.replace(P,""):n.pathname,k=h?w.split("/").filter(Boolean).slice(-1)[0]||l()(h[0],{lower:!0}):"";return Object(d.b)(s.a,{tabs:h,homepage:!1,theme:j,pageTitle:x,pageDescription:T,pageKeywords:N,titleType:m},Object(d.b)(p,{title:r?Object(d.b)(r,null):x,label:"label",tabs:h}),h&&Object(d.b)(O,{slug:w,tabs:h,currentTab:k}),Object(d.b)(v.a,{padded:!0},a,Object(d.b)(f,{relativePagePath:u})),Object(d.b)(g.a,{pageContext:t,location:n,slug:w,tabs:h,currentTab:k}),Object(d.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},rz7V:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return b}));var n=a("wx14"),r=a("zLVn"),i=(a("q1tI"),a("7ljp")),l=a("013z"),o=(a("qKvR"),{}),c={_frontmatter:o},s=l.a;function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)(s,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Documentation on installing Openshift 4 on Azure can be found\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.3/installing/installing_azure/installing-azure-account.html"}),"here"),"."),Object(i.b)("p",null,"If possible, using the\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.3/installing/installing_azure/installing-azure-default.html"}),"installer-provisioned infrastructure"),"\n(IPI) method is preferred."),Object(i.b)("p",null,"For custom requirements, the\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.3/installing/installing_azure/installing-azure-customizations.html"}),"user-provisioned infrastructure"),"\n(UPI) method can be used."),Object(i.b)("p",null,"If the UPI method must be used, a terraform automation configuration may be\nhelpful. A sample configuration can be found here:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/ibm-cloud-architecture/terraform-openshift4-azure/"}),"https://github.com/ibm-cloud-architecture/terraform-openshift4-azure/"))))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ocp-openshift-4-azure-index-mdx-c84c4cd4ea60fe44dced.js.map