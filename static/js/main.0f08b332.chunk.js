(this["webpackJsonpchat-group"]=this["webpackJsonpchat-group"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,s,t){},function(e,s,t){},,,,,,,,function(e,s,t){},function(e,s,t){},,,,,,function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){"use strict";t.r(s);var c=t(0),a=t(1),n=t.n(a),i=t(19),l=t.n(i),r=(t(26),t(8)),o=Object(a.createContext)(),j=function(e){var s=e.children,t=Object(a.useState)("all"),n=Object(r.a)(t,2),i=n[0],l=n[1],j=Object(a.useState)(!1),b=Object(r.a)(j,2),d=b[0],m=b[1];return Object(c.jsx)(o.Provider,{value:{sidebarView:i,showAllChannels:function(){return l("all")},showChannelInfo:function(){return l("info")},isModalOpen:d,closeModal:function(){return m(!1)},openModal:function(){return m(!0)},toggleModal:function(){return m(!d)}},children:s})},b=t(9),d=t(3),m=t(44),u=t(45);t(27);var h=function(){var e=Object(d.f)().pathname;return console.log(e),Object(c.jsx)("div",{className:"auth-screen",children:Object(c.jsxs)("div",{className:"box",children:["/login"===e?Object(c.jsx)("h1",{className:"box__title",children:"Login"}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{className:"box__title",children:"Stay connected with your team"}),Object(c.jsx)("p",{className:"box__description",children:"Communicate, share and talk with your work team"})]}),Object(c.jsxs)("form",{className:"form",children:[Object(c.jsxs)("div",{className:"form__group",children:[Object(c.jsx)("input",{type:"email",className:"form__control",placeholder:"Emai","aria-label":"Type your emaill address",name:"email",autoComplete:"off"}),Object(c.jsx)(m.a,{className:"form__icon"})]}),Object(c.jsxs)("div",{className:"form__group",children:[Object(c.jsx)("input",{type:"password",name:"password",className:"form__control",placeholder:"Password","aria-label":"Type your password"}),Object(c.jsx)(u.a,{className:"form__icon"})]}),Object(c.jsx)("button",{type:"submit",className:"btn btn--blue btn--full",children:"/login"===e?"Login":"Register"})]}),Object(c.jsxs)("p",{className:"box__text",children:["/login"===e?"Don't have an account?":"Already have an account?"," ",Object(c.jsx)(b.b,{to:"/login"===e?"/register":"/login",className:"box__link",children:"/login"===e?"Signup":"Login"})]})]})})},x=t(50),p=t(51),O=t(52),_=t(46);t(33);var f=function(){return Object(c.jsxs)("div",{className:"searchbox",children:[Object(c.jsx)("button",{type:"submit",className:"btn--icon",title:"Search Channel",children:Object(c.jsx)(_.a,{})}),Object(c.jsx)("input",{type:"text",className:"searchbox__input",placeholder:"Search","aria-label":"Search"})]})};t(34);var N=function(){return Object(c.jsx)("div",{className:"avatar"})};t(35);var v=function(e){var s=e.name,t=e.uppercase,a=e.handleClick,n=e.setChannelView;return a?Object(c.jsxs)("li",{className:"sidebar-list-item",onClick:function(e){var s=e.target.closest(".sidebar__inner");s.classList.add("sidebar__inner--out"),s.addEventListener("animationend",(function(){s.classList.remove("sidebar__inner--out"),n(!0)}))},children:[Object(c.jsx)(N,{}),Object(c.jsx)("p",{className:t?"sidebar-list-item__name sidebar-list-item__name--uppercase":"sidebar-list-item__name",children:s})]}):Object(c.jsxs)("li",{className:"sidebar-list-item",children:[Object(c.jsx)(N,{}),Object(c.jsx)("p",{className:t?"sidebar-list-item__name sidebar-list-item__name--uppercase":"sidebar-list-item__name",children:s})]})};t(36);var g=function(e){var s=e.items,t=e.uppercase,a=e.handleClick,n=e.setChannelView;return Object(c.jsx)("ul",{className:"sidebar-list",children:s.map((function(e,s){return Object(c.jsx)(v,{name:e,uppercase:t,handleClick:a,setChannelView:n},s)}))})},C=t(49),y=function(){var e=Object(a.useState)(!1),s=Object(r.a)(e,2),t=s[0],c=s[1];return[t,function(){return c(!t)},function(){return c(!0)},function(){return c(!1)}]},w=t(47),L=t(48);t(17);var k=function(e){var s=e.isOpen;return Object(c.jsxs)("div",{className:"popup-menu ".concat(s?"popup-menu--visible":""),children:[Object(c.jsxs)("div",{className:"popup-menu__option",children:[Object(c.jsx)(w.a,{className:"popup-menu__icon"}),"Profile"]}),Object(c.jsx)("div",{className:"line"}),Object(c.jsxs)("div",{className:"popup-menu__option",children:[Object(c.jsx)(L.a,{className:"popup-menu__icon"}),"Logout"]})]})};t(37);var S=function(){var e=y(),s=Object(r.a)(e,2),t=s[0],a=s[1];return Object(c.jsxs)("div",{className:"sidebar__footer",children:[Object(c.jsx)(N,{}),Object(c.jsx)("p",{className:"username",children:"Armando Cruz"}),Object(c.jsx)("button",{className:"btn--icon relative",onClick:a,children:Object(c.jsx)(C.a,{})}),Object(c.jsx)(k,{isOpen:t})]})},F=(t(38),["Xanthe Neal","Nellie Francis","Denzel Barret","Shaunna Firth","Annaliese Huynh"]),P=["Front-end developers","Random","Backend","Welcome"],A=n.a.forwardRef((function(e,s){var t=e.hideSidebar,n=Object(a.useContext)(o),i=n.sidebarView,l=n.showAllChannels,r=n.showChannelInfo,j=n.toggleModal,b=Object(a.useRef)(null),d=Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"sidebar__top",children:[Object(c.jsx)("button",{className:"btn--icon",title:"Back to all channels",onClick:function(){b.current.classList.add("sidebar__inner--out"),b.current.addEventListener("animationend",(function(){console.log("finish"),b.current.classList.remove("sidebar__inner--out"),l()}))},children:Object(c.jsx)(x.a,{})}),Object(c.jsx)("h3",{className:"sidebar__title",children:"All channels"})]}),Object(c.jsxs)("div",{className:"sidebar__channel-info",children:[Object(c.jsx)("h4",{children:"Front-end Developers"}),Object(c.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nam eligendi illo quo veritatis, qui excepturi laborum cupiditate odio quaerat, ab reiciendis debitis perferendis repellendus!"})]}),Object(c.jsx)("h4",{className:"sidebar__members_title",children:"Members"}),Object(c.jsx)(g,{items:F}),Object(c.jsx)(S,{})]}),m=Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"sidebar__top",children:[Object(c.jsx)("h3",{className:"sidebar__title",children:"Channels"}),Object(c.jsx)("button",{className:"btn--icon btn--gray",title:"Create new channel",onClick:j,children:Object(c.jsx)(p.a,{})})]}),Object(c.jsx)("div",{className:"sidebar__space",children:Object(c.jsx)(f,{})}),Object(c.jsx)(g,{handleClick:!0,items:P,uppercase:!0,setChannelView:r}),Object(c.jsx)(S,{})]});return Object(c.jsxs)("div",{className:"sidebar__overlay",ref:s,children:[Object(c.jsx)("aside",{className:"sidebar",children:Object(c.jsx)("div",{className:"sidebar__inner sidebar__inner--in",ref:b,children:"info"===i?d:m})}),Object(c.jsx)("button",{className:"btn--icon close-sidebar",onClick:t,children:Object(c.jsx)(O.a,{color:"#fff",size:24})})]})})),M=t(53),z=t(54);t(39),t(40);var B=function(e){return Object(c.jsxs)("div",{className:"message",children:[Object(c.jsx)(N,{}),Object(c.jsxs)("div",{className:"message__info",children:[Object(c.jsxs)("div",{className:"message__metadata",children:[Object(c.jsx)("p",{className:"message__sender",children:"Armando Cruz"}),Object(c.jsx)("small",{className:"message__date-time",children:"yesterday at 2:29 PM"})]}),Object(c.jsx)("p",{className:"message__text",children:"Lorem ipsum dolor \ud83e\udd26\u200d\u2642\ufe0fsit, amet consectetur adipisicing elit. Labore dolorum voluptas illo praesentium nulla\ud83d\udc46 excepturi aperiam magni veniam dolore sequi! \ud83d\udc71\u200d\u2640\ufe0f"})]})]})};t(41);var E=function(e){var s=e.date;return Object(c.jsx)("div",{className:"date-separator",children:Object(c.jsx)("small",{className:"date-separator__date",children:s})})};var q=function(e){var s=e.toggleSidebar;return Object(c.jsxs)("main",{className:"chat__area",children:[Object(c.jsxs)("header",{className:"chat__header",children:[Object(c.jsx)("button",{className:"btn--icon",onClick:s,children:Object(c.jsx)(M.a,{color:"#fff",size:24})}),Object(c.jsx)("h1",{className:"h1",children:"Front-end developers"})]}),Object(c.jsxs)("div",{className:"chat__conversation",children:[Object(c.jsx)(B,{}),Object(c.jsx)(B,{}),Object(c.jsx)(B,{}),Object(c.jsx)(B,{}),Object(c.jsx)(B,{}),Object(c.jsx)(B,{}),Object(c.jsx)(B,{}),Object(c.jsx)(E,{date:"October 10, 2020"}),Object(c.jsx)(B,{}),Object(c.jsx)(B,{}),Object(c.jsx)(B,{}),Object(c.jsx)(B,{}),Object(c.jsx)(B,{}),Object(c.jsx)(B,{}),Object(c.jsx)(B,{})]}),Object(c.jsx)("div",{className:"chat__footer",children:Object(c.jsxs)("div",{className:"chat__footer-inner",children:[Object(c.jsx)("input",{type:"text",className:"chat__input",placeholder:"Type a message here","aria-label":"Type a message"}),Object(c.jsx)("button",{className:"btn--icon btn--blue",title:"Send message",children:Object(c.jsx)(z.a,{size:20})})]})})]})};t(42);var R=function(e){var s=e.isOpen,t=Object(a.useContext)(o).closeModal,n=Object(a.useRef)(null);return s&&Object(c.jsx)("div",{className:"overlay",onClick:function(e){e.target.classList.contains("overlay")&&(n.current.classList.add("modal--close"),n.current.addEventListener("animationend",(function(){return t()})))},children:Object(c.jsxs)("div",{className:"modal",ref:n,children:[Object(c.jsx)("h2",{className:"modal__title",children:"New Channel"}),Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n.current.classList.add("modal--close"),n.current.addEventListener("animationend",(function(){return t()}))},children:[Object(c.jsx)("input",{type:"text",className:"modal__input",placeholder:"Channel name","aria-label":"Channel name"}),Object(c.jsx)("textarea",{className:"modal__textarea",placeholder:"Channel description","aria-label":"Channel description"}),Object(c.jsx)("button",{className:"btn btn--blue",children:"Save"})]})]})})};var T=function(){var e=Object(a.useContext)(o).isModalOpen,s=function(){var e=Object(a.useRef)();return[e,function(){e.current.classList.toggle("sidebar--show")},function(){e.current.classList.add("sidebar--show")},function(){e.current.classList.remove("sidebar--show")}]}(),t=Object(r.a)(s,4),n=t[0],i=t[1],l=t[3];return Object(c.jsxs)("div",{className:"app",children:[Object(c.jsx)(A,{ref:n,hideSidebar:l}),Object(c.jsx)(q,{toggleSidebar:i}),Object(c.jsx)(R,{isOpen:e})]})},V=(t(18),t(55));var D=function(e){var s=e.isOpen;return Object(c.jsxs)("div",{className:"popup-menu popup-menu--profile ".concat(s?"popup-menu--visible":""),children:[Object(c.jsxs)("div",{className:"popup-menu__option",children:[Object(c.jsx)(w.a,{className:"popup-menu__icon"}),"My Profile"]}),Object(c.jsxs)("div",{className:"popup-menu__option",children:[Object(c.jsx)(V.a,{className:"popup-menu__icon"}),"Group Chat"]}),Object(c.jsx)("div",{className:"line"}),Object(c.jsxs)("div",{className:"popup-menu__option",children:[Object(c.jsx)(L.a,{className:"popup-menu__icon"}),"Logout"]})]})};var I=function(){var e=y(),s=Object(r.a)(e,2),t=s[0],a=s[1];return Object(c.jsxs)("header",{className:"header",children:[Object(c.jsx)(N,{}),Object(c.jsx)("p",{className:"user-name",children:"Armando Cruz"}),Object(c.jsx)("button",{className:"btn--icon btn--show-more",onClick:a,children:Object(c.jsx)("span",{children:"\u25b2"})}),Object(c.jsx)(D,{isOpen:t})]})};var J=function(){return Object(c.jsxs)("div",{className:"profile",children:[Object(c.jsx)(I,{}),Object(c.jsx)("h1",{className:"h1",children:"Personal info"}),Object(c.jsx)("p",{className:"description",children:"Basic info, like your name and photo"}),Object(c.jsxs)("div",{className:"profile__container",children:[Object(c.jsxs)("div",{className:"profile__section profile__section--top",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Profile"}),Object(c.jsx)("p",{children:"Some info may be visible to other people"})]}),Object(c.jsx)(b.b,{to:"/profile/edit",className:"btn btn--outline",children:"Edit"})]}),Object(c.jsxs)("div",{className:"profile__section",children:[Object(c.jsx)("h3",{className:"profile__section-title",children:"Photo"}),Object(c.jsx)(N,{})]}),Object(c.jsxs)("div",{className:"profile__section",children:[Object(c.jsx)("h3",{className:"profile__section-title",children:"Name"}),Object(c.jsx)("p",{className:"profile__section-text",children:"Armando Cruz"})]}),Object(c.jsxs)("div",{className:"profile__section",children:[Object(c.jsx)("h3",{className:"profile__section-title",children:"Bio"}),Object(c.jsx)("p",{className:"profile__section-text",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut incidunt laboriosam provident eaque repellendus optio sint totam, beatae amet perspiciatis molestias nisi ipsum temporibus, itaque mollitia, quam expedita reprehenderit. A!"})]}),Object(c.jsxs)("div",{className:"profile__section",children:[Object(c.jsx)("h3",{className:"profile__section-title",children:"Phone"}),Object(c.jsx)("p",{className:"profile__section-text",children:"1920495231"})]}),Object(c.jsxs)("div",{className:"profile__section",children:[Object(c.jsx)("h3",{className:"profile__section-title",children:"Email"}),Object(c.jsx)("p",{className:"profile__section-text",children:"19307021@gmail.com"})]})]})]})},G=t(56);var H=function(){return Object(c.jsxs)("div",{className:"profile",children:[Object(c.jsx)(I,{}),Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)(b.b,{to:"/profile",className:"btn--icon btn--back",children:[Object(c.jsx)(x.a,{}),Object(c.jsx)("span",{className:"btn__text",children:"Back"})]})}),Object(c.jsx)("div",{className:"profile__container",children:Object(c.jsxs)("div",{className:"profile__container-inner",children:[Object(c.jsx)("h1",{className:"h1 text-left",children:"Change Info"}),Object(c.jsx)("p",{className:"description text-left",children:"Changes will be reflected to every services"}),Object(c.jsxs)("form",{className:"profile__form",autoComplete:"off",children:[Object(c.jsxs)("div",{className:"form__image",children:[Object(c.jsxs)("div",{className:"profile__image-container",children:[Object(c.jsx)("div",{className:"image"}),Object(c.jsx)("label",{htmlFor:"image",children:Object(c.jsx)(G.a,{size:32})})]}),Object(c.jsx)("label",{htmlFor:"image",className:"form__image-label",children:"Change photo"}),Object(c.jsx)("input",{type:"file",name:"image",id:"image",className:"hidden"})]}),Object(c.jsxs)("div",{className:"form__group",children:[Object(c.jsx)("label",{htmlFor:"name",className:"form__label",children:"Name"}),Object(c.jsx)("input",{type:"text",className:"form__control",id:"name",name:"name"})]}),Object(c.jsxs)("div",{className:"form__group",children:[Object(c.jsx)("label",{htmlFor:"bio",className:"form__label",children:"Bio"}),Object(c.jsx)("textarea",{className:"form__control",id:"bio",name:"bio"})]}),Object(c.jsxs)("div",{className:"form__group",children:[Object(c.jsx)("label",{htmlFor:"phone",className:"form__label",children:"Phone"}),Object(c.jsx)("input",{type:"tel",className:"form__control",id:"phone",name:"phone"})]}),Object(c.jsx)("button",{type:"submit",className:"btn btn--blue",children:"Save"})]})]})})]})};var W=function(){return Object(c.jsx)(b.a,{basename:"/chat-group",children:Object(c.jsx)("div",{children:Object(c.jsxs)(d.c,{children:[Object(c.jsx)(d.a,{exact:!0,path:"/login",children:Object(c.jsx)(h,{})}),Object(c.jsx)(d.a,{exact:!0,path:"/register",children:Object(c.jsx)(h,{})}),Object(c.jsx)(d.a,{exact:!0,path:"/profile/edit",children:Object(c.jsx)(H,{})}),Object(c.jsx)(d.a,{exact:!0,path:"/profile",children:Object(c.jsx)(J,{})}),Object(c.jsx)(d.a,{exact:!0,path:"/",children:Object(c.jsx)(T,{})})]})})})};var X=function(){return Object(c.jsx)(j,{children:Object(c.jsx)(W,{})})},K=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,57)).then((function(s){var t=s.getCLS,c=s.getFID,a=s.getFCP,n=s.getLCP,i=s.getTTFB;t(e),c(e),a(e),n(e),i(e)}))};l.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(X,{})}),document.getElementById("root")),K()}],[[43,1,2]]]);
//# sourceMappingURL=main.0f08b332.chunk.js.map