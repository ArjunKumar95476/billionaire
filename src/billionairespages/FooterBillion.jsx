import './footerbillionaire.css'
export default function FooterBillion() {
  return <>
    <div className="container-fluid mt-5 bg-dark">
      <div className="row">
        <div className="col-sm-4 mb-3 mb-sm-0">
          <div className="card bg-dark text-white border-0">
            <div className="card-body ">

              <ul>
                <h5>Investment</h5>
                <li>Grow</li>
                <li>Angle One</li>
                <li>Upstock</li>
                <li>Mitual Funds</li>
                <li>LIC</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card bg-dark text-white border-0">
            <div className="card-body">

              <ul>
                <h5>Billionaires</h5>
                <li>Warren Buffets</li>
                <li>Larry Page</li>
                <li>Mark Zukerberg</li>
                <li>Jeff Bezos</li>
                <li>Peter Thiel</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card bg-dark text-white border-0">
            <div className="card-body">

              <ul>
                <h5>Foundation&Trust</h5>
                <li>Buffet Foundation</li>
                <li>Malinda Foundation</li>
                <li>Hasting  Foundation</li>
                <li>Branson Foundation</li>
                <li>Peter Foundation</li>
              </ul>
            </div>
          </div>
        </div>
        <p style={{color:'white',textAlign:'center'}}> Copyright:Arjun2024</p>
      </div>

    </div>
  </>
}