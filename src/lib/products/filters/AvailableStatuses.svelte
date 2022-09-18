<script lang="ts">
  import axios from "axios";
  import { PRODUCT_API_URL } from "../const";
  import type { StatusListDto } from "./types";

  const fetchStatuses = async () =>
    (await axios.get<StatusListDto>(`${PRODUCT_API_URL}/filters`)).data.data;
</script>

{#await fetchStatuses()}
  <span class="font-bold">Loading...</span>
{:then statuses}
  {#each statuses as status (status.id)}
    <span>{status.name}</span>
  {/each}
{/await}
