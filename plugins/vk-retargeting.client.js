export default defineNuxtPlugin(() => {
  useHead({
    script: [
      {
        type: 'text/javascript',
        innerHTML: `!function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src='https://vk.com/js/api/openapi.js?173',t.onload=function(){VK.Retargeting.Init("VK-RTRG-1899762-5hLe7"),VK.Retargeting.Hit()},document.head.appendChild(t)}();`
      }
    ],
    noscript: [
      {
        innerHTML: `<img src="https://vk.com/rtrg?p=VK-RTRG-1899762-5hLe7" style="position:fixed; left:-999px;" alt=""/>`
      }
    ]
  })
})
