import { ProfileActions, ProfileReducer } from "./model/slice/ProfileSlice";
import { ProfileType, ProfileSchema } from "./model/types/profile";
import { FetchProfileData } from "./model/services/fetchProfileData/fetchProfileData";
import { getProfileData } from "./model/selectors/getProfileData/getProfileData";
import { getProfileError } from "./model/selectors/getProfileError/getProfileError";
import { getProfileIsLoading } from "./model/selectors/getProfileIsLoading/getProfileIsLoading";
import ProfileCard from "./ui/ProfileCard/ProfileCard";

export { ProfileType, ProfileSchema, ProfileReducer, ProfileActions, FetchProfileData, getProfileData,getProfileError,getProfileIsLoading,ProfileCard}