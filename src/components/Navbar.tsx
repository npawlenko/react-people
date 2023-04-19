
import { useState } from 'react';
import { AppBar, Toolbar, Container, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import './../assets/Navbar.scss';
import { useTranslation } from 'react-i18next';
import LanguageSelect from './LanguageSelect';

const Navbar = () => {
    const { t } = useTranslation();
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
                            <Link className="mx-2" to="/main">{t('main')}</Link>
                        </li>
                        <li>
                            <Link className="mx-2" to="/views">{t('views')}</Link>
                        </li>
                    </ul>

                    <LanguageSelect className="rounded-lg text-black" defaultLanguage="pl" />

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