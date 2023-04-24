import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import "../assets/ErrorPage.scss";

const ErrorPage = () => {
    const { t } = useTranslation();

    return ( 
        <Box
            className="error-404"
            maxWidth="sm"
        >
            <Typography variant="h2">{t('error.404')}</Typography>
            <Typography>{t('pageNotFound')}</Typography>
        </Box>
     );
}
 
export default ErrorPage;