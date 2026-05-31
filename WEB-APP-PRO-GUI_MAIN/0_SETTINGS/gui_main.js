export function func_open_new_window(m_window) {
    window.location.href = m_window;
}

export function func_update_text(m_id, m_text) {
    document.getElementById(m_id).textContent = m_text;
}

export function func_add_onclick(m_id, m_function) {
    document.getElementById(m_id).onclick = m_function;
}

export function func_back_window() {
    history.back();
}

export function m_clear_type_radio(m_name) {
    const radios = document.querySelectorAll("input[name=" + m_name + "]");

    radios.forEach(radio => {
        radio.checked = false;
    });
}

export function m_get_select_type_radio(m_name) {
    let m_select = document.querySelector("input[name=" + m_name + "]:checked");

    if (!m_select) return null;

    return m_select.value;
}

function m_create_dialog() {
    const dialog = document.createElement("div");
    dialog.id = "id_m_div_main";

    const title = document.createElement("h2");
    title.id = "id_m_dialog_title";

    const void_777 = document.createElement("img");
    void_777.src = "../-1_IMAGES/m_rb.png";
    void_777.style.width = "70px";
    void_777.style.height = "70px";

    const text = document.createElement("p");
    text.id = "id_m_dialog_text";
    text.style.whiteSpace = "pre-line";

    dialog.onclick = function () {
        dialog.style.display = "none";
    };

    dialog.appendChild(title);
    dialog.appendChild(void_777);
    dialog.appendChild(text);

    document.body.appendChild(dialog);

    return dialog;
}

export function m_update_dialog(m_settings, m_title, m_text) {
    const dialog = document.getElementById("id_m_div_main");

    if (!dialog) {
        return;
    }

    const title = document.getElementById("id_m_dialog_title");
    const text = document.getElementById("id_m_dialog_text");

    dialog.style.display = "grid";
    dialog.style.position = "fixed";
    dialog.style.placeItems = "center";
    dialog.style.borderRadius = "15px";
    dialog.style.backgroundColor = "rgb(50, 50, 50)";
    dialog.style.boxShadow = "0 0 20px red";

    if (m_settings === true) {
        dialog.style.width = "50%";
        dialog.style.height = "50%";

        dialog.style.inset = "";

        dialog.style.top = "50%";
        dialog.style.left = "50%";

        dialog.style.right = "";
        dialog.style.bottom = "";

        dialog.style.transform = "translate(-50%, -50%)";
    } else {
        dialog.style.width = "fit-content";
        dialog.style.height = "fit-content";

        dialog.style.inset = "";

        dialog.style.top = "";
        dialog.style.left = "";

        dialog.style.right = "15px";
        dialog.style.bottom = "15px";

        dialog.style.transform = "";
    }

    title.textContent = m_title;
    text.textContent = m_text;
}

export function m_show_dialog(m_settings, m_title, m_text) {
    if (!document.getElementById("id_m_div_main")) {
        m_create_dialog();
    }

    m_update_dialog(m_settings, m_title, m_text);
}