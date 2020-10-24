(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{"013z":function(e,t,i){"use strict";var a=i("q1tI"),s=i.n(a),n=i("NmYn"),r=i.n(n),o=i("Wbzz"),c=i("Xrax"),l=i("k4MR"),h=i("TSYQ"),p=i.n(h),b=i("QH2O"),u=i("qKvR"),d=function(e){var t,i=e.title,a=e.tabs,s=void 0===a?[]:a;return Object(u.b)("div",{className:p()(b.pageHeader,(t={},t[b.withTabs]=s.length,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:b.text},i)))))},m=i("BAC9"),f=function(e){var t=e.relativePagePath,i=e.repository,a=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,s=i||a,n=s.baseUrl,r=s.subDirectory,c=n+"/edit/"+s.branch+r+"/src/pages"+t;return n?Object(u.b)("div",{className:"bx--row "+m.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:m.link,href:c},"Edit this page on GitHub"))):null},v=i("FCXl"),O=i("dI71"),g=i("I8xM"),j=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,i=e.slug,a=i.split("/").filter(Boolean).slice(-1)[0],s=t.map((function(e){var t,s=r()(e,{lower:!0,strict:!0}),n=s===a,c=new RegExp(a+"/?(#.*)?$"),l=i.replace(c,s);return Object(u.b)("li",{key:e,className:p()((t={},t[g.selectedItem]=n,t),g.listItem)},Object(u.b)(o.Link,{className:g.link,to:""+l},e))}));return Object(u.b)("div",{className:g.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",null,Object(u.b)("ul",{className:g.list},s))))))},t}(s.a.Component),y=i("MjG9");t.a=function(e){var t=e.pageContext,i=e.children,a=e.location,s=e.Title,n=t.frontmatter,h=void 0===n?{}:n,p=t.relativePagePath,b=t.titleType,m=h.tabs,O=h.title,g=h.theme,w=h.description,S=h.keywords,x=Object(o.useStaticQuery)("2456312558").site.pathPrefix,N=x?a.pathname.replace(x,""):a.pathname,T=m?N.split("/").filter(Boolean).slice(-1)[0]||r()(m[0],{lower:!0}):"";return Object(u.b)(l.a,{tabs:m,homepage:!1,theme:g,pageTitle:O,pageDescription:w,pageKeywords:S,titleType:b},Object(u.b)(d,{title:s?Object(u.b)(s,null):O,label:"label",tabs:m}),m&&Object(u.b)(j,{slug:N,tabs:m,currentTab:T}),Object(u.b)(y.a,{padded:!0},i,Object(u.b)(f,{relativePagePath:p})),Object(u.b)(v.a,{pageContext:t,location:a,slug:N,tabs:m,currentTab:T}),Object(u.b)(c.a,null))}},"1Xc+":function(e,t,i){"use strict";i.r(t),i.d(t,"_frontmatter",(function(){return o})),i.d(t,"default",(function(){return h}));var a=i("wx14"),s=i("zLVn"),n=(i("q1tI"),i("7ljp")),r=i("013z"),o=(i("qKvR"),{}),c={_frontmatter:o},l=r.a;function h(e){var t=e.components,i=Object(s.a)(e,["components"]);return Object(n.b)(l,Object(a.a)({},c,i,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",null,"Service Mesh Overview"),Object(n.b)("p",null,"As the number of services within an OpenShift environment grow the complexity of the communications between services or the service mesh for that environment also grows in complexity. To simplify management of this complexity an OpenShift Service Mesh based on ISTIO is provided. "),Object(n.b)("p",null,"Red Hat OpenShift Service Mesh is a platform that provides behavioral insight and operational control over the service mesh, providing a uniform way to connect, secure, and monitor microservice applications."),Object(n.b)("p",null,"Red Hat OpenShift Service Mesh adds a transparent layer on existing distributed applications without requiring any changes to the service code. You add Red Hat OpenShift Service Mesh support to services by deploying a special sidecar proxy throughout your environment that intercepts all network communication between microservices. "),Object(n.b)("p",null,"The service mesh may have two distinct use cases one where the DevOps and/or SRE team utilizes the service mesh to discern issues. In other words the service mesh information is used for monitoring purposes a key aspect of Day 2 operations. The OpenShift Service Mesh itself must also be monitored and maintained. The other use case is where the service mesh is utilized to restrict traffic and enforce policy. Specific privilege is required to setup the service mesh for usage by DevOps / SREs.  "),Object(n.b)("p",null,"The high level activities required to provide DevOps / SRE teams with a functioning service mesh, enumerated below, entail setting up several prerequisite services and establishing a control plane within which service communications are handled. Cluster administrator access is required to perform these steps. After setup the DevOps/SRE teams can implement the OpenShift Service Mesh functionality for their service(s). "),Object(n.b)("p",null,"Finally, the Red Hat OpenShift Service Mesh offers a horizontal view of several topics in this document utilizing its sidecar technology to tie the vertical topics together. For example ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"../BuildDeploy"}),"Build and Deploy")," details Canary releases and A/B testing. The ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"../Security"}),"Security")," topic implements access control which can also be implemented in the service mesh. Another of many examples is how the sidecar technology can assist in monitoring as discussed in the ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"../Monitoring"}),"Monitoring")," topic. "),Object(n.b)("h2",null,"High Level Steps to Implement a Service Mesh"),Object(n.b)("p",null,"There are several tasks for Day 1 activities as follow."),Object(n.b)("h2",null,"Day 1 Platform: ","[ SRE, DevOps Engineer ]"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Required - account with cluster administrator access"),Object(n.b)("li",{parentName:"ul"},"Install Service Mesh and Prerequisites: ",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Install Elasticsearch operator"),Object(n.b)("li",{parentName:"ul"},"Install Jaeger operator"),Object(n.b)("li",{parentName:"ul"},"Install Kiali operator "),Object(n.b)("li",{parentName:"ul"},"Install Service Mesh Operator")))),Object(n.b)("h2",null,"Day 1 Application: ","[ SRE, DevOps Engineer ]"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Create Service Mesh Control Plane with the OperatorHub  "),Object(n.b)("li",{parentName:"ul"},"Create ServiceMeshMemberRoll to target an application for the service mesh"),Object(n.b)("li",{parentName:"ul"},"Implement Service Mesh functionality (policy, tracing, security, canary test etc)")),Object(n.b)("h2",null,"Day 2 Platform Considerations: ","[ SRE ]"),Object(n.b)("p",null,"The day 2 platform setup considerations for the service mesh essentially discerns how configuration changes are handled. The ideal method is to manage via configuration files that control your service mesh configuration. Further if such files are control by gitHub for example different DevOps/SRE personnel can make pull requests against them to grow the application(new service added) and user(new developer added to update a service) setup.  Thus application management can be achieved via configuration of the service mesh.\nIn addition to the configuration management and similar steps to maintain the service mesh, monitoring tasks also need to be performed to assure that the mesh is operating as desired. Furthermore tools like Kiali described below can be used to visualize the real time traffic flow established within the service mesh and thereby serve as another means to monitor the operation of the service mesh. "),Object(n.b)("h2",null,"Day 2 Application Considerations: ","[ SRE, DevOps Engineer ]"),Object(n.b)("p",null,"As mentioned one purpose of the service mesh is to setup Developers and applications/services. One method that SREs or DevOps personnel can control such policy is via control planes. An example configuration provides one control plane for all application development teams and several data planes, one for each application or service that needs to be separated. Data  planes are one way to instrument a service mesh to handle a multi cluster environment. Thus adding or re-using existing data and control planes as the application landscape grows is a normal day 2 application task. "),Object(n.b)("h2",null,"Red Hat OpenShift Service Mesh Additional Information"),Object(n.b)("p",null,Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.3/service_mesh/servicemesh-release-notes.html"}),"https://docs.openshift.com/container-platform/4.3/service_mesh/servicemesh-release-notes.html"),"\n",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.3/service_mesh/service_mesh_arch/understanding-ossm.html"}),"https://docs.openshift.com/container-platform/4.3/service_mesh/service_mesh_arch/understanding-ossm.html")),Object(n.b)("h2",null,"Differences between Istio and OpenShift Service Mesh"),Object(n.b)("p",null,Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.3/service_mesh/service_mesh_arch/ossm-vs-community.html"}),"https://docs.openshift.com/container-platform/4.3/service_mesh/service_mesh_arch/ossm-vs-community.html"),"\n",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.redhat.com/en/topics/microservices/why-choose-openshift-service-mesh"}),"https://www.redhat.com/en/topics/microservices/why-choose-openshift-service-mesh"),"  "),Object(n.b)("p",null,"An installation of Red Hat OpenShift Service Mesh differs from upstream Istio community installations in multiple ways:  "),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"OpenShift Service Mesh installs a multi-tenant control plane by default"),Object(n.b)("li",{parentName:"ul"},"OpenShift Service Mesh extends Role Based Access Control (RBAC) features"),Object(n.b)("li",{parentName:"ul"},"OpenShift Service Mesh replaces BoringSSL with OpenSSL"),Object(n.b)("li",{parentName:"ul"},"Kiali and Jaeger are enabled by default in OpenShift Service Mesh")),Object(n.b)("p",null,"The modifications to Red Hat OpenShift Service Mesh are sometimes necessary to resolve issues, provide additional features, or to handle differences when deploying on OpenShift Container Platform.  "),Object(n.b)("h2",null,"Istio Service Mesh"),Object(n.b)("p",null,Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://developers.redhat.com/topics/service-mesh/"}),"https://developers.redhat.com/topics/service-mesh/"),Object(n.b)("br",{parentName:"p"}),"\n","A service mesh provides traffic monitoring, access control, discovery, security, resiliency, and other useful things to a group of services. Istio does all that, but it doesn’t require any changes to the code of any of those services. To make the magic happen, Istio deploys a proxy (called a sidecar) next to each service. All of the traffic meant for a service goes to the proxy, which uses policies to decide how, when, or if that traffic should go on to the service. Istio also enables sophisticated DevOps techniques such as canary deployments, circuit breakers, fault injection, and more.  "),Object(n.b)("p",null,"Istio’s functionality running outside of your source code introduces the concept of Service Mesh. That’s a coordinated group of one or more binaries that make up a mesh of networking functions.  "),Object(n.b)("h2",null,"Kiali overview"),Object(n.b)("p",null,Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.3/service_mesh/service_mesh_arch/ossm-kiali.html"}),"https://docs.openshift.com/container-platform/4.3/service_mesh/service_mesh_arch/ossm-kiali.html"),"  "),Object(n.b)("p",null,"Kiali provides observability into the Service Mesh running on OpenShift Container Platform. Kiali helps you define, validate, and observe your Istio service mesh. It helps you to understand the structure of your service mesh by inferring the topology, and also provides information about the health of your service mesh.  "),Object(n.b)("p",null,"Kiali provides an interactive graph view of your namespace in real time that provides visibility into features like circuit breakers, request rates, latency, and even graphs of traffic flows. Kiali offers insights about components at different levels, from Applications to Services and Workloads, and can display the interactions with contextual information and charts on the selected graph node or edge. Kiali also provides the ability to validate your Istio configurations, such as gateways, destination rules, virtual services, mesh policies, and more. Kiali provides detailed metrics, and a basic Grafana integration is available for advanced queries. Distributed tracing is provided by integrating Jaeger into the Kiali console.  "),Object(n.b)("p",null,"Kiali is installed by default as part of the Red Hat OpenShift Service Mesh.  "),Object(n.b)("h2",null,"Jaeger overview"),Object(n.b)("p",null,Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.3/service_mesh/service_mesh_arch/ossm-jaeger.html"}),"https://docs.openshift.com/container-platform/4.3/service_mesh/service_mesh_arch/ossm-jaeger.html")),Object(n.b)("p",null,"Every time a user takes an action in an application, a request is executed by the architecture that may require dozens of different services to participate in order to produce a response. The path of this request is a distributed transaction. Jaeger lets you perform distributed tracing, which follows the path of a request through various microservices that make up an application.  "),Object(n.b)("p",null,"Distributed tracing is a technique that is used to tie the information about different units of work together—usually executed in different processes or hosts—in order to understand a whole chain of events in a distributed transaction. Distributed tracing lets developers visualize call flows in large service oriented architectures. It can be invaluable in understanding serialization, parallelism, and sources of latency.  "),Object(n.b)("p",null,"Jaeger lets service owners instrument their services to get insights into what their architecture is doing. Jaeger is an open source distributed tracing platform that you can use for monitoring, network profiling, and troubleshooting the interaction between components in modern, cloud-native, microservices-based applications. Jaeger is based on the vendor-neutral OpenTracing APIs and instrumentation.  "),Object(n.b)("p",null,"Using Jaeger lets you perform the following functions:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Monitor distributed transactions"),Object(n.b)("li",{parentName:"ul"},"Optimize performance and latency"),Object(n.b)("li",{parentName:"ul"},"Perform root cause analysis  ")),Object(n.b)("p",null,"Jaeger is installed by default as part of Red Hat OpenShift Service Mesh.  "))}h.isMDXComponent=!0},BAC9:function(e,t,i){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,i){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,i){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-day-2-service-mesh-index-mdx-66f9c7b68860c442bfd9.js.map