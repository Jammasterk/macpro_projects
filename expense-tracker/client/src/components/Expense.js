import React from 'react'
import styled from "styled-components"

const Wrapper = styled.div`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .container {
    width: 100%;
    height: 100vh;
    background: #36454f;
    position: absolute;
    margin-top: 310px
  }

  .inner-container {
    width: 90%;
    height: 500px;
    border-radius: 50px;
    background: #36454f;
    box-shadow: 20px 20px 60px #2e3b43, -20px -20px 60px #3e4f5b;
    margin: 5% auto;
    display: grid;
  }
  table {
    /* margin-top:1.5em; */
    margin: 1.5em auto;
    width: 90%;
    font-family: "Rajdhani", sans-serif;
    font-size: 20px;
    color: #dee1ec;
  }
  td{
      text-align: center
  }

  th{
      padding-bottom: 1em
  }
`;

const Expense = (props) => {
  const {
    date,
    mortgage,
    utilities,
    car,
    groceries,
    entertainment,
    other
  } = props;
    return (
      <Wrapper>
        <div className="container">
          <div className="inner-container">
            <table>
              <tr className="line__items">
                <th>Date</th>
                <th>Mortgage / Rent</th>
                <th>Utilities</th>
                <th>Groceries</th>
                <th>Car</th>
                <th>Entertainment</th>
                <th>Other</th>
              </tr>
              <tr>
                <td>{date}</td>
                <td>${mortgage}</td>
                <td>${utilities}</td>
                <td>${groceries}</td>
                <td>${car}</td>
                <td>${entertainment}</td>
                <td>${other}</td>
              </tr>
            </table>
          </div>
          <div className="total"></div>
        </div>
      </Wrapper>
    );
}

export default Expense
