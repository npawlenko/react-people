import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, Checkbox, Typography } from "@mui/material";
import { useAppSelector } from "../hooks/reduxHooks";
import { useTranslation } from "react-i18next";
import TableUser from "./TableUser";



const UsersTable = () => {
    const { t } = useTranslation();
    const users = useAppSelector((state) => state.users);

    return ( 
        <>
            <Typography variant="h2" gutterBottom fontSize="2rem">{t('people.list')}</Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>{t('name')}</TableCell>
                            <TableCell align="right">{t('birth')}</TableCell>
                            <TableCell align="right">{t('age')}</TableCell>
                            <TableCell align="right">{t('memoir')}</TableCell>
                            <TableCell align="center"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {users.map((user, idx) => (
                        <TableUser key={idx} {...user} />
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
        

        //TODO: pagination
    );
}
 
export default UsersTable;