<script lang="ts">
  import Footer from "./lib/layout/Footer.svelte";
  import Navbar from "./lib/layout/Navbar.svelte";
  import Wrapper from "./lib/layout/Wrapper.svelte";
  import AvailableStatuses from "./lib/products/filters/AvailableStatuses.svelte";
  import ProductList from "./lib/products/ProductList.svelte";
</script>

<Navbar />
<Wrapper>
  <AvailableStatuses />
  <ProductList />
</Wrapper>
<Footer />
