<template>
  <div>
    <header class="border-b border-gray-300 mb-4">
      <AppHeader />
    </header>
    <main>
      <slot />
    </main>
    <footer class="border-t border-gray-300 text-gray-500 mt-4">
      <AppFooter />
    </footer>
  </div>
</template>
