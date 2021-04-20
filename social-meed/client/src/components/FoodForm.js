import React, {useState} from 'react'
import styled from "styled-components"

const initInputs = {
  recipe: "",
  ingredients: "",
  ingredientsOne: "",
  ingredientsTwo: "",
  ingredientsThree: "",
  ingredientsFour: "",
  ingredientsFive: "",
  ingredientsSix: "",
  ingredientsSeven: "",
  ingredientsEight: "",
  ingredientsNine: "",
  ingredientsTen: "",
  ingredientsEleven: "",
  directions: "",
  foodImg: ""
};

const Wrapper = styled.div`
  .form {
    text-align: center;
  }
  button {
    width: 35px;
    height: 35px;
    margin-left: 1em;
    font-size: 26px;
    border: none;
    background: transparent;
  }

  button:focus {
    outline: none;
  }

  .file{
    width: 240px
  }
  input {
    height: 25px;
    border: none;
    background: transparent;
    border-bottom: 1px solid grey;
    font-size: 18px;
    margin: .25em 0
  }
  input:focus {
    outline: none;
  }

  #input, #file-upload-button{
    width: 30px
  }
  textarea {
    width: 248px;
    height: 150px;
    resize: none;
  }
  .submit_btn {
    width: 250px;
    border: 1px solid black;
    margin-left: 0;
    margin-top: 0.5em;
  }
`;

export default function FoodForm(props) {
  const [inputs, setInputs] = useState(initInputs);
  const {addFood} = props

   const [add, setAdd] = React.useState(true);
   const [addTwo, setAddTwo] = React.useState(true);
   const [addThree, setAddThree] = React.useState(true);
   const [addFour, setAddFour] = React.useState(true);
   const [addFive, setAddFive] = React.useState(true);
   const [addSix, setAddSix] = React.useState(true);
   const [addSeven, setAddSeven] = React.useState(true);
   const [addEight, setAddEight] = React.useState(true);
   const [addNine, setAddNine] = React.useState(true);
   const [addTen, setAddTen] = React.useState(true);
   const [addEleven, setAddEleven] = React.useState(true);

     function addInput() {
       setAdd(!add);
     }
     function addInputTwo() {
       setAddTwo(!addTwo);
     }
     function addInputThree() {
       setAddThree(!addThree);
     }
     function addInputFour() {
       setAddFour(!addFour);
     }
     function addInputFive() {
       setAddFive(!addFive);
     }
     function addInputSix() {
       setAddSix(!addSix);
     }
     function addInputSeven() {
       setAddSeven(!addSeven);
     }
     function addInputEight() {
       setAddEight(!addEight);
     }
     function addInputNine() {
       setAddNine(!addNine);
     }
     function addInputTen() {
       setAddTen(!addTen);
     }
     function addInputEleven() {
       setAddEleven(!addEleven);
     }

     function handleChange(e) {
       const { name, value } = e.target;
       setInputs((prevInputs) => ({
         ...prevInputs,
         [name]: value,
       }));
     }

     function handleSubmit(e) {
       e.preventDefault();
       addFood(inputs);
       setInputs(initInputs);
     }

     const {recipe, ingredients, ingredientsOne, ingredientsTwo,
     ingredientsThree, ingredientsFour, ingredientsFive,
     ingredientsSix, ingredientsSeven, ingredientsEight, ingredientsNine, ingredientsTen, ingredientsEleven, directions, foodImg} = inputs

    return (
      <Wrapper>
        <form className="form" onSubmit={handleSubmit}>
          <h1>Create Food</h1>
          <input
            name="foodImg"
            value={foodImg}
            onChange={handleChange}
            className="file"
            type="file"
          />
          <input
            placeholder="Recipe name"
            name="recipe"
            value={recipe}
            onChange={handleChange}
            className="file"
            type="text"
          />
          <div className="input__field">
            <input
              type="text"
              placeholder="Indgredient 1"
              name="ingredients"
              value={ingredients}
              onChange={handleChange}
            />
            <button onClick={addInput}>+</button>
          </div>
          <div
            style={add ? { display: "none" } : { display: "block" }}
            className="input__field"
          >
            <input
              type="text"
              placeholder="Indgredient 2"
              name="ingredientsOne"
              value={ingredientsOne}
              onChange={handleChange}
            />
            <button onClick={addInputTwo}>+</button>
          </div>
          <div
            style={addTwo ? { display: "none" } : { display: "block" }}
            className="input__field"
          >
            <input
              type="text"
              placeholder="Indgredient 3"
              name="ingredientsTwo"
              value={ingredientsTwo}
              onChange={handleChange}
            />
            <button onClick={addInputThree}>+</button>
          </div>
          <div
            style={addThree ? { display: "none" } : { display: "block" }}
            className="input__field"
          >
            <input
              type="text"
              placeholder="Indegredient 4"
              name="ingredientsThree"
              value={ingredientsThree}
              onChange={handleChange}
            />
            <button onClick={addInputFour}>+</button>
          </div>
          <div
            style={addFour ? { display: "none" } : { display: "block" }}
            className="input__field"
          >
            <input
              type="text"
              placeholder="Indegredient 5"
              name="ingredientsFour"
              value={ingredientsFour}
              onChange={handleChange}
            />
            <button onClick={addInputFive}>+</button>
          </div>
          <div
            style={addFive ? { display: "none" } : { display: "block" }}
            className="input__field"
          >
            <input
              type="text"
              placeholder="Indegredient 6"
              name="ingredientsFive"
              value={ingredientsFive}
              onChange={handleChange}
            />
            <button onClick={addInputSix}>+</button>
          </div>
          <div
            style={addSix ? { display: "none" } : { display: "block" }}
            className="input__field"
          >
            <input
              type="text"
              placeholder="Indegredient 7"
              name="ingredientsTen"
              value={ingredientsTen}
              onChange={handleChange}
            />
            <button onClick={addInputSeven}>+</button>
          </div>
          <div
            style={addSeven ? { display: "none" } : { display: "block" }}
            className="input__field"
          >
            <input
              type="text"
              placeholder="Indegredient 8"
              name="ingredientsEight"
              value={ingredientsEight}
              onChange={handleChange}
            />
            <button onClick={addInputEight}>+</button>
          </div>
          <div
            style={addEight ? { display: "none" } : { display: "block" }}
            className="input__field"
          >
            <input
              type="text"
              placeholder="Indegredient 9"
              name="ingredientsNine"
              value={ingredientsNine}
              onChange={handleChange}
            />
            <button onClick={addInputNine}>+</button>
          </div>
          <div
            style={addNine ? { display: "none" } : { display: "block" }}
            className="input__field"
          >
            <input
              type="text"
              placeholder="Indegredient 10"
              name="ingredientsSeven"
              value={ingredientsSeven}
              onChange={handleChange}
            />
            <button onClick={addInputTen}>+</button>
          </div>
          <div
            style={addNine ? { display: "none" } : { display: "block" }}
            className="input__field"
          >
            <input
              type="text"
              placeholder="Indegredient 11"
              name="ingredientsSix"
              value={ingredientsSix}
              onChange={handleChange}
            />
            <button onClick={addInputEleven}>+</button>
          </div>
          <div
            style={addEleven ? { display: "none" } : { display: "block" }}
            className="input__field"
          >
            <input
              type="text"
              placeholder="Indegredient 12"
              name="ingredientsEleven"
              value={ingredientsEleven}
              onChange={handleChange}
            />
          </div>
          <textarea
            placeholder="Directions"
            name="directions"
            value={directions}
            onChange={handleChange}
          />
          <br />
          <button type="submit" className="submit_btn">
            Add Recipe
          </button>
        </form>
      </Wrapper>
    );
}
