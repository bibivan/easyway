<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'

const props = defineProps<{
  codeLength: number
}>()
const code = ref(Array(props.codeLength).fill(''))
const inputs = ref<(HTMLInputElement | null)[]>(Array(props.codeLength).fill(null))

const onInput = (index: number) => {
  if (index < props.codeLength - 1 && code.value[index]) {
    inputs.value[index + 1]?.focus()
  }
}

const onBackspace = (index: number) => {
  if (index > 0 && !code.value[index]) {
    inputs.value[index - 1]?.focus()
  }
}

const updateInputRefs = () => {
  inputs.value = Array.from(
    document.querySelectorAll('[id*="code-cell-id-"]')
  ) as HTMLInputElement[]
}

defineModel({
  set: () => code.value.join('')
})

onMounted(() => {
  updateInputRefs()
  nextTick(() => inputs.value[0]?.focus())
  console.log(inputs.value)
})
</script>

<template>
  <div class="code-verifier">
    <BaseInput
      v-for="(digit, index) in codeLength"
      :id="'code-cell-id-' + index"
      :key="index"
      v-model="code[index]"
      class="code-verifier__input"
      maxlength="1"
      type="number"
      @input="onInput(index)"
      @keyup.backspace="onBackspace(index)"
    />
  </div>
</template>

<style scoped lang="scss">
@import 'base-code-verifier';
</style>
