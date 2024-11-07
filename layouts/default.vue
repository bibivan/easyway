<script setup lang="ts">
import { useHead } from '#app'

useHead({
  script: [
    {
      hid: 'yandex-metrika',
      children: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                  m[i].l=1*new Date();
                  for (var j = 0; j < document.scripts.length; j++) {
                    if (document.scripts[j].src === r) { return; }
                  }
                  k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
                 })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
                 ym(98761136, "init", {
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true
                 });`,
      type: 'text/javascript'
    },
    {
      hid: 'vk-pixel',
      children: `!function(){var t=document.createElement("script");
                   t.type="text/javascript",t.async=!0,t.src='https://vk.com/js/api/openapi.js?173';
                   t.onload=function(){VK.Retargeting.Init("VK-RTRG-1912552-8QIpb"),VK.Retargeting.Hit()},
                   document.head.appendChild(t)}();`,
      type: 'text/javascript'
    }
  ],
  noscript: [
    {
      hid: 'yandex-metrika-noscript',
      children: '<div><img src="https://mc.yandex.ru/watch/98761136" style="position:absolute; left:-9999px;" alt="" /></div>'
    },
    {
      hid: 'vk-noscript',
      children: '<img src="https://vk.com/rtrg?p=VK-RTRG-1912552-8QIpb" style="position:fixed; left:-999px;" alt=""/>'
    }
  ]
})

</script>

<template>
  <slot />
</template>
