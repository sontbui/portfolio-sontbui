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
      <Box sx={{ borderRadius: '10px' }}>
        <Select
          fullWidth
          value={value}
          onChange={handleChange}
          sx={{
            height: 33,
            color: 'white',
            borderRadius: '10px',
            backgroundColor: '#a24dd386',
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#c770f0',
            },
            '& .MuiSelect-select': {
              background: 'transparent !important',
              color: 'white', 
              display: 'flex',
              alignItems: 'center',
            },
            '& .MuiSvgIcon-root': {
              color: 'white', 
            },
            '&:hover':{
              transform: 'translateY(-2px)',
              backgroundColor: '#a24dd386',
              borderColor: '#a24dd386',
            }
          }}
        >
          {language.map(option => (
            <MenuItem
              key={option.value}
              value={option.value}
              sx={{
                color: 'black', 
                backgroundColor: 'transparent',
                '&:hover': {
                  backgroundColor: '#934cce5e',
                },
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', fontSize:"0.6em" }}>
                <img
                  src={option.icon}
                  alt={option.label}
                  style={{ width: 20, height: 20, marginRight: 8, fontSize: "1.2em" }}
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