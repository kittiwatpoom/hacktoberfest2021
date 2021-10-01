import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Bird from './components/Bird';
import Cat from './components/Cat';
import Dog from './components/Dog';
import Fish from './components/Fish';
import Rabbit from './components/Rabbit';
import styled from "styled-components"

const Div = styled.div`
    padding-top: 30px;
`

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Pet</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Div className="container justify-content-center">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-sm-12 col-md-5">
            <Cat />
          </div>
          <div className="col-lg-5 offset-lg-1 col-sm-12 col-md-5">
            <Dog />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-5 col-sm-12 col-md-5">
            <Fish />
          </div>
          <div className="col-lg-5 offset-lg-1 col-sm-12 col-md-5">
            <Bird />
          </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-lg-5 col-sm-12 col-md-5">
              <Rabbit />
            </div>
        </div>
      </Div>
    </div>
  );
}

export default App;
