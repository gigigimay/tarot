import React from 'react'
import styled, { css } from 'styled-components'

const BORDER = '3px solid #eee'
const SHADOW = '0px 6px rgba(0,0,0,0.3)'

const frontStyle = css`
  > div {
    transform: rotateY(-180deg);
    box-shadow: -2px ${SHADOW};
  }
`

const Wrapper = styled.div`
  background-color: transparent;
  width: 140px;
  height: 240px;
  perspective: 1000px;
  cursor: pointer;
  margin: 16px;
  transition: transform .2s;
  :hover{
    transform: scale(1.05);
  }

  ${({ front }) => front && frontStyle};
`

const Outer = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 2px ${SHADOW};
  transform-style: preserve-3d;
  transition-property: transform, box-shadow;
  transition-duration: .5s;
  transition-timing-function: ease-in-out;

  &, > div {
    border-radius: 4px;
    width: 100%;
    height: 100%;
  }
`

const Inner = styled.div`
  background-color: #333;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  backface-visibility: hidden;
`

const Back = styled(Inner)`
  > div {
    width: 120px;
    height: 220px;
    border: ${BORDER};
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    ::after{
      content: '';
      width: 30px;
      height: 30px;
      border: ${BORDER};
      transform: rotateZ(45deg);
    }
  }
`

const reverseStyle = css`
  > div {
    transform: rotateZ(180deg);
  }
`

const Front = styled(Inner)`
  color: #eee;
  z-index: 1;
  padding: 16px;
  font-size: 30px;
  text-align: center;
  transform: rotateY(180deg);
  overflow: hidden;

  ${({ reverse }) => reverse && reverseStyle};
`

class Card extends React.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps !== this.props
  }

  render() {
    const {
      name = 'name',
      reverse,
    } = this.props
    console.log('CARD')
    return (
      <Wrapper {...this.props}>
        <Outer>
          <Front reverse={reverse}>
            <div>{name}</div>
          </Front>
          <Back><div /></Back>
        </Outer>
      </Wrapper>
    )
  }
}

export default Card
