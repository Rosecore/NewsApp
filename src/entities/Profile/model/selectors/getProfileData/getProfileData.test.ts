import { StateSchema } from "app/provider/StoreProvider"
import { getProfileData } from "./getProfileData"
import { Country } from "entities/Country"
import { Currency } from "entities/Currency"

describe('getProfileData.test', () => {
    test('should return data', () => {
        const data = {
            first: "Masha",
            lastname: "Reynsvortdfsdf",
            age: 223,
            currency: Currency.DIN,
            country: Country.SR,
            city: "Beograde",
            username: "admin",
            avatar: "https://ru.myanimeshelf.com/upload/dynamic/2011-04/05/sbddb2.jpg"
        }
        const state: DeepPartial<StateSchema> = {
            profile: {
                data: data
            }
        }
        expect(getProfileData(state as StateSchema)).toEqual(data)
    })
    test('should work with empty', () => {
        const state: DeepPartial<StateSchema> = {
        }
        expect(getProfileData(state as StateSchema)).toEqual(undefined)
    })
})