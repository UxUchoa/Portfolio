'use client';

import { useEffect, useState, type MouseEvent } from 'react';
import { Download, ExternalLink, FileText, Smartphone, X } from 'lucide-react';

export interface SimplePDFViewerLabels {
  mobileTitle: string;
  errorTitle: string;
  mobileDescription: string;
  errorDescription: string;
  openAction: string;
  downloadAction: string;
  closeAction: string;
  loading: string;
  fallbackAction: string;
  openTitle: string;
  downloadTitle: string;
}

interface SimplePDFViewerProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  title: string;
  labels: SimplePDFViewerLabels;
}

export function SimplePDFViewer({ isOpen, onClose, pdfUrl, title, labels }: SimplePDFViewerProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleEscape);
    setShowFallback(false);
    setIsLoading(true);

    const timeout = window.setTimeout(() => {
      setIsLoading(false);
    }, 8000);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleEscape);
      window.clearTimeout(timeout);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) onClose();
  };

  const handleOpenPDF = () => {
    window.open(pdfUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  const handleDownloadPDF = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = title || 'documento.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const fallbackTitle = isMobile ? labels.mobileTitle : labels.errorTitle;
  const fallbackDescription = isMobile ? labels.mobileDescription : labels.errorDescription;

  const FallbackView = () => (
    <div className="flex flex-1 items-center justify-center bg-zinc-50 p-6 dark:bg-[#080b0d]">
      <div className="max-w-md text-center">
        <div className="mx-auto mb-5 grid h-16 w-16 place-items-center border-2 border-blue-500/50 bg-blue-500/10 text-blue-700 dark:border-blue-300/50 dark:text-blue-300">
          {isMobile ? <Smartphone size={30} /> : <FileText size={30} />}
        </div>
        <h3 className="text-lg font-semibold text-zinc-950 dark:text-white">{fallbackTitle}</h3>
        <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">{fallbackDescription}</p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <button
            type="button"
            onClick={handleOpenPDF}
            className="signal-primary inline-flex min-h-11 items-center justify-center gap-2 px-4 py-3 text-sm font-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
          >
            <ExternalLink size={18} />
            {labels.openAction}
          </button>

          <button
            type="button"
            onClick={handleDownloadPDF}
            className="signal-ghost inline-flex min-h-11 items-center justify-center gap-2 border px-4 py-3 text-sm font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
          >
            <Download size={18} />
            {labels.downloadAction}
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div
      className="fixed inset-0 z-50 flex h-[100dvh] items-center justify-center bg-zinc-950/70 p-0 backdrop-blur-sm sm:p-4"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className="flex h-full w-full flex-col overflow-hidden bg-white shadow-2xl dark:bg-[#0d1010] sm:h-[90vh] sm:max-w-6xl sm:rounded-lg sm:border sm:border-white/10"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex min-h-16 shrink-0 items-center justify-between gap-3 border-b border-zinc-200 bg-white/95 px-4 py-3 dark:border-white/10 dark:bg-[#0d1010]/95 sm:px-5">
          <div className="min-w-0">
            <p className="font-mono text-xs uppercase tracking-wide text-blue-700 dark:text-blue-300">PDF</p>
            <h2 className="truncate text-base font-semibold text-zinc-950 dark:text-white sm:text-lg">{title}</h2>
          </div>

          <div className="flex shrink-0 items-center gap-1.5">
            <a
              href={pdfUrl}
              download
              className="nav-icon-button grid h-10 w-10 place-items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              title={labels.downloadTitle}
              aria-label={labels.downloadTitle}
            >
              <Download size={18} />
            </a>

            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-icon-button grid h-10 w-10 place-items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              title={labels.openTitle}
              aria-label={labels.openTitle}
            >
              <ExternalLink size={18} />
            </a>

            <button
              type="button"
              onClick={onClose}
              className="grid h-10 w-10 place-items-center rounded-md border border-zinc-200 text-zinc-700 transition-colors hover:border-rose-500 hover:text-rose-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-400 dark:border-white/10 dark:text-zinc-200 dark:hover:border-rose-300 dark:hover:text-rose-200"
              title={labels.closeAction}
              aria-label={labels.closeAction}
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {isMobile || showFallback ? (
          <FallbackView />
        ) : (
          <div className="relative flex-1 bg-zinc-100 dark:bg-zinc-950">
            <iframe
              src={pdfUrl}
              className="h-full w-full border-0"
              title={title}
              onLoad={() => setIsLoading(false)}
              onError={() => {
                setIsLoading(false);
                setShowFallback(true);
              }}
            />

            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-zinc-100 dark:bg-zinc-950">
                <div className="text-center">
                  <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent dark:border-blue-300 dark:border-t-transparent" />
                  <p className="text-sm text-zinc-600 dark:text-zinc-300">{labels.loading}</p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsLoading(false);
                      setShowFallback(true);
                    }}
                    className="mt-4 text-sm font-semibold text-blue-700 underline underline-offset-4 hover:text-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 dark:text-blue-300 dark:hover:text-blue-200"
                  >
                    {labels.fallbackAction}
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
