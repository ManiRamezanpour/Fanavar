import LanguageController from "../common/Lang";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();
  return (
    <header className="flex px-10 py-4 justify-between">
      <h1 className="text-4xl font-bold">{t("Logo")} </h1>
      <LanguageController />
    </header>
  );
};
export default Header;
