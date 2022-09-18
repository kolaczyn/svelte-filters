<script lang="ts">
  import Footer from "./lib/layout/Footer.svelte";
  import Navbar from "./lib/layout/Navbar.svelte";
  import Wrapper from "./lib/layout/Wrapper.svelte";
  import ProductList from "./lib/products/ProductList.svelte";
</script>

<Navbar />
<Wrapper>
  <ProductList />
</Wrapper>
<Footer />
