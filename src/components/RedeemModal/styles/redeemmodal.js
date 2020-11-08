import styled from 'styled-components/macro'


export const RedeemModalStyled = styled.div`
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  .modal-content {
    background-color: #fefefe;
    position: relative;
    text-align: center;
    border-radius: 20px;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    max-width: 400px;
}
.close {
    position: absolute;
    top: 3%;
    right:3%;
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}
.buttons-container{
    width: 100%;
    display: inline-flex;
    justify-content: space-around;
}
& h4{
    margin-top: 25px;
    margin-bottom: 0px;
}
& h5{
    width: 20%;
    background: #25BBF1;
    padding: 10px;
    border-radius: 25px;
}
& h5:hover{
    cursor: pointer;
    box-shadow: 0px 1px 3px 0px #000000;
}
.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
`