(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(4),r=a.n(i),c=a(1),o=function(e){var t=e.gender,a=e.onUpdate,n=function(e){a(e.target.value),e.stopPropagation()},i="male"===t,r=!i;return l.a.createElement("div",{className:"genderToggle btn-group btn-group-toggle w-100","data-toggle":"buttons"},l.a.createElement("label",{className:"btn btn-outline-male"+(i?" active":""),htmlFor:"maleToggle"},l.a.createElement("input",{className:"",type:"radio",name:"genderToggle",id:"maleToggle",value:"male",checked:i,onChange:function(e){return n(e)}}),"Male \u2642"),l.a.createElement("label",{className:"btn btn-outline-female"+(r?" active":""),htmlFor:"femaleToggle"},l.a.createElement("input",{className:"",type:"radio",name:"genderToggle",id:"femaleToggle",value:"female",checked:r,onChange:function(e){return n(e)}}),"Female \u2640"))},s=a(2),u=function(e){var t=e.value,a=e.onUpdate,n=e.min,i=void 0===n?0:n,r=e.integerOnly,c=void 0===r?null:r,o=e.max,u=void 0===o?1e3:o,m=e.label,d=void 0===m?"":m,g=e.className,v=void 0===g?"":g,f=e.logValidation,p=void 0===f?null:f,b=e.pattern,h=void 0===b?null:b,E=Object(s.a)(e,["value","onUpdate","min","integerOnly","max","label","className","logValidation","pattern"]),N=function(e){return null!==e&&void 0!==e},w=function(e,t,a){var n=!1;return N(e)&&N(t)&&N(a)&&(n=t<=e&&e<=a),n}(t,i,u),y=N(c)&&!!c;"function"===typeof p&&p({value:t,min:i,max:u,parseAsInteger:y,isValid:w});var x=e.onInput||function(e){var t=e.target.value,n=t&&(!y&&parseFloat(t)||y&&parseInt(t,10));console.log("[InputNum.onInput] numValue",n),a(n),e.stopPropagation()},C=void 0!==e.onChange?e.onChange:function(e){return null};return l.a.createElement("div",{className:"form-group container"},l.a.createElement("label",{htmlFor:"inputNum",className:"col-sm-4 pl-0 justify-content-start"},d),l.a.createElement("input",Object.assign({id:"inputNum",type:"number",className:"form-control col-sm-8 "+v+(w?"":" is-invalid"),value:t},E,{onInput:x,onChange:C,inputMode:"numeric",pattern:h})),w?null:l.a.createElement("div",{className:"invalid-feedback"},"Expected value in ["+i+", "+u+"] range"))},m=function(e){var t=e.value,a=e.onUpdate,n=e.label,i=void 0===n?"":n,r=e.className,c=void 0===r?"":r,o=Object(s.a)(e,["value","onUpdate","label","className"]),u={1.1:{label:"1 - Very Low",desc:"Passive lifestyle: low or no sports at all; little walking."},1.2:{label:"2 - Low",desc:"Low activity; sports 1-2 times per week; shorter walks."},1.3:{label:"3 - Medium",desc:"Moderate activity; sports 3-4 times/week, short walks."},1.4:{label:"4 - High",desc:"High activity; sports 5-6 times/week (example: fitness trainer)."},1.7:{label:"5 - Extreme",desc:"Daily high-intensive activity; sports 2 times per day; marathons, competitions, etc."}};return l.a.createElement("div",{className:"form-group container"},l.a.createElement("label",{htmlFor:"activitySelect",className:"col-sm-4 pl-0 justify-content-start"},i),l.a.createElement("select",Object.assign({id:"activitySelect",className:"form-control col-sm-8 "+c,value:t},o,{onChange:function(e){a(parseFloat(e.target.value)),e.stopPropagation()}}),Object.keys(u).map(function(e,t){var a=u[e],n=a.label,i=a.desc;return l.a.createElement("option",{key:t,value:e,label:n,title:i},n)})),l.a.createElement("div",{className:"form-text text-info w-100 text-center",style:{fontSize:"small"}},u[t].desc))},d=function(e){var t=e.detailsMap;return l.a.createElement("div",{className:"table-responsive"},l.a.createElement("table",{className:"table table-sm border-bottom my-0"},l.a.createElement("thead",{className:"thead-light"},l.a.createElement("tr",null,l.a.createElement("th",{className:"pl-3"},"Category"),l.a.createElement("th",null,"Value"))),l.a.createElement("tbody",null,Object.keys(t).map(function(e,a){var n=t[e],i=n.label,r=n.value,c=n.units,o=void 0===c?"":c,s=n.rowClassName,u=void 0===s?"":s;return l.a.createElement("tr",{key:a,className:u},l.a.createElement("td",{className:"text-muted pl-3"},i,o&&l.a.createElement("span",null,"\xa0(",o,")")),l.a.createElement("td",{className:"text-dark"},r))}))))},g={calculate:function(e){var t=v(e)||0,a=b(e,t),n=h(a),l=N(e.age),i=l.coefficient,r=void 0===i?1:i;console.log("[calcCaloriesConsumption] ageReductions",l);var c=E(n,e.activity,r);return{fatPerc:t,muscleMass:a,metabolism:n,ageCoefficient:r,calsConsumption:c,calsConsumptionWeightLoss:.8*c}}},v=function(e){var t=e.gender,a=void 0===t?"male":t,n=e.waist,l=e.height,i=e.weight,r=null;return n&&l&&i&&n>10&&l>50&&i>10&&(r="male"===a?f({height:l,weight:i,waist:n}):p({height:l,weight:i,waist:n})),r},f=function(e){var t=e.height,a=e.weight,n=e.waist,l=null;return n&&t&&a&&n>10&&t>50&&a>10&&(l=.31457*n-.10969*a+10.834),l},p=function(e){var t=e.height,a=e.weight,n=e.waist,l=1;return n&&t&&a&&n>10&&t>50&&a>10&&(l=100-(.11077*n-.17666*t*.01+.14354*a+51.033)),l},b=function(e,t){var a=e.weight,n=0;return a&&t&&a>10&&t>0&&t<=100&&(n=a-a*t/100),n},h=function(e){var t=0;return e&&e>0&&(t=370+21.6*e),t},E=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)*(arguments.length>1&&void 0!==arguments[1]?arguments[1]:1)*(arguments.length>2&&void 0!==arguments[2]?arguments[2]:1)},N=function(e){var t={coefficient:1};if(e>=20){var a=e-20,n=Math.ceil(a/10),l=.02*n;t=Object.assign({},t,{yearsOver20:a,decadesOver20:n,ageReductionCoef:l,coefficient:1-l})}return t},w=g,y=function(e){var t=e.title,a=void 0===t?"Card":t,n=e.children,i=void 0===n?null:n,r=e.footer,c=void 0===r?null:r,o=e.className,s=void 0===o?"bg-light mx-auto":o;return l.a.createElement("div",{className:"card"+(s?" "+s:""),style:{maxWidth:"30em",minWidth:"20em"}},l.a.createElement("div",{className:"card-header bg-primary text-white text-center py-2 mb-0 card-title"},l.a.createElement("h3",null,a)),l.a.createElement("div",{className:"card-body py-1 container-fluid"},i),c)},x=function(e){var t=e.dataChanged,a=l.a.useState("male"),n=Object(c.a)(a,2),i=n[0],r=n[1],s=l.a.useState(180),g=Object(c.a)(s,2),v=g[0],f=g[1],p=l.a.useState(80),b=Object(c.a)(p,2),h=b[0],E=b[1],N=l.a.useState(100),x=Object(c.a)(N,2),C=x[0],k=x[1],O=l.a.useState(1.2),j=Object(c.a)(O,2),F=j[0],M=j[1],S=l.a.useState(25),U=Object(c.a)(S,2),W=U[0],P=U[1],L=l.a.useState(!1),T=Object(c.a)(L,2),I=T[0],R=T[1],V=l.a.useState(!0),A=Object(c.a)(V,2),H=A[0],B=A[1],D=l.a.useState(null),J=Object(c.a)(D,2),z=J[0],q=J[1],G=l.a.useCallback(function(){B(Q({gender:i,age:W,height:v,weight:h,waist:C,activity:F}))},[i,W,v,h,C,F]),K=l.a.useCallback(function(){q(null),R(!1),G()},[G]),Q=function(e){return e&&["gender","age","height","weight","waist","activity"].reduce(function(t,a){return t=t&&!!e[a]})};l.a.useEffect(function(){t&&t({gender:i,age:W,height:v,weight:h,waist:C,activity:F})},[W,i,v,h,C,F,t]),l.a.useEffect(function(){K()},[W,i,v,h,C,F,K]),l.a.useEffect(function(){f("male"===i?180:165),E("male"===i?80:60),k("male"===i?70:60)},[i]),l.a.useEffect(function(){window.document.title="Calories Calculator"},[]);var X=function(e,t){return e.target.value="",e.stopPropagation(),t&&t(""),!1},Y=function(e){var t={gender:i,age:W,height:v,weight:h,waist:C,activity:F},a=w.calculate(t);console.log("[calculate] resultsRaw:",a),q(a),R(!0),e.stopPropagation()},Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ERROR",a=null;try{a=e&&parseFloat(e.toFixed(2))||t}catch(n){a=t+": "+n}return a},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(e){var t=e.fatPerc,a=e.muscleMass,n=e.metabolism,i=e.calsConsumption,r=e.calsConsumptionWeightLoss,c={fatPerc:{label:"Body Fat",value:Z(t),units:"%"},muscleMass:{label:"Muscle Mass",value:Z(a),units:"kg"},metabolism:{label:"Metabolism",value:Z(n),units:"kcal"},caloriesConsumption:{label:"Daily Calories",value:Z(i),units:"kcal/day",rowClassName:"font-weight-bold"},caloriesConsumptionWeightLoss:{label:"Weight Loss Target",value:Z(r),units:"kcal/day"}};return l.a.createElement("div",null,l.a.createElement(d,{detailsMap:c}))}return null};return l.a.createElement("div",{className:"container mb-3"},l.a.createElement("div",{className:"row col mx-auto"},l.a.createElement(y,{className:"bg-light mx-auto border-0",style:{maxWidth:"30em"},title:"Calculate my calories",footer:function(){var e=I&&z?l.a.createElement("div",null,l.a.createElement("div",{className:"controls text-center pb-2"},l.a.createElement("button",{className:"btn btn-outline-info",onClick:function(){return K()}},"Reset")),l.a.createElement("div",{className:"results bg-white"},$(z))):l.a.createElement("div",{className:"controls text-center"},l.a.createElement("button",{className:"btn btn-primary",disabled:I||!H,onClick:Y},"Calculate"));return l.a.createElement("div",{className:"card-footer bg-white px-0"},e)}()},l.a.createElement("div",{className:"row py-2"},l.a.createElement("div",{className:"inputs row form-inline"},l.a.createElement("div",{className:"container mb-1 text-center"},l.a.createElement(o,{gender:i,onUpdate:function(e){return r(e)}})),l.a.createElement("div",{className:"container mb-1"},l.a.createElement(u,{id:"age",className:"age",style:{maxWidth:"100px"},label:"Age:",value:W,onUpdate:function(e){return P(e)},onFocus:function(e){return X(e,P)},min:10,max:100,step:1,integerOnly:!0})),l.a.createElement("div",{className:"container mb-1"},l.a.createElement(u,{id:"height",className:"height",label:"Height (cm):",value:v,onUpdate:function(e){return f(e)},onFocus:function(e){return X(e,f)},min:100,max:250,step:1,integerOnly:!0})),l.a.createElement("div",{className:"container mb-1"},l.a.createElement(u,{id:"weight",className:"weight",label:"Weight (kg):",value:h,onUpdate:function(e){return E(e)},onFocus:function(e){return X(e,E)},min:30,max:300,step:.1})),l.a.createElement("div",{className:"container mb-1"},l.a.createElement(u,{id:"waist",className:"waist",label:"Waist (cm):",value:C,onUpdate:function(e){return k(e)},onFocus:function(e){return X(e,k)},min:30,max:600,step:.1})),l.a.createElement("div",{className:"container mb-1"},l.a.createElement(m,{label:"Activity Level",value:F,onUpdate:function(e){return M(e)}})))))))};a(11),a(12),a(13);var C=document.getElementById("root");r.a.render(l.a.createElement(function(){return l.a.createElement("div",{className:"App py-2 bg-dark"},l.a.createElement(x,null))},null),C)},5:function(e,t,a){e.exports=a(14)}},[[5,1,2]]]);
//# sourceMappingURL=main.b9c5bcf5.chunk.js.map