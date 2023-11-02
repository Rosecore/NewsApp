import { StateSchema } from "app/provider/StoreProvider";
import { useSelector } from "react-redux";

export const getCounter = (state:StateSchema) => state.counter