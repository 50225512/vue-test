<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" 
        v-for="item in newslist" :key="item.docid">
        <a :href="item.link">
        <!-- <router-link :to="'/home/newsinfo/' + item.id" > -->
          <img class="mui-media-object mui-pull-left"
            :src="item.picInfo[0].url">
          <div class="mui-media-body">
            <h1>{{ item.title }}</h1>
            <p class="mui-ellipsis">
              <span>发表时间：{{ item.ptime }}</span>
              <span>点击：{{ item.tcount }}次</span>
            </p>
          </div>
        </a>
        <!-- </router-link> -->
      </li>

    </ul>
    <!-- 评论区子组件 -->
    <comment-box></comment-box>

  </div>
</template>

<script>
import { Toast } from "mint-ui";
//导入评论子组件
import comment from '../subcomponents/comment.vue'
export default {
  data() {
    return {
        newslist: [] //新闻列表
    };
  },
  created(){
      this.getNewsList()
  },
  methods: {
    getNewsList() {
      //获取新闻列表
      this.$http.get("journalismApi").then(result => {
        if (result.body.code === 200) {
            //如果没有失败，应该把数据保存到data上
            // console.log(result.body.data.tech)
            this.newslist = result.body.data.tech;
        } else {
            Toast('获取新闻列表失败！')
        }
      });
    }
  },
  components:{ //用来注册子组件的节点
    'comment-box': comment
  }
};
</script>

<style lang="scss" scoped>
.mui-table-view {
  li {
    h1 {
      font-size: 14px;
    }
    .mui-ellipsis {
      font-size: 12px;
      color: #226aff;
      // 利用flex设置两端对齐
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>


