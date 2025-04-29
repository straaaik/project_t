import { Country } from 'entitis/Country/model/types/Country';
import { Currency } from 'entitis/Currency/model/types/Currency';

export interface Profile {
    first?: string;
    lastname?: string;
    age?: string;
    currency?: Currency;
    country?: Country;
    city?: string;
    username?: string;
    avatar?: string;
}

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
}
