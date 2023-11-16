import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss'
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { ProfileType } from 'entities/Profile/model/types/profile';
import { Loader } from 'shared/ui/Loader/Loader';
import Avatar from 'shared/ui/Avatar/Avatar';
import Select from 'shared/ui/Select/Select';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country } from "entities/Country/model/types/Country";
import { CountrySelect } from 'entities/Country';

interface ProfileCardProps{
    className?: string,
    data?: ProfileType,
    isLoading?:boolean,
    error?:string,
    readonly?:boolean,
    onChangeFirstName?: (value:string)=>void,
    onChangeLastName?: (value:string)=>void,
    onChangeCity?: (value:string)=>void,
    onChangeCurrency: (value:Currency)=>void,
    onChangeCountry: (value:Country)=>void,
    onChangeAge?: (value:string)=>void
    onChangeUsername?: (value:string)=>void
    onChangeAvatar?: (value:string)=>void
}

const ProfileCard = (props:ProfileCardProps) => {

    const {className, data, isLoading, error,readonly,
        onChangeFirstName, onChangeLastName, onChangeCity, onChangeAge,
        onChangeUsername, onChangeAvatar, onChangeCurrency, onChangeCountry} = props
    if (isLoading){
        return(
            <div className={classNames(cls.ProfileCard,{[cls.loading]:true},[className])}>
                <Loader/>
            </div>
        )
    }
    if (error){
        return(
            <div className={classNames(cls.ProfileCard,{},[className, cls.error])}>
                <Text text={error}  theme = {TextTheme.ERROR}/>
            </div>
        )
    }
    return (
        <div className={classNames(cls.ProfileCard,{},[className])}>
            <div>
                {data?.avatar && <div className={cls.AvatarWrapper}><Avatar src={data.avatar}/></div>}
                <Input placeholder = 'Имечко' value = {data?.first} type='text' className={cls.inputRO} onChange={onChangeFirstName}readonly ={readonly}/>
                <Input placeholder = 'Городок' value = {data?.city} type='text' className={cls.inputRO} onChange={onChangeCity} readonly  ={readonly}/>
                <Input placeholder = 'Возрастик' value = {data?.age} type='text' className={cls.inputRO} onChange={onChangeAge} readonly  ={readonly}/>
                <Input placeholder = 'Фамилия' value = {data?.lastname} type='text' className={cls.inputRO} onChange={onChangeLastName} readonly  ={readonly}/>
                <Input placeholder = 'Имя пользователя' value = {data?.username} type='text' className={cls.inputRO} onChange={onChangeUsername} readonly  ={readonly}/>
                <Input placeholder = 'Аватарка' value = {data?.avatar} type='text' className={cls.inputRO} onChange={onChangeAvatar} readonly  ={readonly}/>
                <CurrencySelect value={data?.currency} onChange={onChangeCurrency} readonly = {readonly}/>
                <CountrySelect value={data?.country} onChange={onChangeCountry} readonly = {readonly}/>
            </div>
        </div>
    );
};

export default ProfileCard;