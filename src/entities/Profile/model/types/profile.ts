import { Country } from "entities/Country/model/types/Country";
import { Currency } from "entities/Currency/model/types/Currency";


export enum ProfileValidationErrors {
    INCORRECT_FIRST_NAME_OR_LAST_NAME = "INCORRECT_FIRST_NAME_OR_LAST_NAME",
    INCORRECT_AGE = "INCORRECT_AGE",
    INCORRECT_COUNTRY = "INCORRECT_COUNTRY",
    NO_DATA = "NO_DATA",
    SERV_ERR = "SERV_ERR"
}

export interface ProfileType{
    first?: string,
    lastname?: string,
    age?: number,
    currency?: Currency,
    country?: Country,
    city?: string,
    username?: string,
    avatar?: string
}

export interface ProfileSchema{
    data?:ProfileType,
    form?:ProfileType,
    isLoading: boolean,
    error?:string,
    readonly:boolean,
    validateError?:ProfileValidationErrors[]
}