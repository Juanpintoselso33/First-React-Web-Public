import React from "react";

export class Navbar extends React.Component {
  state = {
    activeTab: "Home",
  };

  setActiveTab = (tabName) => {
    this.setState({ activeTab: tabName });
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-0">
        <div className="container-fluid row">
          <div className="col-8 d-flex justify-content-start align-items-center">
            <a className="navbar-brand" href="#">Start Bootstrap</a>
          </div>
          <div className="col-4 d-flex justify-content-end align-items-center">

            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse bg-dark d-lg-flex justify-content-end" id="navbarContent">
              <ul className="nav nav-tabs bg-dark border-0">
                {["Home", "About", "Services", "Contact"].map((tab) => (
                  <li className="nav-item" key={tab}>
                    <a
                      className={`nav-link custom-nav-link border-0 ${this.state.activeTab === tab ? "active" : ""}`}
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        this.setActiveTab(tab);
                      }}
                    >
                      {tab}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}