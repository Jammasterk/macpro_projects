import React, {useState} from 'react'
import styled from "styled-components"


const Wrapper = styled.div`
  .container {
    width: 100%;
    min-height: 100%;
    background: #36454f;
    position: absolute;
  }
  .inner-container {
    width: 90%;
    height: 340px;
    border-radius: 5px;
    background: #36454f;
    box-shadow: 20px 20px 60px #2e3b43, -20px -20px 60px #3e4f5b;
    margin: 5% auto;
    display: grid;
    position: relative;
    z-index: 9
  }
  .date {
    color: #dee1ec;
  }
  table {
    /* margin-top:1.5em; */
    margin: 1.5em auto;
    width: 90%;
    font-family: "Rajdhani", sans-serif;
    font-size: 20px;
    color: #dee1ec;
  }
  td {
    text-align: center;
  }
  th {
    padding-bottom: 1em;
  }
  input {
    background: transparent;
    border: none;
    border-bottom: 1px solid #dee1ec;
    padding-left: 0.5em;
    color: #dee1ec;
  }
  input:focus {
    border: none;
    outline: none;
  }
  button {
    width: 250px;
    height: 50px;
    font-size: 24px;
    color: #dee1ec;
    margin-top: 1.5em;
    border: none;
    background: #36454f;
    box-shadow: 20px 20px 60px #2e3b43, -20px -20px 60px #3e4f5b;
    border-radius: 10px;
    margin-left: 25px
  }
  button:focus {
    outline: none;
  }
`;

const initInputs = {
  date: "",
  mortgage: "",
  utilities:"",
  groceries:"",
  car:"",
  entertainment:"",
  other:"",
  memo:""

}
export default function ExpenseForm(props) {


     const [inputs, setInputs] = useState(initInputs);
     const {addExpense} = props

     function handleChange(e) {
       const { name, value } = e.target;
       setInputs((prevInputs) => ({
         ...prevInputs,
         [name]: value,
       }));
     }

     function handleSubmit(e) {
       e.preventDefault();
       addExpense(inputs)
       setInputs(initInputs)
     }

    const {date, mortgage, utilities, car, groceries, entertainment, other, memo} = inputs

    return (
      <Wrapper>
        <div className="container">
          <form className="inner-container" onSubmit={handleSubmit}>
            <table>
              <tr>
                <th>Date</th>
                <th>Rent/Mortgage</th>
                <th>Utilities</th>
                <th>Groceries</th>
                <th>Car Expenses</th>
                <th>Entertainment</th>
                <th>Other</th>
              </tr>
              </table>
              <table>
              <tr>
                <td>
                  <input className='date' type="date" name="date" value={date} onChange={handleChange}/>
                </td>
                <td>
                  $<input type="text" name="mortgage" value={mortgage} onChange={handleChange}/>
                </td>
                <td>
                  $<input type="text" name="utilities" value={utilities} onChange={handleChange}/>
                </td>
                <td>
                  $<input type="text" name="groceries" value={groceries} onChange={handleChange}/>
                </td>
                <td>
                  $<input type="text" name="car" value={car} onChange={handleChange}/>
                </td>
                <td>
                  $<input type="text" name="entertainment" value={entertainment} onChange={handleChange}/>
                </td>
                <td>
                  $<input type="text" name="other" value={other} onChange={handleChange}/>
                </td>
              </tr>
            </table>
            <button>Submit</button>
          </form>
        </div>
      </Wrapper>
    );
}
