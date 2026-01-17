<script setup lang="ts">
import { Popover } from "@ark-ui/vue/popover";
</script>

<template>
  <main>
    <h1>Homepage</h1>

    <Popover.Root>
      <Popover.Trigger as-child>
        <button>Open</button>
      </Popover.Trigger>
      <Popover.Positioner>
        <Popover.Content>
          <Popover.Title class="font-bold">Title</Popover.Title>
          <Popover.Description>Description</Popover.Description>
        </Popover.Content>
      </Popover.Positioner>
    </Popover.Root>
  </main>
</template>
