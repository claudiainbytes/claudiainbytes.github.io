<template>
    <div class="w-full grid grid-cols-1 gap-8">
        <div class="prose max-w-none">
            <h2 class="mb-4">Projects</h2>
            <p class="mb-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
        </div>
    </div>
    <div class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-8">
        <div><CardProject/></div>
        <div><CardProject/></div>
        <div><CardProject/></div>
        <div><CardProject/></div>
        <div><CardProject/></div>
        <div><CardProject/></div>
        <div><CardProject/></div>
        <div><CardProject/></div>
    </div>
</template>
<script setup>
  import CardProject from '../components/minicomponents/CardProject.vue'
</script>