/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect, useRef, Suspense } from "react";
import Navbar from "../(components)/Navbar";
import styles from "./page.module.css";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import search from "@/functions/search";
import Footer from "../(components)/Footer";
import Link from "next/link";

const SearchPage = () => {
  const [articles, setArticles] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [isFetchComplete, setIsFetchComplete] = useState(false);
  const [isSearchComplete, setIsSearchComplete] = useState(false);
  const formRef = useRef();
  const searchParams = useSearchParams();
  const pattern = searchParams.get("pattern");

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/fetchdata?reqstats=all");
      setArticles(response.data.results || []);
    } catch (error) {
      console.error("Error fetching data", error);
      setArticles([]);
    } finally {
      setIsFetchComplete(true);
    }
  };

  const searchAction = (pattern) => {
    const results = search(articles, pattern);
    setSearchResults(results);
    console.log(results);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      fetchData();
    }
  }, []);

  useEffect(() => {
    if (isFetchComplete && pattern && !isSearchComplete) {
      setSearchInput(pattern);
    }
  }, [isFetchComplete, pattern, isSearchComplete]);

  useEffect(() => {
    if (searchInput === pattern && !isSearchComplete) {
      formRef.current.dispatchEvent(
        new Event("submit", { cancelable: true, bubbles: true }),
      );
      setIsSearchComplete(true);
    }
  }, [searchInput, pattern, isSearchComplete]);

  const handleSearch = (e) => {
    e.preventDefault();
    searchAction(searchInput);
  };

  const timeAgo = (uploadTime) => {
    const now = new Date();
    let uploadDate = new Date(uploadTime);

    // Convert uploadDate to UTC
    const offset = 8; // Beijing time offset
    uploadDate = new Date(uploadDate.getTime() - offset * 60 * 60 * 1000);

    // Ensure uploadDate is not in the future
    if (uploadDate > now) {
      uploadDate = now;
    }

    const diffMs = now - uploadDate;
    const diffYears = Math.floor(diffMs / (1000 * 60 * 60 * 24 * 365));
    const diffDays = Math.floor(
      (diffMs % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24),
    );
    const diffHours = Math.floor(
      (diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

    let result = "";
    if (diffYears > 0) {
      result += `${diffYears} years `;
    }
    if (diffDays > 0) {
      result += `${diffDays} days `;
    }
    if (diffHours > 0) {
      result += `${diffHours} hours `;
    }
    if (diffMinutes > 0 || result === "") {
      // Show minutes if it's the only unit
      result += `${diffMinutes} minutes `;
    }

    return result.trim() + " ago";
  };

  return (
    <div className={styles.page}>
      <Navbar />
      <form ref={formRef} className={styles.searchBar} onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className={styles.searchInput}
        />
        <button className={styles.searchButton} type="submit">
          🔍
        </button>
      </form>
      <div className={styles.results}>
        {searchResults.map((result, index) => (
          <Link
            href={`/articles/${result.item._id}`}
            key={index}
            className={`${styles.result} no-underline`}
          >
            <img
              src={result.item.imgPath}
              alt="News"
              className={styles.resultImage}
            />
            <div className={styles.resultContent}>
              <p className={styles.date}>{timeAgo(result.item.uploadTime)}</p>
              <h3>{result.item.title}</h3>
              <p>{result.item.description}</p>
              <p className={styles.category}>{result.item.category}</p>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
};

const SearchPageWrapper = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <SearchPage />
  </Suspense>
);

export default SearchPageWrapper;