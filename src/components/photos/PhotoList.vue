<template>
    <div>
    <!-- 顶部滑动条区域 --> 
     <div id="slider" class="mui-slider">
      <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll">
          <a :class="['mui-control-item', item == 'tech' ? 'mui-active' : '']" v-for="item in cates" :key="item" @tap="getPhotoListByChannel(item)">
            {{ item }}
          </a>
        </div>
      </div>

    </div>

    <!-- 图片列表区域 -->
        <ul class="photo-list">
        <!-- <router-link v-for="item in list" :key="item.ptime" :to="item.link" tag="li"> -->
          <li v-for="item in list" :key="item.ptime">
            <a :href="item.link">
              <!-- <img :src="item.picInfo[0]?item.picInfo[0].url:'/src/images/error_image.jpg'"> -->
              <img v-lazy="item.picInfo[0]?item.picInfo[0].url:'/src/images/error_image.jpg'">
              <div class="info">
              <h1 class="info-title">{{ item.title }}</h1>
              <div class="info-body">{{ item.digest }}</div>
              </div>
            </a>
          </li>
        <!-- </router-link> -->
        </ul>
    </div>
</template>

<script>
// 1. 导入 mui 的js文件
import mui from "../../lib/mui/js/mui.min.js";

export default {
  data(){
        return {
            info:{},
            cates:[], //所有分类的列表数组
            list:[], //图片列表的数组
        }
  },
  created() {
    this.getAllCategory();
  },

  mounted() {
    // 当 组件中的DOM结构被渲染好并放到页面中后，会执行这个 钩子函数
    // 如果要操作元素了，最好在 mounted 里面，因为，这里时候的 DOM 元素 是最新的
    // 2. 初始化滑动控件
    mui(".mui-scroll-wrapper").scroll({
      // startX: 0, //初始化时滚动至x
      // scrollY: false, //是否竖向滚动
      // indicators: true, //是否显示滚动条
      // bounce: true, //是否启用回弹
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },

  methods:{
    getAllCategory() {
      // 获取所有的图片分类
      this.$http.get("journalismApi").then(result => {
        if (result.body.code === 200) {
          // 手动拼接出一个最完整的 分类列表
          this.cates = Object.keys(result.body.data)
          this.info = result.body.data;
      
          // console.log(this.info);
          // console.log(Object.values(result.body.data));
          // this.cates = Object.values(result.body.data);
          this.getPhotoListByChannel("tech"); 
        }
    });
  },
    getPhotoListByChannel(Channel){
      console.log("调用了"+Channel)
      console.log(this.info[Channel])
      this.list = this.info[Channel];
    },
}
}
</script>

<style lang="scss" scoped>

* {
  touch-action: pan-y;
}

.photo-list {
  list-style: none;
  margin: 0;
  padding: 10px;
  padding-bottom: 0;
  li {
    background-color: #ccc;
    text-align: center;
    margin-bottom: 10px;
    box-shadow: 0 0 9px #999;
    position: relative;
    img {
      width: 100%;
      vertical-align: middle;
    }
    img[lazy="loading"] {
      width: 40px;
      height: 300px;
      margin: auto;
    }

    .info {
      color: white;
      text-align: left;
      position: absolute;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.4);
      max-height: 84px;
      .info-title {
        font-size: 14px;
      }
      .info-body {
        font-size: 13px;
      }
    }
  }
}

</style>

