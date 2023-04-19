import { useState } from "react";
import { Drawer, List, ListItem, ListItemText, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const NavigationDrawer = () => {
    const [isOpened, setOpened] = useState(false);
    const { t } = useTranslation();

    return ( 
        <>
            <Drawer
                open={isOpened}
                onClose={() => setOpened(false)}
                anchor="left"
            >
                <List>
                    <ListItem>
                        <ListItemText>
                            <Link to="/main" onClick={() => setOpened(false)}>{t('main')}</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>
                            <Link to="/views" onClick={() => setOpened(false)}>{t('views')}</Link>
                        </ListItemText>
                    </ListItem>
                </List>
            </Drawer>

            <IconButton onClick={() => setOpened(!isOpened)}>
                <MenuIcon sx={{
                    color: "white"
                }} />
            </IconButton>
        </>
        
    );
}
 
export default NavigationDrawer;