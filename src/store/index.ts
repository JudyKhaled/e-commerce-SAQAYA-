import { createStore, Commit } from 'vuex'

// Define a CartItem interface for better type safety
interface CartItem {
  id: string;
  quantity: number;
}

export interface State {
  cart: CartItem[];
}

const store = createStore<State>({
  state: {
    cart: []
  },
  mutations: {
    addToCart(state: State, item: CartItem) {
      const existingItem = state.cart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...item, quantity: 1 });
      }
    }
  },
  actions: {
    addItemToCart({ commit }: { commit: Commit }, item: CartItem) {
      commit('addToCart', item);
    }
  },
  getters: {
    cartItemCount: (state: State): number => {
      return state.cart.reduce((total, item) => total + item.quantity, 0);
    },
    cartItems: (state: State): CartItem[] => {
      return state.cart;
    }
  }
});

export default store;
