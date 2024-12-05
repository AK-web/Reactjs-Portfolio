import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { X } from 'lucide-react';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface PDFViewerProps {
  pdfUrl: string;
  onClose: () => void;
}

export const PDFViewer: React.FC<PDFViewerProps> = ({ pdfUrl, onClose }) => {
  const [numPages, setNumPages] = useState<number | null>(null);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <div className="relative max-h-[90vh] w-full max-w-4xl overflow-auto rounded-lg bg-white p-4">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full bg-gray-200 p-2 hover:bg-gray-300"
        >
          <X size={24} />
        </button>
        <Document
          file={pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          className="mx-auto"
        >
          {Array.from(new Array(numPages), (_, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              renderTextLayer={false}
              className="mb-4"
            />
          ))}
        </Document>
      </div>
    </div>
  );
};