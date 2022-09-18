<script lang="ts">
  export let href: string;
</script>

<a class="font-bold hover:underline" {href}>
  <slot />
</a>
