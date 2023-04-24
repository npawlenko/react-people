import { useTranslation } from "react-i18next";
import { User } from "../store/usersSlice";
import { TableRow, TableCell, Checkbox, Button } from "@mui/material";

interface TableUserProps
    extends User {
        key?: number;
}

const TableUser = (props: TableUserProps) => {
    const { t } = useTranslation();

    return ( 
        <TableRow
            key={props.key}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">{props?.name}</TableCell>
            <TableCell align="right">{new Date(props?.birthDate).toUTCString()}</TableCell>
            <TableCell align="right">{Math.abs(new Date().getUTCFullYear() - new Date(props?.birthDate).getUTCFullYear())}</TableCell>
            <TableCell align="right">{props?.memoir}</TableCell>
            <TableCell align="right">
                <Button variant="outlined" color="secondary">{t('edit')}</Button>&nbsp;
                <Button variant="outlined" color="error">{t('delete')}</Button>
            </TableCell>
            <TableCell align="center">
                <Checkbox />
            </TableCell>
        </TableRow>
    );
}
 
export default TableUser;