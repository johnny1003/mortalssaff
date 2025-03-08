"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { Document, Page as PDFPage, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import Navbar from "@/app/(components)/Navbar";
import Footer from "@/app/(components)/Footer";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";

// 设置 PDF.js 的 workerSrc
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

const Page = ({ params: { id } }) => {
  const [state, setState] = useState(false); // false = loading, true = loaded
  const [article, setArticle] = useState(null);
  const [error, setError] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`/api/fetchArticle?id=${id}`);
        setArticle(response.data.article);
        setState(true);
      } catch (err) {
        console.log(err);
        setError("Failed to load article");
        setState(true);
      }
    };
    fetchArticle();
  }, [id]);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  return (
    <div>
      <Navbar />
      <Container className="mt-4">
        {state ? (
          error ? (
            <Alert variant="danger">{error}</Alert>
          ) : (
            <>
              <Row className="mb-4">
                <Col>
                  <h1 className="text-center">{article.title}</h1>
                  <h2 className="text-center text-muted">{article.subTitle}</h2>
                  <p className="text-center">{article.summary}</p>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col md={8} className="d-flex justify-content-center">
                  <Document
                    file={article.pdfPath}
                    onLoadSuccess={onDocumentLoadSuccess}
                    onLoadError={(error) => setError("Failed to load PDF file")}
                    className="pdf-document"
                  >
                    {Array.from(new Array(numPages), (el, index) => (
                      <PDFPage
                        key={`page_${index + 1}`}
                        pageNumber={index + 1}
                        className="pdf-page"
                      />
                    ))}
                  </Document>
                </Col>
              </Row>
            </>
          )
        ) : (
          <Row className="justify-content-center">
            <Col xs="auto">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </Col>
          </Row>
        )}
      </Container>
      <Footer />
    </div>
  );
};

export default Page;