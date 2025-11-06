import { reactive, ref } from 'vue'

interface ToastOptions {
  position?: 'top' | 'bottom' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end'
  type?: 'info' | 'success' | 'warning' | 'error'
  duration?: number
}

interface ToastState {
  isVisible: boolean
  message: string
  type: ToastOptions['type']
  position: ToastOptions['position']
}

// Create a reactive state that will be shared across all instances
const state = reactive<ToastState>({
  isVisible: false,
  message: '',
  type: 'info',
  position: 'top-end'
})

export const useToast = () => {
  const getPositionClasses = (position: ToastOptions['position']) => {
    switch (position) {
      case 'top':
        return 'toast-top toast-center'
      case 'bottom':
        return 'toast-bottom toast-center'
      case 'top-start':
        return 'toast-top toast-start'
      case 'top-end':
        return 'toast-top toast-end'
      case 'bottom-start':
        return 'toast-bottom toast-start'
      case 'bottom-end':
        return 'toast-bottom toast-end'
      default:
        return 'toast-top toast-end'
    }
  }

  let timeoutId: NodeJS.Timeout | null = null

  const show = (toastMessage: string, options: ToastOptions = {}) => {
    // Clear any existing timeout
    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    // Update state
    state.message = toastMessage
    state.type = options.type || 'info'
    state.position = options.position || 'top-end'
    state.isVisible = true

    // Auto hide after duration
    timeoutId = setTimeout(() => {
      state.isVisible = false
      timeoutId = null
    }, options.duration || 3000)
  }

  const success = (toastMessage: string, options?: Omit<ToastOptions, 'type'>) => {
    show(toastMessage, { ...options, type: 'success' })
  }

  const error = (toastMessage: string, options?: Omit<ToastOptions, 'type'>) => {
    show(toastMessage, { ...options, type: 'error' })
  }

  const warning = (toastMessage: string, options?: Omit<ToastOptions, 'type'>) => {
    show(toastMessage, { ...options, type: 'warning' })
  }

  const info = (toastMessage: string, options?: Omit<ToastOptions, 'type'>) => {
    show(toastMessage, { ...options, type: 'info' })
  }

  return {
    state,
    getPositionClasses,
    show,
    success,
    error,
    warning,
    info
  }
} 