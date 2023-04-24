import { Pagination } from "@mui/material";
import { useState } from "react"
import { useTranslation } from "react-i18next";
import NumberSelect from "../components/NumberSelect";

const usePagination = (elements: Array<any>) => {
    const { t } = useTranslation();
    const [page, setPage] = useState(1);
    const [entries, setEntries] = useState(10);

    const paginationElement = (
        <Pagination
            variant="outlined"
            color="primary"
            page={page}
            count={Math.ceil(elements.length / entries)}
            onChange={(e, value) => setPage(value)}
            sx={{
                display: "flex",
                justifyContent: "flex-end"
            }}
        />
    );
    const entriesElement = (
        <>
            {t('entries.show')}&nbsp;
            <NumberSelect
                numbers={[10, 20, 50]}
                onChange={(e) => {
                    const val = e.target.value as number;
                    setPage(1);
                    setEntries(val)
                }}
            />
            &nbsp;{t('entries.per.page')}
        </>
    );
    const pageElements: Array<any> = elements.slice((page-1)*entries, (page-1)*entries + entries);


    return {
        page,
        entries,
        paginationElement,
        entriesElement,
        pageElements
    }
}

export default usePagination