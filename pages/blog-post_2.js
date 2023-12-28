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
          <h3>How To Publish Content That Ranks On Google</h3>
          <img src="assets/blog/main-post.jpg" alt="Blog image" />
          <div className="post-content">
            <p>
            In the ever-changing realm of online visibility, the importance of a well-structured website cannot be stressed. Aside from aesthetics, an efficient site structure functions as a silent architect, intricately sculpting the user experience and greatly influencing your website's SEO success.</p>
            <p>
            A simplified site structure, first and foremost, helps to an intuitive and seamless user journey. Finding essential information becomes much easier when users can easily traverse your website. This not only increases their time on your site but also decreases bounce rates, giving positive signals to search engines about the relevance and worth of your material.</p>
            <p>
            Search engine crawlers like websites with a clear and ordered structure from a technological aspect. These crawlers can recognize the context and significance of each page thanks to a logical hierarchy of pages and a methodical organization of material. This, in turn, affects how your site is crawled and eventually ranked in search results.</p>
            <p>
            Consider the significance of a clean URL structure, in which descriptive and keyword-rich URLs serve as guideposts for both visitors and search engines as they navigate the content maze. This attention to detail not only improves the user experience, but also assists search engines in determining the importance of your sites.
            </p>
            <p>
            Furthermore, an effective site layout allows for strategic internal connecting. Internal links are your website's connective tissue, helping search engines to determine the relationships between distinct pages. This not only spreads authority throughout your content, but it also helps to your website's overall strength in the eyes of search algorithms.
            </p>
            <p>
            Finally, the effectiveness of your site structure extends far beyond aesthetics; it is a core component that can have a big impact on your SEO success. By putting the user experience first, embracing logical content organization, and implementing strategic internal linking, you lay the groundwork for a website that not only satisfies your audience but also captures the attention and approval of search engines, propelling your site to new heights in search rankings.
            </p>
          </div>
          {/* CONTENT ENDS */}
        </div>
        {/* ARTICLE ENDS */}
      </div>
    </Fragment>
  );
};
export default BlogPost;
