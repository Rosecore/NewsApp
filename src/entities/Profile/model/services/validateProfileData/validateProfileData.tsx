import { ProfileType, ProfileValidationErrors } from "../../types/profile";

export const validateProfileData = (profile?: ProfileType) =>{
    if (!profile){
        return [ProfileValidationErrors.NO_DATA]
    }
    const {age, first, lastname, country} = profile
    const error: ProfileValidationErrors[] = []
    if (!age || !Number.isInteger(age)){
       
        error.push(ProfileValidationErrors.INCORRECT_AGE)
    }
    if (!lastname || !first){
        error.push(ProfileValidationErrors.INCORRECT_FIRST_NAME_OR_LAST_NAME)
    }
    if (!country){
        error.push(ProfileValidationErrors.INCORRECT_COUNTRY)
    }
    return error
}
