import Head from "next/head";
const Testimonials = () => {
  return (
    <>
    <Head>
        <meta name="description" content="This is the testimonials page of VenV." />
        <meta name="keywords" content="Testimonials,VenV,venv,indian freelancer,Client Reviews for Web Development, Website Design Testimonials, Freelance Developer Feedback, Happy Customers for Custom Websites, Positive Experiences with Web Development, Praise for Affordable Web Solutions, Client Success Stories with Professional Web Developers, WordPress Development Testimonials, E-commerce Website Satisfaction, Responsive Design Raves, SEO-Optimized Websites Success Stories, CMS Website Development Appreciation, HTML5 CSS3 Development Acclaim, PHP Web Development Kudos, JavaScript Developer Endorsements, Front-end and Back-end Development Cheers, Website Maintenance and Support Testimonials, UI/UX Design Client Appreciation, Freelance Web Programming Success Stories" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <section className="testimonials">
      <div className="testimonials-container flex-column-mobile">
        {/* TESTIMONIAL ITEM STARTS */}
        <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
          <div>
            <p>
              <span className="quote">
                " I worked with VenV, they were very helpful and fast to respond
                to my inquiry to help with website issues and all
                technical problems. "
              </span>
              <span className="person">Darpan Kadu</span>
              <span className="job">Director - TechInnovate Mobility</span>
            </p>
            <img src="assets/testimonials/testimonial-1.jpg" alt="" />
          </div>
        </div>
        {/* TESTIMONIAL ITEM ENDS */}
        {/* TESTIMONIAL ITEM STARTS */}
        <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
          <div>
            <p>
              <span className="quote">
                " VenV just phenomenalized my simple looking school website into a modern and fully dynamic website all things done in the promised time period. "
              </span>
              <span className="person">Shaishav Sir</span>
              <span className="job">Owner - Mahatma Valley</span>
            </p>
            <img src="assets/testimonials/testimonial-2.jpg" alt="" />
          </div>
        </div>
        {/* TESTIMONIAL ITEM ENDS */}
      </div>
      <img
        alt=""
        className="z-1 hide-mobile opposite-separator"
        src="assets/separator-opposite.png"
      />
    </section>
    </>
  );
};
export default Testimonials;
