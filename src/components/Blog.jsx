import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import './Blog.css';
import { staggerContainer, staggerItem } from '../utils/animations';

const Blog = () => {
  const blogs = [
    { image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop', title: "Top health concerns for men: Tips and strategies for preventing and managing common health conditions.", excerpt: "Men face unique health challenges throughout their lives, from puberty to old age. At Mehta Hospital, we understand...", date: 'Jan 15, 2026', category: "Men's Health" },
    { image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop', title: "Women's health: Empowering women with knowledge and resources for a healthy lifestyle.", excerpt: "As a hospital committed to providing quality healthcare services to women, Mehta Hospital recognizes the importance of empowering...", date: 'Jan 10, 2026', category: "Women's Health" },
    { image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&h=400&fit=crop', title: "The importance of preventative care: tips for maintaining good health", excerpt: "Preventative care is a crucial aspect of maintaining good health. In today's fast-paced world, many people neglect their...", date: 'Jan 5, 2026', category: 'Preventative Care' },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="blog section" id="blog" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">Health News</span>
          <h2 className="section-title">Our Latest News</h2>
          <p className="section-description">
            Stay informed with the latest health tips, medical news, and updates from Mehta Hospital.
          </p>
        </motion.div>

        <motion.div
          className="blog-grid"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {blogs.map((blog, index) => (
            <motion.article
              key={index}
              className="blog-card"
              variants={staggerItem}
              whileHover={{ y: -8 }}
            >
              <div className="blog-image-wrapper">
                <motion.img
                  src={blog.image}
                  alt={blog.title}
                  className="blog-img"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5 }}
                />
                <span className="blog-category">{blog.category}</span>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-date">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                    {blog.date}
                  </span>
                </div>
                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-excerpt">{blog.excerpt}</p>
                <motion.a href="#" className="blog-link" whileHover={{ x: 4 }}>
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </motion.a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
