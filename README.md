# v-scroller ![version](https://img.shields.io/badge/version-%20v2.2.0%20-green.svg) ![vue](https://img.shields.io/badge/vue-%20v2.1%20-green.svg)

> 基于Vue 2.x 封装的很轻量的scroller组件,具有下拉刷新、上拉加载更多的功能.

## Demo 示例

[https://github.com/undo03/v-scroller](https://github.com/undo03/v-scroller)


## 使用方式
``` bash
# install dependencies
npm install v-scroller -S
```

```javascript
import Vue from 'vue'
import VScroller from 'v-scroller'
Vue.use(VScroller)
```

```html
  <v-scroller :onRefresh="onRefresh" :onInfinite="onInfinite">
    <!-- html content -->
  </v-scroller>
```

## 接口文档

### props

| 属性名           | 类型     | 默认值         | 是否必须             | 说明                       |
| ---------------- | -------- | -------------- | -------------------- | -------------------------- |
| onRefresh        | Function | 无             | 需要下拉刷新时，必须 | 刷新时执行的函数           |
| onInfinite       | Function | 无             | 需要加载更多时，必须 | 加载更多是执行的函数       |
| enableRefresh    | Boolean  | true           | 否                   | 是否开启下拉刷新，默认开启 |
| enableInfinite   | Boolean  | true           | 否                   | 是否开启上拉加载，默认开启 |
| offset           | Number   | 100            | 否                   | 触发下拉刷新的阈值         |
| noDataText       | String   | 没有更多数据了 | 否                   | 没有更多数据时的提示语     |
| refreshText      | String   | 下拉刷新       | 否                   | 下拉刷新提示               |
| freedRefreshText | String   | 松开刷新数据   | 否                   | 释放下拉提示语             |

### slot

| 插槽名    | 说明               |
| --------- | ------------------ |
| refresh   | 刷新时的效果或文字 |
| load-more | 加载时的效果或文字 |