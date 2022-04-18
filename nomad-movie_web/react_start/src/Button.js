import PropTypes from "prop-types"
import styled from 'styled-components'

const Wrapper = styled.div `
  .Btn {
    background-color: skyblue;
    border: none;
    padding: 10px 20px;
    color: white;
    font-size: 1.5rem;
    border-radius: 10px;
  }
`

function Button({text}) {
  return (
    <Wrapper>
      <button className="Btn">{text}</button>
    </Wrapper>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Button;