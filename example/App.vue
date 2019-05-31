<template>
    <div id="app" ref="li">
        <ul class="label-list">
            <li class="label-list-item" :class="{'select-label-list-item': index === 0}" @click="index = 0">1</li>
            <li class="label-list-item" :class="{'select-label-list-item': index === 1}" @click="index = 1">2</li>
            <li class="label-list-item" :class="{'select-label-list-item': index === 2}" @click="index = 2">3</li>
            <li class="label-list-item" :class="{'select-label-list-item': index === 3}" @click="index = 3">4</li>
            <li class="label-list-item" :class="{'select-label-list-item': index === 4}" @click="index = 4">5</li>
        </ul>
        <scroll-tab :current-select="index" @selectChange="handleSelectChange">
            <scroll-tab-col class="item"><div class="item1">1</div></scroll-tab-col>
            <scroll-tab-col class="item"><div class="item2">2</div></scroll-tab-col>
            <scroll-tab-col class="item"><div>3</div></scroll-tab-col>
            <scroll-tab-col class="item"><div>4</div></scroll-tab-col>
            <scroll-tab-col class="item"><div>5</div></scroll-tab-col>
        </scroll-tab>


    </div>
</template>

<script>
    export default {
        data () {
            return {
                index: 0
            }
        },
        methods: {
            handleSelectChange (tabIndex) {
                this.index = tabIndex
            }
        },
        created () {
        }
    }
</script>

<style>
    html, body, div, body, ul ,li {
        margin: 0;
        padding: 0;
        list-style: none;
        text-decoration: none;
    }

    .item {
        text-align: center;
        background: #409EFF;
        line-height: 400px;
        color: #fff;
        font-size: 100px;
        font-weight: 600;
    }

    .label-list {
        position: fixed;
        width: 100%;
        z-index: 100;
        display: flex;
        height: 50px;
        line-height: 50px;
    }

    .label-list-item {
        flex-grow: 1;
        background: #909399;
        color: #fff;
        text-align: center;
    }

    .select-label-list-item {
        font-weight: 600;
        background: #67C23A;
    }

    .item2 {
        height: 2000px;
    }
</style>
