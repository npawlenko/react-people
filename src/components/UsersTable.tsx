import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, Button, Grid, Pagination, Box, Checkbox } from "@mui/material";
import { useAppSelector } from "../hooks/reduxHooks";
import { useTranslation } from "react-i18next";
import TableUser from "./TableUser";
import NumberSelect from "./NumberSelect";
import { useState } from "react";
import usePagination from "../hooks/usePagination";



const UsersTable = () => {
    const [rowSelection, setRowSelection] = useState({});
    const users = useAppSelector((state) => state.users);
    const { entries, entriesElement, paginationElement, pageElements } = usePagination(users);
    const { t } = useTranslation();

    return ( 
        <>
            <Grid container>
                <Grid item xs={12} md={6}>
                    {entriesElement}
                </Grid>
                <Grid item 
                    xs={12}
                    md={6}
                    textAlign={{
                        xs: "left",
                        md: "right"
                    }}
                    marginTop={{
                        xs: "10px",
                        md: "0"
                    }}
                >
                    <Button variant="contained" color="error">{t('delete.selected')}</Button>
                </Grid>
            </Grid>

            <TableContainer
                component={Paper}
                className="my-5"
            >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>{t('name')}</TableCell>
                            <TableCell align="right">{t('birth')}</TableCell>
                            <TableCell align="right">{t('age')}</TableCell>
                            <TableCell align="right">{t('memoir')}</TableCell>
                            <TableCell align="right">{t('action')}</TableCell>
                            <TableCell align="center">
                                <Checkbox></Checkbox>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {users.length == 0 ?
                        (
                            <TableCell colSpan={6} align="center">{t('entries.empty')}</TableCell>
                        )
                        :
                        pageElements.map((user, idx) => (
                            <TableUser key={idx} {...user} />
                        ))
                    }
                    </TableBody>
                </Table>
            </TableContainer>

            {users.length > entries ?
                <Box textAlign="right">
                    {paginationElement}
                </Box>
                :
                null
            }
        </>
    );
}
 
export default UsersTable;