const r=(t,e)=>{if(!t||!e)return;const i=t.getAttribute(e)==="true"?"false":"true";t.setAttribute(e,i)},s=(t,e)=>{if(!t||!e)return;const i=t.getAttribute("aria-controls");if(i){const o=document.getElementById(i);o&&(t.checked?(o.classList.remove(e),t.setAttribute("aria-expanded",!0)):(o.classList.add(e),t.setAttribute("aria-expanded",!1)))}};export{s as a,r as t};