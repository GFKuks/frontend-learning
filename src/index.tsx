import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./styles/main.css";

import { AppRouter } from "./router/AppRouter";
import { store } from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Provider store={store}>
        <AppRouter />
    </Provider>
);