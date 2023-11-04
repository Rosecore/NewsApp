import { UserActions, UserReducer } from "./modal/slice/UserSlice";
import type { User } from "./modal/types/User";
import type { UserSchema } from "./modal/types/User";
import { getUserAuthData } from "./modal/selectors/getUserAuthData/getUserAuthData";
export {UserActions, UserReducer, User,UserSchema,getUserAuthData }