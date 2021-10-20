import React, { Component } from "react";
import styled from "styled-components";

const ParrotImg = styled.img`
  width: 30%;
  height: 160px;
  padding: 10px;
`;
const CardWidth = styled.div`
  width: 30rem;
`;

export default class Parrot extends Component {
  render() {
    return (
      <div>
        <CardWidth className="card border-dark mb-3">
          <div className="row g-0">
            <ParrotImg alt="img" src="img/parrot.png" />
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Parrot</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        </CardWidth>
      </div>
    );
  }
}
