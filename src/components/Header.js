import React, {useState} from "react";
import styled from "styled-components";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

function Header() {

    const [menuState, setMenuStata] = useState(true);
    const cars = useSelector(selectCars);

    return (
        <Container>
          <a>
            <img src="/images/logo.svg" alt="" />  
          </a>
          <Menu>
            {cars && cars.map((car, index) => (
              <a key={index} href="#">{car}</a>
            ))}
          </Menu>
          <RightMenu>
            <a href="#">Shop</a>
            <a href="#">Account</a>
            <a href="#" onClick={() => {setMenuStata(!menuState)} }>Menu</a>
          </RightMenu>
          <MenuNav show={menuState}>
            <Close  onClick={() => {setMenuStata(!menuState)} } ><p>Close Menu</p></Close>
            {cars && cars.map((car, index) => (
              <li><a key={index} href="#">{car}</a></li>
            ))}
            <li><a href="#">Tesla Clone</a></li>
            <li><a href="#">Existing Inventory</a></li>
            <li><a href="#">Used Inventory</a></li>
            <li><a href="#">Trade-In</a></li>
            <li><a href="#">Cybertruck</a></li>
            <li><a href="#">Test Drive</a></li>
            <li><a href="#">Roadster</a></li>
            <li><a href="#">Charging</a></li>
            <li><a href="#">Semi</a></li>
            <li><a href="#">Powerwall</a></li>
            <li><a href="#">Commercial Activites</a></li>
            <li><a href="#">Utilities</a></li>
            <li><a href="#">Find Us</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Investor Relation</a></li>
          </MenuNav>
        </Container>
    )
}

export default Header;

const Container = styled.div `
  min-height: 60px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
  
`

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    margin-right: 10px;
    flex-wrap: nowrap;
  }
`

const MenuNav = styled.div`
  
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 100;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props => props.show ? 'translateX(100%)':'translateX(0)'};
  overflow-y: auto;
  transition: transform 0.2s ease-in;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0,0,0,0.2);
    font-weight: 600;
  }
` 

const Close = styled.li`
  text-align: end;
  display: inline-block;
  p {
    cursor: pointer;
    padding: 5px 10px;
  }
`