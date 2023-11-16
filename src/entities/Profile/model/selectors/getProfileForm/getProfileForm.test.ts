import { StateSchema } from "app/provider/StoreProvider"
import { getProfileForm } from "./getProfileForm"
import { Country } from "entities/Country"
import { Currency } from "entities/Currency"

describe('getProfileForm.test', () => {
    test('should return data', () => {
        const form = {
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
                form: form
            }
        }
        expect(getProfileForm(state as StateSchema)).toEqual(form)
    })
    test('should work with empty', () => {
        const state: DeepPartial<StateSchema> = {
        }
        expect(getProfileForm(state as StateSchema)).toEqual(undefined)
    })
})