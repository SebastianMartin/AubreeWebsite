import React, { useState, useEffect } from 'react';
import './Resume.css';
import resume from '../../Content/herrinCV.pdf'
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

const Resume = (props) => {
    const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
    return (
        <div className="Resume">
            <div className="ResumeMain">
                <h1>Understanding status of forces agreements: what
shapes jurisdictional control?</h1>
                <iframe className="ResumeDoc" src={resume} width="100%">
                </iframe>
                <Document
                options={{
                    cMapUrl: `//cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/cmaps/`,
                    cMapPacked: true,
                  }}
                    file={resume}
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNumber} />
                </Document>
            </div>

        </div>
    );




}
export default Resume;