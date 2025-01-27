import{r as n,u as w,j as e,T as b,M as j,a as h,S as c,E as v,b as N,L as _}from"./index-c7aabef8.js";import{R as S,L as y,a as I,b as k}from"./login-1a62cbf4.js";import{I as x}from"./InputText-3d5f537a.js";function E(){const[o,g]=n.useState(!1),[i,m]=n.useState(!1),l=w(),[t,d]=n.useState({email:"",password:""});return n.useEffect(()=>{localStorage.getItem("accessToken")&&l("/mis-or/admin/home")},[]),e.jsx(b,{defaultTheme:"light",storageKey:"vite-ui-theme",children:e.jsxs("div",{className:"   bg-background relative w-screen h-screen overflow-hidden flex justify-center",children:[e.jsx("div",{className:" absolute right-0 p-10 z-30",children:e.jsx(j,{})}),e.jsxs("div",{className:" relative w-full h-full flex flex-col gap-4 items-center justify-center",children:[e.jsx("img",{src:S,className:"  pointer-events-none absolute z-0 h-full w-full object-cover opacity-5",alt:""}),e.jsxs("div",{className:" flex gap-3 items-center",children:[e.jsx("img",{src:y,className:" animate__animated animate__slideInLeft  h-16 object-contain",alt:""}),e.jsx("a",{href:"https://www.facebook.com/DICTRegion10",target:"_blank",children:e.jsx("img",{src:I,className:"animate__animated animate__slideInRight h-24 object-contain",alt:""})})]}),e.jsxs("form",{className:"animate__animated animate__fadeInUp mb-10 z-10 w-full sm:w-[95%] sm:mx-4 max-w-[450px] flex flex-col items-center  min-h-[100px] py-10 px-6 rounded-md bg-card border-2 border-border",onSubmit:a=>{a.preventDefault(),m(!0);const p=new Promise((s,r)=>setTimeout(()=>r(new Error("Server timeout")),5e3));Promise.race([h.post("token/login/",t),p]).then(s=>{if(s.data.auth_token)return localStorage.setItem("accessToken",s.data.auth_token),h.get("users/me/",{headers:{Authorization:`Token ${s.data.auth_token}`}})}).then(s=>{s&&(c.fire({icon:"success",title:"Login Successfully...",showConfirmButton:!1,timer:2e3}),localStorage.setItem("user",JSON.stringify(s.data)),s.data.access_lvl===14?l("/mis-or/admin"):l("/mis-or/user"))}).catch(s=>{var r,u,f;s.message==="Server timeout"?c.fire({icon:"warning",title:"Server Not Responding",text:"The server is taking too long to respond. Please try again later.",showConfirmButton:!0}):c.fire({icon:"error",title:"Oops...",text:((f=(u=(r=s.response)==null?void 0:r.data)==null?void 0:u.non_field_errors)==null?void 0:f[0])||"An error occurred",showConfirmButton:!1})}).finally(()=>{m(!1)})},children:[e.jsx("div",{className:" w-[95%] h-16 flex ",children:e.jsx("h1",{className:" text-foreground text-3xl font-bold",children:"SIGN IN"})}),e.jsxs("div",{className:" flex flex-col gap-4 w-[85%]",children:[e.jsx(x,{label:"Email",value:t.email,onChange:a=>{d({...t,email:a.target.value})},type:"email"}),e.jsxs("div",{className:" relative flex",children:[e.jsx(x,{label:"Password",value:t.password,onChange:a=>{d({...t,password:a.target.value})},type:o?"text":"password",style:{paddingRight:"2.5rem"}}),e.jsx("button",{type:"button",onClick:()=>g(!o),"aria-label":o?"Hide password":"Show password",className:" right-0 flex items-center sm:mt-4 h-full w-10 absolute",children:o?e.jsx(N,{className:" w-5 h-5"}):e.jsx(v,{className:" w-5 h-5"})})]}),e.jsx(_,{to:"/mis-or/forgot-password",className:"text-foreground font-semibold text-sm cursor-pointer self-end pt-2 pb-6 hover:underline",children:"Forgot password?"}),e.jsx("button",{disabled:i,className:`btn-donate flex items-center justify-center gap-2 ${i?"opacity-70 cursor-not-allowed":""}`,children:i?e.jsxs(e.Fragment,{children:[e.jsx(k,{className:"h-4 w-4 animate-spin"}),"Signing In..."]}):"Sign In"})]})]})]}),e.jsx("p",{className:" absolute text-foreground bottom-0 z-20 self-center pb-4 hover:underline cursor-pointer text-sm",children:"Developed by: DICT Region 10"})]})})}export{E as default};
