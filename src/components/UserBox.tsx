import { useTranslation } from "react-i18next";
import "../assets/UserBox.scss";
import { User } from "../data/types";
import { Typography } from "@mui/material";
import { changeDateToLocalFormat } from "../utils/date";

interface UserBoxProps {
    user: User;
}

const UserBox = ({user}: UserBoxProps) => {
    const { t } = useTranslation();
    const birthday = new Date(user.birthday);

    return (
        <div className="user-box">
            <Typography variant="h6">{t('name')}: {user.name}</Typography>
            <Typography variant="h6">
                {t('birth')}:&nbsp;
                {changeDateToLocalFormat(birthday)}
            </Typography>
            
            <Typography variant="h6">
                {t('age')}:&nbsp;
                {Math.abs(new Date().getUTCFullYear() - new Date(birthday).getUTCFullYear())}
            </Typography>
            <Typography variant="h6">{t('memoir')}:</Typography>
            <Typography>{user?.memoir}</Typography>
        </div>
    );
}
 
export default UserBox;