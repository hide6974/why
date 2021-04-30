<template>
  <div id="app">
    <header class="header">
      <h1>記事一覧(独自)</h1>
    </header>
      <kizi-view></kizi-view>
  </div>
</template>

<script>
// firebase モジュール
import KiziView from "./components/KiziView";

export default {
  components: { KiziView }
  
};
</script>
