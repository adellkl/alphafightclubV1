import React from 'react';
import { FileText, ExternalLink } from 'lucide-react';

const DISCHARGE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfN4JihjwitHvpGlFwis8nkiqBo3bc5rRmxiIpWk4hw8ZOKUA/viewform';

const DischargeForm: React.FC = () => {
  return (
    <div className="border border-gray-300 rounded-md p-6 bg-white">
      <div className="flex items-start gap-4 mb-4">
        <FileText className="text-gray-700 shrink-0 mt-1" size={20} />
        <div className="flex-1">
          <h3 className="font-display font-bold text-lg text-black uppercase mb-2">
            Décharge de Responsabilité - Open Mat
          </h3>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">
            Formulaire obligatoire pour tous les participants aux Open Mat du dimanche (10h-12h). 
            Ce formulaire doit être complété avant chaque participation.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {/* QR Code */}
        <div className="flex flex-col items-center justify-center bg-gray-50 p-4 rounded-md border border-gray-200">
          <div className="bg-white p-3 rounded-md border border-gray-300 mb-3">
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(DISCHARGE_FORM_URL)}`}
              alt="QR Code formulaire de décharge"
              className="w-44 h-44"
            />
          </div>
          <p className="text-xs text-gray-600 text-center">
            Scannez avec votre téléphone
          </p>
        </div>

        {/* Lien */}
        <div className="space-y-4">
          <a
            href={DISCHARGE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full bg-gray-900 text-white px-6 py-3 font-display font-bold uppercase text-sm rounded-sm hover:bg-gray-700 transition-colors border border-gray-800"
          >
            <FileText size={16} />
            Remplir le formulaire
            <ExternalLink size={14} />
          </a>
          <p className="text-xs text-gray-600 leading-relaxed">
            Le formulaire comprend vos informations personnelles, votre consentement à la décharge de responsabilité et votre signature électronique.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DischargeForm;

