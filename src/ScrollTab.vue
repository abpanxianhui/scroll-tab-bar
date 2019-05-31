<template>
    <div class="scroll-tab">
        <div class="scroll-tab-item"
             :style="{width: scrollTabWidth + 'px', transform: `translate(${contenBoxLeft}px,0)`, transitionDuration: delay + 's'}"
             ref="scrollTabItem"
             @touchstart="handelTouchStart($event)"
             @touchmove="handelTouchMove($event)"
             @touchend="handelTouChend($event)">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import { clientWidth, clientHeight } from './clientParameters'
export default {
    name: "ScrollTab",
    props: {
        currentSelect: {
            type: Number
        },
        touchDelay: {
            type: Number,
            default: 0.3,
            required: false
        }
    },
    data () {
      return {
          scrollTabWidth: clientWidth,
          contenBoxLeft: 0,
          tabIndex: 0,
          delay: this.touchDelay
      }
    },
    watch: {
        currentSelect () {
            this.tabIndex = this.currentSelect
            this.delay = 0.3
            this.contenBoxLeft = this.computedLeft(this.tabIndex)
        },
        tabIndex () {
            this.$emit('selectChange', this.tabIndex)
            this.setScrollTabItemHeight()
        },
        touchDelay () {
            this.delay = this.touchDelay
        }
    },
    mounted () {
        this.setScrollTabItemWidth()
        this.setScrollTabItemHeight()
    },
    updated () {
        this.setScrollTabItemWidth()
    },
    methods: {
        handelTouchStart (e) {
            this.direction = true
            this.delay = 0
            this.enterTouches = e.touches[0]
            this.start = e.touches[0]
        },
        handelTouchMove (e) {
            if (e.touches.length > 1) {
                e.preventDefault()
                return ''
            }
            // 计算本次现在位置与上次位置X,Y左边移动距离
            let left = e.touches[0].clientX - this.enterTouches.clientX
            let top = e.touches[0].clientY - this.enterTouches.clientY
            // 通过left top值判断用户左右切换还是上下移动
            if (this.direction) {
                this.directionType = (Math.abs(left) > Math.abs(top)) ? 'X' : 'Y'
                this.direction = false
            }
            // 保存本次位置对象
            this.enterTouches = e.touches[0]
            if (this.directionType === 'X') {
                e.preventDefault()
                // 当用户左右切换时
                let coefficient = 1
                if (left > 0 && this.tabIndex === 0 && this.contenBoxLeft >= 0) {
                    coefficient = 0.3
                } else if (left < 0 && this.tabIndex === this.length - 1) {
                    coefficient = 0.3
                }
                this.contenBoxLeft += left * coefficient
            }
        },
        handelTouChend () {
            if (this.directionType !== 'X') return ''
            this.delay = 0.3
            let moveLeft = this.start.clientX - this.enterTouches.clientX
            // 判断本次移动距离来决定是否切换页面
            if (moveLeft < -80 && this.tabIndex !== 0) {
                this.tabIndex--
            } else if (moveLeft > 80 && this.tabIndex !== this.length - 1) {
                this.tabIndex++
            }
            this.contenBoxLeft = this.computedLeft(this.tabIndex)
        },
        // 根据页数计算盒子的宽度
        setScrollTabItemWidth () {
            this.children = this.$refs.scrollTabItem.children
            this.length = this.children.length
            this.scrollTabWidth = clientWidth * this.length
        },
        // 计算各个分页高度，解决被最高页撑开的留白问题
        setScrollTabItemHeight () {
            let children = [...this.children]
            children.forEach((e, i) => {
                console.log(e)
                if (this.tabIndex !== i) {
                    e.style.height = clientHeight + 'px'
                }else {
                    e.style.height = 'auto'
                }
            })
        },
        computedLeft (index) {
            window.scrollTo(0, 0)
            return -(clientWidth * index)
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
.scroll-tab {
    width: 100%;
    overflow: hidden;
}
.scroll-tab-item {
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-start;
}
</style>
