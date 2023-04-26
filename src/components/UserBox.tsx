import { useTranslation } from "react-i18next";
import "../assets/UserBox.scss";
import { User } from "../store/usersSlice";
import { Typography } from "@mui/material";

interface UserBoxProps {
    user: User;
}

const UserBox = ({user}: UserBoxProps) => {
    const { t } = useTranslation();

    return (
        <div className="user-box">
            <Typography variant="h6">{t('name')}: {user.name}</Typography>
            <Typography variant="h6">
                {t('birth')}:&nbsp;
                {user.birthDate.toLocaleDateString(
                    undefined, 
                    {
                        month: "2-digit",
                        day: "2-digit",
                        year: "numeric"
                    }
                )}
            </Typography>
            
            <Typography variant="h6">
                {t('age')}:&nbsp;
                {Math.abs(new Date().getUTCFullYear() - new Date(user.birthDate).getUTCFullYear())}
            </Typography>
            <Typography variant="h6">{t('memoir')}:</Typography>
            <Typography>{user?.memoir}</Typography>
        </div>
    );
}
 
export default UserBox;