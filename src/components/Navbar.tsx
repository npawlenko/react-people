
import { AppBar, Toolbar, Container, Typography, useMediaQuery, useTheme } from '@mui/material';
import './../assets/Navbar.scss';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import LanguageSelect from './LanguageSelect';
import NavigationDrawer from './NavigationDrawer';

const Navbar = () => {
    const theme = useTheme();
    const { t } = useTranslation();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return ( 
        <AppBar position="relative">
            <Container>
                <Toolbar disableGutters>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        react-people
                    </Typography>

                    <LanguageSelect className="mr-5" defaultlanguage="pl" />

                    {isMobile ? (
                        <NavigationDrawer />
                    ) : (
                        <div>
                            <Link className="mx-3" to="/main">
                                {t('main')}
                            </Link>
                            <Link className="ml-3" to="/views">
                                {t('views')}
                            </Link>
                        </div>
                    )}
                    
                </Toolbar>
            </Container>
      </AppBar>
     );
}
 
export default Navbar;