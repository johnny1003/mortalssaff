"use client";
import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import "bootstrap/dist/css/bootstrap.min.css";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [category, setCategory] = useState("science");
  const [img, setImg] = useState(null);
  const { status: status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please select a file.");
      return;
    }

    if (file.type !== "application/pdf") {
      alert("Please upload a PDF file.");
      return;
    }

    if (
      !img ||
      (img.type !== "image/jpeg" &&
        img.type !== "image/png" &&
        img.type !== "image/jpg" &&
        img.type !== "image/webp")
    ) {
      alert("Please upload a JPEG image.");
      return;
    }

    if (!title || !subTitle || !summary || !category) {
      alert("Please fill in all the fields.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("img", img);
    formData.append("title", title);
    formData.append("subTitle", subTitle);
    formData.append("summary", summary);
    formData.append("category", category);

    try {
      const response = await axios.post("/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 201) {
        alert("Article uploaded");
        setFile(null);
        setTitle("");
        setSubTitle("");
        setSummary("");
        setCategory("science");
        setImg(null);
      } else {
        alert("Failed to upload article");
      }
    } catch (error) {
      alert("An error occurred while uploading the article.");
    }
  };

  if (status === "loading") {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return status === "authenticated" ? (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Upload Article</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="pdf" className="form-label">
                    PDF:
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    name="pdf"
                    onChange={(e) => {
                      setFile(e.target.files[0]);
                    }}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Sub Title"
                    value={subTitle}
                    onChange={(e) => {
                      setSubTitle(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Summary"
                    value={summary}
                    onChange={(e) => {
                      setSummary(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-3">
                  <select
                    className="form-select"
                    value={category}
                    onChange={(e) => {
                      setCategory(e.target.value);
                    }}
                  >
                    <option value="science">Science</option>
                    <option value="socialScience">Social Science</option>
                    <option value="humanities">Humanities</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="img" className="form-label">
                    Image:
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    name="img"
                    onChange={(e) => {
                      setImg(e.target.files[0]);
                    }}
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Upload;
