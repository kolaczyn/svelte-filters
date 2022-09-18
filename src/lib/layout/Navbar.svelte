<script>
  import HoverableBar from "./HoverableBar.svelte";
</script>

<HoverableBar>
  <nav class="flex items-center justify-between px-6 py-4">
    <span class="text-2xl font-bold">Brand</span>
    <ul class="flex space-x-4">
      <li>
        <a href="/"> Homepage </a>
      </li>
      <li>
        <a href="/">Products</a>
      </li>
    </ul>
  </nav>
</HoverableBar>
