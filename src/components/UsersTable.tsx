import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, Button, Grid, Pagination, Box, Checkbox } from "@mui/material";
import { useAppSelector } from "../hooks/reduxHooks";
import { useTranslation } from "react-i18next";
import TableUser from "./TableUser";
import NumberSelect from "./NumberSelect";
import { useRef, useState } from "react";



const UsersTable = () => {
    const [page, setPage] = useState(1);
    const [entries, setEntries] = useState(10);
    const { t } = useTranslation();
    const users = useAppSelector((state) => state.users);

    return ( 
        <>
            <Grid container>
                <Grid item xs={12} md={6}>
                    {t('entries.show')}&nbsp;
                    <NumberSelect
                        numbers={[10, 20, 50]}
                        onChange={(e) => {
                            const val = e.target.value as number;
                            setPage(1);
                            setEntries(val)
                        }}
                    />
                    &nbsp;{t('entries.per.page')}
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
                        users.slice((page-1)*entries, (page-1)*entries + entries).map((user, idx) => (
                            <TableUser key={idx} {...user} />
                        ))
                    }
                    </TableBody>
                </Table>
            </TableContainer>

            {users.length > entries ?
                <Box textAlign="right">
                    <Pagination
                        variant="outlined"
                        color="primary"
                        page={page}
                        count={Math.ceil(users.length / entries)}
                        onChange={(e, value) => setPage(value)}
                        sx={{
                            display: "flex",
                            justifyContent: "flex-end"
                        }}
                    />
                </Box>
                :
                null
            }
        </>
    );
}
 
export default UsersTable;