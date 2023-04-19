import { InputLabel, Select, MenuItem, SelectChangeEvent, SelectProps } from '@mui/material';
import { useEffect, useState } from 'react';
import { availableLanguages } from './../i18n';
import i18n from './../i18n';
import { useTranslation } from 'react-i18next';

interface LanuageSelectProps
    extends SelectProps {
        defaultLanguage?: string;
}

const LanguageSelect = (props: LanuageSelectProps) => {
    const { t } = useTranslation();
    const [language, setLanguage] = useState(props?.defaultLanguage || '');

    const handleChange = (e: SelectChangeEvent<unknown>) => {
        const selectedLanguage = e.target.value as string;
        setLanguage(selectedLanguage);
    };

    useEffect(() => {
        i18n.changeLanguage(language);
    }, [language]);

    return ( 
        <>
            <InputLabel
                className="mr-2"
                id="language-select-label"
                sx={{
                    color: "white"
                }}
            >
                {t('language')}
            </InputLabel>

            <Select
                variant="outlined"
                labelId="language-select-label"
                id="language-select"
                label={t('language')}
                defaultValue={props?.defaultLanguage as string}
                onChange={handleChange}
                size="small"
                sx={{
                    color: "white"
                }}
                {...props}
            >
                {availableLanguages.map((lang) => (
                    <MenuItem
                        value={lang.key}
                    >
                        {lang.text}
                    </MenuItem>
                ))}
            </Select>
        </>
    );
}
 
export default LanguageSelect;