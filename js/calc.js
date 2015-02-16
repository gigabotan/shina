$(document).ready(function() {
    var listUslugi = {
        "1": {"name":"снятие", "cost":"150"},
        "2": {"name":"балансировка", "cost":"150"},
        "3": {"name":"установка", "cost":"150"},
        "4": {"name":"мойка", "cost":"150"},
        "5": {"name":"сборка", "cost":"150"},
        "6": {"name":"разборка", "cost":"150"},
        "7": {"name":"подкачка", "cost":"150"},
        "8": {"name":"косметический ремонт", "cost":"150"},
        "9": {"name":"вулканизация", "cost":"150"}
    };
    var listTypes = {
        "light":{"min":"1", "max":"7"},
        "average":{"min":"5", "max":"12"},
        "big":{"min":"7", "max":"14"},
        "traktor":{"min":"8", "max":"14"}
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
        '\n<div class="modal fade types_wind" aria-hidden="true" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" style="border: solid 3px;">' +
            '\n<div class="modal-dialog modal-sm">' +
                '\n<input class="choose" id="light" type="button" value="light">' +
                '\n<input class="choose" id="not_l" type="button" value="average">' +
                '\n<br>' +
                '\n<input class="choose" id="vbig" type="button" value="big">' +
                '\n<input class="choose" id="trakt" type="button" value="traktor">' +
            '\n</div>' +
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