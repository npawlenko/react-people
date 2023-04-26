import { useTranslation } from "react-i18next";
import { User } from "../store/usersSlice";
import { TableRow, TableCell, Checkbox, Button, Typography, Modal } from "@mui/material";
import { useAppDispatch } from "../hooks/reduxHooks";
import { removeUser } from "../store/usersSlice";
import { ChangeEvent, MouseEvent } from "react";
import { changeDateToLocalFormat } from "../utils/date";

interface UserReadOnlyRowProps {
    user: User;
    handleCheckboxChange: (e: ChangeEvent<HTMLInputElement>, userId: number) => void;
    handleEditClick: (e: MouseEvent<HTMLElement>, userId: number) => void;
}

const UserReadOnlyRow = ({user, handleCheckboxChange, handleEditClick}: UserReadOnlyRowProps) => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation();
    const birthday = new Date(user.birthday);

    return ( 
        <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">{user.name}</TableCell>
            <TableCell align="right">
                {changeDateToLocalFormat(birthday)}
            </TableCell>
            <TableCell align="right">{Math.abs(new Date().getUTCFullYear() - new Date(birthday).getUTCFullYear())}</TableCell>
            <TableCell align="right">
                <Typography noWrap sx={{
                        textOverflow: "ellipsis",
                        width: "20rem",
                        overflow: "hidden",
                    }}
                >
                    {user?.memoir}
                </Typography>
            </TableCell>
            <TableCell align="right">
                <Button variant="outlined" color="secondary" onClick={(e) => handleEditClick(e, user?.id as number)}>{t('edit')}</Button>&nbsp;
                <Button variant="outlined" color="error" onClick={() => dispatch(removeUser(user))}>{t('delete')}</Button>
            </TableCell>
            <TableCell align="center">
                <Checkbox onChange={(e) => handleCheckboxChange(e, user?.id as number)} />
            </TableCell>
        </TableRow>
    );
}
 
export default UserReadOnlyRow;