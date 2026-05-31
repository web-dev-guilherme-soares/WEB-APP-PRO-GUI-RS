import * as gui_main from "../0_SETTINGS/gui_main.js";

gui_main.func_add_onclick("m_img_close", function() { gui_main.func_back_window(); });

gui_main.m_show_dialog(false, "VOID-777", "VOID-777 - Oh, finalmente! Qual\nserá a sua pontuação final? 😯");

const m_list_of_option = [
    {
        m_question: "O que é hardware?",
        m_option_1: "Rede de internet",
        m_option_2: "Parte física do computador",
        m_option_3: "Programas do computador",

        correct_answer: "2"
    },

    {
        m_question: "O que é software?",
        m_option_1: "Tipo de processador",
        m_option_2: "Conjunto de programas e instruções",
        m_option_3: "Componentes físicos do computador",

        correct_answer: "2"
    },

    {
        m_question: "Qual a função do sistema operacional?",
        m_option_1: "Controlar o hardware e software",
        m_option_2: "Montar o computador",
        m_option_3: "Apenas armazenar arquivos",

        correct_answer: "1"
    },

    {
        m_question: "O que acontece no boot ao ligar o PC?",
        m_option_1: "O HD é formatado",
        m_option_2: "O sistema operacional é carregado",
        m_option_3: "O computador funciona sem verificação",

        correct_answer: "2"
    },

    {
        m_question: "Para que serve a memória RAM?",
        m_option_1: "Executar gráficos 3D",
        m_option_2: "Armazenamento permanente",
        m_option_3: "Armazenamento temporário de dados em uso",

        correct_answer: "3"
    },

    {
        m_question: "Qual a diferença entre SSD e HD?",
        m_option_1: "SSD é mais rápido e usa memória flash",
        m_option_2: "HD funciona sem energia",
        m_option_3: "SSD é mais lento que HD",

        correct_answer: "1"
    },

    {
        m_question: "Qual a função da CPU?",
        m_option_1: "Executar instruções e processar dados",
        m_option_2: "Controlar a impressora",
        m_option_3: "Armazenar arquivos permanentemente",

        correct_answer: "1"
    },

    {
        m_question: "O que faz a GPU?",
        m_option_1: "Armazena documentos",
        m_option_2: "Processa gráficos e imagens",
        m_option_3: "Controla a internet do computador",

        correct_answer: "2"
    },

    {
        m_question: "Para que serve a placa-mãe?",
        m_option_1: "Substituir o sistema operacional",
        m_option_2: "Conectar todos os componentes",
        m_option_3: "Gerar energia para o PC",

        correct_answer: "2"
    },

    {
        m_question: "Função da fonte de alimentação?",
        m_option_1: "Melhorar gráficos",
        m_option_2: "Executar programas",
        m_option_3: "Fornecer energia ao computador",

        correct_answer: "3"
    },

    {
        m_question: "O que é o sistema operacional?",
        m_option_1: "Tipo de memória RAM",
        m_option_2: "Software que gerencia o hardware",
        m_option_3: "Peça física do computador",

        correct_answer: "2"
    },

    {
        m_question: "Qual sistema operacional é open source?",
        m_option_1: "Linux",
        m_option_2: "Photoshop",
        m_option_3: "Windows",

        correct_answer: "1"
    },

    {
        m_question: "Qual a função do SSD?",
        m_option_1: "Gerar energia",
        m_option_2: "Armazenamento rápido de dados",
        m_option_3: "Processar gráficos",

        correct_answer: "2"
    },

    {
        m_question: "O que é multitarefa?",
        m_option_1: "Executar vários programas ao mesmo tempo",
        m_option_2: "Formatar o computador",
        m_option_3: "Usar apenas um programa",

        correct_answer: "1"
    },

    {
        m_question: "O que é BIOS/UEFI?",
        m_option_1: "Aplicativo de internet",
        m_option_2: "Sistema que inicia o hardware ao ligar o PC",
        m_option_3: "Programa de edição de texto",

        correct_answer: "2"
    },

    {
        m_question: "Qual a função da cache da CPU?",
        m_option_1: "Controlar a rede Wi-Fi",
        m_option_2: "Acelerar o acesso a dados frequentes",
        m_option_3: "Armazenar arquivos permanentes",

        correct_answer: "2"
    },

    {
        m_question: "O que é GPU dedicada?",
        m_option_1: "Tipo de teclado",
        m_option_2: "Parte do HD",
        m_option_3: "Placa de vídeo com memória própria",

        correct_answer: "3"
    },

    {
        m_question: "Qual é a função da RAM?",
        m_option_1: "Conectar periféricos",
        m_option_2: "Memória temporária em uso",
        m_option_3: "Armazenamento permanente",

        correct_answer: "2"
    },

    {
        m_question: "O que o sistema operacional faz com processos?",
        m_option_1: "Desliga o computador automaticamente",
        m_option_2: "Aumenta a memória física",
        m_option_3: "Gerencia a execução dos programas",

        correct_answer: "3"
    },

    {
        m_question: "Qual exemplo de sistema operacional?",
        m_option_1: "Microsoft Word",
        m_option_2: "Windows",
        m_option_3: "Google Chrome",

        correct_answer: "2"
    }
];

let m_index_option = 0;

let correct_answer = 1;

let m_pt = 0;

function m_func_pt_true(m_value) {
    m_pt = m_pt + m_value;
}

function m_func_pt_false(m_value) {
    m_pt = m_pt - m_value;
}

function update_game(index) {

    gui_main.func_update_text("question_x", m_list_of_option[index].m_question);

    gui_main.func_update_text("m_label_1", m_list_of_option[index].m_option_1);

    gui_main.func_update_text("m_label_2", m_list_of_option[index].m_option_2);

    gui_main.func_update_text("m_label_3", m_list_of_option[index].m_option_3);

    correct_answer = m_list_of_option[index].correct_answer;
}

update_game(m_index_option);

gui_main.func_add_onclick("btn_ok", function() {
    let get_select = gui_main.m_get_select_type_radio("m_option_radio");

    if (get_select === null) {
        gui_main.m_show_dialog(false, "VOID-777", "VOID-777 - Você esqueceu de\nselecionar uma opção 😥");

        return;
    }

    if (get_select === correct_answer) {
        m_func_pt_true(10);

        gui_main.m_show_dialog(false, "VOID-777", "VOID-777 - você é bom, hein 😯");
    } else {
        m_func_pt_false(5);

        gui_main.m_show_dialog(false, "VOID-777", "VOID-777 - você\nerrou, hahaha 😥");
    }

    m_index_option++;

    if (m_index_option < m_list_of_option.length) {

        update_game(m_index_option);

        gui_main.m_clear_type_radio("m_option_radio");
    } else {
        gui_main.m_show_dialog(true, "VOID-777", "VOID-777 - Oh, Parabéns! Você\nconcluiu o desafio, e essa\nfoi a sua pontuação:" + m_pt + "😂");
    }
});

gui_main.func_add_onclick("m_img_int", function() {
    gui_main.m_show_dialog(true, "VOID-777", "VOID-777 - Oh, deixa comigo que\neu vou te explicar tudo. Basicamente,\nvocê ganha 10 pontos por cada acerto e\nperde 5 a cada erro. Eu te digo a\npontuação total no final, tá bom? Boa sorte!");
});