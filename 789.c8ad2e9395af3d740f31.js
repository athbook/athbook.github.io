"use strict";(self.webpackChunkathbook=self.webpackChunkathbook||[]).push([[789],{2789:(E,c,o)=>{o.r(c),o.d(c,{AuthSignInModule:()=>B});var l=o(5543),d=o(7617),f=o(4699),m=o(823),p=o(1749),h=o(9018),Z=o(5434),v=o(2081),x=o(9407),A=o(6631),a=o(3324),I=o(2587),y=o(4766),t=o(2741),T=o(7593),b=o(6274),w=o(5329);const U=["signInNgForm"];function F(e,r){if(1&e&&(t.TgZ(0,"fuse-alert",49),t._uU(1),t.qZA()),2&e){const n=t.oxw();t.Q6J("appearance","outline")("showIcon",!1)("type",n.alert.type)("@shake","error"===n.alert.type),t.xp6(1),t.hij(" ",n.alert.message," ")}}function C(e,r){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Correo electr\xf3nico es obligatorio "),t.qZA())}function q(e,r){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Por favor inserte un correo electr\xf3nico v\xe1lido "),t.qZA())}function S(e,r){1&e&&t._UZ(0,"mat-icon",28),2&e&&t.Q6J("svgIcon","heroicons_solid:eye")}function J(e,r){1&e&&t._UZ(0,"mat-icon",28),2&e&&t.Q6J("svgIcon","heroicons_solid:eye-off")}function _(e,r){1&e&&(t.TgZ(0,"span"),t._uU(1," Iniciar Sesi\xf3n "),t.qZA())}function N(e,r){1&e&&t._UZ(0,"mat-progress-spinner",50),2&e&&t.Q6J("diameter",24)("mode","indeterminate")}const Q=function(){return["/sign-up"]},k=function(){return["/forgot-password"]},M=[{path:"",component:(()=>{class e{constructor(n,i,s,g){this._activatedRoute=n,this._authService=i,this._formBuilder=s,this._router=g,this.alert={type:"success",message:""},this.showAlert=!1}ngOnInit(){this.signInForm=this._formBuilder.group({email:["hughes.brian@company.com",[a.kI.required,a.kI.email]],password:["admin",a.kI.required],rememberMe:[""]}),this.renderButton()}signIn(){this.signInForm.invalid||(this.signInForm.disable(),this.showAlert=!1,this._authService.signIn(this.signInForm.value).subscribe(()=>{const n=this._activatedRoute.snapshot.queryParamMap.get("redirectURL")||"/signed-in-redirect";this._router.navigateByUrl(n)},n=>{this.signInForm.enable(),this.signInNgForm.resetForm(),this.alert={type:"error",message:"Wrong email or password"},this.showAlert=!0}))}renderButton(){gapi.signin2.render("my-signin2",{scope:"profile email",width:240,height:50,longtitle:!1,theme:"light"}),this._startApp()}_startApp(){gapi.load("auth2",()=>{this.auth2=gapi.auth2.init({client_id:y.N.GOOGLE_CLIENT_ID,cookiepolicy:"single_host_origin"}),this._attachSignin(document.getElementById("my-signin2"))})}_attachSignin(n){this.auth2.attachClickHandler(n,{},i=>{console.log(i.Zb.id_token)},i=>{alert(JSON.stringify(i,void 0,2))})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(l.gz),t.Y36(T.e),t.Y36(a.qu),t.Y36(l.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["auth-sign-in"]],viewQuery:function(n,i){if(1&n&&t.Gf(U,5),2&n){let s;t.iGM(s=t.CRH())&&(i.signInNgForm=s.first)}},decls:77,vars:19,consts:[[1,"flex","flex-col","items-center","flex-auto","min-w-0","sm:flex-row","md:items-start","sm:justify-center","md:justify-start"],[1,"w-full","px-4","py-8","md:flex","md:items-center","md:justify-end","sm:w-auto","md:h-full","md:w-1/2","sm:p-12","md:p-16","light","sm:rounded-2xl","md:rounded-none","sm:shadow","md:shadow-none","sm:bg-card"],[1,"w-full","mx-auto","max-w-80","sm:w-80","sm:mx-0"],[1,"w-60"],["src","assets/images/logo/logo.svg","alt","Athbook Logo"],[1,"mt-8","text-4xl","font-extrabold","leading-tight","tracking-tight"],[1,"flex","items-baseline","mt-0.5","font-medium"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"],["class","mt-8 -mb-4",3,"appearance","showIcon","type",4,"ngIf"],[1,"mt-8",3,"formGroup"],["signInNgForm","ngForm"],[1,"w-full"],["id","email","matInput","",3,"formControlName"],[4,"ngIf"],["id","password","matInput","","type","password",3,"formControlName"],["passwordField",""],["mat-icon-button","","type","button","matSuffix","",3,"click"],["class","icon-size-5",3,"svgIcon",4,"ngIf"],[1,"inline-flex","items-end","justify-between","w-full","mt-1.5"],[3,"color","formControlName"],[1,"font-medium","text-md","text-primary-500","hover:underline",3,"routerLink"],["mat-flat-button","",1,"w-full","mt-6","fuse-mat-button-large",3,"color","disabled","click"],[3,"diameter","mode",4,"ngIf"],[1,"flex","items-center","mt-8"],[1,"flex-auto","mt-px","border-t-2","border-bean-300"],[1,"mx-2","text-secondary"],[1,"flex","items-center","mt-8","space-x-4"],["type","button","mat-stroked-button","",1,"flex-auto","w-1/2"],[1,"icon-size-5",3,"svgIcon"],["mat-stroked-button","","id","my-signin2",1,"w-1/2","hover:bg-hover"],[1,"relative","items-center","justify-center","flex-auto","hidden","w-1/2","h-full","p-16","overflow-hidden","bg-gray-800","md:flex","lg:px-28","dark:border-l"],["viewBox","0 0 960 540","width","100%","height","100%","preserveAspectRatio","xMidYMax slice","xmlns","http://www.w3.org/2000/svg",1,"absolute","inset-0","pointer-events-none"],["fill","none","stroke","currentColor","stroke-width","100",1,"text-gray-700","opacity-25"],["r","234","cx","196","cy","23"],["r","234","cx","790","cy","491"],["viewBox","0 0 220 192","width","220","height","192","fill","none",1,"absolute","text-gray-700","-top-16","-right-16"],["id","837c3e70-6c3a-44e6-8854-cc48c737b659","x","0","y","0","width","20","height","20","patternUnits","userSpaceOnUse"],["x","0","y","0","width","4","height","4","fill","currentColor"],["width","220","height","192","fill","url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"],[1,"relative","z-10","w-full","max-w-2xl"],[1,"font-bold","leading-none","text-gray-100","text-7xl"],[1,"mt-6","text-lg","leading-6","tracking-tight","text-gray-400"],[1,"flex","flex-0","items-center","-space-x-1.5"],["src","assets/images/team/anabel.webp",1,"object-cover","w-10","h-10","rounded-full","flex-0","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800"],["src","assets/images/team/frank.webp",1,"object-cover","w-10","h-10","rounded-full","flex-0","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800"],["src","assets/images/team/andiel.webp",1,"object-cover","w-10","h-10","rounded-full","flex-0","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800"],["src","assets/images/team/lazaro.webp",1,"object-cover","w-10","h-10","rounded-full","flex-0","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800"],[1,"ml-4","font-medium","tracking-tight","text-gray-400"],["href","https://athendat.github.io",1,"text-teal-500","hover:underline"],[1,"mt-8","-mb-4",3,"appearance","showIcon","type"],[3,"diameter","mode"]],template:function(n,i){if(1&n){const s=t.EpF();t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"div",5),t._uU(6,"Iniciar Sesi\xf3n"),t.qZA(),t.TgZ(7,"div",6),t.TgZ(8,"div"),t._uU(9,"\xbfA\xfan no tiene cuenta?"),t.qZA(),t.TgZ(10,"a",7),t._uU(11,"Registrarme "),t.qZA(),t.qZA(),t.YNc(12,F,2,5,"fuse-alert",8),t.TgZ(13,"form",9,10),t.TgZ(15,"mat-form-field",11),t.TgZ(16,"mat-label"),t._uU(17,"Correo electr\xf3nico"),t.qZA(),t._UZ(18,"input",12),t.YNc(19,C,2,0,"mat-error",13),t.YNc(20,q,2,0,"mat-error",13),t.qZA(),t.TgZ(21,"mat-form-field",11),t.TgZ(22,"mat-label"),t._uU(23,"Password"),t.qZA(),t._UZ(24,"input",14,15),t.TgZ(26,"button",16),t.NdJ("click",function(){t.CHM(s);const u=t.MAs(25);return u.type="password"===u.type?"text":"password"}),t.YNc(27,S,1,1,"mat-icon",17),t.YNc(28,J,1,1,"mat-icon",17),t.qZA(),t.TgZ(29,"mat-error"),t._uU(30," La contrase\xf1a es obligatoria "),t.qZA(),t.qZA(),t.TgZ(31,"div",18),t.TgZ(32,"mat-checkbox",19),t._uU(33," Recordar mi usuario "),t.qZA(),t.TgZ(34,"a",20),t._uU(35,"\xbfOlvid\xf3 su contrase\xf1a? "),t.qZA(),t.qZA(),t.TgZ(36,"button",21),t.NdJ("click",function(){return i.signIn()}),t.YNc(37,_,2,0,"span",13),t.YNc(38,N,1,2,"mat-progress-spinner",22),t.qZA(),t.TgZ(39,"div",23),t._UZ(40,"div",24),t.TgZ(41,"div",25),t._uU(42,"Iniciar sesi\xf3n con mi cuenta de"),t.qZA(),t._UZ(43,"div",24),t.qZA(),t.TgZ(44,"div",26),t.TgZ(45,"button",27),t._UZ(46,"mat-icon",28),t.qZA(),t._UZ(47,"button",29),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(48,"div",30),t.O4$(),t.TgZ(49,"svg",31),t.TgZ(50,"g",32),t._UZ(51,"circle",33),t._UZ(52,"circle",34),t.qZA(),t.qZA(),t.TgZ(53,"svg",35),t.TgZ(54,"defs"),t.TgZ(55,"pattern",36),t._UZ(56,"rect",37),t.qZA(),t.qZA(),t._UZ(57,"rect",38),t.qZA(),t.kcU(),t.TgZ(58,"div",39),t.TgZ(59,"div",40),t.TgZ(60,"div"),t._uU(61,"Bienvenido a"),t.qZA(),t.TgZ(62,"div"),t._uU(63,"nuestra plataforma"),t.qZA(),t.qZA(),t.TgZ(64,"div",41),t._uU(65," ATHENDAT es una plataforma en l\xednea de aplicaciones empresariales destinada a desarrollar y pontenciar al m\xe1ximo los beneficios de los negocios cubanos ofreciendo herramientas modernas, flexibles y robustas que garanticen el cumplimiento normativo de nuestro pa\xeds. "),t.qZA(),t.TgZ(66,"div",23),t.TgZ(67,"div",42),t._UZ(68,"img",43),t._UZ(69,"img",44),t._UZ(70,"img",45),t._UZ(71,"img",46),t.qZA(),t.TgZ(72,"div",47),t._uU(73,"Para m\xe1s detalles consulte nuestra "),t.TgZ(74,"a",48),t._uU(75,"web"),t.qZA(),t._uU(76,"."),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&n){const s=t.MAs(25);t.xp6(10),t.Q6J("routerLink",t.DdM(17,Q)),t.xp6(2),t.Q6J("ngIf",i.showAlert),t.xp6(1),t.Q6J("formGroup",i.signInForm),t.xp6(5),t.Q6J("formControlName","email"),t.xp6(1),t.Q6J("ngIf",i.signInForm.get("email").hasError("required")),t.xp6(1),t.Q6J("ngIf",i.signInForm.get("email").hasError("email")),t.xp6(4),t.Q6J("formControlName","password"),t.xp6(3),t.Q6J("ngIf","password"===s.type),t.xp6(1),t.Q6J("ngIf","text"===s.type),t.xp6(4),t.Q6J("color","primary")("formControlName","rememberMe"),t.xp6(2),t.Q6J("routerLink",t.DdM(18,k)),t.xp6(2),t.Q6J("color","primary")("disabled",i.signInForm.disabled),t.xp6(1),t.Q6J("ngIf",!i.signInForm.disabled),t.xp6(1),t.Q6J("ngIf",i.signInForm.disabled),t.xp6(8),t.Q6J("svgIcon","socialicons:facebook")}},directives:[l.yS,b.O5,a._Y,a.JL,a.sg,m.KE,m.hX,h.Nt,a.Fj,a.JJ,a.u,d.lW,m.R9,m.TO,f.oG,p.Hw,w.W,Z.Ou],encapsulation:2,data:{animation:I.L}}),e})()}];let B=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[l.Bz.forChild(M),d.ot,f.p9,m.lN,p.Ps,h.c,Z.Cq,v.J,x.fC,A.m]]}),e})()}}]);