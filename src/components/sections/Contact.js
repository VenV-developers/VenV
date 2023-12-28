import Head from "next/head";

const Contact = () => {
  return (
    <>
    <Head>
        <meta name="description" content="This is the Contact us page of VenV." />
        <meta name="keywords" content="venv,Contact Freelance Web Developer, Get in Touch for Website Development, Hire Web Developer for Projects, Reach Out for Custom Website Design, Contact Affordable Web Development Services, Professional Web Developer Contact Info, Expert WordPress Developer Contact, E-commerce Website Development Inquiry, Responsive Website Design Contact, Mobile-friendly Web Development Reach, SEO-Optimized Websites Consultation, CMS Website Development Contact, HTML5 CSS3 Development Inquiry, PHP Web Development Contact, JavaScript Developer for Hire, Front-end Development Questions, Back-end Web Development Contact, Website Maintenance Services Inquiry, UI/UX Design for Websites Consultation, Freelance Web Programming Contact" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <section className="contact main-section flex-column-mobile" id="contact">
      {/* TITLE STARTS */}
      <div className="custom-title">
        {/* MAIN TITLE STARTS */}
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
              Get in touch
            </span>
          </span>
        </h3>
        {/* MAIN TITLE ENDS */}
      </div>
      {/* TITLE ENDS */}
      {/* CONTACTS STARTS */}
      <div className="boxes">
        <div>
          {/* CONTACT ITEM STARTS */}
          <div className="animated-layer fade-in-down-animation fadeInUp wow">
            <i className="fa fa-phone" />
            <p>
              <span className="small-text">phone</span>
              +216 21 184 010
            </p>
          </div>
          {/* CONTACT ITEM ENDS */}
          {/* CONTACT ITEM STARTS */}
          <div className="animated-layer fade-in-up-animation fadeInUp wow">
            <i className="fa fa-location-dot" />
            <p>
              <span className="small-text">address</span>
              London, England
            </p>
          </div>
          {/* CONTACT ITEM ENDS */}
        </div>
        <div>
          {/* CONTACT ITEM STARTS */}
          <div className="animated-layer fade-in-down-animation fadeInUp wow">
            <i className="fa fa-envelope" />
            <p>
              <span className="small-text">email</span>
              contact@VenV.net
            </p>
          </div>
          {/* CONTACT ITEM ENDS */}
          {/* CONTACT ITEM STARTS */}
          <div className="animated-layer fade-in-up-animation fadeInUp wow">
            <i className="fa fa-share-nodes" />
            <span className="small-text">follow me</span>
            <ul className="social">
              <li>
                <a href="#">
                  <i className="fa-brands fa-github" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-dribbble" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-facebook" />
                </a>
              </li>
            </ul>
          </div>
          {/* CONTACT ITEM ENDS */}
        </div>
      </div>
      {/* CONTACTS ENDS */}
      <img
        alt=""
        className="separator hide-mobile"
        src="assets/separator.png"
      />
    </section>
    </>
  );
};
export default Contact;
