<script lang="ts">
  import axios from "axios";
  import { PRODUCT_API_URL } from "./const";
  import type { ProductListDto } from "./types";
  import ProductPane from "./ProductPane.svelte";

  const fetchProducts = async () =>
    (await axios.get<ProductListDto>(`${PRODUCT_API_URL}?PageSize=24`)).data
      .data.products;
</script>

{#await fetchProducts() then products}
  <div class="md:grid-cols-3 grid-cols-2 gap-8 grid">
    {#each products as product}
      <ProductPane
        label={`${product.brand} ${product.name}`}
        imageUrl={product.pictures[0].medium}
        caption={product.caption}
        price={product.price}
      />
    {/each}
  </div>
{/await}
