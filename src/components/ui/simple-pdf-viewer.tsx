'use client';
import React, { useState, useEffect } from 'react';
import { X, Download, ExternalLink, FileText, Smartphone } from 'lucide-react';
import { cn } from '../../lib/utils';

interface SimplePDFViewerProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  title: string;
}

export function SimplePDFViewer({ isOpen, onClose, pdfUrl, title }: SimplePDFViewerProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Detectar se é um dispositivo móvel
    const checkMobile = () => {
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
      setIsMobile(isMobileDevice);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Reset fallback quando o modal abrir
    if (isOpen) {
      setShowFallback(false);
      setIsLoading(true);
      
      // Timeout de segurança - se não carregar em 10 segundos, esconde o loading
      const timeout = setTimeout(() => {
        setIsLoading(false);
      }, 10000);
      
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleOpenPDF = () => {
    window.open(pdfUrl, '_blank', 'noopener,noreferrer');
    onClose(); // Fechar o modal após abrir o PDF
  };

  const handleDownloadPDF = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = title || 'documento.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Componente para dispositivos móveis ou fallback
  const MobileFallbackView = () => (
    <div className="flex-grow flex flex-col items-center justify-center p-8 bg-gray-50 dark:bg-gray-900">
      <div className="text-center max-w-md">
        <div className="mb-6">
          <div className="mx-auto w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
            {isMobile ? <Smartphone className="w-8 h-8 text-blue-600 dark:text-blue-400" /> : <FileText className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            {isMobile ? 'Visualização em Dispositivo Móvel' : 'Problema ao Carregar PDF'}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            {isMobile 
              ? 'Para uma melhor experiência, use os botões abaixo para visualizar ou baixar o PDF.'
              : 'Não foi possível carregar o PDF no visualizador. Use os botões abaixo como alternativa.'
            }
          </p>
        </div>

        <div className="space-y-3">
          <button
            onClick={handleOpenPDF}
            className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
          >
            <ExternalLink size={20} />
            Abrir PDF em Nova Aba
          </button>
          
          <button
            onClick={handleDownloadPDF}
            className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors font-medium"
          >
            <Download size={20} />
            Baixar PDF
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm sm:p-4"
      onClick={handleBackdropClick}
    >
      <div 
        className="relative w-full h-full flex flex-col sm:max-w-6xl sm:max-h-[90vh] bg-white dark:bg-gray-800 sm:rounded-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header com controles */}
        <div className="flex-shrink-0 flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
          <div className="flex-1 min-w-0">
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
        {isMobile || showFallback ? (
          <MobileFallbackView />
        ) : (
          <div className="relative flex-grow bg-gray-100 dark:bg-gray-900">
            <iframe
              src={pdfUrl}
              className="w-full h-full border-0"
              title={title}
              onLoad={() => {
                console.log('PDF iframe loaded successfully');
                setIsLoading(false);
              }}
              onError={() => {
                console.error('Error loading PDF in iframe');
                setIsLoading(false);
                setShowFallback(true);
              }}
            />
            
            {/* Loading overlay - só mostra enquanto está carregando */}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-900">
                <div className="text-center">
                  <div className="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"></div>
                  <p className="text-gray-600 dark:text-gray-400">Carregando PDF...</p>
                  <button
                    onClick={() => {
                      setIsLoading(false);
                      setShowFallback(true);
                    }}
                    className="mt-4 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 text-sm underline"
                  >
                    Problemas para carregar? Clique aqui
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
} 