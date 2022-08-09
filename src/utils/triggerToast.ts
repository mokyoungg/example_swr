import { toast, ToastOptions } from 'react-toastify';

export const triggerErrorToast = (message: string, options?: ToastOptions) => {
  toast.error(message, {
    ...options,
  });
};
