import styled from "styled-components";

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 9997;
  transition: all 0.5s;
  padding: 15px;
  overflow-y: auto;
  display: flex;
  align-items: center; /* Vertical centering */

  @media (max-width: 991px) {
    width: 300px;
    background: #fff;
    border-right: 1px solid #e6e9ec;
    left: -300px;
  }

  @media (min-width: 991px) {
    #main {
      margin-left: 100px;
    }
  }
`;

const StyledMobileNavToggle = styled.i`
  position: fixed;
  right: 10px;
  top: 10px;
  z-index: 9998;
  border: 0;
  font-size: 28px;
  transition: all 0.4s;
  outline: none !important;
  line-height: 0;
  cursor: pointer;
  border-radius: 50px;
  padding: 5px;
  color: ${(props) => (props.mobileNavActive ? "#fff" : "#45505b")};
  background: ${(props) => (props.mobileNavActive ? "#0563bb" : "none")} none;
`;

const StyledNavLink = styled.a`
  display: flex;
  align-items: center;
  color: #45505b;
  padding: 10px 18px;
  margin-bottom: 8px;
  transition: 0.3s;
  font-size: 15px;
  border-radius: 50px;
  background: #f2f3f5;
  height: 56px;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;

  i {
    font-size: 20px;
    transition: all 0.3s;
  }

  span,
  :focus span {
    padding: 0 5px 0 7px;
    color: #45505b;
  }

  @media (min-width: 992px) {
    width: 56px;

    span {
      display: none;
      color: #fff;
    }
  }

  &:hover {
    color: #fff;
    background: #0563bb;
    width: 100%;

    i {
      font-size: 24px;
    }
  }

  &.active {
    color: #fff;
    background: #0563bb;

    i {
      font-size: 24px;
    }
  }

  &:hover span {
    display: block;
  }
`;

export { StyledHeader, StyledMobileNavToggle, StyledNavLink };
