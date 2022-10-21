# mobile-drop-down-npm-pkg

## Installation

```
npm i @n0tadm1n/mobile-drop-down-menu --save
```

## Usage

```js
import mobileMenu from "../package/index.js";

//mobilemenu take 2 arguements - menu title and an array of object
//each object have 2 key-value pair - name(name to display on menu) and link(link to actual content)
mobileMenu("Menu", [
  {
    name: "Hi",
    link: "#Section-1",
  },
  {
    name: "Hello",
    link: "#Section-2",
  },
  {
    name: "konichiwa",
    link: "#Section-3",
  },
  {
    name: "N0tAdm1n",
    link: "https://github.com/N0tAdm1n/drop-down-npm-package/blob/main/index.js",
  },
]);
```
