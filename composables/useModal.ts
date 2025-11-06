import { ref } from 'vue';

interface ModalOptions {
  title?: string;
  message?: string;
  type?: 'info' | 'warning' | 'error' | 'success';
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

const isOpen = ref(false);
const options = ref<ModalOptions>({});

export function useModal() {
  function open(modalOptions: ModalOptions) {
    options.value = modalOptions;
    isOpen.value = true;
    console.log('open', isOpen.value);
  }

  function close() {
    isOpen.value = false;
    options.value = {};
  }

  return {
    isOpen,
    options,
    open,
    close,
  };
}
