<script setup>
const props = defineProps({
    title: {
        type: String,
        required: false,
    },
    onClick: {
        type: Function,
        required: false,
    },
});

</script>

<template>
    <button class="filled-button" @click="props.onClick">
        {{ props.title }}
    </button>
</template>

<style>
.filled-button {
    background-color: #F5C518;
    border-radius: 10px;
    padding: 10px 18px;
    border: none;
    color: #121212;
    box-shadow: inset 0 -2px 2px 0 rgb(0, 0, 0, 0.25);
    cursor: pointer;
    font-size: 16pt;
}

</style>