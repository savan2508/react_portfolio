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
  background: none;
  font-size: 28px;
  transition: all 0.4s;
  outline: none !important;
  line-height: 0;
  cursor: pointer;
  border-radius: 50px;
  padding: 5px;
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

  i {
    font-size: 20px;
  }

  span {
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

  &:hover,
  &.active,
  &:focus {
    color: #fff;
    background: #0563bb;
    width: auto;
  }

  &:hover span,
  &.active span,
  &:focus span {
    color: #fff;
  }

  &:hover,
  &:focus {
    color: #fff;
  }

  &:hover span,
  &:focus span {
    display: block;
  }
`;

export { StyledHeader, StyledMobileNavToggle, StyledNavLink };
