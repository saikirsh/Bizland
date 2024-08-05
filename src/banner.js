import './App.css';

function Banner(){
return(
    <div className="img">
      <div className="container-fluid" id="home">
        <div className="container align-items-center home">
          <div className="py-3">
            <h1 className="display-2">
              Welcome to<span className="text-primary">BizLand</span>
            </h1>
            <p className="fs-4">
              We are team of talented designers making websites with Bootstrap
            </p>
          </div>
          <button type="button" className="btn btn-primary px-4">
            GET STARTED
          </button>
        </div>
      </div>
    </div>
)
}

export default Banner;