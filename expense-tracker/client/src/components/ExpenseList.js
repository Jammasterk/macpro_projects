import React from "react"
import Expense from "./Expense"
import styled from "styled-components"

const Wrapper = styled.div`
  .item {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
    height: auto;
   margin: 0 auto;
   padding: 0;
   width: 100%
  }
  .line__items {
      /* margin-top: 350px; */
    margin:  460px auto 0 auto;
    width: 100vw;
    font-family: "Rajdhani", sans-serif;
    font-size: 20px;
    color: #dee1ec;
  }
`;

export default function ExpenseList(props){
  const {expenses} = props
    return (
      <Wrapper>
        <table className="line__items table-responsive">
          <tr>
            <th>Date</th>
            <th>Mortgage / Rent</th>
            <th>Utilities</th>
            <th>Groceries</th>
            <th>Car</th>
            <th>Entertainment</th>
            <th>Other</th>
          </tr>
        </table>
        {expenses &&
          expenses.map((expense) => (
            <div className="item">
              <Expense {...expense} key={expense._id} />
            </div>
          ))}
      </Wrapper>
    );
}