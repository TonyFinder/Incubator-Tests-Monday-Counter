(this.webpackJsonpmy=this.webpackJsonpmy||[]).push([[0],[,,,function(e,t,a){e.exports={main:"SetDisplay_main__3tG7u",fieldSeparate:"SetDisplay_fieldSeparate__1moIX",number:"SetDisplay_number__3QokI",inputCorrection:"SetDisplay_inputCorrection__3XtCW",redBackground:"SetDisplay_redBackground__2P_ZN"}},function(e,t,a){e.exports={main:"SetDisplay_main__1mPOb",fieldSeparate:"SetDisplay_fieldSeparate__1EfxC",number:"SetDisplay_number__1yhyg",inputCorrection:"SetDisplay_inputCorrection__2V6Zr",redBackground:"SetDisplay_redBackground__3IYqp"}},function(e,t,a){e.exports={back:"Counter_back__2PEdL",middle:"Counter_middle__Y--sg",counterField:"Counter_counterField__He1Tx",buttonsField:"Counter_buttonsField__r3dks",twoCounters:"Counter_twoCounters__2NAD_"}},function(e,t,a){e.exports={back:"Counter_back__2VYbC",middle:"Counter_middle__P2kof",counterField:"Counter_counterField__1VBQW",buttonsField:"Counter_buttonsField__QAYZA",twoCounters:"Counter_twoCounters__2zkrT"}},function(e,t,a){e.exports={appComponent:"TuesdayFirst_appComponent__12eRp",textDecoration:"TuesdayFirst_textDecoration__2BFMK"}},function(e,t,a){e.exports={back:"Counter_back__TZ0Hn",middle:"Counter_middle__3A_Mf",counterField:"Counter_counterField__KsYDd",buttonsField:"Counter_buttonsField__1wvWv"}},function(e,t,a){e.exports={number:"CounterDisplay_number__31qiD",redNumber:"CounterDisplay_redNumber__3rcL2",setMessage:"CounterDisplay_setMessage__3Ehw9",setMessageRed:"CounterDisplay_setMessageRed__2_O9N"}},function(e,t,a){e.exports={number:"CounterDisplay_number__2GIiP",redNumber:"CounterDisplay_redNumber__3iS9C",setMessage:"CounterDisplay_setMessage__aSj2Z",setMessageRed:"CounterDisplay_setMessageRed__1X6Kl"}},,function(e,t,a){e.exports={appComponent:"Monday_appComponent__kopOg",textDecoration:"Monday_textDecoration__1-r8w"}},function(e,t,a){e.exports={number:"CounterDisplay_number__1kZ43",redNumber:"CounterDisplay_redNumber__J_RKe"}},function(e,t,a){e.exports={fieldSeparate:"Input_fieldSeparate__3r5l3",number:"Input_number__ER0lS",inputCorrection:"Input_inputCorrection__24bjD",redBackground:"Input_redBackground__2UYYB"}},function(e,t,a){e.exports={fieldSeparate:"Input_fieldSeparate__1XkAu",number:"Input_number__nIWYH",inputCorrection:"Input_inputCorrection__2L9ay",redBackground:"Input_redBackground__aTJBx"}},,function(e,t,a){e.exports={button:"Button_button__389iw"}},function(e,t,a){e.exports={button:"Button_button__ap28o"}},function(e,t,a){e.exports={button:"Button_button__2ogfv"}},,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(16),s=a.n(r),i=(a(24),a(12)),o=a.n(i),l=a(2),u=a(17),d=a.n(u),b=a(0),m=function(e){return Object(b.jsx)("button",{disabled:e.disable,onClick:function(){e.callback()},className:d.a.button,children:e.title})},j=a(8),O=a.n(j),_=a(13),x=a.n(_),p=function(e){var t=5===e.counterNumber?x.a.redNumber:x.a.number;return Object(b.jsx)("div",{className:t,children:e.counterNumber})},g=function(){var e=Object(n.useState)(0),t=Object(l.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),s=Object(l.a)(r,2),i=s[0],o=s[1],u=Object(n.useState)(!0),d=Object(l.a)(u,2),j=d[0],_=d[1];Object(n.useEffect)((function(){var e=localStorage.getItem("incrementMonday");if(e){var t=JSON.parse(e);if(0===t)return;5===t?(x(),c(t)):(g(),c(t))}}),[]);var x=function(){o(!0),_(!1)},g=function(){o(!1),_(!1)};return Object(b.jsx)("div",{className:O.a.back,children:Object(b.jsxs)("div",{className:O.a.middle,children:[Object(b.jsx)("div",{className:O.a.counterField,children:Object(b.jsx)(p,{counterNumber:a})}),Object(b.jsxs)("div",{className:O.a.buttonsField,children:[Object(b.jsx)(m,{disable:i,title:"inc",callback:function(){a>=5?o(!0):(a++,c(a),5===a&&x(),1===a&&_(!1),localStorage.setItem("incrementMonday",JSON.stringify(a)))}}),Object(b.jsx)(m,{disable:j,title:"reset",callback:function(){c(0),o(!1),_(!0),localStorage.setItem("incrementMonday",JSON.stringify(0))}})]})]})})},S=function(){return Object(b.jsxs)("div",{className:o.a.appComponent,children:[Object(b.jsx)("h3",{className:o.a.textDecoration,children:"Monday Exam"}),Object(b.jsx)(g,{})]})},f=a(7),v=a.n(f),C=a(18),N=a.n(C),h=function(e){return Object(b.jsx)("button",{disabled:e.disable,onClick:function(){e.callback()},className:N.a.button,children:e.title})},y=a(9),k=a.n(y),I=function(e){return Object(b.jsx)("div",{children:e.error?Object(b.jsx)("div",{className:k.a.setMessageRed,children:"Incorrect value!"}):e.setMessage?Object(b.jsx)("div",{className:e.counterNumber===e.max?k.a.redNumber:k.a.number,children:e.counterNumber}):Object(b.jsx)("div",{className:k.a.setMessage,children:"enter values and press 'set'"})})},D=a(5),F=a.n(D),J=a(3),M=a.n(J),B=a(14),T=a.n(B),V=function(e){return Object(b.jsxs)("div",{className:T.a.fieldSeparate,children:[Object(b.jsx)("span",{className:T.a.number,children:e.name}),Object(b.jsx)("input",{className:e.inputStyle,type:"number",value:e.value,onChange:function(t){e.onChangeCallback(+t.currentTarget.value)}})]})},E=function(e){var t=Object(n.useState)(M.a.inputCorrection),a=Object(l.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)(M.a.inputCorrection),i=Object(l.a)(s,2),o=i[0],u=i[1];return Object(n.useEffect)((function(){return e.max<e.start||e.max<=0&&e.start>0&&e.start!==e.max?(r("".concat(M.a.inputCorrection," ").concat(M.a.redBackground)),void u(M.a.inputCorrection)):e.max===e.start?(r("".concat(M.a.inputCorrection," ").concat(M.a.redBackground)),void u("".concat(M.a.inputCorrection," ").concat(M.a.redBackground))):e.start<0&&e.max>0?(r(M.a.inputCorrection),void u("".concat(M.a.inputCorrection," ").concat(M.a.redBackground))):e.start>=0&&e.max>0?(r(M.a.inputCorrection),void u(M.a.inputCorrection)):void 0}),[e.max,e.start]),Object(b.jsxs)("div",{className:M.a.main,children:[Object(b.jsx)("div",{className:M.a.fieldSeparate,children:Object(b.jsx)(V,{name:"max value:",value:e.max,onChangeCallback:e.onChangeMax,inputStyle:c})}),Object(b.jsx)("div",{className:M.a.fieldSeparate,children:Object(b.jsx)(V,{name:"start value:",value:e.start,onChangeCallback:e.onChangeStart,inputStyle:o})})]})},w=function(){var e=Object(n.useState)(0),t=Object(l.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(0),s=Object(l.a)(r,2),i=s[0],o=s[1],u=Object(n.useState)(5),d=Object(l.a)(u,2),m=d[0],j=d[1],O=Object(n.useState)(!1),_=Object(l.a)(O,2),x=_[0],p=_[1],g=Object(n.useState)(!0),S=Object(l.a)(g,2),f=S[0],v=S[1],C=Object(n.useState)(!0),N=Object(l.a)(C,2),y=N[0],k=N[1],D=Object(n.useState)(!1),J=Object(l.a)(D,2),M=J[0],B=J[1],T=function(){p(!1),v(!0)},V=function(){p(!0),v(!0)},w=function(){var e=localStorage.getItem("incrementTuesday1"),t=localStorage.getItem("startValue1"),a=localStorage.getItem("maxValue1");e!==a&&e!==t&&(p(!1),v(!1)),e===a&&(p(!0),v(!1)),e===t&&T()};Object(n.useEffect)((function(){var e=localStorage.getItem("incrementTuesday1"),t=localStorage.getItem("startValue1"),a=localStorage.getItem("maxValue1");e?c(JSON.parse(e)):localStorage.setItem("incrementTuesday1",JSON.stringify(0)),t?o(JSON.parse(t)):localStorage.setItem("startValue1",JSON.stringify(0)),a?j(JSON.parse(a)):localStorage.setItem("maxValue1",JSON.stringify(5)),w()}),[]);var R=function(e,t){var a=localStorage.getItem("startValue1"),n=localStorage.getItem("maxValue1");return a===e.toString()&&n===t.toString()?(w(),k(!0),void B(!1)):t<=0||t<=e||e<0||t===e?(B(!0),V(),void k(!0)):(k(!1),V(),void B(!1))};return Object(b.jsxs)("div",{className:F.a.twoCounters,children:[Object(b.jsx)("div",{className:F.a.back,children:Object(b.jsxs)("div",{className:F.a.middle,children:[Object(b.jsx)("div",{className:F.a.counterField,children:Object(b.jsx)(E,{start:i,max:m,onChangeMax:function(e){j(e),R(i,e)},onChangeStart:function(e){o(e),R(e,m)}})}),Object(b.jsx)("div",{className:F.a.buttonsField,children:Object(b.jsx)(h,{disable:y,title:"set",callback:function(){localStorage.setItem("maxValue1",JSON.stringify(m)),localStorage.setItem("startValue1",JSON.stringify(i)),localStorage.setItem("incrementTuesday1",JSON.stringify(i)),c(i),k(!0),T()}})})]})}),Object(b.jsx)("div",{className:F.a.back,children:Object(b.jsxs)("div",{className:F.a.middle,children:[Object(b.jsx)("div",{className:F.a.counterField,children:Object(b.jsx)(I,{counterNumber:a,max:m,setMessage:y,error:M})}),Object(b.jsxs)("div",{className:F.a.buttonsField,children:[Object(b.jsx)(h,{disable:x,title:"inc",callback:function(){++a>=i&&v(!1),a>=m?(p(!0),c(a)):c(a),localStorage.setItem("incrementTuesday1",JSON.stringify(a))}}),Object(b.jsx)(h,{disable:f,title:"reset",callback:function(){c(i),T(),localStorage.setItem("incrementTuesday1",JSON.stringify(i))}})]})]})})]})},R=function(){return Object(b.jsxs)("div",{className:v.a.appComponent,children:[Object(b.jsx)("h3",{className:v.a.textDecoration,children:"Tuesday Exam (first version)"}),Object(b.jsx)(w,{})]})},Y=a(19),P=a.n(Y),Z=function(e){return Object(b.jsx)("button",{disabled:e.disable,onClick:function(){e.callback()},className:P.a.button,children:e.title})},A=a(10),L=a.n(A),K=function(e){return Object(b.jsx)("div",{children:e.error?Object(b.jsx)("div",{className:L.a.setMessageRed,children:"Incorrect value!"}):e.setMessage?Object(b.jsx)("div",{className:e.counterNumber===e.max?L.a.redNumber:L.a.number,children:e.counterNumber}):Object(b.jsx)("div",{className:L.a.setMessage,children:"enter values and press 'set'"})})},W=a(6),X=a.n(W),H=a(4),Q=a.n(H),q=a(15),G=a.n(q),z=function(e){return Object(b.jsxs)("div",{className:G.a.fieldSeparate,children:[Object(b.jsx)("span",{className:G.a.number,children:e.name}),Object(b.jsx)("input",{className:e.inputStyle,type:"number",value:e.value,onChange:function(t){e.onChangeCallback(+t.currentTarget.value)}})]})},U=function(e){var t=Object(n.useState)(Q.a.inputCorrection),a=Object(l.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)(Q.a.inputCorrection),i=Object(l.a)(s,2),o=i[0],u=i[1];return Object(n.useEffect)((function(){return e.max<e.start||e.max<=0&&e.start>0&&e.start!==e.max?(r("".concat(Q.a.inputCorrection," ").concat(Q.a.redBackground)),void u(Q.a.inputCorrection)):e.max===e.start?(r("".concat(Q.a.inputCorrection," ").concat(Q.a.redBackground)),void u("".concat(Q.a.inputCorrection," ").concat(Q.a.redBackground))):e.start<0&&e.max>0?(r(Q.a.inputCorrection),void u("".concat(Q.a.inputCorrection," ").concat(Q.a.redBackground))):e.start>=0&&e.max>0?(r(Q.a.inputCorrection),void u(Q.a.inputCorrection)):void 0}),[e.max,e.start]),Object(b.jsxs)("div",{className:Q.a.main,children:[Object(b.jsx)("div",{className:Q.a.fieldSeparate,children:Object(b.jsx)(z,{name:"max value:",value:e.max,onChangeCallback:e.onChangeMax,inputStyle:c})}),Object(b.jsx)("div",{className:Q.a.fieldSeparate,children:Object(b.jsx)(z,{name:"start value:",value:e.start,onChangeCallback:e.onChangeStart,inputStyle:o})})]})},$=function(){var e=Object(n.useState)(0),t=Object(l.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(0),s=Object(l.a)(r,2),i=s[0],o=s[1],u=Object(n.useState)(5),d=Object(l.a)(u,2),m=d[0],j=d[1],O=Object(n.useState)(!1),_=Object(l.a)(O,2),x=_[0],p=_[1],g=Object(n.useState)(!0),S=Object(l.a)(g,2),f=S[0],v=S[1],C=Object(n.useState)(!0),N=Object(l.a)(C,2),h=N[0],y=N[1],k=Object(n.useState)(!1),I=Object(l.a)(k,2),D=I[0],F=I[1],J=Object(n.useState)(!0),M=Object(l.a)(J,2),B=M[0],T=M[1],V=function(){p(!1),v(!0)},E=function(){p(!0),v(!0)},w=function(){var e=localStorage.getItem("incrementTuesday2"),t=localStorage.getItem("startValue2"),a=localStorage.getItem("maxValue2");e!==a&&e!==t&&(p(!1),v(!1)),e===a&&(p(!0),v(!1)),e===t&&V()};Object(n.useEffect)((function(){var e=localStorage.getItem("incrementTuesday2"),t=localStorage.getItem("startValue2"),a=localStorage.getItem("maxValue2");e?c(JSON.parse(e)):localStorage.setItem("incrementTuesday2",JSON.stringify(0)),t?o(JSON.parse(t)):localStorage.setItem("startValue2",JSON.stringify(0)),a?j(JSON.parse(a)):localStorage.setItem("maxValue2",JSON.stringify(5)),w()}),[]);var R=function(e,t){var a=localStorage.getItem("startValue2"),n=localStorage.getItem("maxValue2");return a===e.toString()&&n===t.toString()?(w(),y(!0),void F(!1)):t<=0||t<=e||e<0||t===e?(F(!0),E(),void y(!0)):(y(!1),E(),void F(!1))},Y=function(){T(!B)};return Object(b.jsxs)("div",{className:X.a.twoCounters,children:[!B&&Object(b.jsx)("div",{className:X.a.back,children:Object(b.jsxs)("div",{className:X.a.middle,children:[Object(b.jsx)("div",{className:X.a.counterField,children:Object(b.jsx)(U,{start:i,max:m,onChangeMax:function(e){j(e),R(i,e)},onChangeStart:function(e){o(e),R(e,m)}})}),Object(b.jsxs)("div",{className:X.a.buttonsField,children:[Object(b.jsx)(Z,{disable:h,title:"set",callback:function(){localStorage.setItem("maxValue2",JSON.stringify(m)),localStorage.setItem("startValue2",JSON.stringify(i)),localStorage.setItem("incrementTuesday2",JSON.stringify(i)),c(i),y(!0),V(),T(!B)}}),Object(b.jsx)(Z,{disable:!1,title:"back",callback:Y})]})]})}),B&&Object(b.jsx)("div",{className:X.a.back,children:Object(b.jsxs)("div",{className:X.a.middle,children:[Object(b.jsx)("div",{className:X.a.counterField,children:Object(b.jsx)(K,{counterNumber:a,max:m,setMessage:h,error:D})}),Object(b.jsxs)("div",{className:X.a.buttonsField,children:[Object(b.jsx)(Z,{disable:x,title:"inc",callback:function(){++a>=i&&v(!1),a>=m?(p(!0),c(a)):c(a),localStorage.setItem("incrementTuesday2",JSON.stringify(a))}}),Object(b.jsx)(Z,{disable:f,title:"reset",callback:function(){c(i),V(),localStorage.setItem("incrementTuesday2",JSON.stringify(i))}}),Object(b.jsx)(Z,{disable:!1,title:"set",callback:Y})]})]})})]})},ee=function(){return Object(b.jsxs)("div",{className:v.a.appComponent,children:[Object(b.jsx)("h3",{className:v.a.textDecoration,children:"Tuesday Exam (second version)"}),Object(b.jsx)($,{})]})};var te=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(S,{}),Object(b.jsx)(R,{}),Object(b.jsx)(ee,{})]})},ae=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,27)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(te,{})}),document.getElementById("root")),ae()}],[[26,1,2]]]);
//# sourceMappingURL=main.d7240156.chunk.js.map