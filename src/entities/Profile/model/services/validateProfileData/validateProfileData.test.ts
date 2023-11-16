import { validateProfileData } from './validateProfileData';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileValidationErrors } from '../../types/profile';
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
describe('validateProfileData.test', () => {

    test('complete validations', async () => {

        const result = validateProfileData(data);
        expect(result).toEqual([])

    });

    test('first name isnt valid', async () => {

        const result = validateProfileData({ ...data, first: '' })
        expect(result).toEqual([ProfileValidationErrors.INCORRECT_FIRST_NAME_OR_LAST_NAME])

    });

    test('age isnt valid', async () => {

        const result = validateProfileData({ ...data, age: 36.5 })
        expect(result).toEqual([ProfileValidationErrors.INCORRECT_AGE])

    });

    test('country isnt valid', async () => {

        const result = validateProfileData({ ...data, country: undefined })
        expect(result).toEqual([ProfileValidationErrors.INCORRECT_COUNTRY])

    });

    test('everything isnt valid', async () => {

        const result = validateProfileData({})
        expect(result).toEqual([
            ProfileValidationErrors.INCORRECT_AGE,
            ProfileValidationErrors.INCORRECT_FIRST_NAME_OR_LAST_NAME,
            ProfileValidationErrors.INCORRECT_COUNTRY
        ])

    });
});
