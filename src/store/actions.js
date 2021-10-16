import {
  ADD_COUNTER,
  ADD_TO_CART
} from "./mutations-types"

export default {
  addCart(context, payload) {
    // payload是新添加的商品
    // state.cartList.push(payload) 
    // 第一种方法
    // let oldProduct = null;
    // for (let item of state.cartList) {
    //   if (item.iid === payload.iid) {
    //     oldProduct = item;
    //   }
    // }
    // 第二种方法(数组的find函数返回item对象)
    return new Promise((resolve, reject) => {
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
      // 判断是否有相同的商品在数组里
      if (oldProduct) {
        // oldProduct.count += 1;
        context.commit(ADD_COUNTER, oldProduct)
        resolve('当前的数量+1')
      } else {
        payload.count = 1;
        // state.cartList.push(payload); 
        context.commit(ADD_TO_CART, payload)
        resolve("添加了新的商品")
      }
    })
  }
}