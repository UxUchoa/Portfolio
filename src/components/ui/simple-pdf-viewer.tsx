'use client';
import React from 'react';
import { X, Download, ExternalLink } from 'lucide-react';
import { cn } from '../../lib/utils';

interface SimplePDFViewerProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  title: string;
}

export function SimplePDFViewer({ isOpen, onClose, pdfUrl, title }: SimplePDFViewerProps) {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div 
        className="relative w-full max-w-6xl max-h-[90vh] bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header com controles */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
          <div className="flex-1">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
              {title}
            </h2>
          </div>
          
          {/* Controles */}
          <div className="flex items-center space-x-2">
            <a
              href={pdfUrl}
              download
              className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 transition-colors"
              title="Download PDF"
            >
              <Download size={18} />
            </a>
            
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 transition-colors"
              title="Abrir em nova aba"
            >
              <ExternalLink size={18} />
            </a>
            
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400 transition-colors"
              title="Fechar"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Área do PDF */}
        <div className="relative bg-gray-100 dark:bg-gray-900" style={{ height: 'calc(90vh - 80px)' }}>
          <iframe
            src={`${pdfUrl}#toolbar=1&navpanes=1&scrollbar=1`}
            className="w-full h-full border-0"
            title={title}
            onLoad={() => console.log('PDF iframe loaded successfully')}
            onError={() => console.error('Error loading PDF in iframe')}
          />
        </div>
      </div>
    </div>
  );
} 