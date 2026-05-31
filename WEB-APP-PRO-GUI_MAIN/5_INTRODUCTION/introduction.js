import * as gui_main from "../0_SETTINGS/gui_main.js";

gui_main.func_add_onclick("m_img_close", function() { gui_main.func_back_window(); });

gui_main.func_add_onclick("btn_ds", function() { gui_main.func_open_new_window("../GAMES/0_game/0_game.html"); });

gui_main.m_show_dialog(false, "VOID-777", "VOID-777 - Haha, vamos estudar. No\nfinal, tem um desafio divertido. 😄");