import deshi from "//unpkg.com/deshijs";
deshi.init();
import "./assets/styles.css";
import Button from "./components/button.js";

const App = () => {
  return /*html*/ `
    <template app>
    <a href="http://deshijs.xyz/" target="_blank">
      <img src="{imgUrl}" class="logo" alt="Vite logo" />
    </a>
    <h1>Hello DeshiJs!</h1>
    <div class="card">
      <btn @click="{incrementCounter()}"></btn>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
    </template>
  `;
};

signal = {
  counter: 0,
  imgUrl: "https://i.postimg.cc/c1V6WcHY/deshi-Logo.png",
  incrementCounter: function () {
    this.counter++;
  },
};

useComponent("btn", Button);
export default App;
