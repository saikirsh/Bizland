import './App.js'

function Programbar(){
    return(
        <div className="container-fluid pro">
        <div className="container">
          <div className="row progressbar my-3">
            <div className="col-12 col-lg-6">
              <div className="container d-grid gap-0 m-0 p-0">
                <div className="container d-flex justify-content-between">
                  <p>HTML</p>
                  <p>100%</p>
                </div>
                <div className="progress" >
                  <div className="progress-bar bg-primary w-100" ></div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="container d-grid gap-0 m-0 p-0">
                <div className="container d-flex justify-content-between">
                  <p>PHP</p>
                  <p>80%</p>
                </div>
                <div className="progress" >
                  <div className="progress-bar" style={{ width: '80%', backgroundColor: '#007bff' }}></div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="container d-grid gap-0 m-0 p-0">
                <div className="container d-flex justify-content-between">
                  <p>CSS</p>
                  <p>90%</p>
                </div>
                <div className="progress" >
                  <div className="progress-bar" style={{ width: '90%', backgroundColor: '#007bff' }}></div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="container d-grid gap-0 m-0 p-0">
                <div className="container d-flex justify-content-between">
                  <p>WORDPRESS/CMS</p>
                  <p>90%</p>
                </div>
                <div className="progress" >
                  <div className="progress-bar" style={{ width: '90%', backgroundColor: '#007bff' }}></div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="container d-grid gap-0 m-0 p-0">
                <div className="container d-flex justify-content-between">
                  <p>JAVASCRIPT</p>
                  <p>75%</p>
                </div>
                <div className="progress" >
                  <div className="progress-bar bg-primary w-75" ></div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="container d-grid gap-0 m-0 p-0">
                <div className="container d-flex justify-content-between">
                  <p>PHOTOSHOP</p>
                  <p>60%</p>
                </div>
                <div className="progress" >
                  <div className="progress-bar" style={{ width: '60%', backgroundColor: '#007bff' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Programbar;