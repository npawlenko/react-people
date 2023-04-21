import { string, date, object } from 'yup';
import { FormValues } from '../components/UsersForm';
import { useTranslation } from 'react-i18next';

const useUserForm =  () => {
    const { t } = useTranslation();
    const validate = async (data: FormValues) => {
        return await validationSchema.validate(data);
    }

    const validationSchema = object({
        name: string().required(t("error.required") as string),
        birthday: date().typeError(t("error.invalidDate") as string).required(t("error.required") as string),
        memoir: string().max(250, t("error.maxLengthExceeded") as string)
    });

    return {
        validate,
        validationSchema,
    }
}

export default useUserForm