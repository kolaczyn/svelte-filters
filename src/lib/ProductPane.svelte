<script lang="ts">
  export let imageUrl: string;
  export let label: string;
  export let price: number;
  export let caption: string;
</script>

<section>
  <img alt={label} src={imageUrl} />
  <span class="font-bold">{label}</span>
  <span class="text-gray-500">{caption}</span>
  <span class="font-bold">{price}</span>
</section>
