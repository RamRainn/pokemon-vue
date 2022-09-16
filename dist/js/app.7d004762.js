(function(){"use strict";var e={1810:function(e,t,o){var s=o(9242),n=o(3396);const i={class:"section"};function a(e,t,o,a,r,l){const c=(0,n.up)("PokemonSearch"),p=(0,n.up)("PokemonList"),u=(0,n.up)("PokemonDetails");return(0,n.wg)(),(0,n.iD)("div",i,[(0,n.Wm)(c,{apiURL:e.apiURL,onSetPokemonUrl:l.setPokemonUrl},null,8,["apiURL","onSetPokemonUrl"]),(0,n.Wm)(p,{imageURL:e.imageURL,apiURL:e.apiURL,onSetPokemonUrl:l.setPokemonUrl},null,8,["imageURL","apiURL","onSetPokemonUrl"]),(0,n.Wm)(s.uT,{name:"slide-fade",appear:""},{default:(0,n.w5)((()=>[e.showDetails?((0,n.wg)(),(0,n.j4)(u,{key:0,imageURL:e.imageURL,pokemonUrl:e.pokemonUrl,onCloseDetails:l.closeDetails},null,8,["imageURL","pokemonUrl","onCloseDetails"])):(0,n.kq)("",!0)])),_:1})])}const r={class:"search"};function l(e,t,o,i,a,l){return(0,n.wg)(),(0,n.iD)("div",r,[(0,n._)("form",{onSubmit:t[1]||(t[1]=(0,s.iM)(((...e)=>l.setPokemonUrl&&l.setPokemonUrl(...e)),["prevent"]))},[(0,n.wy)((0,n._)("input",{class:"search__input",type:"text","onUpdate:modelValue":t[0]||(t[0]=t=>e.searchValue=t)},null,512),[[s.nr,e.searchValue]])],32)])}var c={name:"PokemonSearch",props:["apiURL"],data:()=>({searchValue:""}),methods:{setPokemonUrl(){""!==this.searchValue&&this.$emit("setPokemonUrl",this.apiURL+this.searchValue),this.searchValue=""}}},p=o(89);const u=(0,p.Z)(c,[["render",l],["__scopeId","data-v-c1ef3b04"]]);var m=u,h=o(7139);const d=e=>((0,n.dD)("data-v-40b24132"),e=e(),(0,n.Cn)(),e),k={class:"list"},f=["onClick"],_=["src"],g={class:"list__title"},v={id:"scroll-trigger",ref:"infinitescrolltrigger"},U=d((()=>(0,n._)("div",{class:"list__loader"},null,-1))),w=[U];function D(e,t,o,s,i,a){return(0,n.wg)(),(0,n.iD)("div",k,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.pokemons,((e,t)=>((0,n.wg)(),(0,n.iD)("div",{class:"list__card",key:"poke"+t,onClick:t=>a.setPokemonUrl(e.url)},[(0,n._)("img",{class:"list__image",src:o.imageURL+e.id+".png",alt:""},null,8,_),(0,n._)("h3",g,(0,h.zw)(e.name),1)],8,f)))),128)),(0,n._)("div",v,w,512)])}var y={name:"PokemonList",props:["imageURL","apiURL"],data:()=>({pokemons:[],nextUrl:"",currentUrl:""}),methods:{fetchData(){let e=new Request(this.currentUrl);fetch(e).then((e=>{if(200===e.status)return e.json()})).then((e=>{this.nextUrl=e.next,e.results.forEach((e=>{e.id=e.url.split("/").filter((function(e){return!!e})).pop(),this.pokemons.push(e)}))})).catch((e=>{console.log(e)}))},scrollTrigger(){const e=new IntersectionObserver((e=>{e.forEach((e=>{e.intersectionRatio>0&&this.nextUrl&&this.next()}))}));e.observe(this.$refs.infinitescrolltrigger)},next(){this.currentUrl=this.nextUrl,this.fetchData()},setPokemonUrl(e){this.$emit("setPokemonUrl",e)}},watch:{pokemons:{handler(){localStorage.setItem("pokemons",JSON.stringify(this.pokemons))},deep:!0}},created(){this.currentUrl=this.apiURL,this.fetchData()},mounted(){this.scrollTrigger(),localStorage.getItem("pokemons")&&(this.pokemons=JSON.parse(localStorage.getItem("pokemons")))}};const b=(0,p.Z)(y,[["render",D],["__scopeId","data-v-40b24132"]]);var P=b;const L=e=>((0,n.dD)("data-v-c17ec818"),e=e(),(0,n.Cn)(),e),R={class:"details"},x={key:0,class:"details__view"},O={key:0,class:"details__image"},S=["src"],j={key:1,class:"details__data"},C={class:"details__title"},I={class:"details__property"},z=L((()=>(0,n._)("div",{class:"left"},"Base Experience",-1))),T={class:"right"},V={class:"details__property"},q=L((()=>(0,n._)("div",{class:"left"},"Height",-1))),E={class:"right"},H={class:"details__property"},W=L((()=>(0,n._)("div",{class:"left"},"Weight",-1))),Z={class:"right"},$=L((()=>(0,n._)("h3",null,"Pokemon Types",-1))),A={class:"details__types"},K=L((()=>(0,n._)("h3",null,"Abilities",-1))),Y={class:"details__abilities"},J={key:2};function M(e,t,o,s,i,a){return(0,n.wg)(),(0,n.iD)("div",R,[e.show?((0,n.wg)(),(0,n.iD)("div",x,[e.pokemon?((0,n.wg)(),(0,n.iD)("div",O,[(0,n._)("img",{src:o.imageURL+e.pokemon.id+".png",alt:""},null,8,S)])):(0,n.kq)("",!0),e.pokemon?((0,n.wg)(),(0,n.iD)("div",j,[(0,n._)("h2",C,(0,h.zw)(e.pokemon.name),1),(0,n._)("div",I,[z,(0,n._)("div",T,(0,h.zw)(e.pokemon.base_experience)+" XP",1)]),(0,n._)("div",V,[q,(0,n._)("div",E,(0,h.zw)(e.pokemon.height/10)+" m",1)]),(0,n._)("div",H,[W,(0,n._)("div",Z,(0,h.zw)(e.pokemon.weight/10)+" kg",1)]),$,(0,n._)("div",A,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.pokemon.types,((e,t)=>((0,n.wg)(),(0,n.iD)("div",{class:"details__type",key:"value"+t},(0,h.zw)(e.type.name),1)))),128))]),K,(0,n._)("div",Y,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.pokemon.abilities,((e,t)=>((0,n.wg)(),(0,n.iD)("div",{class:"details__ability",key:"value"+t},(0,h.zw)(e.ability.name),1)))),128))])])):((0,n.wg)(),(0,n.iD)("h2",J,"The pokemon was not found")),(0,n._)("button",{class:"details__btn-close",onClick:t[0]||(t[0]=(...e)=>a.closeDetails&&a.closeDetails(...e))},"close")])):(0,n.kq)("",!0)])}var N={props:["pokemonUrl","imageURL"],data:()=>({show:!1,pokemon:{}}),methods:{fetchData(){let e=new Request(this.pokemonUrl);fetch(e).then((e=>{if(200===e.status)return e.json()})).then((e=>{this.pokemon=e,this.show=!0})).catch((e=>{console.log(e)}))},closeDetails(){this.$emit("closeDetails")}},created(){this.fetchData()}};const B=(0,p.Z)(N,[["render",M],["__scopeId","data-v-c17ec818"]]);var F=B,X={name:"App",components:{PokemonSearch:m,PokemonDetails:F,PokemonList:P},data:()=>({apiURL:"https://pokeapi.co/api/v2/pokemon/",imageURL:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/",pokemonUrl:"",showDetails:!1}),methods:{setPokemonUrl(e){this.pokemonUrl=e,this.showDetails=!0},closeDetails(){this.pokemonUrl="",this.showDetails=!1}}};const G=(0,p.Z)(X,[["render",a]]);var Q=G;(0,s.ri)(Q).mount("#app")}},t={};function o(s){var n=t[s];if(void 0!==n)return n.exports;var i=t[s]={exports:{}};return e[s](i,i.exports,o),i.exports}o.m=e,function(){var e=[];o.O=function(t,s,n,i){if(!s){var a=1/0;for(p=0;p<e.length;p++){s=e[p][0],n=e[p][1],i=e[p][2];for(var r=!0,l=0;l<s.length;l++)(!1&i||a>=i)&&Object.keys(o.O).every((function(e){return o.O[e](s[l])}))?s.splice(l--,1):(r=!1,i<a&&(a=i));if(r){e.splice(p--,1);var c=n();void 0!==c&&(t=c)}}return t}i=i||0;for(var p=e.length;p>0&&e[p-1][2]>i;p--)e[p]=e[p-1];e[p]=[s,n,i]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var s in t)o.o(t,s)&&!o.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,s){var n,i,a=s[0],r=s[1],l=s[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(n in r)o.o(r,n)&&(o.m[n]=r[n]);if(l)var p=l(o)}for(t&&t(s);c<a.length;c++)i=a[c],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(p)},s=self["webpackChunkalliance_test"]=self["webpackChunkalliance_test"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=o.O(void 0,[998],(function(){return o(1810)}));s=o.O(s)})();
//# sourceMappingURL=app.7d004762.js.map