import * as gui_main from "../0_SETTINGS/gui_main.js";

gui_main.func_add_onclick("m_img_close", function() { gui_main.func_back_window(); });

gui_main.m_show_dialog(false, "VOID-777", "VOID-777 — Esta página é divertida,\nnão é? Experimente algumas opções de jogos.");

gui_main.func_add_onclick("m_btn_game_0", function() { gui_main.func_open_new_window("../GAMES/0_game/0_game.html"); });

gui_main.func_add_onclick("m_btn_game_1", function() { gui_main.func_open_new_window("../GAMES/1_game/1_game.html"); });