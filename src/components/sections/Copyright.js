const Copyright = () => {
  return (
    <section className="copyright">
      <img
        alt=""
        className="z-1 hide-mobile"
        src="assets/separator-copyright.png"
      />
      <div>
        <span>© {new Date().getFullYear()} VenV Developers</span>
        <span>
          Designed By{" "}
          <a
            target="_blank"
            href="#"
          >
            VenV Developers
          </a>
        </span>
        <ul>
          <li>
            <a href="https://github.com/VenV-developers">
              <i className="fa-brands fa-github" />
            </a>
          </li>
          <li>
            <a href="twitter here">
              <i className="fa-brands fa-twitter" />
            </a>
          </li>
          <li>
            <a href="linkedin link here">
              <i className="fa-brands fa-linkedin" />
            </a>
          </li>
          <li>
            <a href="gmail link here">
              <i className="fa-brands fa-m" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Copyright;
