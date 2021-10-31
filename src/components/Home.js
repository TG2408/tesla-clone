import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
    return (
        <Container>
            <Section 
              id = "modelS"
              title = "Model S"
              description = "Order Online for Touchless Delivery"
              backgroundImg = "model-s.jpg"
              leftBtnTxt = "Custom Order"
              rightBtnTxt = "Existing Inventory"
              next = "modelY"
            />
            <Section 
              id = "modelY"
              title = "Model Y"
              description = "Order Online for Touchless Delivery"
              backgroundImg = "model-y.jpg"
              leftBtnTxt = "Custom Order"
              rightBtnTxt = "Existing Inventory"
              next = "model3"
            />
            <Section
              id = "model3"
              title = "Model 3"
              description = "Order Online for Touchless Delivery"
              backgroundImg = "model-3.jpg"
              leftBtnTxt = "Custom Order"
              rightBtnTxt = "Existing Inventory"
              next = "modelX"
            />
            <Section
              id = "modelX"
              title = "Model X"
              description = "Order Online for Touchless Delivery"
              backgroundImg = "model-x.jpg"
              leftBtnTxt = "Custom Order"
              rightBtnTxt = "Existing Inventory"
              next = "solarPanel"
            />
            <Section
              id = "solarPanel"
              title = "Solar Panels"
              description = "Lowest Cost Solar Panels in America"
              backgroundImg = "solar-panel.jpg"
              leftBtnTxt = "Order Now"
              rightBtnTxt = "Learn More"
              next = "solarRoof"
            />
            <Section
              id = "solarRoof"
              title = "Solar Roof"
              description = "Produce Clean Energy From Your Roof"
              backgroundImg = "solar-roof.jpg"
              leftBtnTxt = "Order Now"
              rightBtnTxt = "Learn More"
              next = "accessories"
            />
            <Section
              id = "accessories"
              title = "Accessories"
              backgroundImg = "accessories.jpg"
              leftBtnTxt = "Shop Now"
              next = "modelS"
            />
        </Container>
    )
}

export default Home;

const Container = styled.div`
    height: 100vh;
`