import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileSchema } from '../types/profile';
import { ProfileReducer, ProfileActions } from './ProfileSlice';

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

const newData = {...data, username:"adminka"}

describe('ProfileSlice.test', () => {
    test('test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(ProfileReducer(
            state as ProfileSchema,
            ProfileActions.setReadonly(true),
        )).toEqual({ readonly: true });
    });

    test('test set not readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(ProfileReducer(
            state as ProfileSchema,
            ProfileActions.setNotReadonly(),
        )).toEqual({ readonly:true });
    });

    test('test update profile', () => {
        const state: DeepPartial<ProfileSchema> = {data}
        expect(ProfileReducer(
            state as ProfileSchema,
            ProfileActions.updateProfile(newData),
        )).toEqual(newData);
    });
});
