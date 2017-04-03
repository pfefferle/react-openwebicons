# react-openwebicons

> A React component for the OpenWebIcons webfont.

## Install

```bash
npm install --save react-openwebicons
```

## Usage

```JavaScript
//index.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import OpenWebIcon from 'react-openwebicons';

ReactDOM.render(<OpenWebIcon name="openwebicons-epub" size="248px" colored={true}/>, document.getElementById("app"));
ReactDOM.render(<OpenWebIcon name="openwebicons-epub" size="248px" colored="#990000"/>, document.getElementById("app2"));
ReactDOM.render(<OpenWebIcon name="openwebicons-epub" size="248px"/>, document.getElementById("app3"));
ReactDOM.render(<OpenWebIcon name="openwebicons-epub"/>, document.getElementById("app4"));
```
  
For more informations have a look at the example folder.

## How to develop

- npm/yarn install
- npm run build
- npm link
- cd example 
- npm/yarn install
- npm link "react-openwebicons"
- webpack
- open index.html in web browser

To change the icon, size or color adjust the values in the index.tsx in the example folder and run webpack again
