import * as gui_main from "../0_SETTINGS/gui_main.js";

gui_main.func_add_onclick("m_img", function() { gui_main.func_open_new_window("../3_PROFILE/profile.html"); });

gui_main.m_show_dialog(false, "VOID-777", "Olá, eu sou o VOID-777, seu assistente robô.\nEstou aqui para auxiliar você nesta jornada.");

gui_main.func_add_onclick("m_btn_introduction", function() { gui_main.func_open_new_window("../5_INTRODUCTION/introduction.html"); });

gui_main.func_add_onclick("m_btn_study_developer", function() { gui_main.func_open_new_window("../6_STUDY_AS_DEVELOPER/study_as_developer.html"); });