import React, {useState} from 'react'
import styled from "styled-components"
import Comment from "./Comment"

const Wrapper = styled.div`
  .container {
    width: 90%;
    margin: 0 auto;
  }

  img {
    width: 100%;
    height: 250px;
  }
  .like__con {
    display: flex;
    justify-content: space-around;
    width: 15%;
  }
  .icons {
    margin-top: 1.2em;
  }
  .liked {
    color: #cb3b3b;
  }
  small,
  p {
    font-family: "Lato", sans-serif;
    font-weight: 100;
  }

  li {
    font-family: "Lato", sans-serif;
    font-weight: 100;
  }
  ul {
    list-style: none;
  }
  .counter {
    font-family: "Lato", sans-serif;
  }
  small {
    cursor: pointer;
  }
`;

export default function Feed() {

    const [like, setLike] = useState(false)
    const [view, setView] = useState(false)
    const [count, setCount] = useState(0)

    function likes(){
        setLike(!like)
    }

    function likeCount(){
        setCount(count + 1)
        
    } 

   

    function textView(){
        setView(!view)
    }

    return (
      <Wrapper>
        <div className="container">
          <div className="image">
            <img
              src="https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
            <div className="like__con">
              <div
                className="liker"
                onClick={() => {
                  likes();
                  likeCount();
                }}
                className="icons"
              >
                {like ? (
                  <i className="fas fa-heart liked"></i>
                ) : (
                  <i className="far fa-heart"></i>
                )}
              </div>
              <p className="counter">{count}</p>
            </div>
          </div>
          <div className="text">
              <p>Gourmet Double Bacon Cheeseburger</p>
          </div>
          <div className="show__more" onClick={textView}>
            <small>{view ? "Hide" : "Show"} recipe</small>
          </div>
          <div className="info" style={view  ? {display: "block"} : {display: "none"}}>
            <ul>
              <li>1 cup of sugar</li>
              <li>2 large eggs</li>
              <li>1 cup brown sugar</li>
              <li>1 tsp vanilla extract</li>
              <li>1/4 tsp baking soda</li>
              <li>1/4 cup baking powder</li>
              <li>1 Cup peanut butter</li>
              <li>2 cups flour</li>
            </ul>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Libero sunt aut cumque minus molestiae facilis consequatur 
                possimus voluptate nulla quae.
            </p>
            <Comment />
          </div>
        </div>
      </Wrapper>
    );
}
