import Vue from 'vue'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css';


const options = {
  position: 'top-right',
  timeout: 3000,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: false,
  draggablePercent: 0.7,
  showCloseButtonOnHover: false,
  hideProgressBar: true,
  closeButton: false,
}

Vue.use(Toast, options)
