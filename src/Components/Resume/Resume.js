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
    return (
        <div className="Resume">
            <div className="ResumeMain">
                <h1>Understanding status of forces agreements: what
shapes jurisdictional control?</h1>
                <iframe className="ResumeDoc" src= "https://drive.google.com/file/d/1jjGlKsahTY6Fs6ZQwmM7U4uG-J5JokgS/preview"
                 width="100%">
                </iframe>
            </div>

        </div>
    );




}
export default Resume;