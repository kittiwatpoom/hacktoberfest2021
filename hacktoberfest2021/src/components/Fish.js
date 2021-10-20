import React, { Component } from "react";
import styled from "styled-components";

const FishImg = styled.img`
  width: 30%;
`;
const CardWidth = styled.div`
  width: 30rem;
`;

export default class Fish extends Component {
  render() {
    return (
      <div>
        <CardWidth className="card border-dark mb-3">
          <div className="row g-0">
            <FishImg alt="img" src="img/fish.png" />
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Fish</h5>
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
