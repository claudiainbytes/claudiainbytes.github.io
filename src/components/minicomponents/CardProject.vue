<template>
    <div class="card w-fit bg-base-100 shadow-xl image-full">
        <figure><img :src="cardImgSmall" alt="Image of project" /></figure>
        <div class="card-body">
            <h3 class="card-title"><span class="bg-neutral">{{ card.title }}</span></h3>
            <p><span class="bg-neutral">{{ card.short_desc }}</span></p>
            <div class="card-actions justify-end">
            <button class="btn btn-primary" @click="showModalWindow(modalId)">See Now</button>
            </div>
        </div>
        <ModalWindow :modalId="modalId" :idCard="idCard" :card="card" />
    </div>
</template>
<script setup>
import { computed } from 'vue'
import ModalWindow from './ModalWindow.vue' 

const { idCard, card } = defineProps({ idCard: String, card: Object })

const modalId = computed(() => `modal_${idCard}` )

const cardImgSmall = `https://claudiainbytes.github.io/img/portfolio/${card.img_small}`

const showModalWindow = (modalId) => document.getElementById(modalId).showModal()

</script>