import * as gui_main from "../0_SETTINGS/gui_main.js";

let m_index_this = 0;

const m_loading = setInterval(() => {

    m_index_this++;

    if (m_index_this < 101) {
        gui_main.func_update_text("m_text_loading", "Carregando " + "[" + m_index_this + "%]");
    } else {
        clearInterval(m_loading);

        gui_main.func_open_new_window("../2_MAIN/main.html");
    }

}, 100);