import { useEffect, useState } from 'react';
import i18n from './../i18n';

const availableLanguages: LanguageOption[] = [
    {
        key: "en",
        text: "English"
    },
    {
        key: "pl",
        text: "Polski"
    }
]

interface LanguageOption {
    key: string;
    text: string;
}

interface LanuageSelectProps
    extends React.SelectHTMLAttributes<HTMLSelectElement> {
        defaultLanguage?: string;
}

const LanguageSelect = (props: LanuageSelectProps) => {
    const [language, setLanguage] = useState(props.defaultLanguage || '');

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLanguage = e.target.value;
        setLanguage(selectedLanguage);
    };

    useEffect(() => {
        i18n.changeLanguage(language);
    }, [language]);

    return ( 
        <select onChange={handleChange} {...props}>
            {availableLanguages.map((lang) => (
                <option
                    value={lang.key}
                    selected={props?.defaultLanguage === lang.key ? true : false }
                >
                    {lang.text}
                </option>
            ))}
        </select>
    );
}
 
export default LanguageSelect;