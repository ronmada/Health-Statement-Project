(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{ziUY:function(t,e,n){"use strict";n.r(e),n.d(e,"MainFormPageModule",(function(){return j}));var i=n("ofXK"),o=n("3Pt+"),s=n("TEn/"),c=n("tyNb"),r=n("fXoL"),a=n("F57X"),b=n("mrSG"),l=n("xgIS"),u=n("eIep"),p=n("zx2A");function h(t){return e=>e.lift(new d(t))}class d{constructor(t){this.notifier=t}call(t,e){const n=new m(t),i=Object(p.c)(this.notifier,new p.a(n));return i&&!n.seenValue?(n.add(i),e.subscribe(n)):n}}class m extends p.b{constructor(t){super(t),this.seenValue=!1}notifyNext(){this.seenValue=!0,this.complete()}notifyComplete(){}}var f=n("7o/Q");function g(){return t=>t.lift(new v)}class v{call(t,e){return e.subscribe(new w(t))}}class w extends f.a{constructor(t){super(t),this.hasPrev=!1}_next(t){let e;this.hasPrev?e=[this.prev,t]:this.hasPrev=!0,this.prev=t,e&&this.destination.next(e)}}let y=(()=>{class t{constructor(){this.signature=null}saveSignature(t){this.signature=t}getSignature(){return this.signature}clearSig(){this.signature=null}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=r.Db({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const J=["canvas"];let K=(()=>{class t{constructor(t,e){this.signatureService=t,this.popoverController=e,this.checkFlag=!1}ngAfterViewInit(){const t=this.canvas.nativeElement;this.cx=t.getContext("2d"),t.width=this.width,t.height=this.height,setTimeout(()=>{this.drawSavedSignatureOnCanvas()}),this.cx.lineWidth=2,this.cx.lineCap="round",this.cx.strokeStyle="black",this.captureEvents(t)}saveSig(){const t=this.canvas.nativeElement.toDataURL("image/png",1);this.popoverController.dismiss(t)}clearSig(){this.checkFlag=!1,this.signatureService.clearSig(),this.cx.clearRect(0,0,this.canvas.nativeElement.width,this.canvas.nativeElement.height)}drawSavedSignatureOnCanvas(){const t=this.signatureService.getSignature();if(null!==t){this.checkFlag=!0;const e=this.cx,n=new Image;n.src=t,n.onload=()=>{e.drawImage(n,0,0)}}}captureEvents(t){Object(l.a)(t,"mousedown").pipe(Object(u.a)(()=>Object(l.a)(t,"mousemove").pipe(h(Object(l.a)(t,"mouseup")),h(Object(l.a)(t,"mouseleave")),g()))).subscribe(e=>{const n=t.getBoundingClientRect();this.drawOnCanvas({x:e[0].clientX-n.left,y:e[0].clientY-n.top},{x:e[1].clientX-n.left,y:e[1].clientY-n.top})}),Object(l.a)(t,"touchstart").pipe(Object(u.a)(()=>Object(l.a)(t,"touchmove").pipe(h(Object(l.a)(t,"touchend")),h(Object(l.a)(t,"touchcancel")),g()))).subscribe(e=>{const n=t.getBoundingClientRect();this.drawOnCanvas({x:e[0].targetTouches[0].clientX-n.left,y:e[0].targetTouches[0].clientY-n.top},{x:e[1].targetTouches[0].clientX-n.left,y:e[1].targetTouches[0].clientY-n.top})})}drawOnCanvas(t,e){this.cx&&(this.cx.beginPath(),t&&(this.cx.moveTo(t.x,t.y),this.cx.lineTo(e.x,e.y),this.cx.stroke()),this.checkFlag=!0)}}return t.\u0275fac=function(e){return new(e||t)(r.Hb(y),r.Hb(s.u))},t.\u0275cmp=r.Bb({type:t,selectors:[["app-signature"]],viewQuery:function(t,e){var n;1&t&&r.dc(J,!0),2&t&&r.Xb(n=r.Sb())&&(e.canvas=n.first)},inputs:{width:"width",height:"height"},decls:7,vars:2,consts:[["canvas",""],[1,"flex-class"],["color","danger",3,"disabled","click"],[3,"disabled","click"]],template:function(t,e){1&t&&(r.Ib(0,"canvas",null,0),r.Kb(2,"div",1),r.Kb(3,"ion-button",2),r.Rb("click",(function(){return e.clearSig()})),r.bc(4," \u05e0\u05e7\u05d4\n"),r.Jb(),r.Kb(5,"ion-button",3),r.Rb("click",(function(){return e.saveSig()})),r.bc(6," \u05e9\u05de\u05d5\u05e8 "),r.Jb(),r.Jb()),2&t&&(r.xb(3),r.Wb("disabled",!e.checkFlag),r.xb(2),r.Wb("disabled",!e.checkFlag))},directives:[s.d],styles:["canvas[_ngcontent-%COMP%]{background-color:#fff}.flex-class[_ngcontent-%COMP%]{display:flex;flex-direction:column}"]}),t})(),x=(()=>{class t{constructor(t,e){this.signatureService=t,this.popoverController=e,this.buttonColor="warning"}presentPopover(t){return Object(b.a)(this,void 0,void 0,(function*(){const e=yield this.popoverController.create({component:K,cssClass:"my-custom-class",event:t,translucent:!0,backdropDismiss:!1,componentProps:{width:250,height:204}});return e.onDidDismiss().then(t=>{void 0!==t.data&&(this.buttonColor="success",this.signatureService.saveSignature(t.data))}),yield e.present()}))}}return t.\u0275fac=function(e){return new(e||t)(r.Hb(y),r.Hb(s.u))},t.\u0275cmp=r.Bb({type:t,selectors:[["app-sig-pop"]],decls:2,vars:1,consts:[[3,"color","click"]],template:function(t,e){1&t&&(r.Kb(0,"ion-button",0),r.Rb("click",(function(t){return e.presentPopover(t)})),r.bc(1,"\u05d7\u05ea\u05d9\u05de\u05d4"),r.Jb()),2&t&&r.Wb("color",e.buttonColor)},directives:[s.d],styles:[""]}),t})(),S=(()=>{class t{constructor(t){this.userService=t,this.studentForm=new o.c({id:new o.a({value:"",disabled:!0}),name:new o.a({value:"",disabled:!0})})}ngOnInit(){this.setForm(this.studentForm,this.student)}setForm(t,e){t.get("id").setValue(e.id),t.get("name").setValue(`${e.firstName} ${e.lastName}`)}submitStudentForm(){}}return t.\u0275fac=function(e){return new(e||t)(r.Hb(a.a))},t.\u0275cmp=r.Bb({type:t,selectors:[["app-form-student"]],inputs:{student:"student"},decls:48,vars:1,consts:[[3,"formGroup","ngSubmit"],["formControlName","id"],["formControlName","name"],["type","submit"]],template:function(t,e){1&t&&(r.Kb(0,"form",0),r.Rb("ngSubmit",(function(){return e.submitStudentForm()})),r.Kb(1,"ion-grid"),r.Kb(2,"ion-row"),r.Kb(3,"ion-col"),r.Kb(4,"ion-item"),r.Kb(5,"ion-label"),r.bc(6,"\u05ea.\u05d6:"),r.Jb(),r.Ib(7,"ion-input",1),r.Jb(),r.Jb(),r.Kb(8,"ion-col"),r.Kb(9,"ion-item"),r.Kb(10,"ion-label"),r.bc(11,"\u05e9\u05dd:"),r.Jb(),r.Ib(12,"ion-input",2),r.Jb(),r.Jb(),r.Jb(),r.Kb(13,"ion-row"),r.Kb(14,"ion-col"),r.bc(15," \u05d0\u05e0\u05d9 \u05de\u05e6\u05d4\u05d9\u05e8 \u05db\u05d3\u05dc\u05d4\u05dc\u05df: "),r.Kb(16,"ion-row"),r.bc(17,"-\u05de\u05d3\u05d3\u05ea\u05d9 \u05d7\u05d5\u05dd \u05dc\u05d9\u05dc\u05d3\u05d9/\u05d9\u05dc\u05d3\u05ea\u05d9, \u05d5\u05e0\u05de\u05e6\u05d0 \u05db\u05d9 \u05d7\u05d5\u05dd \u05d2\u05d5\u05e4\u05d5/\u05d4 \u05de\u05ea\u05d7\u05ea \u05dc- 38 \u05de\u05e2\u05dc\u05d5\u05ea \u05e6\u05dc\u05d6\u05d9\u05d5\u05e1. "),r.Jb(),r.Kb(18,"ion-row"),r.bc(19,"-\u05d9\u05dc\u05d3\u05d9 / \u05d9\u05dc\u05d3\u05ea\u05d9 \u05dc\u05d0 \u05de\u05e9\u05ea\u05e2\u05dc \u05d5\u05d0\u05d9\u05df \u05dc\u05d5 \u05e7\u05e9\u05d9\u05d9\u05dd \u05d1\u05e0\u05e9\u05d9\u05de\u05d4*"),r.Jb(),r.Kb(20,"ion-row"),r.bc(21," -\u05dc\u05de\u05d9\u05d8\u05d1 \u05d9\u05d3\u05d9\u05e2\u05ea\u05d9 \u05d9\u05dc\u05d3\u05d9 \u05dc\u05d0 \u05d4\u05d9\u05d4 \u05d1\u05de\u05d2\u05e2 \u05e7\u05e8\u05d5\u05d1 \u05e2\u05dd \u05d7\u05d5\u05dc\u05d4\u05e7\u05d5\u05e8\u05d5\u05e0\u05d4 \u05d1\u05e9\u05d1\u05d5\u05e2\u05d9\u05d9\u05dd \u05d4\u05d0\u05d7\u05e8\u05d5\u05e0\u05d9\u05dd. "),r.Jb(),r.Jb(),r.Jb(),r.Kb(22,"ion-row"),r.Kb(23,"ion-col"),r.Kb(24,"ion-item"),r.Kb(25,"ion-label"),r.bc(26,"\u05e9\u05dd \u05d4\u05d0\u05d7\u05e8\u05d0\u05d9/\u05d4\u05d5\u05e8\u05d4:"),r.Jb(),r.Ib(27,"ion-input"),r.Jb(),r.Jb(),r.Kb(28,"ion-col"),r.Kb(29,"ion-item"),r.Kb(30,"ion-label"),r.bc(31,"\u05ea.\u05d6:"),r.Jb(),r.Ib(32,"ion-input"),r.Jb(),r.Jb(),r.Jb(),r.Kb(33,"ion-row"),r.Kb(34,"ion-col"),r.Kb(35,"ion-item"),r.Kb(36,"ion-label"),r.bc(37,"\u05ea\u05d0\u05e8\u05d9\u05da:"),r.Jb(),r.Ib(38,"ion-input"),r.Jb(),r.Jb(),r.Jb(),r.Kb(39,"ion-row"),r.Kb(40,"ion-col"),r.Ib(41,"app-sig-pop"),r.Jb(),r.Kb(42,"ion-col"),r.Kb(43,"ion-button",3),r.bc(44,"\u05e9\u05dc\u05d7"),r.Jb(),r.Jb(),r.Jb(),r.Kb(45,"ion-col"),r.Kb(46,"ion-row"),r.bc(47," *\u05dc\u05de\u05e2\u05d8 \u05e9\u05d9\u05e2\u05d5\u05dc \u05d0\u05d5 \u05e7\u05d5\u05e9\u05d9 \u05d1\u05e0\u05e9\u05d9\u05de\u05d4 \u05d4\u05e0\u05d5\u05d1\u05e2 \u05de\u05de\u05e6\u05d1 \u05db\u05e8\u05d5\u05e0\u05d9 \u05db\u05d2\u05d5\u05df \u05d0\u05e1\u05d8\u05de\u05d4 \u05d0\u05d5 \u05d0\u05dc\u05e8\u05d2\u05d9\u05d4 \u05d0\u05d7\u05e8\u05ea. "),r.Jb(),r.Jb(),r.Jb(),r.Jb()),2&t&&r.Wb("formGroup",e.studentForm)},directives:[o.n,o.k,o.d,s.h,s.o,s.f,s.l,s.m,s.k,s.v,o.j,o.b,x,s.d],styles:[""]}),t})(),k=(()=>{class t{constructor(t){this.userService=t}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(r.Hb(a.a))},t.\u0275cmp=r.Bb({type:t,selectors:[["app-form-employee"]],inputs:{employee:"employee"},decls:3,vars:0,template:function(t,e){1&t&&(r.Kb(0,"p"),r.bc(1," form-employee works!\n"),r.Jb(),r.Ib(2,"app-sig-pop"))},directives:[x],styles:[""]}),t})();function I(t,e){if(1&t&&r.Ib(0,"app-form-student",6),2&t){const t=r.Tb();r.Wb("student",t.student)}}function C(t,e){if(1&t&&r.Ib(0,"app-form-employee",7),2&t){const t=r.Tb();r.Wb("employee",t.employee)}}const O=[{path:"",component:(()=>{class t{constructor(t){this.userService=t,this.employee=this.userService.employee,this.student=this.userService.student}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(r.Hb(a.a))},t.\u0275cmp=r.Bb({type:t,selectors:[["app-main-form"]],decls:9,vars:2,consts:[["color","primary"],[1,"ion-no-padding"],["slot","start"],["icon","arrow-forward","defaultHref","/home"],[3,"student",4,"ngIf"],[3,"employee",4,"ngIf"],[3,"student"],[3,"employee"]],template:function(t,e){1&t&&(r.Kb(0,"ion-header"),r.Kb(1,"ion-toolbar",0),r.Kb(2,"ion-title",1),r.bc(3,"\u05d4\u05e6\u05d4\u05e8\u05ea \u05d1\u05e8\u05d9\u05d0\u05d5\u05ea"),r.Jb(),r.Kb(4,"ion-buttons",2),r.Ib(5,"ion-back-button",3),r.Jb(),r.Jb(),r.Jb(),r.Kb(6,"ion-content"),r.ac(7,I,1,1,"app-form-student",4),r.ac(8,C,1,1,"app-form-employee",5),r.Jb()),2&t&&(r.xb(7),r.Wb("ngIf",e.student),r.xb(1),r.Wb("ngIf",e.employee))},directives:[s.i,s.q,s.p,s.e,s.b,s.c,s.g,i.h,S,k],styles:[""]}),t})()}];let F=(()=>{class t{}return t.\u0275mod=r.Fb({type:t}),t.\u0275inj=r.Eb({factory:function(e){return new(e||t)},imports:[[c.i.forChild(O)],c.i]}),t})(),j=(()=>{class t{}return t.\u0275mod=r.Fb({type:t}),t.\u0275inj=r.Eb({factory:function(e){return new(e||t)},imports:[[i.b,o.e,s.r,F,o.m]]}),t})()}}]);