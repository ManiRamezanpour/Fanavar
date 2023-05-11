import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useTranslation } from "react-i18next";
import { useTheme } from "@material-ui/core/styles";

export default function LanguageController() {
  const handleChange = (lng) => {
    i18n.changeLanguage(lng);
    const theme = useTheme();
    document.body.dir = i18n.dir();
  };

  return (
    <div>
      <FormControl className="w-20">
        <InputLabel id="demo-simple-select-autowidth-label">Lng</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          label="Age"
        >
          <MenuItem value={22}>English</MenuItem>
          <MenuItem value={10}>French</MenuItem>
          <MenuItem value={21}>Persian</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
