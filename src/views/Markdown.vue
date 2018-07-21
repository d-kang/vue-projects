<template>
  <div class="markdown_container">
    <MarkdownNotebook />
  </div>
</template>

<script>
// @ is an alias to /src
import MarkdownNotebook from '@/components/markdown_notebook/MarkdownNotebook.vue';
export default {
  name: 'Markdown',
  components: { MarkdownNotebook },
};
</script>
