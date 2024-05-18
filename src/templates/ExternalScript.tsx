import type React from 'react';
import { useEffect } from 'react';

declare global {
  interface Window {
    smsh_pbform: {
      render: (url: string, key: string, mode: string) => void;
    };
  }
}
let isScriptLoaded = false;

const ExternalScriptLoader: React.FC = () => {
  useEffect(() => {
    if (!isScriptLoaded) {
      const script = document.createElement('script');
      script.src =
        'https://cloud.smshosting.it/sms/pages/external/pbapp/smsh.app.form.v2.js?v=20240515052956';
      script.async = true;
      script.onload = () => {
        if (window.smsh_pbform) {
          window.smsh_pbform.render(
            'https://cloud.smshosting.it/sms/',
            '7FbaeyoMRdX9NYlbafgS9h3ToZ5gbzAhmgPxX9aMLBmbISDOOBi6f4Xe1c1J0SNQ',
            'iframe',
          );
        }
      };
      document.body.appendChild(script);
      isScriptLoaded = true;
    }
  }, []);

  return null;
};

export default ExternalScriptLoader;
