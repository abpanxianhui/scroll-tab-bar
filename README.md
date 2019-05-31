## scroll-tab-bar文档

### 组件介绍
 移动端滑动切换菜单栏组件，简单易用，一秒实现移动端滑动切换效果，与swiper组件不同的是，该组件主要用来做滑动切换页面，支持动态修改页面，动态撑开高度，兼容ios/Android，良好的页面性能。


![效果图](https://github.com/abpanxianhui/scroll-tab-bar/blob/master/example/demo.gif)


### npm安装

~~~
npm i scroll-tab-bar --save
~~~

### 组件注册
```
import Vue from 'vue'
import App from './App'
import { ScrollTab, ScrollTabCol } from '../src/index'

Vue.component('scrollTab', ScrollTab)
Vue.component('ScrollTabCol', ScrollTabCol)

new Vue({
    el: '#app',
    render:h => h(App)
})

```

### 使用
 
```
<template>
    <div id="app" ref="li">
        # 标签栏
        <ul class="label-list">
            <li class="label-list-item" :class="{'select-label-list-item': index === 0}" @click="index = 0">1</li>
            <li class="label-list-item" :class="{'select-label-list-item': index === 1}" @click="index = 1">2</li>
            <li class="label-list-item" :class="{'select-label-list-item': index === 2}" @click="index = 2">3</li>
            <li class="label-list-item" :class="{'select-label-list-item': index === 3}" @click="index = 3">4</li>
            <li class="label-list-item" :class="{'select-label-list-item': index === 4}" @click="index = 4">5</li>
        </ul>
        # 外层组件
        <scroll-tab :current-select="index" :touch-delay="0.3" @selectChange="handleSelectChange">
            # 被切换的页面组件
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

```

### 组件参数

#### scroll-tab Prop
| Prop  | Default  | Type | Description |
| :------------ |:---------------:| :---------------:| :-----|
| current-select | 0 | `number` | 控制切换到某个scroll-tab-col页 |
| touch-delay | 0.3 | `number` | 页面切换的延迟时间 |

#### scroll-tab Event
| Prop | Type | Description |
| :---------------:| :---------------:| :-----|
| selectChange | `function(index)` | 监听滑动切换 |


