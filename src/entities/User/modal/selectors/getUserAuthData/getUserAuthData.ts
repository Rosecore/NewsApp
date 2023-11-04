import { StateSchema } from "app/provider/StoreProvider";
import { useSelector } from "react-redux";


export const getUserAuthData = (state:StateSchema) => state?.user.authData