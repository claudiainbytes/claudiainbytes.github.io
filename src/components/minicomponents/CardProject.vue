<template>
    <div class="card w-fit bg-base-100 shadow-xl image-full">
        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
        <div class="card-body">
            <h3 class="card-title">Shoes!</h3>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
            <button class="btn btn-primary" @click="showModalWindow(modalId)">See Now</button>
            <ModalWindow :modalId="modalId" />
            </div>
        </div>
    </div>
</template>
<script setup>
import { computed } from 'vue'
import ModalWindow from './ModalWindow.vue' 

const props = defineProps({ idCard: String })

const modalId = computed(() => `modal_${props.idCard}` )

const showModalWindow = (modalId) => document.getElementById(modalId).showModal()

</script>