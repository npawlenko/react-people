import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, Button, Grid, Box, Checkbox } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { useTranslation } from "react-i18next";
import UserReadOnlyRow from "./UserReadOnlyRow";
import UserEditRow from "./UserEditRow";
import { ChangeEvent, MouseEvent, useState, Fragment } from "react";
import usePagination from "../hooks/usePagination";
import { editUser, removeUser } from "../store/usersSlice";
import useUserForm from "../hooks/useUserForm";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormValues } from "../data/types";


const UsersTable = () => {
    const [rowSelection, setRowSelection] = useState<Array<number>>([]);
    const [editUserId, setEditUserId] = useState<number | null>(null);
    const { validate, validationSchema } = useUserForm();
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
        resolver: yupResolver(validationSchema)
    });
    const users = useAppSelector((state) => state.users);
    const dispatch = useAppDispatch();
    const { entries, entriesElement, paginationElement, pageElements } = usePagination(users);
    const { t } = useTranslation();

    const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>, userId: number) => {
        if(e.target.checked) {
            rowSelection.push(userId);
        }
        else {
            const idx = rowSelection.indexOf(userId);
            if(idx === -1)
                return;
            rowSelection.splice(idx, 1);
        }
    }

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        try {
            const user = await validate(data);
            user.birthday.setMinutes(user.birthday.getMinutes() - user.birthday.getTimezoneOffset()) // solve for local timezones issue
            dispatch(editUser({
                id: editUserId as number,
                name: user.name,
                birthday: user.birthday.toString(),
                memoir: user?.memoir
            }));
            setEditUserId(null);
        } catch(e) {}
    }

    const handleEditClick = (e: MouseEvent<HTMLElement>, userId: number) => {
        e.preventDefault();
        setEditUserId(userId);
    }

    const handleCancelClick = (e: MouseEvent<HTMLElement>, userId: number) => {
        e.preventDefault();
        setEditUserId(null);
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
                                setEditUserId(null);
                            })
                        }}
                    >
                        {t('delete.selected')}
                    </Button>
                </Grid>
            </Grid>

            <form onSubmit={handleSubmit(onSubmit)}>
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
                                <TableCell align="center"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {users.length === 0 ?
                            (
                                <TableCell colSpan={6} align="center">{t('entries.empty')}</TableCell>
                            )
                            :
                            pageElements.map((user, idx) => (
                                <Fragment key={idx}>
                                    { editUserId === user.id ? (
                                        <UserEditRow user={user} handleCancelClick={handleCancelClick} errors={errors} register={register} />
                                    ) : (
                                        <UserReadOnlyRow user={user} handleCheckboxChange={handleCheckboxChange} handleEditClick={handleEditClick} />
                                    )}
                                </Fragment>
                            ))
                        }
                        </TableBody>
                    </Table>
                </TableContainer>
            </form>

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