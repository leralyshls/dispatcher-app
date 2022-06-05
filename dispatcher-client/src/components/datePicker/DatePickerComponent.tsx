import React from 'react';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { filterActions } from '../../store/slices/filterSlice';
import { fetchNews } from '../../store/slices/newsSlice';
import useWindowSize from '../../hooks/useWindowSize';
import { hasRequiredParamEndpoint } from '../../services/newsApiService';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField } from '@mui/material';
import { COLORS } from '../../utils/constants/colors';
import { SCREENS } from '../../utils/constants/screenSizes';
import { formatToISO } from '../../utils/dateFormat';
import { ReactComponent as DateIcon } from '../../assets/svgs/date.svg';
import { DatesFilterContainer } from './styles';

export interface DatePickerProps {
  filtertype: string;
}

const DatePickerComponent = ({ filtertype }: DatePickerProps) => {
  const [selectedDate, setSelectedDate] = React.useState<string | null>(null);
  const [open, setOpen] = React.useState<boolean>(false);
  const filters = useAppSelector((state) => state.filters);
  const dispatch = useAppDispatch();
  const { width } = useWindowSize();
  const { tabletM } = SCREENS;

  const handleDateChange = (newValue: any) => {
    setSelectedDate(newValue);
    if (newValue) {
      const ISO = formatToISO(newValue);
      dispatch(filterActions.updateFilter({ key: filtertype, value: ISO }));
    } else {
      dispatch(filterActions.updateFilter({ key: filtertype, value: '' }));
    }
    hasRequiredParamEndpoint(filters) && dispatch(fetchNews());
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        clearable={width > tabletM ? true : false}
        showToolbar={false}
        orientation='portrait'
        inputFormat='dd/MM/yyyy'
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        disableFuture
        value={selectedDate}
        onChange={handleDateChange}
        InputProps={{
          disableUnderline: true,
        }}
        components={{
          OpenPickerIcon: DateIcon,
        }}
        PaperProps={{
          sx: {
            borderRadius: '1.25rem',
            boxShadow: '0px 32px 64px rgba(0, 0, 0, 0.05)',
          },
        }}
        PopperProps={{
          placement: 'bottom',
          sx: { paddingTop: '1rem', paddingLeft: '13%' },
        }}
        renderInput={(params) => (
          <DatesFilterContainer onClick={() => setOpen(true)}>
            {selectedDate ? '' : 'Dates'}
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
