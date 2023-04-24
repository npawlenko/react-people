import { Select, MenuItem, SelectProps } from "@mui/material";

interface NumberSelectProps extends SelectProps {
    numbers: number[];
}

const NumberSelect = (props: NumberSelectProps) => {
    return (
        <Select
            variant="outlined"
            size="small"
            defaultValue={props.numbers[0]}
            {...props}
        >
            {props.numbers.map((num, idx) => (
                <MenuItem
                    key={idx}
                    value={num}
                >
                    {num}
                </MenuItem>
            ))}
        </Select>
    );
}
 
export default NumberSelect;