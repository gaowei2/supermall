import { debounce } from './utils';
import BackTop from "components/content/backTop/BackTop";
export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null,
      newRefresh: null
    }
  },
  mounted() {
    this.newRefresh = debounce(this.$refs.scroll.refresh, 100)
    this.itemImgListener = () => {
      // console.log('我是混入中的内容');
      this.newRefresh();
    };
    this.$bus.$on('itemImageLoad', this.itemImgListener);
  }
}

export const backTopMixin = {
  components: {
    BackTop,
  },
  data: function () {
    return {
      isShowBackTop: false
    }
  },
  methods: {
    backTop: function () {
      this.$refs.scroll.scrollTo(0, 0, 300);
    },
    listenShowBackTop(position) {
      this.isShowBackTop = -position.y > 1000;
    }
  }
}
