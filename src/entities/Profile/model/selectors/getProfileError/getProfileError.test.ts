import { StateSchema } from "app/provider/StoreProvider"
import { getProfileError } from "./getProfileError"

describe('getProfileError.test', () => {
    test('should return data', () => {
    
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: "error"
            }
        }
        expect(getProfileError(state as StateSchema)).toEqual("error")
    })
    test('should work with empty', () => {
        const state: DeepPartial<StateSchema> = {
        }
        expect(getProfileError(state as StateSchema)).toEqual(undefined)
    })
})