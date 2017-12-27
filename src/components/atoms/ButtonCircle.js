import styled from 'styled-components';

export default styled.div`
  position: absolute;
  top: -30px;
  width: 60px;
  height: 60px;
  right: 60px;
  border-radius: 100%;
  box-sizing: border-box;
  background: #e91e63;
  outline: 0;
  transform-origin: 50%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
  transform: scale(${props => props.scale});
  cursor: ${props => props.scale==1?'pointer':'auto'};
  z-index: 2;
`
