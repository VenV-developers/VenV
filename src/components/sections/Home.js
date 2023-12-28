import Head from "next/head";

const Home = () => {
  
  return (
    <>
    <Head>
        <meta name="description" content="This is the home page of VenV." />
        <meta name="keywords" content="Home,VenV,venv,indian freelancer,Freelance Web Development Services, Custom Website Solutions, Expert Web Developers for Hire, Affordable Web Design, Professional Website Development, WordPress Experts, E-commerce Solutions, Responsive and Mobile-friendly Design, SEO-Optimized Web Solutions, CMS Development Services, HTML5 CSS3 Specialists, PHP Web Development, JavaScript Solutions, Front-end and Back-end Development, Website Maintenance and Support, UI/UX Design Excellence, Freelance Web Programming Services, Innovative Web Solutions for Businesses" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <section className="home image" id="home">
      <div>
        <div className="position-relative">
          <h1>
            <span>
              <span className="animated-layer">
                Hello<span>.</span>
              </span>
            </span>
            <span className="position-relative">
              <span className="animated-layer">We are</span>
              {/* <span className="intro animated-layer" style={{ marginRight: "auto" }}>
                Yet to be decided
              </span> */}
            </span>
            <span>
              <span className="animated-layer">VenV</span>
            </span>
          </h1>
        </div>
      </div>
      {/* CALL TO ACTION STARTS */}
      <span className="animated-layer animated-btn cta" id="cta">
        <span></span>
      </span>
      {/* CALL TO ACTION ENDS */}
    </section>
    </>
  );
};
export default Home;
