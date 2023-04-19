
import { useState } from 'react';
import { AppBar, Toolbar, Container, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import './../assets/Navbar.scss';

const Navbar = () => {
    const [isMenuVisible, setMenuVisible] = useState(false);

    return ( 
        <AppBar position="static">
            <Container>
                <Toolbar disableGutters>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        react-people
                    </Typography>

                    <ul id="nav-content">
                        <li>
                            <Link className="mx-2" to="/main">Main</Link>
                        </li>
                        <li>
                            <Link className="mx-2" to="/views">Views</Link>
                        </li>
                    </ul>

                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ ml: 2 }}
                        onClick={() => setMenuVisible(!isMenuVisible)}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </Container>
      </AppBar>
     );
}
 
export default Navbar;