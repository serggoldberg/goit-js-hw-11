import{S as d,i as a}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function m(i){const t="https://pixabay.com/api/",s=new URLSearchParams({key:"43274302-b3b24986af50d43a0f99334ad",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}),l=`${t}?${s}`;return fetch(l).then(e=>e.json())}const p=document.querySelector(".gallery"),g=new d(".gallery a",{captionsData:"tags",captionsDelay:250});function f(i){const t=i.map(({webformatURL:s,largeImageURL:l,tags:e,likes:r,views:o,comments:n,downloads:u})=>`<li class="gallery-item">
          <a class="gallery-link" href="${l}">
            <img 
              class="gallery-image" 
              src="${s}" 
              alt="Image ${e}" 
              />
          </a>
          <div class="descrip-gallery">
            <ul class="descrip-img">
              <li class="descrip-item">Likes</li>
              <li class="descrip-item">${r}</li>
            </ul>
            <ul class="descrip-img">
              <li class="descrip-item">Views</li>
              <li class="descrip-item">${o}</li>
            </ul>
            <ul class="descrip-img">
              <li class="descrip-item">Comments</li>
              <li class="descrip-item">${n}</li>
            </ul>
            <ul class="descrip-img">
              <li class="descrip-item">Downloads</li>
              <li class="descrip-item">${u}</li>
            </ul>
          </div>
        </li>
      `).join("");p.insertAdjacentHTML("beforeend",t),g.refresh()}const y=document.querySelector(".gallery"),c=document.querySelector(".loader"),h={formEl:document.querySelector(".form-search"),inputEl:document.querySelector(".input-text")};h.formEl.addEventListener("submit",i=>{i.preventDefault();const t=i.target.elements.input.value.trim();if(!t){a.error({title:"Error",message:"❌ Please enter a search query!",position:"topRight"});return}m(t).then(s=>{y.innerHTML="",s.hits.length===0?a.error({title:"Error",message:"❌ Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(L(),f(s.hits),setTimeout(S,2e3))}).catch(s=>{a.error({title:"Error",message:"❌ Sorry, an error occurred while fetching images. Please try again later!",position:"topRight"}),console.error("Error fetching images:",s)})});function L(){c.classList.remove("visually-hidden")}function S(){c.classList.add("visually-hidden")}
//# sourceMappingURL=commonHelpers.js.map
