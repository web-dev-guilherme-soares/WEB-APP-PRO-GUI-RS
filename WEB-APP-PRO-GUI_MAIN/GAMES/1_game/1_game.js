import * as gui_main from "../../0_SETTINGS/gui_main.js";

gui_main.func_add_onclick("m_img_close", function() { gui_main.func_back_window(); });

gui_main.m_show_dialog(false, "VOID-777", "VOID-777 - Oh, finalmente! Qual\nserá a sua pontuação final? 😯");

gui_main.func_add_onclick("m_img_int", function() {
    gui_main.m_show_dialog(true, "VOID-777", "VOID-777 - Oh,\ndeixa comigo que eu vou te explicar\ntudo. Basicamente, você ganha 10\npontos por cada acerto. Se bater\nem algum obstáculo, você perde.");
});