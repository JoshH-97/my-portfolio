import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import DarkModeToggle from "./DarkModeToggle";
import { FiMenu, FiX } from "react-icons/fi"; 

const NavContainer = styled.div`
  position: relative;
`;

const BurgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 2.4rem;
  color: var(--color-grey-800);

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavList = styled.ul<{ $open: boolean }>`
  display: flex;
  flex-direction: row;
  gap: 0.8rem;

  @media (max-width: 768px) {
    /* Mobile menu styling */
    position: absolute;
    top: 100%;
    right: 0;
    background-color: var(--color-grey-0);
    flex-direction: column;
    padding: 1rem;
    width: 200px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    border-radius: 8px;
    
    display: ${({ $open }) => ($open ? "flex" : "none")};
  }
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

function MainNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen((prev) => !prev);
  }

  return (
    <nav>
      <NavContainer>
        <BurgerButton onClick={toggleMenu}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </BurgerButton>

        <NavList $open={menuOpen}>
          <li>
            <StyledNavLink to="/home" onClick={() => setMenuOpen(false)}>
              <span>Home</span>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/education" onClick={() => setMenuOpen(false)}>
              <span>Education</span>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/work" onClick={() => setMenuOpen(false)}>
              <span>Work</span>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/contact" onClick={() => setMenuOpen(false)}>
              <span>Contact</span>
            </StyledNavLink>
          </li>
          <li>
            <DarkModeToggle />
          </li>
        </NavList>
      </NavContainer>
    </nav>
  );
}

export default MainNav;
