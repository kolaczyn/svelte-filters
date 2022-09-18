<script lang="ts">
  import axios from "axios";
  import type { ProductListDto } from "src/types";
  type Product = {
    name: string;
    id: number;
  };
  const fetchProducts = async () =>
    (
      await axios.get<ProductListDto>(
        "https://www.rossmann.pl/products/v2/api/Products"
      )
    ).data.data.products;

  const productsPromise = fetchProducts();
</script>

{#await productsPromise then products}
  {#each products as product}
    <p class="font-bold">{product.id}. {product.name}</p>
  {/each}
{/await}
