import { Fragment, useEffect } from "react";

const BlogPost = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("blog-page");
  }, []);

  return (
    <Fragment>
      <a href="/#blog" className="back-btn">
        <i className="fa-solid fa-arrow-left"></i>
      </a>
      <div className="blog-content">
        <h1>My Blog</h1>
        {/* ARTICLE STARTS */}
        <div className="main-post">
          {/* META STARTS */}
          <div className="meta d-flex align-items-center">
            <div className="d-flex align-items-center">
              <i className="fa-regular fa-calendar" />
              <span>28 Dec 2023</span>
            </div>
            <div className="d-flex align-items-center">
              <i className="fa-solid fa-tag" />
              <span>wordpress, business</span>
            </div>
            <div className="d-flex align-items-center">
              <i className="fa-regular fa-comments" />
              <span>17 comments</span>
            </div>
          </div>
          {/* META ENDS */}
          {/* CONTENT STARTS */}
          <h3>Harnessing the Power of AI in Everyday Tech</h3>
          <img src="assets/blog/main-post.jpg" alt="Blog image" />
          <div className="post-content">
            <p>
            From personal assistants to prediction algorithms, artificial intelligence (AI) has effortlessly woven itself into our daily digital encounters, altering the way we interact with technology.</p>
            <p>
            Personal Assistants and Predictive Technology: Virtual assistants such as Siri, as well as predictive algorithms in smart gadgets, anticipate our requirements by providing individualized responses and optimizing routines based on our preferences.</p>
            <p>
            AI in Healthcare and Communication: AI's impact in healthcare extends to diagnoses and monitoring via wearable devices. Algorithms power email filters, predictive text, and personalized content recommendations in communication and social media.</p>
            <p>
            Future Horizons: As we look ahead, AI's position in technology is set to grow even further, impacting areas such as autonomous vehicles, smart homes, and immersive virtual experiences, offering a future where technology is even more intuitive and personalized.</p>
            <p>
            Conclusion: AI is more than just a buzzword; it is a driving force in the growth of daily technology. Embracing its potential ensures not only efficient and tailored experiences today, but also a future in which innovation transforms our technological world.</p>
          </div>
          {/* CONTENT ENDS */}
        </div>
        {/* ARTICLE ENDS */}
      </div>
    </Fragment>
  );
};
export default BlogPost;
