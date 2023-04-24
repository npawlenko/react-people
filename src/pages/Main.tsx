import { Container } from "@mui/material";
import UsersTable from "../components/UsersTable";
import UsersForm from "../components/UsersForm";
import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";

const Main = () => {
    const { t } = useTranslation();

    return ( 
        <Container className="my-5">
            <Typography variant="h2" gutterBottom fontSize="2rem">{t('people.add')}</Typography>
            <UsersForm />

            <Typography variant="h2" gutterBottom fontSize="2rem">{t('people.list')}</Typography>
            <UsersTable />
        </Container>
     );
}
 
export default Main;