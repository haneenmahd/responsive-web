# QUERIES 
### A Simple npm package for using responsive media screen sizes in your web app.
# Now a Easier way to use media queries in your Web App.
 - Easy to use
 - Media screen sizes are completely made accurate for devices
 - Make your website Responsive to all devices

# Installation
### Using npm
```
npm install queries
```
### Using yarn
```
yarn add queries
```
# How to Use
NOTE: This can be only done using ``styled components``.
## React App
### Example
```
import React from "react";
import styled from "styled-components";
import { Colors } from "apple-colors";
import QUERIES from "queries";

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

const MyDeviceQuery = () => (
    <Wrapper>
     <Header>Hello World</Header> 
     <Paragraph>
     I am using queries to make my website responsive.
     </Paragraph>
    </Wrapper>
)
```

## Vue App
You need to install ``vue-styled-components``
```
<template>
 <Wrapper>
   <Header>
    Hello Responsive Website
   </Header>
 </Wrapper>
</template>
<script>
import styled from "vue-styled-components";

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

export default {
    ...name,
    components: {
        Wrapper,
        Header
    }
}
</script>
```