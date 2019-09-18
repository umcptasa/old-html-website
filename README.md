The official UMCP TASA Website 2.0
Designed by Owen Luo

# React
React is a framework for making user interfaces. You can find the docs at https://reactjs.org/
We're also using [JSX](https://reactjs.org/docs/introducing-jsx.html) which is a syntax extension for JavaScript. Our JSX src files lie in our src folder and have to be compiled into JavaScript that the browser can use. There are two methods to do this:
1. Run ```npx babel --watch src --out-dir assets/components --presets react-app/prod``` which creates a watcher for any edits in the `src` file and compiles them into JS files in `assests/components`
2. There's another way if you don't want to create a watcher. I'll find it eventually and put it here.

## Flow
Flow is a static type-checker for JavaScript. You can find the docs at https://flow.org/en/

To start flow run:
```npm run flow```