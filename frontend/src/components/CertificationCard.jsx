import { useState, useRef } from 'react';
import { ExternalLink, FileText, Upload, X } from 'lucide-react';
import './CertificationCard.css';

export default function CertificationCard({ certification, index }) {
  const [certDoc, setCertDoc] = useState(() => {
    return localStorage.getItem(`cert_doc_${certification.id}`) || certification.image || null;
  });
  const [showModal, setShowModal] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setCertDoc(reader.result);
        try {
          localStorage.setItem(`cert_doc_${certification.id}`, reader.result);
        } catch (err) {
          // LocalStorage storage quota
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className={`cert-row ${certification.isPending ? 'cert-row--pending' : ''}`}>
        
        {/* Index */}
        <div className="cert-row__index">
          <span>0{index + 1}</span>
        </div>

        {/* Title & Issuer */}
        <div className="cert-row__main">
          <div className="cert-row__title-wrap">
            <h4 className="cert-row__title">{certification.title}</h4>
            {certification.isPending && (
              <span className="cert-row__pending-pill">In Progress / Editable</span>
            )}
          </div>
          <p className="cert-row__issuer">{certification.issuer}</p>
        </div>

        {/* Date */}
        <div className="cert-row__date-col">
          <span className="cert-row__date">{certification.date || 'Verified'}</span>
        </div>

        {/* Document & Verification Actions */}
        <div className="cert-row__actions">
          {certification.link ? (
            <a 
              href={certification.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cert-row__action-link"
              title="Verify credential"
            >
              <span>Verify</span>
              <ExternalLink size={12} />
            </a>
          ) : (
            <span className="cert-row__action-muted">—</span>
          )}

          {certDoc ? (
            <button 
              type="button" 
              onClick={() => setShowModal(true)} 
              className="cert-row__action-btn"
              title="View Certificate Document"
            >
              <FileText size={13} />
              <span>Doc</span>
            </button>
          ) : (
            <button 
              type="button" 
              onClick={() => fileInputRef.current?.click()} 
              className="cert-row__upload-trigger"
              title="Upload Certificate Image or PDF"
            >
              <Upload size={12} />
              <span>Add PDF</span>
            </button>
          )}

          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileUpload} 
            accept="image/*,application/pdf" 
            className="cert-row__file-input" 
            aria-label={`Upload document for ${certification.title}`}
          />
        </div>

      </div>

      {/* Document Modal */}
      {showModal && certDoc && (
        <div className="cert-modal-backdrop" onClick={() => setShowModal(false)}>
          <div className="cert-modal" onClick={(e) => e.stopPropagation()}>
            <div className="cert-modal__header">
              <h4 className="cert-modal__title">{certification.title}</h4>
              <button 
                onClick={() => setShowModal(false)}
                className="cert-modal__close-btn"
                aria-label="Close document preview"
              >
                <X size={18} />
              </button>
            </div>
            <div className="cert-modal__body">
              {certDoc.startsWith('data:application/pdf') || certDoc.endsWith('.pdf') ? (
                <iframe src={certDoc} title={certification.title} className="cert-modal__frame" />
              ) : (
                <img src={certDoc} alt={certification.title} className="cert-modal__image" />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
