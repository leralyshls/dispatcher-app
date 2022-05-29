import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { ReactComponent as DateIcon } from '../../assets/svgs/date.svg';
import { DatesFilterContainer } from './styles';
import { COLORS } from '../../utils/constants/colors';

const DatePickerComponent: React.FC = () => {
  const [value, setValue] = React.useState<Date | null>(null);
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        disableFuture
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        InputProps={{
          disableUnderline: true,
        }}
        components={{
          OpenPickerIcon: DateIcon,
        }}
        PaperProps={{ elevation: 3 }}
        PopperProps={{ placement: 'right-end' }}
        renderInput={(params) => (
          <DatesFilterContainer onClick={() => setOpen(true)}>
            {value ? '' : 'Dates'}
            <TextField
              variant='standard'
              {...params}
              inputProps={{
                ...params.inputProps,
                placeholder: '',
                readOnly: true,
                sx: {
                  color: COLORS.purple,
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                },
              }}
            />
          </DatesFilterContainer>
        )}
      />
    </LocalizationProvider>
  );
};

export default DatePickerComponent;
