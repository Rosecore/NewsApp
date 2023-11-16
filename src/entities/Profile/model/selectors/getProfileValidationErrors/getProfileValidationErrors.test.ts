import { StateSchema } from "app/provider/StoreProvider"
import { getProfileValidationErrors } from "./getProfileValidationErrors"
import { ProfileValidationErrors } from "../../types/profile"

describe('getProfileValidationErrors.test', () => {
    test('should return data', () => {
        const validateError = [ProfileValidationErrors.INCORRECT_FIRST_NAME_OR_LAST_NAME]
    
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateError:validateError
            }
        }
        expect(getProfileValidationErrors(state as StateSchema)).toEqual(validateError)
    })
    test('should work with empty', () => {
        const state: DeepPartial<StateSchema> = {
        }
        expect(getProfileValidationErrors(state as StateSchema)).toEqual([])
    })
})