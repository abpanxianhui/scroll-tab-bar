<template>
    <div class="scroll-tab-col" :style="{width: clientWidth + 'px', minHeight: clientHeight + 'px'}">
        <slot></slot>
    </div>
</template>

<script>
import { clientWidth, clientHeight } from './clientParameters'
export default {
    name: "ScrollTabCol",
    data () {
        return {
            clientWidth: clientWidth,
            clientHeight: clientHeight
        }
    }
}
</script>

<style scoped>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
</style>
