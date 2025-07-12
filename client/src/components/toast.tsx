import { useEffect, useState } from 'react';
import { Check } from 'lucide-react';

interface ToastState {
  show: boolean;
  message: string;
}

let toastTimeout: NodeJS.Timeout | null = null;

export function Toast() {
  const [toast, setToast] = useState<ToastState>({ show: false, message: '' });

  useEffect(() => {
    const handleToast = (event: CustomEvent) => {
      if (toastTimeout) {
        clearTimeout(toastTimeout);
      }
      
      setToast({ show: true, message: event.detail.message });
      
      toastTimeout = setTimeout(() => {
        setToast({ show: false, message: '' });
      }, 2000);
    };

    window.addEventListener('showToast', handleToast as EventListener);
    
    return () => {
      window.removeEventListener('showToast', handleToast as EventListener);
      if (toastTimeout) {
        clearTimeout(toastTimeout);
      }
    };
  }, []);

  if (!toast.show) return null;

  return (
    <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-top-2">
      <div className="bg-green-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-2">
        <Check className="w-5 h-5" />
        <span className="font-medium">{toast.message}</span>
      </div>
    </div>
  );
}

export function showToast(message: string) {
  window.dispatchEvent(new CustomEvent('showToast', { detail: { message } }));
}
