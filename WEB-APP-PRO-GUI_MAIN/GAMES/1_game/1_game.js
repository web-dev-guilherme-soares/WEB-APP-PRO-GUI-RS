import * as gui_main from "../../0_SETTINGS/gui_main.js";

gui_main.func_add_onclick("m_img_close", function() { gui_main.func_back_window(); });

gui_main.m_show_dialog(false, "VOID-777", "VOID-777 - Oh, finalmente! Qual\nserá a sua pontuação final? 😯");

gui_main.func_add_onclick("m_img_int", function() {
    gui_main.m_show_dialog(true, "VOID-777", "VOID-777 - Oh, deixe comigo que eu vou te explicar tudo. Você ganha 1 ponto por cada obstáculo desviado e perde se encostar em algum.");
});

gui_main.func_add_onclick("m_btn_jump", function() {
    const mario = document.getElementById("m_mario");

    mario.classList.remove("jump");

    void mario.offsetWidth;

    mario.classList.add("jump");
});

const m_id_mario_ohk = document.getElementById("m_mario");
const m_id_pipe_ohk = document.getElementById("m_pipe");

function verify_cll_objs() {
    let m_position_1 = m_id_mario_ohk.getBoundingClientRect();
    let m_position_2 = m_id_pipe_ohk.getBoundingClientRect();

    return (
        m_position_1.left < m_position_2.right &&
        m_position_1.right > m_position_2.left &&
        m_position_1.top < m_position_2.bottom &&
        m_position_1.bottom > m_position_2.top
    );
}

setInterval(() => {
    if (verify_cll_objs()) {
       
    }
}, 10);