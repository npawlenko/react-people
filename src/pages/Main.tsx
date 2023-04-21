import { Container } from "@mui/material";
import UsersTable from "../components/UsersTable";
import UsersForm from "../components/UsersForm";

const Main = () => {
    return ( 
        <Container className="my-5">
            <UsersTable />
            <UsersForm />
        </Container>
     );
}
 
export default Main;