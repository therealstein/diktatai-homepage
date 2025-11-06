<script setup lang="ts">
interface Block {
  blockEditorCategoryName: string;
  clientId: string;
  name: string;
  parentClientId: string | null;
  renderedHtml: string;
  type: string;
}

const props = defineProps<{
  blocks: Block[];
  loading?: boolean;
}>();

const {locale} = useI18n()

const cleanHtml = (html: string): string => {
  // Only remove WordPress specific wrapper class patterns
  let result = html;
  
  // Remove WordPress specific wrapper class patterns
  result = result.replace(/wp-elements-[a-z0-9]{32}/g, '');
  result = result.replace(/is-layout-flow wp-block-(.*?)-is-layout-flow/g, '');
  
  // Add block-link class to all <a> tags
  const linkRegex = /<a\s+href="([^"]+)"([^>]*)>(.*?)<\/a>/gi;
  result = result.replace(linkRegex, (match, href, attributes, text) => {
    // Add the block-link class to all links
    const classAttr = attributes.includes('class="') 
      ? attributes.replace(/class="([^"]*)"/, 'class="$1 block-link"')
      : attributes + ' class="block-link"';
    
    // For diktat.ai links, extract just the path
    let finalHref = href;
    if (href.includes('diktat.ai')) {
      try {
        const url = new URL(href);
        finalHref = url.pathname + url.search + url.hash;
        
        // Add locale prefix for English
        if (locale.value === 'en' && !finalHref.startsWith('/en/')) {
          finalHref = '/en' + (finalHref.startsWith('/') ? finalHref : '/' + finalHref);
        }
      } catch (e) {
        // If URL parsing fails, use the original href
      }
    } else if (locale.value === 'en' && !href.startsWith('http') && !href.startsWith('/en/') && !href.startsWith('mailto:') && !href.startsWith('tel:')) {
      // For relative links, also add the locale prefix if needed
      finalHref = '/en' + (href.startsWith('/') ? href : '/' + href);
    }
    
    return `<a href="${finalHref}"${classAttr}>${text}</a>`;
  });
  
  return result;
};

const renderBlock = (block: Block): string => {
  return cleanHtml(block.renderedHtml);
};
</script>

<template>
  <div class="block-renderer">
    <div v-if="loading" class="loading-indicator">
      <div class="spinner">
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
      </div>
    </div>
    <template v-else v-for="block in blocks" :key="block.clientId">
      <div class="block" :data-type="block.type" v-nuxt-html="renderBlock(block)"></div>
    </template>
  </div>
</template>

<style>
.wp-block-heading {
  @apply text-2xl font-bold;
}

.wp-block-paragraph {
  @apply text-base;
}

/* Text colors */
.has-primary-color {
  @apply text-primary;
}

.has-secondary-color {
  @apply text-secondary;
}

/* Background colors */
.has-primary-background-color {
  @apply bg-primary;
}

.has-secondary-background-color {
  @apply bg-secondary;
}

.has-cyan-bluish-gray-background-color {
  @apply bg-gray-400;
}

/* Font sizes */
.has-xx-large-font-size {
  @apply text-3xl;
}

.has-x-large-font-size {
  @apply text-2xl;
}

.has-large-font-size {
  @apply text-xl;
}

/* Block specific styles */
.wp-block-quote {
  @apply border-l-4 border-gray-300 pl-4 italic my-4;
}
/* Links */
a.block-link {
  @apply text-blue-600 hover:text-blue-800;
}

.wp-block-table {
  @apply w-full border-collapse my-4;
}

.wp-block-table table {
  @apply w-full;
}

.wp-block-table td {
  @apply border border-gray-300 p-2;
}

.wp-block-image {
  @apply my-4;
}

.wp-block-image img {
  @apply max-w-full h-auto;
}

.wp-block-list {
  @apply list-decimal pl-5 my-4;
}

.wp-block-buttons {
  @apply flex gap-2 my-4;
}

.wp-block-button__link {
  @apply inline-block px-4 py-2 rounded bg-primary text-white;
}

/* Loading indicator styles */
.loading-indicator {
  @apply flex justify-center items-center w-full py-8;
}

.spinner {
  @apply flex space-x-2;
}

.spinner > div {
  @apply w-3 h-3 bg-primary rounded-full;
  animation: bounce 1.4s infinite ease-in-out both;
}

.spinner .bounce1 {
  animation-delay: -0.32s;
}

.spinner .bounce2 {
  animation-delay: -0.16s;
}

@keyframes bounce {
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
</style>