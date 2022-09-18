<script>
  import AppLink from "./AppLink.svelte";
  import HoverableBar from "./HoverableBar.svelte";
</script>

<HoverableBar>
  <footer class="flex flex-col items-center px-6 py-4">
    <span
      >created by
      <AppLink href="https://kolaczyn.com">kolaczyn</AppLink>
    </span>
    <span>
      powered by
      <AppLink href="https://svelte.dev">svelte</AppLink>
      +
      <AppLink href="https://tailwindcss.com">tailwind</AppLink>
    </span>
  </footer>
</HoverableBar>
