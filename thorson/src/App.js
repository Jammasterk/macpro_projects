import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
    h1{
        color: red;
        font-family: "Arial"
    }
`
export default function App(){
    return(
        <Wrapper>
            <div>
                <h1>Hello React</h1>
                <p>This is what Ive been waiting for</p>
                <table>
                    <th>
                        <td>Sunday</td>
                        <td>Monday</td>
                        <td>Tuesday</td>
                        <td>Wednesday</td>
                        <td>Thursday</td>
                        <td>Friday</td>
                        <td>Saturday</td>
                    </th>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                        <td>8</td>
                        <td>9</td>
                        <td>10</td>
                        <td>11</td>
                    </tr>
                </table>
            </div>
        </Wrapper>
    )
}