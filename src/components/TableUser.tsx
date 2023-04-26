import { useTranslation } from "react-i18next";
import { User } from "../store/usersSlice";
import { useState } from "react";
import { TableRow, TableCell, Checkbox, Button, Typography, Modal } from "@mui/material";
import { useAppDispatch } from "../hooks/reduxHooks";
import { removeUser } from "../store/usersSlice";
import { ChangeEvent } from "react";

interface TableUserProps {
    user: User;
    key?: number;
    onCheckboxChange: (e: ChangeEvent<HTMLInputElement>, userId: number) => void;
}

const TableUser = ({user, key, onCheckboxChange}: TableUserProps) => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation();

    return ( 
        <TableRow
            key={key}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">{user.name}</TableCell>
            <TableCell align="right">
                {new Date(user.birthDate).toLocaleDateString(
                    undefined,
                    {
                        month: "2-digit",
                        day: "2-digit",
                        year: "numeric"
                    }
                )}
            </TableCell>
            <TableCell align="right">{Math.abs(new Date().getUTCFullYear() - new Date(user.birthDate).getUTCFullYear())}</TableCell>
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
                <Button variant="outlined" color="secondary">{t('edit')}</Button>&nbsp;
                <Button variant="outlined" color="error" onClick={() => dispatch(removeUser(user))}>{t('delete')}</Button>
            </TableCell>
            <TableCell align="center">
                <Checkbox onChange={(e) => onCheckboxChange(e, user?.id as number)} />
            </TableCell>
        </TableRow>
    );
}
 
export default TableUser;