import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useTranslation } from "react-i18next";
import { useTheme } from "@material-ui/core/styles";
import i18next from "i18next";

export default function LanguageController() {
  const [laguage, setLanguage] = React.useState();
  const { t, i18n } = useTranslation();
  const handleChange = (lng) => {
    i18n.changeLanguage(lng.target.value);
    i18n.dir(); // => "rtl"
  };

  return (
    <div>
      <FormControl className="w-20">
        <InputLabel id="demo-simple-select-autowidth-label">Lng</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={laguage}
          onChange={handleChange}
          autoWidth
          label="Age"
        >
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="fr">French</MenuItem>
          <MenuItem value="pr">Persian</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
