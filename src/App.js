import logo from './logo.svg';
import './App.css';
import Banner from './banner';
import Icons from './icons';
import About from './about';
import Programbar from './programbar';


function App() {
  return (
    
<div className="p-0 m-0">
    <div classNameName="container-fluid p-0">
      <div className="bg-primary p-2">
        <div className="container d-flex justify-content-between">
          <div className="d-flex flex-row contact">
            <a href="#" className="fa fa-envelope socialmedia"
              >contact@example.com</a
            >
            <a href="#" className="fa fa-phone socialmedia">+1 5589 55488 55</a>
          </div>
          <div className="d-flex flex-row d-none d-sm-block">
            <div className="icons">
              <a href="#" className="fa fa-twitter socialmedia socialmedia2"></a>
              <a href="#" className="fa fa-facebook socialmedia socialmedia2"></a>
              <a href="#" className="fa fa-instagram socialmedia socialmedia2"></a>
              <a href="#" className="fa fa-linkedin socialmedia socialmedia2"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid p-0">
      <nav className="navbar navbar-expand-sm navbar-light bg-light sticky-top">
        <div
          className="container d-flex align-items-center justify-content-between p-3"
        >
          <div className="container d-flex flex-row justify-content-between">
            <h2>BizLand<span className="text-primary">.</span></h2>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mynavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Team</a>
              </li>
              <li className="nav-item">
                <div className="dropdown">
                  <a
                    className="nav-link btn dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Drop Down
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Drop Down 1</a></li>
                    <li><a className="dropdown-item" href="#">Drop Down 2</a></li>
                    <li><a className="dropdown-item" href="#">Drop Down 3</a></li>
                    <li><a className="dropdown-item" href="#">Drop Down 4</a></li>
                    <li><a className="dropdown-item" href="#">Drop Down 5</a></li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <Banner />
    <Icons />
    <About />
    <Programbar />
    <div className="container-fluid my-5">
      <div className="container my-5 pt-5">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3 my-5">
            <div className="mx-2 bg-light boxmatter">
              <div className="icons2 box">
                <a
                  href="#"
                  className="fa fa-smile-o socialmedia socialmedia2 text-light"
                ></a>
              </div>
              <h1 className="p-1 pt-5 text-center">232</h1>
              <p className="p-1 pb-4 text-center">Happy Clients</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 my-5">
            <div className="mx-2 bg-light boxmatter">
              <div className="icons2 box">
                <a
                  href="#"
                  className="fa fa-pencil-square-o socialmedia socialmedia2 text-light"
                ></a>
              </div>
              <h1 className="p-1 pt-5 text-center">521</h1>
              <p className="p-1 pb-4 text-center">Projects</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 my-5">
            <div className="mx-2 bg-light boxmatter">
              <div className="icons2 box">
                <a
                  href="#"
                  className="fa fa-headphones socialmedia socialmedia2 text-light"
                ></a>
              </div>
              <h1 className="p-1 pt-5 text-center">1463</h1>
              <p className="p-1 pb-4 text-center">Hours Of Support</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 my-5">
            <div className="mx-2 bg-light boxmatter">
              <div className="icons2 box">
                <a
                  href="#"
                  className="fa fa-id-card-o socialmedia socialmedia2 text-light"
                ></a>
              </div>
              <h1 className="p-1 pt-5 text-center">15</h1>
              <p className="p-1 pb-4 text-center">Hard Workers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid p-0 m-0">
      <div className="container-fluid p-0 m-0 testimonialbgimg">
        <div className="testmonial">
          <div id="demo" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators caroubutton">
              <button
                type="button"
                data-bs-target="#demo"
                data-bs-slide-to="0"
                className="active button1"
              ></button>
              <button
                type="button"
                data-bs-target="#demo"
                data-bs-slide-to="1"
                className="button1"
              ></button>
              <button
                type="button"
                data-bs-target="#demo"
                data-bs-slide-to="2"
                className="button1"
              ></button>
              <button
                type="button"
                data-bs-target="#demo"
                data-bs-slide-to="3"
                className="button1"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div
                  className="d-flex flex-column justify-content-center align-items-center"
                >
                  <div>
                    <img
                      src={require("../src/images/testimonials-1.jpg")}
                      alt="Los Angeles"
                      className="d-block mainimg"
                    />
                  </div>
                  <div>
                    <h3 className="text-light">Los Angeles</h3>
                    <p className="text-light">We had such a great time in LA!</p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div
                  className="d-flex flex-column justify-content-center align-items-center"
                >
                  <div>
                    <img
                      src={require("../src/images/testimonials-2.jpg")}
                      alt="Chicago"
                      className="d-block mainimg"
                    />
                  </div>
                  <div>
                    <h3 className="text-light">Chicago</h3>
                    <p className="text-light">Thank you, Chicago!</p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="d-flex flex-column justify-content-center align-items-center">
                <div>
                  <img
                    src={require("../src/images/testimonials-3.jpg")}
                    alt="New York"
                    className="d-block mainimg"
                  />
                </div>
                <div>
                  <h3 className="text-light">New York</h3>
                  <p className="text-light">We love the Big Apple!</p>
                </div>
              </div>
              </div>
              <div className="carousel-item">
                <div
                  className="d-flex flex-column justify-content-center align-items-center"
                >
                  <div>
                    <img
                      src={require("../src/images/testimonials-4.jpg")}
                      alt="New York"
                      className="d-block mainimg"
                    />
                  </div>
                  <div>
                    <h3 className="text-light">New York</h3>
                    <p className="text-light">We love the Big Apple!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid my-5 FAQ">
      <div className="container py-5">
        <div className="container text-center FAQmatter">
          <button type="button" className="btn btn-light abouttitle my-4">
            <span className="text-primary">F.A.Q</span>
          </button>
          <h2>Frequently Asked <span className="text-primary">Questions</span></h2>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 bg-primary mt-5">
                <div className="text-light text-start">
                <h3>Non consectetur a erat nam at lectus urna duis?</h3>
                <p>Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.</p></div>
              </div>
              <div className="col-lg-10 bg-light mt-4 py-3 d-flex justify-content-between">
                <div className="text-start" >Feugiat scelerisque varius morbi enim nunc faucibus?</div>
                <div className="text-end"><a href="#" className="fa fa-angle-right rightindicator"></a></div>
              </div>
              <div className="col-lg-10 bg-light mt-4 py-3 d-flex justify-content-between">
                <div className="text-start" >Dolor sit amet consectetur adipiscing elit pellentesque?</div>
                <div className="text-end"><a href="#" className="fa fa-angle-right rightindicator"></a></div>
              </div>
              <div className="col-lg-10 bg-light mt-4 py-3 d-flex justify-content-between">
                <div className="text-start" >Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?</div>
                <div className="text-end"><a href="#" className="fa fa-angle-right rightindicator"></a></div>
              </div>
              <div className="col-lg-10 bg-light mt-4 py-3 d-flex justify-content-between">
                <div className="text-start" >Tempus quam pellentesque nec nam aliquam sem et tortor?</div>
                <div className="text-end"><a href="#" className="fa fa-angle-right rightindicator"></a></div>
              </div>
              <div className="col-lg-10 bg-light mt-4 py-3 d-flex justify-content-between">
                <div className="text-start" >Perspiciatis quod quo quos nulla quo illum ullam?</div>
                <div className="text-end"><a href="#" className="fa fa-angle-right rightindicator"></a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid my-5 footer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 my-4">
            <h1 className="pb-3">BizLand</h1>
            <p>A108 Adam Street <br />New York, NY 535022</p>
            <p className="pt-3"><span >Phone: </span>+1 5589 55488 55</p>
            <p><span >Email:</span>info@example.com</p>
          </div>
          <div className="col-12 col-md-6 col-lg-8">
            <div className="row">
              <div className="col-12 col-md-4 col-lg-4 mb-4">
                <h3 className="pb-3">Useful Links</h3>
                <p><a href="#" className="fa fa-angle-right rightindicator1"></a><span className="px-1">Home</span></p>
                <p><a href="#" className="fa fa-angle-right rightindicator1"></a><span className="px-1">About us</span></p>
                <p><a href="#" className="fa fa-angle-right rightindicator1"></a><span className="px-1">Services</span></p>
                <p><a href="#" className="fa fa-angle-right rightindicator1"></a><span className="px-1">Terms of service</span></p>
              </div>
              <div className="col-12 col-md-4 col-lg-4 mb-4">
                <h3 className="pb-3">Our Services</h3>
                <p><a href="#" className="fa fa-angle-right rightindicator1"></a><span className="px-1">Web Design</span></p>
                <p><a href="#" className="fa fa-angle-right rightindicator1"></a><span className="px-1">Web Development</span></p>
                <p><a href="#" className="fa fa-angle-right rightindicator1"></a><span className="px-1">Product Management</span></p>
                <p><a href="#" className="fa fa-angle-right rightindicator1"></a><span className="px-1">Marketing</span></p>
              </div>
              <div className="col-12 col-md-4 col-lg-4">
                <h3 className="pb-3">Follow Us</h3>
                <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid">
      <div className="container border-top mb-5">
        <div className="pt-3 d-flex flex-column align-items-center text-center">
          <p>© Copyright <span>BizLand</span> All Rights Reserved</p>
          <p>Designed by <span className="text-primary">BootstrapMade</span></p>
        </div>
      </div>
    </div>
   </div>
  );
}

export default App;
