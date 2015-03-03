$(document).ready(function() {
    var listUslugi = {
        "1": {"name":"снятие", "cost":"150"},
        "2": {"name":"снятие запасного колеса", "cost":"150"},
        "3": {"name":"снятие спаренных колес", "cost":"175"},
        "4": {"name":"установка", "cost":"150"},
        "5": {"name":"установка запасного колеса", "cost":"150"},
        "6": {"name":"установка спаренных колес", "cost":"175"},
        "7": {"name":"сборка", "cost":"200"},
        "8": {"name":"разборка", "cost":"200"},
        "9": {"name":"подкачка", "cost":"40"},
        "10": {"name":"косметический ремонт", "cost":"500"},
        "12": {"name":"утилизация колеса", "cost":"100"},
        "13": {"name":"чистка диска", "cost":"100"},
        "14": {"name":"герметизация бортов", "cost":"100"},
        "15": {"name":"ремонт камеры (1 повреждение)", "cost":"100"},
        "16": {"name":"ремонт шины (1 повреждение)", "cost":"300"},
        "17": {"name":"ремонт бескамерной шины с применением жгута", "cost":"150"},
        "18": {"name":"установка пластыря холодная", "cost":"300"},
        "19": {"name":"установка пластыря горячая", "cost":"500"},
        "20": {"name":"установка грибка", "cost":"200"},
        "21": {"name":"установка ножки гриба", "cost":"200"},
        "22": {"name":"горячая вулканизация камеры", "cost":"150"}
    };


    var listDiametr = {
        "1":{"rad":"12","val":"12"},
        "2":{"rad":"13","val":"12"},
        "3":{"rad":"14","val":"12"},
        "4":{"rad":"15","val":"12"},
        "5":{"rad":"16","val":"12"},
        "6":{"rad":"17","val":"12"},
        "7":{"rad":"18","val":"12"},
        "8":{"rad":"19","val":"12"},
        "9":{"rad":"20","val":"12"},
        "10":{"rad":"22","val":"12"},
        "11":{"rad":"23","val":"12"},
        "12":{"rad":"24","val":"12"},
        "13":{"rad":"25","val":"12"},
        "14":{"rad":"26","val":"12"}
    }
    var ccount = 0;
    function addCalc() {
        ccount +=1;
        $("#calc").append('<div id ="calc' + ccount+'">' +
        '\n<select id="usl" name="uslugi" onchange="calc()"></select>' +
        '\n<input class="types" id="type" type="button" value="тип" onchange="calc()" data-toggle="modal" data-target=".types_wind">' +
        '\n</div>' +
        '\n<select id = "rad" name="diametr" onchange="calc()"></select>' +
        '\n<input type="number" name="kol" onchange="calc()">' +
        '\nСумма: <output id="ans" name="ans"/>' +
        '\n</div>');
    };
    addCalc();


        $(".choose").click(function () {
            var out = document.getElementById("type");
            out.value = this.value;
            $(".types_wind").modal("hide");
            loadDiameterSelector(listTypes[out.value]["min"],listTypes[out.value]["max"]);
        });




    $('select[name="uslugi"], select[name="diametr"]')
        .append('<option value="" selected="selected">-</option>');

    //
    // Selector loaders
    //
    function loadUsl() {
        var select = $('select[name="uslugi"]');
        select
            .empty()
            .append('<option value="" selected="selected">-</option>');

        for (var k in listUslugi) {
            select.append(
                $('<option />')
                    .attr('value', k)
                    .text(listUslugi[k]['name'])
            );
        }
    }
    loadUsl();


    function loadDiameterSelector(min,max) {
        var select = $('select[name="diametr"]');
        select
            .empty()
            .append('<option value="" selected="selected">-</option>');

        for (var k in listDiametr) {
            if(parseInt(k)>= parseInt(min) && parseInt(k) <= parseInt(max)) {
                select.append(
                    $('<option />')
                        .attr('value', k)
                        .text(listDiametr[k]['rad'])
                );
            }
        }
    }
    //
    // Calculator
    //
    function calc() {
        var usl      = listUslugilist[$('select[name="usl"]').val()]["cost"];
        var diameter  = listDiametr[$('select[name="diameter"]').val()]["val"];
        var kol = $('input[name="kol"]').val();
        $('#ans').val() = parseInt(usl)*parseInt(diameter)*parseInt(kol);
    }

});
