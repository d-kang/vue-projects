<template>
  <div>
    <hello-world/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/markdown_preview/MarkdownNotebook.vue";

export default {
  name: "MarkdownPreview",
  components: {
    HelloWorld
  }
};

</script>
