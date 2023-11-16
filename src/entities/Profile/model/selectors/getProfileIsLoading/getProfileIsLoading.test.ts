import { StateSchema } from "app/provider/StoreProvider"
import { getProfileIsLoading } from "./getProfileIsLoading"

describe('getProfileIsLoading..test', () => {
    test('should return data', () => {
    
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading: false
            }
        }
        expect(getProfileIsLoading(state as StateSchema)).toEqual(false)
    })
    test('should work with empty', () => {
        const state: DeepPartial<StateSchema> = {
        }
        expect(getProfileIsLoading(state as StateSchema)).toEqual(undefined)
    })
})