<script lang="ts" setup>
import { EGender } from '~/types/index.js'
</script>

<template>
  <MainPageHero />
  <ProductSuggestions
    suggestions-name="New"
    suggestions-label="Новинки"
    :with-slider="true"
    :params="{ gender: EGender.FEMALE }"
  />
  <PromoBanner
    btn-content="купить"
    description="Создай свой образ"
    image="https://s3-alpha-sig.figma.com/img/eb29/4b75/1566dec526060dfa98f1048c62038a59?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NNnsOJKuAsBeANfv-Fg86XetxYevicZ8F46ZWh3XDmdD~JJJTTRSdlT9PEDATkj-HmEi9xCnPt9jN4ZmTfOZjqkBMGIaMYssPD-UwWvUjDqNTgfNM8f7~RRNnqCC3hZI2w7U4ubbrBgwopaShgRTSJ8zyW50EA9464QxgKrxlhaNfQ8BxgXNJb7NM8WHcJADQcMLYixUYwUeivnM1dj63x3SkNt7C48lejZ8RSgAWRjqJcHquF2CQKFUGb~ywDmi7Y0tJAH8QRtR1XABl2XZ0dGn5~NgfgyOaPwI4bpbHgplRATFI~QQYsQvPw2DIpwlQ3Oxldk4F6rN3T3bG4cdkQ__"
    title="TOTAL BLACK"
  />

  <PromoBanner
    btn-content="купить"
    description="Создай свой образ"
    image="https://s3-alpha-sig.figma.com/img/d0f9/d211/8d437b3dc8618be48d4e934fd418f216?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DnVU-ZDiac2hUOEBlLYWQ19GbTPW013yW9kvTuiSPOHyAUSfegZ1C5E~xJlBWRA5aJo8moTA~1aFLhTzH2ZsdTdjciaoyx~lkjieAaxqLPpUSktw9U2JO3MEyHeXcG7R8wUEeY7EvFxu-x0PTIA3Tcw6oJZ7RrsLG5btYlcU11RA0cAfcVafUh~LvrCXVB-rjYMplTuAMdQalQyWmtQIv0QVQkMBxbX5P6xQKiMQSu~VpzHREKr52LFhV4kVIGkKhO-1hw52vL0IbgYp0ZpUtjSkFPK2XzhBetwX1SX8UdBSZmu31UN6pX~xWjFjsm38-BBkfs1-m8NORrLNXp9oSw__"
    overlay-text="EASYFIT"
    :rotated="true"
    title="EASYFIT"
  />
</template>
<style scoped lang="scss">
@import 'index';
</style>
