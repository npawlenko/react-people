import { Button, TextField } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useAppDispatch } from "../hooks/reduxHooks";
import useUserValidation from "../hooks/useUserValidation";
import { addUser } from "../store/usersSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormValues } from "../data/types";

const UsersForm = () => {
    const { validate, validationSchema } = useUserValidation();
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
        resolver: yupResolver(validationSchema)
    });
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        try {
            const user = await validate(data);
            user.birthday.setMinutes(user.birthday.getMinutes() - user.birthday.getTimezoneOffset()) // solve for local timezones issue
            dispatch(addUser({
                name: user.name,
                birthday: user.birthday.toString(),
                memoir: user?.memoir
            }));
        } catch(e) {}
    }

    return ( 
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <TextField
                    margin="normal"
                    fullWidth
                    label={t('name')}
                    error={errors?.name ? true : false}
                    helperText={errors?.name?.message}
                    {...register('name')} />
            </div>
            <div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TextField
                        margin="normal"
                        fullWidth type="date"
                        defaultValue="2001-08-01"
                        label={t('birth')}
                        error={errors?.birthday ? true : false}
                        helperText={errors?.birthday?.message}
                        {...register('birthday')} />
                </LocalizationProvider>
            </div>
            <div>
                <TextField
                    margin="normal"
                    fullWidth
                    multiline
                    rows={4}
                    label={t('memoir')}
                    error={errors?.memoir ? true : false}
                    helperText={errors?.memoir?.message}
                    {...register('memoir')} />
            </div>
            <Button type="submit" sx={{
                display: "block",
                margin: "0 auto"
            }}>{t('submit')}</Button>
        </form>
    );
}
 
export default UsersForm;