import { useTranslation } from "react-i18next";
import { TableRow, TableCell, Button, TextField } from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MouseEvent } from "react";
import { changeDateToInputFormat } from "../../utils/date";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { User, FormValues } from "../../data/types";


interface UserEditRowProps {
    user: User;
    errors: FieldErrors<FormValues>;
    register: UseFormRegister<FormValues>;
    handleCancelClick: (e: MouseEvent<HTMLElement>, userId: number) => void;
}

const UserEditRow = ({user, handleCancelClick, errors, register }: UserEditRowProps) => {
    const { t } = useTranslation();
    const birthday = new Date(user.birthday);
    
    return (
        <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">
                <TextField
                    margin="normal"
                    fullWidth
                    label={t('name')}
                    error={errors?.name ? true : false}
                    defaultValue={user.name}
                    helperText={errors?.name?.message as string}
                    {...register('name')}
                />
            </TableCell>
            <TableCell align="right">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TextField
                        margin="normal"
                        fullWidth type="date"
                        defaultValue={changeDateToInputFormat(birthday)}
                        label={t('birth')}
                        error={errors?.birthday ? true : false}
                        helperText={errors?.birthday?.message}
                        {...register('birthday')}
                    />
                </LocalizationProvider>
            </TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right">
                <TextField
                    margin="normal"
                    fullWidth
                    multiline
                    defaultValue={user?.memoir}
                    rows={4}
                    label={t('memoir')}
                    error={errors?.memoir ? true : false}
                    helperText={errors?.memoir?.message}
                    {...register('memoir')}
                />
            </TableCell>
            <TableCell align="right">
                <Button type="submit" variant="outlined" color="secondary">{t('save')}</Button>&nbsp;
                <Button variant="outlined" color="error" onClick={(e) => handleCancelClick(e, user?.id as number)}>{t('cancel')}</Button>
            </TableCell>
        </TableRow>
    );
}
 
export default UserEditRow;