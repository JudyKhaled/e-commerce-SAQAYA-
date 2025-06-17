import { createStore } from 'vuex'


interface CartItem {
  id: string;
  quantity: number;
}

export interface State {
  cart: CartItem[];
}

const store = createStore({
  state: {
    cart: []
  },
  mutations: {
    addToCart(state: State, item: CartItem) {
      const existingItem = state.cart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + 1;
      } else {
        state.cart.push({ ...item, quantity: 1 });
      }
    }
  },
  actions: {
    addItemToCart({ commit }: { commit: any }, item: CartItem) {
      commit('addToCart', item);
    }
  },
  getters: {
    cartItemCount: (state: State): number => {
      return state.cart.reduce((total, item) => total + (item.quantity || 1), 0);
    },
    cartItems: (state: State): CartItem[] => {
      return state.cart;
    }
  }
});

export default store;
