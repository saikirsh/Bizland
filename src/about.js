import './App.js'

function About() {
    return (<div className="container-fluid my-5 about">
    <div className="container py-5">
      <div className="container text-center aboutmatter">
        <button type="button" className="btn btn-light abouttitle">
          <span className="text-primary">ABOUT</span>
        </button>
        <h2>Find Out More <span className="text-primary">About Us</span></h2>
        <p>
          Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
          adipisci expedita at voluptas atque vitae autem.
        </p>
      </div>
      <div className="container my-4">
        <div className="row">
          <div className="col-12 col-md-6">
            <img
              src={require("../src/images/about us-img.jpg")}
              alt="about us image"
              width="100%"
              height="100%"
              className="aboutimage"
            />
          </div>
          <div
            className="col-12 col-md-6 d-flex flex-column justify-content-center"
          >
            <div className="aboutmatter my-3">
              <h4>
                Voluptatem dignissimos provident quasi corporis voluptates sit
                assumenda.
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="aboutmatter2 my-2">
              <div className="d-flex flex-row gap-2">
                <div>
                  <button
                    type="button"
                    className="btn btn-primary rounded-circle boxicon"
                  >
                    <i href="#" className="fa fa-laptop text-primary"></i>
                  </button>
                </div>
                <div className="d-flex flex-column">
                  <h5>Ullamco laboris nisi ut aliquip consequat</h5>
                  <p>
                    Magni facilis facilis repellendus cum excepturi quaerat
                    praesentium libre trade
                  </p>
                </div>
              </div>
            </div>
            <div className="aboutmatter2 my-2">
              <div className="d-flex flex-row gap-2">
                <div>
                  <button
                    type="button"
                    className="btn btn-primary rounded-circle boxicon"
                  >
                    <i href="#" className="fa fa-image text-primary"></i>
                  </button>
                </div>
                <div className="d-flex flex-column">
                  <h5>Ullamco laboris nisi ut aliquip consequat</h5>
                  <p>
                    Magni facilis facilis repellendus cum excepturi quaerat
                    praesentium libre trade
                  </p>
                </div>
              </div>
            </div>
            <div className="aboutmatter2 my-3">
              <div className="d-flex">
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit
                  esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    )
}

export default About;