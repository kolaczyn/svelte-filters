<script lang="ts">
  export let imageUrl: string;
  export let label: string;
  export let price: number;
  export let caption: string;
</script>

<section class="flex flex-col">
  <div
    class="flex h-24 w-24 items-center justify-center self-start rounded-sm bg-slate-100 "
  >
    <img class="h-16 w-16 object-cover" alt={label} src={imageUrl} />
  </div>
  <section class="flex flex-col gap-y-3">
    <span class="font-bold">{label}</span>
    <span class="text-gray-500">{caption}</span>
    <span class="font-bold">{price}</span>
  </section>
</section>
