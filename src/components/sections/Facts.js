import Head from "next/head";

const Facts = () => {
  return (
    <>
    <Head>
        <meta name="description" content="This is the Facts page of VenV." />
        <meta name="keywords" content="Facts,VenV,venv,indian freelancer,Freelance Website Development, Web Development Services, Hire Website Developer, Custom Website Design, Affordable Web Development, Professional Web Developer, Expert WordPress Developer, E-commerce Website Development, Responsive Website Design, Mobile-friendly Web Development, SEO-Optimized Websites, CMS Website Development, HTML5 CSS3 Development, PHP Web Development, JavaScript Developer, Front-end Development, Back-end Web Development, Website Maintenance Services, UI/UX Design for Websites, Freelance Web Programming" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <section className="facts">
      <div className="flex-column-mobile">
        {/* SINGE FACT ITEM STARTS */}
        <div
          className="animated-layer fade-in-right-animation fadeInLeft wow"
          data-wow-offset={200}
        >
          <div>
            <div>
              <h3>3</h3>
              <p>
                years of<span>experience</span>
              </p>
            </div>
          </div>
        </div>
        {/* SINGE FACT ITEM ENDS */}
        {/* SINGE FACT ITEM STARTS */}
        <div
          className="animated-layer fade-in-right-animation fadeInRight wow"
          data-wow-offset={200}
        >
          <div>
            <div>
              <h3>20+</h3>
              <p>
                completed<span>projects</span>
              </p>
            </div>
          </div>
        </div>
        {/* SINGE FACT ITEM ENDS */}
        {/* SINGE FACT ITEM STARTS */}
        <div
          className="animated-layer fade-in-right-animation fadeInLeft wow"
          data-wow-offset={200}
        >
          <div>
            <div>
              <h3>10+</h3>
              <p>
                Happy<span>customers</span>
              </p>
            </div>
          </div>
        </div>
        {/* SINGE FACT ITEM ENDS */}
        {/* SINGE FACT ITEM STARTS */}
        <div
          className="animated-layer fade-in-right-animation fadeInRight wow"
          data-wow-offset={200}
        >
          <div>
            <div>
              <h3>7</h3>
              <p>
                awards<span>won</span>
              </p>
            </div>
          </div>
        </div>
        {/* SINGE FACT ITEM ENDS */}
        {/* SINGE FACT ITEM STARTS */}
        <div
          className="animated-layer fade-in-right-animation fadeInLeft wow"
          data-wow-offset={200}
        >
          <div>
            <div>
              <h3>10+</h3>
              <p>
                learned<span>frameworks</span>
              </p>
            </div>
          </div>
        </div>
        {/* SINGE FACT ITEM ENDS */}
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
export default Facts;
