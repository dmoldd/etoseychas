import { openCloseBurger } from "./burger-opener.js";
import { chooseItem } from "./modifications/changeItem.js";
import { openCloseDonateWindow } from "./donate/donate-opener.js";
import { changeTheme } from "./theme/change-theme.js";
import { hideOrShowDesc } from "./literature/hide-desc.js";

openCloseBurger();
chooseItem();
openCloseDonateWindow();
changeTheme();
hideOrShowDesc();

