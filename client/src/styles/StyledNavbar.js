import styled from 'styled-components/macro';

const StyledNavbar = styled.div`
  height: 45px;
  width: 100%;
  background-color: #c2ebd9;
  position: fixed;
  z-index: 1;
  .sideBarItems {
    align-items: baseline;
    padding: 8px 16px;
    text-align: right;
    border: none;
    white-space: normal;
    float: right;
    outline: 0;
   }
`;

export default StyledNavbar;