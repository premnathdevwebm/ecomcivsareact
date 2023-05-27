import { useState } from "react";
import { saveAs } from 'file-saver';

const PdfViewer = ({ pdfUrl }) => {

  const downloadPdf = () => {
    const uniqueFileName = `invoice_${Date.now()}.pdf`;
    saveAs(pdfUrl, uniqueFileName);
  };

  return (
    <div>
      <img
        width={"25px"}
        height={"25px"}
        src="/pdficon.jfif"
        alt="PDF Thumbnail"
        onClick={downloadPdf}
        style={{ cursor: 'pointer' }}
      />
    </div>
  );
};

export default PdfViewer;
