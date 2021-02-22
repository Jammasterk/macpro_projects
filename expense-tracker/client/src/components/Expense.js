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

const Expense = () => {
    return (
      <Wrapper>
        <div className="container">
          <div className="inner-container">
            <table>
              <tr className="line__items">
                <th>Date</th>
                <th>Rent/Mortgage</th>
                <th>Utilities</th>
                <th>Groceries</th>
                <th>Car Expenses</th>
                <th>Entertainment</th>
                <th>Other</th>
              </tr>
              <tr>
                <td>2/3/2021</td>
                <td>$567</td>
                <td>$127</td>
                <td>$250</td>
                <td>$117</td>
                <td>$75</td>
                <td>$367</td>
              </tr>
            </table>
          </div>
          <div className="total">
              
          </div>
        </div>
      </Wrapper>
    );
}

export default Expense
