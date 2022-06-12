import React from 'react'
import styled from "styled-components"
import Section from './Section'


function Home() {
    return (
        <Container>
            <Section
             title= "Model S"
             id= "Model S"
             description="Order Online for Touchless Delivery"
             backgroundImg="model-s.jpg"
             leftBtnText="Custom order"
             rightBtnText="Existing inventory"
              />
            <Section 
             title= "Model Y"
             id="Model Y"
             description="Order Online for Touchless Delivery"
             backgroundImg="model-y.jpg"
             leftBtnText="Custom order"
             rightBtnText="Existing inventory"
            />
            <Section
              title= "Model 3"
              id="Model 3"
              description="Order Online for Touchless Delivery"
              backgroundImg="model-3.jpg"
              leftBtnText="Custom order"
              rightBtnText="Existing inventory"
            />
            <Section
                id="Model X"
                title= "Model X"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-x.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />

           <Section
                id= "solar"
                title= "Lowest Cost Solar Panels in America"
                description="Money-back guarantee"
                backgroundImg="solar-panel.jpg"
                leftBtnText="Order now"
                rightBtnText="Learn more"
            />  

            <Section
                id="roofs"
                title= "Solar for New Roofs"
                description="Solar Roof Cost Less Than a New Roof Plus Solar Panels"
                backgroundImg="solar-roof.jpg"
                leftBtnText="Order now"
                rightBtnText="Learn more"
            />  

            
           <Section
                id="Accessories"
                title= "Accessories"
                backgroundImg="accessories.jpg"
                leftBtnText="Shop now"
            />  
        </Container>
    )
}

export default Home

const Container = styled.div`
   height: 100vh;
`
