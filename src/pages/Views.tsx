import { Container, Typography, Box } from "@mui/material";
import GenericList from "../components/GenericList";
import { useAppSelector } from "../hooks/reduxHooks";
import UserBox from "../components/UserBox";

const Views = () => {
    const users = useAppSelector((state) => state.users);

    return ( 
        <Container sx={{my: 4}}>
            <GenericList
                data={users}
                keyExtractor={(user) => user?.id as number}
                renderItem={(user) => (
                    <UserBox user={user} />
                )}

            />
        </Container>
     );
}
 
export default Views;