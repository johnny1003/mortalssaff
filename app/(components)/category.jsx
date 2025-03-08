/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "./css/category.module.css";
import Link from "next/link";

const Category = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const response = await axios.get(
          `/api/fetchArticles?category=${category}`,
        );
        setArticles(response.data.articles);
        setLoading(false);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          console.log("No articles found", error);
        } else {
          console.error("Error fetching articles", error);
        }
        setLoading(false);
      }
    }
    fetchArticles();
  }, [category]);

  return (
    <div className={styles.page}>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.category}>
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </h1>
        <div className={styles.separator}></div>
        {loading ? (
          <div className={styles.grid}>
            {[...Array(3)].map((_, index) => (
              <div key={index} className={styles.skeleton}>
                <div className={styles.skeletonImage}></div>
                <div className={styles.skeletonText}></div>
                <div className={styles.skeletonText}></div>
                <div className={styles.skeletonText}></div>
              </div>
            ))}
          </div>
        ) : (
          articles &&
          articles.map((article, index) => {
            if (index % 3 === 0) {
              return (
                <React.Fragment key={index}>
                  <div className={styles.grid}>
                    {articles.slice(index, index + 3).map((subArticle) => (
                      <Link
                        href={`/articles/${subArticle._id}`}
                        target="_blank"
                        key={subArticle._id}
                        className={`${styles.gridItem} no-underline`}
                      >
                        <img
                          src={subArticle.imgPath}
                          alt={subArticle.title}
                          className="w-full h-[14rem] object-cover"
                        />
                        <p className={styles.caption}>{subArticle.title}</p>
                        <p className={styles.title}>{subArticle.subTitle}</p>
                        <p className={styles.subtitle}>{subArticle.summary}</p>
                      </Link>
                    ))}
                  </div>
                  {index + 3 < articles.length && (
                    <div className={styles.separator}></div>
                  )}
                </React.Fragment>
              );
            }
            return null;
          })
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Category;
