<template>
  <div>product {{ id }}</div>
  <div class="mb-4">
    <img
      src="https://mdbootstrap.com/img/new/standard/city/047.jpg"
      class="max-w-full h-auto rounded-lg"
      alt=""
    />
    <p></p>
  </div>
</template>

<script>
export default {
  props: ["id"],
};
</script>
