import { StateSchema } from "app/provider/StoreProvider"
import { getProfileReadonly } from "./getProfileReadonly"

describe('getProfileReadonly.test', () => {
    test('should return data', () => {
    
        const state: DeepPartial<StateSchema> = {
            profile: {
                readonly:true
            }
        }
        expect(getProfileReadonly(state as StateSchema)).toEqual(true)
    })
    test('should work with empty', () => {
        const state: DeepPartial<StateSchema> = {
        }
        expect(getProfileReadonly(state as StateSchema)).toEqual(false)
    })
})