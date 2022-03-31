import { createStore } from "redux";
import reducer from "./reducer/reducers";

const Store = createStore(reducer);

export default Store;
