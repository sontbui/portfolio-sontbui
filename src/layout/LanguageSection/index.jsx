/** @format */

import { useEffect, useState } from "react";
import { Box, Select, MenuItem } from "@mui/material";
import languageVN from "../../Assets/images/icons/VN.png";
import languageEN from "../../Assets/images/icons/EN.png";
import { useDispatch, useSelector } from "react-redux";
import { SET_LANGUAGE } from "../../store/actions";


const language = [
  {
    value: 'vi',
    label: 'VIE',
    icon: languageVN,
  },
  {
    value: 'en',
    label: 'EN',
    icon: languageEN,
  },
];

const LanguageSection = () => {
  const customization = useSelector(state => state.customization);
  const dispatch = useDispatch();
  const [value, setValue] = useState(customization.language);
  const handleChange = event => {
    if (event?.target.value) setValue(event?.target.value);
  };
  useEffect(() => {
    dispatch({ type: SET_LANGUAGE, language: value });
  }, [value]);
  return (
    <>
      <Box sx={{ borderRadius: '100px' }}>
        <Select
          fullWidth
          value={value}
          onChange={handleChange}
          sx={{
            height: 38,
            borderRadius: 100,
            '& .MuiOutlinedInput-notchedOutline': {
              borderRadius: '100px',
              borderColor: 'green.300',

            },
            '& .MuiSelect-select': {
              background: 'transparent !important',
            }
          }}
        >
          {language.map(option => (
            <MenuItem key={option.value} value={option.value}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img
                  src={option.icon}
                  alt={option.label}
                  style={{ width: 24, height: 24, marginRight: 8 }}
                />
                {option.label}
              </div>
            </MenuItem>
          ))}
        </Select>
      </Box>
    </>
  );
};

export default LanguageSection;