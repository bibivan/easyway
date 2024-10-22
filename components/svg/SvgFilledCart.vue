<script setup lang="ts">
withDefaults(
  defineProps<{
    counterBgColor?: string
  }>(),
  {
    counterBgColor: '#ff4811'
  }
)
</script>

<template>
  <svg
    width="34"
    height="33"
    viewBox="0 0 34 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="10.6526"
      cy="29.294"
      r="2.80572"
      fill="currentColor"
    />
    <circle
      cx="23.7459"
      cy="29.294"
      r="2.80572"
      fill="currentColor"
    />
    <path
      d="M11.1201 17.6025L9.06876 22.2984C8.72883 22.9217 9.1799 23.6815 9.88981 23.6815H25.6163M11.1201 17.6025H22.1927C22.864 17.6025 23.4837 17.2428 23.8168 16.66L28.8897 7.78244H6.21006M11.1201 17.6025L6.21006 7.78244M1.30005 5.44434H5.04101L6.21006 7.78244"
      stroke="currentColor"
      stroke-width="1.87048"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <rect
      x="20.2386"
      y="0.299805"
      width="13.0934"
      height="13.0934"
      rx="6.54669"
      :fill="counterBgColor"
    />
    <path
      d="M27.5421 9.27246H26.6439V5.88724C26.3157 6.19411 25.9289 6.42107 25.4835 6.56812V5.75298C25.7179 5.67626 25.9726 5.53135 26.2475 5.31824C26.5224 5.103 26.711 4.8526 26.8133 4.56703H27.5421V9.27246Z"
      fill="currentColor"
    />
  </svg>
</template>
