(()=>{"use strict";var e={601:function(e,t,r){var o,n=this&&this.__decorate||function(e,t,r,o){var n,c=arguments.length,i=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(i=(c<3?n(i):c>3?n(t,r,i):n(t,r))||i);return c>3&&i&&Object.defineProperty(t,r,i),i},c=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},i=this&&this.__param||function(e,t){return function(r,o){t(r,o,e)}};Object.defineProperty(t,"__esModule",{value:!0}),t.AppController=void 0;const s=r(563),a=r(507);let u=t.AppController=class{constructor(e){this.authService=e}healthCheck(){return{statusCode:s.HttpStatus.OK,message:"OK"}}async login(e){const t=this.authService.login(e.user,"basic");return{statusCode:s.HttpStatus.OK,message:"OK",data:Object.assign({},t)}}async getProfile(e){return{statusCode:s.HttpStatus.OK,message:"OK",data:{user:e.user}}}};n([(0,s.Get)(["","ping"]),c("design:type",Function),c("design:paramtypes",[]),c("design:returntype",Object)],u.prototype,"healthCheck",null),n([(0,s.UseGuards)(a.LocalAuthGuard),(0,s.Post)("api/auth/login"),i(0,(0,s.Request)()),c("design:type",Function),c("design:paramtypes",[Object]),c("design:returntype",Promise)],u.prototype,"login",null),n([(0,s.UseGuards)(a.BasicAuthGuard),(0,s.Get)("api/profile"),i(0,(0,s.Request)()),c("design:type",Function),c("design:paramtypes",[Object]),c("design:returntype",Promise)],u.prototype,"getProfile",null),t.AppController=u=n([(0,s.Controller)(),c("design:paramtypes",["function"==typeof(o=void 0!==a.AuthService&&a.AuthService)?o:Object])],u)},977:function(e,t,r){var o=this&&this.__decorate||function(e,t,r,o){var n,c=arguments.length,i=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(i=(c<3?n(i):c>3?n(t,r,i):n(t,r))||i);return c>3&&i&&Object.defineProperty(t,r,i),i};Object.defineProperty(t,"__esModule",{value:!0}),t.AppModule=void 0;const n=r(563),c=r(601),i=r(643),s=r(531),a=r(281);let u=t.AppModule=class{};t.AppModule=u=o([(0,n.Module)({imports:[s.AuthModule,i.CartModule,a.OrderModule],controllers:[c.AppController],providers:[]})],u)},531:function(e,t,r){var o=this&&this.__decorate||function(e,t,r,o){var n,c=arguments.length,i=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(i=(c<3?n(i):c>3?n(t,r,i):n(t,r))||i);return c>3&&i&&Object.defineProperty(t,r,i),i};Object.defineProperty(t,"__esModule",{value:!0}),t.AuthModule=void 0;const n=r(563),c=r(520),i=r(815),s=r(508),a=r(541),u=r(773),l=r(133),{secret:d,expiresIn:f}=u.JWT_CONFIG;let p=t.AuthModule=class{};t.AuthModule=p=o([(0,n.Module)({imports:[l.UsersModule,c.PassportModule,i.JwtModule.register({secret:d,signOptions:{expiresIn:f}})],providers:[s.AuthService,a.JwtStrategy,a.LocalStrategy,a.BasicStrategy],exports:[s.AuthService]})],p)},508:function(e,t,r){var o,n,c=this&&this.__decorate||function(e,t,r,o){var n,c=arguments.length,i=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(i=(c<3?n(i):c>3?n(t,r,i):n(t,r))||i);return c>3&&i&&Object.defineProperty(t,r,i),i},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.AuthService=void 0;const s=r(563),a=r(815),u=r(365);let l=t.AuthService=class{constructor(e,t){this.usersService=e,this.jwtService=t}validateUser(e,t){return this.usersService.findOne(e)||this.usersService.createOne({name:e,password:t})}login(e,t){const r={jwt:this.loginJWT,basic:this.loginBasic,default:this.loginJWT},o=r[t];return o?o(e):r.default(e)}loginJWT(e){const t={username:e.name,sub:e.id};return{token_type:"Bearer",access_token:this.jwtService.sign(t)}}loginBasic(e){return console.log(e),{token_type:"Basic",access_token:function(e){const{id:t,name:r,password:o}=e;return Buffer.from([r,o].join(":"),"utf8").toString("base64")}(e)}}};t.AuthService=l=c([(0,s.Injectable)(),i("design:paramtypes",["function"==typeof(o=void 0!==u.UsersService&&u.UsersService)?o:Object,"function"==typeof(n=void 0!==a.JwtService&&a.JwtService)?n:Object])],l)},88:function(e,t,r){var o=this&&this.__decorate||function(e,t,r,o){var n,c=arguments.length,i=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(i=(c<3?n(i):c>3?n(t,r,i):n(t,r))||i);return c>3&&i&&Object.defineProperty(t,r,i),i};Object.defineProperty(t,"__esModule",{value:!0}),t.BasicAuthGuard=void 0;const n=r(563),c=r(520);let i=t.BasicAuthGuard=class extends((0,c.AuthGuard)("basic")){};t.BasicAuthGuard=i=o([(0,n.Injectable)()],i)},854:function(e,t,r){var o=this&&this.__createBinding||(Object.create?function(e,t,r,o){void 0===o&&(o=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,o,n)}:function(e,t,r,o){void 0===o&&(o=r),e[o]=t[r]}),n=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||o(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),n(r(75),t),n(r(41),t),n(r(88),t)},41:function(e,t,r){var o=this&&this.__decorate||function(e,t,r,o){var n,c=arguments.length,i=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(i=(c<3?n(i):c>3?n(t,r,i):n(t,r))||i);return c>3&&i&&Object.defineProperty(t,r,i),i};Object.defineProperty(t,"__esModule",{value:!0}),t.JwtAuthGuard=void 0;const n=r(563),c=r(520);let i=t.JwtAuthGuard=class extends((0,c.AuthGuard)("jwt")){};t.JwtAuthGuard=i=o([(0,n.Injectable)()],i)},75:function(e,t,r){var o=this&&this.__decorate||function(e,t,r,o){var n,c=arguments.length,i=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(i=(c<3?n(i):c>3?n(t,r,i):n(t,r))||i);return c>3&&i&&Object.defineProperty(t,r,i),i};Object.defineProperty(t,"__esModule",{value:!0}),t.LocalAuthGuard=void 0;const n=r(563),c=r(520);let i=t.LocalAuthGuard=class extends((0,c.AuthGuard)("local")){};t.LocalAuthGuard=i=o([(0,n.Injectable)()],i)},507:function(e,t,r){var o=this&&this.__createBinding||(Object.create?function(e,t,r,o){void 0===o&&(o=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,o,n)}:function(e,t,r,o){void 0===o&&(o=r),e[o]=t[r]}),n=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||o(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),n(r(508),t),n(r(854),t)},460:function(e,t,r){var o,n=this&&this.__decorate||function(e,t,r,o){var n,c=arguments.length,i=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(i=(c<3?n(i):c>3?n(t,r,i):n(t,r))||i);return c>3&&i&&Object.defineProperty(t,r,i),i},c=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},i=this&&this.__rest||function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]])}return r};Object.defineProperty(t,"__esModule",{value:!0}),t.BasicStrategy=void 0;const s=r(563),a=r(520),u=r(713),l=r(508);let d=t.BasicStrategy=class extends((0,a.PassportStrategy)(u.BasicStrategy)){constructor(e){super(),this.authService=e}async validate(e,t){const r=this.authService.validateUser(e,t);if(!r)throw new s.UnauthorizedException;const{password:o}=r;return i(r,["password"])}};t.BasicStrategy=d=n([(0,s.Injectable)(),c("design:paramtypes",["function"==typeof(o=void 0!==l.AuthService&&l.AuthService)?o:Object])],d)},541:function(e,t,r){var o=this&&this.__createBinding||(Object.create?function(e,t,r,o){void 0===o&&(o=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,o,n)}:function(e,t,r,o){void 0===o&&(o=r),e[o]=t[r]}),n=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||o(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),n(r(363),t),n(r(97),t),n(r(460),t)},97:function(e,t,r){var o=this&&this.__decorate||function(e,t,r,o){var n,c=arguments.length,i=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(i=(c<3?n(i):c>3?n(t,r,i):n(t,r))||i);return c>3&&i&&Object.defineProperty(t,r,i),i},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.JwtStrategy=void 0;const c=r(563),i=r(520),s=r(714),a=r(773);let u=t.JwtStrategy=class extends((0,i.PassportStrategy)(s.Strategy)){constructor(){super({jwtFromRequest:s.ExtractJwt.fromAuthHeaderAsBearerToken(),ignoreExpiration:!1,secretOrKey:a.JWT_CONFIG.secret})}async validate(e){return{id:e.sub,name:e.username}}};t.JwtStrategy=u=o([(0,c.Injectable)(),n("design:paramtypes",[])],u)},363:function(e,t,r){var o,n=this&&this.__decorate||function(e,t,r,o){var n,c=arguments.length,i=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(i=(c<3?n(i):c>3?n(t,r,i):n(t,r))||i);return c>3&&i&&Object.defineProperty(t,r,i),i},c=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.LocalStrategy=void 0;const i=r(563),s=r(520),a=r(752),u=r(508);let l=t.LocalStrategy=class extends((0,s.PassportStrategy)(a.Strategy)){constructor(e){super(),this.authService=e}async validate(e,t){const r=this.authService.validateUser(e,t);if(!r)throw new i.UnauthorizedException;return r}};t.LocalStrategy=l=n([(0,i.Injectable)(),c("design:paramtypes",["function"==typeof(o=void 0!==u.AuthService&&u.AuthService)?o:Object])],l)},391:function(e,t,r){var o,n,c,i,s,a,u=this&&this.__decorate||function(e,t,r,o){var n,c=arguments.length,i=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(i=(c<3?n(i):c>3?n(t,r,i):n(t,r))||i);return c>3&&i&&Object.defineProperty(t,r,i),i},l=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},d=this&&this.__param||function(e,t){return function(r,o){t(r,o,e)}};Object.defineProperty(t,"__esModule",{value:!0}),t.CartController=void 0;const f=r(563),p=r(715),y=r(348),v=r(976),h=r(44);let O=t.CartController=class{constructor(e,t){this.cartService=e,this.orderService=t}findUserCart(e){const t=this.cartService.findOrCreateByUserId((0,y.getUserIdFromRequest)(e));return{statusCode:f.HttpStatus.OK,message:"OK",data:{cart:t,total:(0,v.calculateCartTotal)(t)}}}updateUserCart(e,t){const r=this.cartService.updateByUserId((0,y.getUserIdFromRequest)(e),t);return{statusCode:f.HttpStatus.OK,message:"OK",data:{cart:r,total:(0,v.calculateCartTotal)(r)}}}clearUserCart(e){return this.cartService.removeByUserId((0,y.getUserIdFromRequest)(e)),{statusCode:f.HttpStatus.OK,message:"OK"}}checkout(e,t){const r=(0,y.getUserIdFromRequest)(e),o=this.cartService.findByUserId(r);if(!o||!o.items.length){const t=f.HttpStatus.BAD_REQUEST;return e.statusCode=t,{statusCode:t,message:"Cart is empty"}}const{id:n,items:c}=o,i=(0,v.calculateCartTotal)(o),s=this.orderService.create(Object.assign(Object.assign({},t),{userId:r,cartId:n,items:c,total:i}));return this.cartService.removeByUserId(r),{statusCode:f.HttpStatus.OK,message:"OK",data:{order:s}}}};u([(0,f.Get)(),d(0,(0,f.Req)()),l("design:type",Function),l("design:paramtypes",["function"==typeof(c=void 0!==y.AppRequest&&y.AppRequest)?c:Object]),l("design:returntype",void 0)],O.prototype,"findUserCart",null),u([(0,f.Put)(),d(0,(0,f.Req)()),d(1,(0,f.Body)()),l("design:type",Function),l("design:paramtypes",["function"==typeof(i=void 0!==y.AppRequest&&y.AppRequest)?i:Object,Object]),l("design:returntype",void 0)],O.prototype,"updateUserCart",null),u([(0,f.Delete)(),d(0,(0,f.Req)()),l("design:type",Function),l("design:paramtypes",["function"==typeof(s=void 0!==y.AppRequest&&y.AppRequest)?s:Object]),l("design:returntype",void 0)],O.prototype,"clearUserCart",null),u([(0,f.Post)("checkout"),d(0,(0,f.Req)()),d(1,(0,f.Body)()),l("design:type",Function),l("design:paramtypes",["function"==typeof(a=void 0!==y.AppRequest&&y.AppRequest)?a:Object,Object]),l("design:returntype",void 0)],O.prototype,"checkout",null),t.CartController=O=u([(0,f.Controller)("api/profile/cart"),l("design:paramtypes",["function"==typeof(o=void 0!==h.CartService&&h.CartService)?o:Object,"function"==typeof(n=void 0!==p.OrderService&&p.OrderService)?n:Object])],O)},643:function(e,t,r){var o=this&&this.__decorate||function(e,t,r,o){var n,c=arguments.length,i=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(i=(c<3?n(i):c>3?n(t,r,i):n(t,r))||i);return c>3&&i&&Object.defineProperty(t,r,i),i};Object.defineProperty(t,"__esModule",{value:!0}),t.CartModule=void 0;const n=r(563),c=r(281),i=r(391),s=r(44);let a=t.CartModule=class{};t.CartModule=a=o([(0,n.Module)({imports:[c.OrderModule],providers:[s.CartService],controllers:[i.CartController]})],a)},976:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.calculateCartTotal=void 0,t.calculateCartTotal=function(e){return e?e.items.reduce(((e,{product:{price:t},count:r})=>e+t*r),0):0}},802:(e,t)=>{var r;Object.defineProperty(t,"__esModule",{value:!0}),t.CartStatuses=void 0,function(e){e.OPEN="OPEN",e.STATUS="STATUS"}(r||(t.CartStatuses=r={}))},125:function(e,t,r){var o=this&&this.__decorate||function(e,t,r,o){var n,c=arguments.length,i=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(i=(c<3?n(i):c>3?n(t,r,i):n(t,r))||i);return c>3&&i&&Object.defineProperty(t,r,i),i},n=this&&this.__rest||function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]])}return r};Object.defineProperty(t,"__esModule",{value:!0}),t.CartService=void 0;const c=r(563),i=r(903),s=r(802);let a=t.CartService=class{constructor(){this.userCarts={}}findByUserId(e){return this.userCarts[e]}createByUserId(e){const t={id:(0,i.v4)(),items:[],user_id:e,created_at:(new Date).toUTCString(),updated_at:(new Date).toUTCString(),status:s.CartStatuses.OPEN};return this.userCarts[e]=t,t}findOrCreateByUserId(e){return this.findByUserId(e)||this.createByUserId(e)}updateByUserId(e,{items:t}){const r=this.findOrCreateByUserId(e),{id:o}=r,c=n(r,["id"]),i=Object.assign(Object.assign({id:o},c),{items:[...t]});return this.userCarts[e]=Object.assign({},i),Object.assign({},i)}removeByUserId(e){this.userCarts[e]=null}};t.CartService=a=o([(0,c.Injectable)()],a)},44:function(e,t,r){var o=this&&this.__createBinding||(Object.create?function(e,t,r,o){void 0===o&&(o=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,o,n)}:function(e,t,r,o){void 0===o&&(o=r),e[o]=t[r]}),n=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||o(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),n(r(125),t)},773:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.JWT_CONFIG=void 0,t.JWT_CONFIG={secret:"secret",expiresIn:"12h"}},875:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.bootstrap=void 0;const o=r(781),n=r(525),c=r(977),i=process.env.PORT||4e3;t.bootstrap=async function(){const e=await o.NestFactory.create(c.AppModule);return e.enableCors({origin:(e,t)=>t(null,!0)}),e.use((0,n.default)()),await e.listen(i),console.log("App is running on %s port",i),e}},715:function(e,t,r){var o=this&&this.__createBinding||(Object.create?function(e,t,r,o){void 0===o&&(o=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,o,n)}:function(e,t,r,o){void 0===o&&(o=r),e[o]=t[r]}),n=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||o(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),n(r(874),t),n(r(932),t)},874:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},281:function(e,t,r){var o=this&&this.__decorate||function(e,t,r,o){var n,c=arguments.length,i=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(i=(c<3?n(i):c>3?n(t,r,i):n(t,r))||i);return c>3&&i&&Object.defineProperty(t,r,i),i};Object.defineProperty(t,"__esModule",{value:!0}),t.OrderModule=void 0;const n=r(563),c=r(932);let i=t.OrderModule=class{};t.OrderModule=i=o([(0,n.Module)({providers:[c.OrderService],exports:[c.OrderService]})],i)},932:function(e,t,r){var o=this&&this.__createBinding||(Object.create?function(e,t,r,o){void 0===o&&(o=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,o,n)}:function(e,t,r,o){void 0===o&&(o=r),e[o]=t[r]}),n=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||o(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),n(r(589),t)},589:function(e,t,r){var o=this&&this.__decorate||function(e,t,r,o){var n,c=arguments.length,i=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(i=(c<3?n(i):c>3?n(t,r,i):n(t,r))||i);return c>3&&i&&Object.defineProperty(t,r,i),i};Object.defineProperty(t,"__esModule",{value:!0}),t.OrderService=void 0;const n=r(563),c=r(903);let i=t.OrderService=class{constructor(){this.orders={}}findById(e){return this.orders[e]}create(e){const t=(0,c.v4)(),r=Object.assign(Object.assign({},e),{id:t,status:"inProgress"});return this.orders[t]=r,r}update(e,t){if(!this.findById(e))throw new Error("Order does not exist.");this.orders[e]=Object.assign(Object.assign({},t),{id:e})}};t.OrderService=i=o([(0,n.Injectable)()],i)},348:function(e,t,r){var o=this&&this.__createBinding||(Object.create?function(e,t,r,o){void 0===o&&(o=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,o,n)}:function(e,t,r,o){void 0===o&&(o=r),e[o]=t[r]}),n=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||o(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),n(r(627),t),n(r(141),t)},141:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getUserIdFromRequest=void 0,t.getUserIdFromRequest=function(e){return e.user&&e.user.id}},627:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},744:function(e,t,r){var o=this&&this.__createBinding||(Object.create?function(e,t,r,o){void 0===o&&(o=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,o,n)}:function(e,t,r,o){void 0===o&&(o=r),e[o]=t[r]}),n=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||o(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),n(r(365),t)},365:function(e,t,r){var o=this&&this.__decorate||function(e,t,r,o){var n,c=arguments.length,i=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(i=(c<3?n(i):c>3?n(t,r,i):n(t,r))||i);return c>3&&i&&Object.defineProperty(t,r,i),i},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.UsersService=void 0;const c=r(563),i=r(903);let s=t.UsersService=class{constructor(){this.users={}}findOne(e){return this.users[e]}createOne({name:e,password:t}){const r=(0,i.v4)(),o={id:e||r,name:e,password:t};return this.users[r]=o,o}};t.UsersService=s=o([(0,c.Injectable)(),n("design:paramtypes",[])],s)},133:function(e,t,r){var o=this&&this.__decorate||function(e,t,r,o){var n,c=arguments.length,i=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(i=(c<3?n(i):c>3?n(t,r,i):n(t,r))||i);return c>3&&i&&Object.defineProperty(t,r,i),i};Object.defineProperty(t,"__esModule",{value:!0}),t.UsersModule=void 0;const n=r(563),c=r(744);let i=t.UsersModule=class{};t.UsersModule=i=o([(0,n.Module)({providers:[c.UsersService],exports:[c.UsersService]})],i)},563:e=>{e.exports=require("@nestjs/common")},781:e=>{e.exports=require("@nestjs/core")},815:e=>{e.exports=require("@nestjs/jwt")},520:e=>{e.exports=require("@nestjs/passport")},579:e=>{e.exports=require("aws-serverless-express")},525:e=>{e.exports=require("helmet")},713:e=>{e.exports=require("passport-http")},714:e=>{e.exports=require("passport-jwt")},752:e=>{e.exports=require("passport-local")},903:e=>{e.exports=require("uuid")}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var c=t[o]={exports:{}};return e[o].call(c.exports,c,c.exports,r),c.exports}var o={};(()=>{var e=o;Object.defineProperty(e,"__esModule",{value:!0}),e.handler=void 0;const t=r(875),n=r(579);let c;e.handler=async(e,r)=>{const o=await async function(){if(!c){const e=(await(0,t.bootstrap)()).getHttpAdapter().getInstance();c=(0,n.createServer)(e)}return c}();return(0,n.proxy)(o,e,r,"PROMISE").promise}})();var n=exports;for(var c in o)n[c]=o[c];o.__esModule&&Object.defineProperty(n,"__esModule",{value:!0})})();