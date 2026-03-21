import React from 'react';
import { blogData } from '../../data/blogs';
import styles from './Blog.module.css';
import { FiExternalLink } from 'react-icons/fi';

function Blog() {
  return (
    <section id="blog" className={styles.section}>
      <h2 className={styles.sectionHeading}>Writing</h2>
      <div className={styles.list}>
        {blogData.map((post) => (
          <a
            key={post.id}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <div className={styles.cardLeft}>
              <span className={styles.date}>{post.date}</span>
            </div>
            <div className={styles.cardRight}>
              <h3 className={styles.title}>
                {post.title}
                <FiExternalLink className={styles.extIcon} />
              </h3>
              <p className={styles.excerpt}>{post.excerpt}</p>
              <div className={styles.tagList}>
                {post.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
      <a
        href="https://medium.com/@nikhilnikki747"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.viewAll}
      >
        View all articles on Medium →
      </a>
    </section>
  );
}

export default Blog;
