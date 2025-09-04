
import React, { useState } from 'react';
import SectionWindow from '../components/SectionWindow';

// This makes the emailjs object available from the global scope (loaded via CDN)
declare const emailjs: any;

const KontaktPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Bitte alle Felder ausfüllen.');
      return;
    }
    
    setStatus('submitting');
    
    const SERVICE_ID = 'service_sxq9s8g';
    const TEMPLATE_ID = 'template_xgvny18';
    const PUBLIC_KEY = 'VXhP2N2ZcXkMG6-WC';

    // The object passed to emailjs.send must match the template variables in EmailJS
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response: any) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('success');
        setFeedbackMessage('DATENÜBERTRAGUNG ERFOLGREICH');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      }, (error: any) => {
        console.log('FAILED...', error);
        setStatus('error');
        setFeedbackMessage('FEHLER: ÜBERTRAGUNG GESCHEITERT. Bitte später erneut versuchen.');
        setTimeout(() => setStatus('idle'), 5000);
      });
  };

  return (
    <SectionWindow title="KONTAKT // SECURE CHANNEL">
      <p className="mb-6 text-cyber-gray">Datenübertragung initialisieren. Alle Felder sind erforderlich. Kanal ist verschlüsselt.</p>
      
      {status === 'success' || status === 'error' ? (
        <div className={`text-center p-8 bg-black/50 border ${status === 'success' ? 'border-cyber-purple' : 'border-red-500'}`}>
          <p className={`text-xl font-bold ${status === 'success' ? 'text-cyber-purple' : 'text-red-500'}`}>&gt; {feedbackMessage}</p>
          {status === 'success' && <p className="text-cyber-gray mt-2">Ihre Nachricht wurde im System protokolliert. Wir werden uns verbinden, wenn die Sterne richtig stehen.</p>}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-bold text-cyber-gray mb-2">ALIAS // NAME</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-black/50 p-3 border border-cyber-gray/50 focus:border-cyber-purple focus:outline-none text-cyber-white font-mono transition-colors"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-bold text-cyber-gray mb-2">SECURE-MAIL // E-MAIL</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-black/50 p-3 border border-cyber-gray/50 focus:border-cyber-purple focus:outline-none text-cyber-white font-mono transition-colors"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-bold text-cyber-gray mb-2">DATENPAKET // NACHRICHT</label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-black/50 p-3 border border-cyber-gray/50 focus:border-cyber-purple focus:outline-none text-cyber-white font-mono transition-colors"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="px-8 py-3 border-2 border-cyber-purple text-cyber-purple font-bold hover:bg-cyber-purple hover:text-cyber-bg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)' }}
            >
              {status === 'submitting' ? 'ÜBERTRAGE...' : 'SENDEN'}
            </button>
          </div>
        </form>
      )}
    </SectionWindow>
  );
};

export default KontaktPage;