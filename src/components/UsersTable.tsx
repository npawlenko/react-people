import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, Button, Grid, Box, Checkbox } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { useTranslation } from "react-i18next";
import TableUser from "./TableUser";
import { ChangeEvent, useState } from "react";
import usePagination from "../hooks/usePagination";
import { removeUser } from "../store/usersSlice";



const UsersTable = () => {
    const [rowSelection, setRowSelection] = useState<Array<number>>([]);
    const users = useAppSelector((state) => state.users);
    const dispatch = useAppDispatch();
    const { entries, entriesElement, paginationElement, pageElements } = usePagination(users);
    const { t } = useTranslation();

    const handleSelection = (e: ChangeEvent<HTMLInputElement>, userId: number) => {
        console.log(e);
        rowSelection.push(userId);
    }

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
                    <Button
                        variant="contained"
                        color="error"
                        onClick={() => {
                            rowSelection.forEach((userId) => {
                                dispatch(removeUser(userId));
                            })
                        }}
                    >
                        {t('delete.selected')}
                    </Button>
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
                    {users.length === 0 ?
                        (
                            <TableCell colSpan={6} align="center">{t('entries.empty')}</TableCell>
                        )
                        :
                        pageElements.map((user, idx) => (
                            <TableUser key={idx} onCheckboxChange={handleSelection} {...user} />
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