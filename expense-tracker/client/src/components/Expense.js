import React, {useState} from 'react'
import styled from "styled-components"
import ExpenseForm from "./ExpenseForm"

const Wrapper = styled.div`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .container {
    width: 100vw;
    /* height: 100vh; */
    background: #36454f;
    /* position: absolute; */
    margin-top: 30px;
    min-height: 100%
  }

  .inner-container {
    width: 100%;
    height: auto;
    /* border-radius: 50px;
    background: #36454f;
    box-shadow: 20px 20px 60px #2e3b43, -20px -20px 60px #3e4f5b; */
    /* margin: 5% auto; */
    /* display: grid; */
    position: absolute;
  }
  table {
    /* margin-top:1.5em; */
    margin: 1em auto;
    width: 90%;
    font-family: "Rajdhani", sans-serif;
    font-size: 20px;
    color: #dee1ec;
  }
  td {
    /* text-align: center; */
    margin: 0;
  }

  th {
    padding-bottom: 1em;
  }
  td {
    /* margin: 45px 0;
    padding: 0 !important */
  }
  table {
    width: 100%
  }
  .row {
    /* margin: 50px auto 0 auto; */
    width: 100%;
    font-family: "Rajdhani", sans-serif;
    font-size: 20px;
    color: #dee1ec
    /* margin: none */
  }
  .containerTwo {
    /* margin-top: 200px */
  }
  .line__items {
    /* margin-top: 350px */
  }
  td{
    text-align: center;
    width:200px;
    overflow: hidden
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
    other,
    expenses
  } = props;

  const [editToggle, setEditToggle] = useState(false);

    return (
      <Wrapper>
        <div className="containerTwo">
          <div className="container">
            <div className="inner-container">
              <table>
                <tr
                  className="row"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    textAlign: "left",
                    marginLeft: "40px",
                  }}
                >
                  <td style={{ textAlign: "left" }}>{date}</td>
                  <td style={{ textAlign: "left" }}>${mortgage}</td>
                  <td>${utilities}</td>
                  <td>${groceries}</td>
                  <td>${car}</td>
                  <td>${entertainment}</td>
                  <td >${other}</td>
                </tr>
              </table>
            </div>
            <div className="total"></div>
          </div>
        </div>
      </Wrapper>
    );
}

export default Expense
