import { Box, Container, Typography, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const Footer = () => {
    return ( 
        <Box
            textAlign="center"
            sx={{
                padding: "10px 0",
                bgcolor: "primary.main",
                color: "#fff"
            }}
            marginTop="auto"
        >
            <Container>
                Copyright &copy; 2023&nbsp;
                <Link to="/main">react-people</Link><br/>
                Github:&nbsp;
                <Link target="_blank" to="https://github.com/npawlenko/react-people">https://github.com/npawlenko/react-people</Link>
            </Container>
        </Box>    
    );
}
 
export default Footer;