import {Module} from 'vuex';
import {Speaker} from "@/store/modules/speakers";

export interface Toast {
}

export interface ToastState {
  message: string,
  open: boolean,
}

const toastStore: Module<ToastState, {}> = {
  state: {
    message: '',
    open: false,
  },
  mutations: {
    openToast(state: ToastState, message) {
      state.message = message;
      state.open = true;
      setTimeout(() => {
        state.open = false;
      }, 4000)
    },
  },
};

export default toastStore;
