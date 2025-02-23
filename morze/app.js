function i_s(ins_sym) {
    document.morze.input_text.value += ins_sym;
}

function convert() {
    var text2morze_value = document.getElementById("text2morze");
    var morze2rus_value = document.getElementById("morze2rus");
    var morze2lat_value = document.getElementById("morze2lat");
    var input_text_value = document.getElementById("input_text").value;
    var current_symbol = input_text_value.charAt(0);
    document.morze.output_text.value = "";
    if (text2morze_value.checked) {
        if ((current_symbol == ".") || (current_symbol == ",") || (current_symbol == "*") || (current_symbol == "+") || (current_symbol == "·") || (current_symbol == "•") || (current_symbol == "-") || (current_symbol == "−")) {  /* Если текущий символ равен любому знаку Морзе */
            document.morze.output_text.value += "Внимание! Переключатель стоит в положении Текст в код Морзе, а сообщение начинается со знака препинания! Если всё верно, то результат конвертирования:  ";
        }
        convert_text2morze(input_text_value);
    }
    if (morze2rus_value.checked) {
        convert_morze2rus(input_text_value);
    }
    if (morze2lat_value.checked) {
        convert_morze2lat(input_text_value);
    }
}

function convert_text2morze(input_text_value) {
    input_text_value = input_text_value.toUpperCase();
    for (var string_count = 0; string_count < input_text_value.length; string_count++) {
        var current_symbol = input_text_value.charAt(string_count);
        var unknown_symbol = true;
        if (current_symbol == "Ё") {
            current_symbol = "Е";
        }
        for (var massiv_count = 0; massiv_count < massiv_rus.length; massiv_count++) {
            if (current_symbol == massiv_rus[massiv_count]) {
                document.morze.output_text.value += massiv_morze[massiv_count] + " ";
                unknown_symbol = false;
            }
        }
        for (var massiv_count = 0; massiv_count < massiv_lat.length; massiv_count++) {
            if (current_symbol == massiv_lat[massiv_count]) {
                document.morze.output_text.value += massiv_morze[massiv_count] + " ";
                unknown_symbol = false;
            }
        }
        for (var massiv_count = 0; massiv_count < massiv_num_sym.length; massiv_count++) {
            if (current_symbol == massiv_num_sym[massiv_count]) {
                document.morze.output_text.value += massiv_morze[massiv_count] + " ";
                unknown_symbol = false;
            }
        }
    }
}


function convert_morze2rus(input_text_value) {
    var morze_symbol = "";
    for (var string_count = 0; string_count <= input_text_value.length; string_count++) {
        var current_symbol = input_text_value.charAt(string_count);
        if ((current_symbol == ".") || (current_symbol == ",") || (current_symbol == "*") || (current_symbol == "+") || (current_symbol == "·")) {
            current_symbol = "•";
        }
        if ((current_symbol == "-") || (current_symbol == "−")) {
            current_symbol = "−";
        }
        if ((current_symbol == "•") || (current_symbol == "−")) {
            morze_symbol += current_symbol;

        } else {
            if ((current_symbol == " ") && (input_text_value.charAt(string_count - 1) == " ")) {
                document.morze.output_text.value += " ";
            }
            for (var massiv_count = 0; massiv_count < massiv_rus.length; massiv_count++) {
                if (morze_symbol == massiv_morze[massiv_count]) {
                    document.morze.output_text.value += massiv_rus[massiv_count];
                    morze_symbol = "";
                }
            }
            for (var massiv_count = 0; massiv_count < massiv_num_sym.length; massiv_count++) {
                if (morze_symbol == massiv_morze[massiv_count]) {
                    document.morze.output_text.value += massiv_num_sym[massiv_count];
                    morze_symbol = "";
                }
            }
        }
    }
}

function convert_morze2lat(input_text_value) {
    var morze_symbol = "";
    for (var string_count = 0; string_count <= input_text_value.length; string_count++) {
        var current_symbol = input_text_value.charAt(string_count);
        if ((current_symbol == ".") || (current_symbol == ",") || (current_symbol == "*") || (current_symbol == "+") || (current_symbol == "·")) {
            current_symbol = "•";
        }
        if ((current_symbol == "-") || (current_symbol == "−")) {
            current_symbol = "−";
        }
        if ((current_symbol == "•") || (current_symbol == "−")) {
            morze_symbol += current_symbol;
        } else {
            if ((current_symbol == " ") && (input_text_value.charAt(string_count - 1) == " ")) {
                document.morze.output_text.value += " ";
            }
            for (var massiv_count = 0; massiv_count < massiv_lat.length; massiv_count++) {
                if (morze_symbol == massiv_morze[massiv_count]) {
                    document.morze.output_text.value += massiv_lat[massiv_count];
                    morze_symbol = "";
                }
            }
            for (var massiv_count = 0; massiv_count < massiv_num_sym.length; massiv_count++) {
                if (morze_symbol == massiv_morze[massiv_count]) {
                    document.morze.output_text.value += massiv_num_sym[massiv_count];
                    morze_symbol = "";
                }
            }
        }
    }
}

var focus_on_input = document.getElementById("input_text");
focus_on_input.focus();
let massiv_rus = ["А", "Б", "В", "Г", "Д", "Е", "Ж", "З", "И", "Й", "К", "Л", "М", "Н", "О", "П", "Р", "С", "Т", "У", "Ф", "Х", "Ц", "Ч", "Ш", "Щ", "Ъ", "Ы", "Ь", "Э", "Ю", "Я"];
let massiv_lat = ["A", "B", "W", "G", "D", "E", "V", "Z", "I", "J", "K", "L", "M", "N", "O", "P", "R", "S", "T", "U", "F", "H", "C", "Ö", "CH", "Q", "Ñ", "Y", "X", "É", "Ü", "Ä"];
let massiv_num_sym = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ".", ",", ":", ";", "(", "'", "\"", "—", "/", "?", "!", "=", "Error", "@", "End contact", " ", ")", "&", "+", "_", "$", "-", "\n"];
let massiv_morze = ["•−", "−•••", "•−−", "−−•", "−••", "•", "•••−", "−−••", "••", "•−−−", "−•−", "•−••", "−−", "−•", "−−−", "•−−•", "•−•", "•••", "−", "••−", "••−•", "••••", "−•−•", "−−−•", "−−−−", "−−•−", "−−•−−", "−•−−", "−••−", "••−••", "••−−", "•−•−", "•−−−−", "••−−−", "•••−−", "••••−", "•••••", "−••••", "−−•••", "−−−••", "−−−−•", "−−−−−", "••••••", "•−•−•−", "−−−•••", "−•−•−•", "−•−−•", "•−−−−•", "•−••−•", "−••••−", "−••−•", "••−−••", "−−••−−", "−•••−", "••••••••", "•−−•−•", "••−•−", " ", "−•−−•−", "•−•••", "•−•−•", "••−−•−", "•••−••−", "−••••−", "\n"];


