import { useTranslation } from "react-i18next";
import { User } from "../store/usersSlice";
import { TableRow, TableCell, Checkbox, Button, Typography } from "@mui/material";
import { useAppDispatch } from "../hooks/reduxHooks";
import { removeUser } from "../store/usersSlice";
import { ChangeEvent } from "react";

interface TableUserProps
    extends User {
        key?: number;
        onCheckboxChange: (e: ChangeEvent<HTMLInputElement>) => {};

}

const TableUser = (props: TableUserProps) => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation();

    return ( 
        <TableRow
            key={props.key}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">{props?.name}</TableCell>
            <TableCell align="right">
                {new Date(props?.birthDate).toLocaleDateString(
                    undefined,
                    {
                        month: "2-digit",
                        day: "2-digit",
                        year: "numeric"
                    }
                )}
            </TableCell>
            <TableCell align="right">{Math.abs(new Date().getUTCFullYear() - new Date(props?.birthDate).getUTCFullYear())}</TableCell>
            <TableCell align="right">
                <Typography noWrap sx={{
                        textOverflow: "ellipsis",
                        width: "20rem",
                        overflow: "hidden",
                    }}
                >
                    {props?.memoir}
                </Typography>
            </TableCell>
            <TableCell align="right">
                <Button variant="outlined" color="secondary">{t('edit')}</Button>&nbsp;
                <Button variant="outlined" color="error" onClick={() => dispatch(removeUser(props))}>{t('delete')}</Button>
            </TableCell>
            <TableCell align="center">
                <Checkbox onChange={(e) => props?.onCheckboxChange(e, props?.id)} />
            </TableCell>
        </TableRow>
    );
}
 
export default TableUser;