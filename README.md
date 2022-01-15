# @haneenmahd/responsive-web 
A Simple npm package for using responsive media screen sizes in your web app.

![Node.js Package](https://github.com/haneenmahd/responsive-web/workflows/Node.js%20Package/badge.svg)
![Node.js CI](https://github.com/haneenmahd/responsive-web/workflows/Node.js%20CI/badge.svg)

## Now a Easier way to use media queries in your 
 - Easy to use
 - Media screen sizes are completely made accurate for devices
 - Make your website Responsive to all devices

# Installation
### Using npm
```
npm install @haneenmahd/responsive-web
```
### Using yarn
```
yarn add @haneenmahd/responsive-web
```
# How to Use
Example:
```jsx
import React from "react";
import styled from "styled-components";
import { Colors } from "apple-colors";
import QUERIES, { getWindowHeight, getWindowWidth, getWindowScrollPosX, getWindowScrollPosY, useScrollBy, useScrollTo } from "responsive-web";

const Wrapper = styled.div`
  height: 300px;
  width: 300px;
  padding: 1.5rem 2rem;
  border-radius: 1rem;
  background: ${Colors.iOS.Light.Grey1};
  @media screen and (${QUERIES.MOBILE}) {
      background: ${Colors.iOS.Light.Grey1};

  }
`;
const Header = styled.h1`
  font-size: 25px;
  color: #fff;
  @media screen and (${QUERIES.MOBILE}) {
      font-size: 18px;
  }
`;
const Paragraph = styled.p`
  font-size: 18px;
  color: #fff;
  @media screen and (${QUERIES.MOBILE}) {
      font-size: 14px;
  }
`;

const MyDeviceQuery = () => {
  const windowWidth = getWindowWidth();
  const windowHeight = getWindowHeight();
  const windowScrollPos = getWindowScrollPos();
  return (
    <Wrapper>
     <Header>Hello World</Header>
     {windowWidth > 550 && <p>Hello! Window width greater than 550px</p>} 
     {windowHeight > 500 && <p>Hello! Window height greater than 500px</p>}
     <p>Scroll amount x: {getWindowScrollX()}</p>
     <p>Scroll amount y: {getWindowScrollY()}</p>
     <Paragraph>
     I am using queries to make my website responsive.
     </Paragraph>
     <button onclick={useScrollBy(20, 50)}>Scroll by</button>
     <button onclick={useScrollTo(0, 50)}>Scroll To</button>
    </Wrapper>
  );
}
```


## Available Sizes
### Default:
- MOBILE
- TABLET
- LAPTOP 
- DESKTOP 
- TV
### You could Access these properties by: `QUERIES.OBJECTDEFINEDABOVE`

## Cusom Device Sizes
## IOS: 
- FOUR (iPhone 4 Models)   
   - LANDSCAPE
   - PORTRAIT
- FIVE (iPhone 5 to 7 Models)
   - LANDSCAPE
   - PORTRAIT
- EIGHT (iPhone 8 Models, excluding plus models)
   - LANDSCAPE
   - PORTRAIT
- PLUS (iPhone 7 and 8 PLUS)
   - LANDSCAPE
   - PORTRAIT
- X (iPhone X Models)
   - LANDSCAPE
   - PORTRAIT

## SAMSUNG:
- S3 (Also contains Note4 and Note5 Models Too.)
  - LANDSCAPE
  - PORTRAIT
- NOTE3
  - LANDSCAPE
  - PORTRAIT
- S6
  - LANDSCAPE
  - PORTRAIT

## TABLETS:
- IPAD 
  - MINI (This contains iPad 1, 2, Mini and Air too.)
    - LANDSCAPE
    - PORTRAIT
  - IPAD4 (This contains iPad 3, 4 and iPad Pro 9.5" Models too.)
    - PORTRAIT
    - LANDSCAPE
  - PRO10
    - LANDSCAPE
    - PORTRAIT
  - PRO12
    - PORTRAIT
    - LANDSCAPE


## LAPTOPS
- NONRETINA (Devices which have non-retina display)
- RETINA (Devices Which have Retina display)

# Developer
## Haneen Mahdin

Follow me on:
- [Instagram](https://instagram.com/haneenmahdin)
- [GitHub](https://github.com/haneenmahd)
# License
### `responsive-web` is licensed under MIT.
