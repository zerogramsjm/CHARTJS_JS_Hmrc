$(document).ready(function(){
    
    $('ul.tabs li').click(function(event2){
        // var tab_id = $(this).attr('data-tab');
        // chart.animateAgain();
        // chart1.animateAgain();
        // $('ul.tabs li').removeClass('current');
        // $('.tab-content').removeClass('current');
        // $(this).addClass('current');
        // $("#"+tab_id).addClass('current');
        })

  $('.nav li').click(function() {
  var tab_id = $(this).attr('data-tab');
    $(this).closest('.wrap').find('ul.nav li').removeClass('current');
  $(this).closest('.wrap').find('.tab-content').removeClass('current');
  $(this).addClass('current');
  $("#" + tab_id).addClass('current');

})

    $('.nav li').click(function() {
  var tab_id = $(this).attr('data-tab');
    $(this).closest('.wrap2').find('ul.nav li').removeClass('current');
  $(this).closest('.wrap2').find('.tab-content').removeClass('current');
  $(this).addClass('current');
  $("#" + tab_id).addClass('current');

})

    })


AmCharts.ready(function() {

    chart = new AmCharts.AmSerialChart();
    chart.dataProvider = chartData.world;
        chart.dataProvider = chartData.world;
                chart.categoryField = "country";
                chart.orderByField = "NOC";
                chart.startDuration = 1;
                chart.color = "#bbbbbb";
                chart.columnWidth = .6;
                chart.borderColor = "#fff";
                chart.lineAlpha = 0;
                chart.lineColor = "#ffffff";

                var valueAxis = new AmCharts.ValueAxis();
                valueAxis.axisAlpha = 0;
                valueAxis.dashLength = 2;
                valueAxis.fontSize = 8;
                valueAxis.includeAllValues = true;
                valueAxis.labelOffset = 0;
                valueAxis.minVerticalGap = 100;
                valueAxis.axisTitleOffset = 0;
                valueAxis.offset = 0;
                chart.addValueAxis(valueAxis);

                var categoryAxis = chart.categoryAxis;
                categoryAxis.labelRotation = 45;
                categoryAxis.fillAlpha = 0;
                categoryAxis.fillColor = "#ffffff";
                categoryAxis.axisAlpha = 0;
                categoryAxis.axisThickness = 0;
                categoryAxis.gridPosition = "start";
                categoryAxis.gridThicknes = 0;
                categoryAxis.labelsEnabled = true;
                categoryAxis.axisColor = "#ffffff";
                categoryAxis.fontSize = 8;
                categoryAxis.gridAlpha = 0;
                categoryAxis.equalSpacing = true;
                categoryAxis.autoGridCount = true;
                categoryAxis.maxSeries = 0;
                categoryAxis.gridCount = 1000;
                categoryAxis.labelFrequency = 1;
                categoryAxis.centerLabels = false;

                categoryAxis.labelRotation = 45;
                categoryAxis.fillAlpha = 0;
                categoryAxis.fillColor = "#ffffff";
                categoryAxis.axisAlpha = 0;
                categoryAxis.axisThickness = 0;
                categoryAxis.gridPosition = "start";
                categoryAxis.gridThicknes = 0;
                categoryAxis.labelsEnabled = true;
                categoryAxis.axisColor = "#ffffff";
                categoryAxis.fontSize = 8;
                categoryAxis.gridAlpha = 0;
                categoryAxis.equalSpacing = false;
                categoryAxis.autoGridCount = false;
                categoryAxis.maxSeries = 0;
                categoryAxis.gridCount = 1000;

                // GRAPH
                var graph = new AmCharts.AmGraph();
                chart.addGraph(graph);
                graph.valueField = "NOC";
                graph.balloonText = "";
                graph.type = "column";
                graph.lineAlpha = 0;
                graph.lineColor = "#ffffff";
                graph.fillAlphas = 1;
                graph.fillColors = "rgba(0, 153, 118, 0.5)";
                graph.fillColorsField = "color";
                graph.backgroundAlpha = 0;
                graph.axisAlpha = 0;
                graph.axisThickness = 0;
                graph.labelText = "[[label]]";
                graph.fontSize = 30;
                graph.color = "#72BA05";
                graph.labelAnchor = 2;

                var balloon = chart.balloon;
                balloon.enabled = false;

                var chartCursor = new AmCharts.ChartCursor();
                chartCursor.cursorAlpha = 0;
                chartCursor.zoomable = false;
                chartCursor.categoryBalloonEnabled = false;
                chart.addChartCursor(chartCursor);

                chart.creditsPosition = "top-right";

                chart.write("chartdiv");

});

//END OF CHART 1
//END OF CHART 1
//END OF CHART 1

AmCharts.ready(function() {
    chart1 = new AmCharts.AmSerialChart();
    chart1.dataProvider = chartData.world;
                chart1.categoryField = "country";
                chart1.orderByField = "VC";
                chart1.startDuration = 1;
                chart1.color = "#bbbbbb";
                chart1.columnWidth = .6;
                chart1.borderColor = "#fff";
                chart1.lineAlpha = 0;
                chart1.lineColor = "#ffffff";

                var valueAxis1 = new AmCharts.ValueAxis();
                valueAxis1.axisAlpha = 0;
                valueAxis1.dashLength = 2;
                valueAxis1.fontSize = 12;
                valueAxis1.minVerticalGap = 100;
                chart1.addValueAxis(valueAxis1);

                var categoryAxis1 = chart1.categoryAxis;
                categoryAxis1.labelRotation = 45;
                categoryAxis1.fillAlpha = 0;
                categoryAxis1.fillColor = "#ffffff";
                categoryAxis1.axisAlpha = 0;
                categoryAxis1.axisThickness = 0;
                categoryAxis1.gridPosition = "start";
                categoryAxis1.gridThicknes = 0;
                categoryAxis1.labelsEnabled = true;
                categoryAxis1.axisColor = "#ffffff";
                categoryAxis1.fontSize = 8;
                categoryAxis1.gridAlpha = 0;
                categoryAxis1.equalSpacing = false;
                categoryAxis1.autoGridCount = false;
                categoryAxis1.maxSeries = 0;
                categoryAxis1.gridCount = 1000;

                // GRAPH
                var graph1 = new AmCharts.AmGraph();
                graph1.fillColorsField = "color";
                chart1.addGraph(graph1);
                graph1.valueField = "VC";
                chart1.orderByField = "VC";
                graph1.balloonText = "£[[value]]";
                graph1.type = "column";
                graph1.lineAlpha = 0;
                graph1.lineColor = "#ffffff";
                graph1.fillAlphas = 1;
                graph1.fillColors = "rgba(0, 153, 118, 0.5)";
                graph1.backgroundAlpha = 0;
                graph1.axisAlpha = 0;
                graph1.axisThickness = 0;
                graph1.labelText = "[[label1]]";
                graph1.fontSize = 30;
                graph1.color = "#72BA05";
                graph1.labelAnchor = 100;
                graph1.labelOffset = 0;

                var balloon1 = chart1.balloon;
                balloon1.enabled = false;

                chart1.addListener( "rollOverGraph", function( event ) {
                } );

                // CURSOR
                var chartCursor1 = new AmCharts.ChartCursor();
                chartCursor1.cursorAlpha = 0;
                chartCursor1.zoomable = false;
                chartCursor1.categoryBalloonEnabled = false;
                chart1.addChartCursor(chartCursor1);

                chart1.creditsPosition = "top-right";

                chart1.write("chartdiv1");

//END OF CHART 2
//END OF CHART 2
//END OF CHART 2

                map = new AmCharts.AmMap();
                map.pathToImages = "http://www.ammap.com/lib/images/";
                var dataProvider = {
                    mapVar: AmCharts.maps.uksvg_cut_2
                };

        $('#tab-1-tab').click(function(event2){
        chart.animateAgain();
        chart1.animateAgain();
        });

        $('#tab-3-tab').click(function(event2){
        chart.animateAgain();
        chart1.animateAgain();
        $("#tab-1-tab").removeClass('current');
        $("#tab-1-tab").removeClass('active');
        });

        $('#tab-2-tab').click(function(event2){
        chart.animateAgain();
        chart1.animateAgain();
        $("#tab-1-tab").removeClass('current');
        $("#tab-1-tab").removeClass('active');
        });

                map.addListener("clickMapObject", function(event) {

        chart.animateAgain();
        chart1.animateAgain();
        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');
        $(this).addClass('current');
        $("#tab-1-tab").addClass('active');
        
        $('#tab-3-tab').removeClass('current');
        $('#tab-2-tab').removeClass('current');
        $("#tab-1").addClass('current');

        //SECTORS

        $("#tab-5").addClass('current');
        $("#tab-5-tab").addClass('active');

        $("#tab-6-tab").removeClass('current');
        $("#tab-7-tab").removeClass('active');

        $("#tab-6-tab").removeClass('current');
        $("#tab-7-tab").removeClass('active');
        
        var area1 = map.getObjectById("GBUKI");
        area1.color = '#DDDDDD';
        area1.colorReal = area1.color;
        map.returnInitialColor(area1);

            if (event.mapObject.id == "GBUKI") {
        area1.color = '#72BA05';
        area1.colorReal = area1.color;
        
        map.returnInitialColor(area1);
            }
            else{
        area1.color = '#DDDDDD';
        area1.colorReal = area1.color;
        map.returnInitialColor(area1);
            }

    chart.dataProvider.sort( function( a, b ) {
    if ( a[ chart.orderByField ] > b[ chart.orderByField ] ) {
      return -1;
    } else if ( a[ chart.orderByField ] == b[ chart.orderByField ] ) {
      return 0;
    }
    return 1;
      } );
        chart.dataProvider = chartData[event.mapObject.id];
        chart.clearLabels();
     [ "serial" ];
        chart.validateData();

        chart.clearLabels();

// - - - - - -

chart.dataProvider.sort( function( a, b ) {
    if ( a[ chart.orderByField ] > b[ chart.orderByField ] ) {
      return -1;
    } else if ( a[ chart.orderByField ] == b[ chart.orderByField ] ) {
      return 0;
    }
    return 1;
  } );
    chart.dataProvider = chartData[event.mapObject.id];
    chart.clearLabels();
 [ "serial" ];
    chart.validateData();

                chart.clearLabels();

// - - - - - -
// - - - - - - CHART 2
// - - - - - -

    chart1.dataProvider.sort( function( a, b ) {
    if ( a[ chart1.orderByField ] > b[ chart1.orderByField ] ) {
      return -1;
    } else if ( a[ chart1.orderByField ] == b[ chart1.orderByField ] ) {
      return 0;
    }
    return 1;
  } );
    chart1.dataProvider = chartData[event.mapObject.id];
    chart1.clearLabels();
 [ "serial" ];
    chart1.validateData();

                chart1.clearLabels();

// - - - - - -

chart1.dataProvider.sort( function( a, b ) {
    if ( a[ chart1.orderByField ] > b[ chart1.orderByField ] ) {
      return -1;
    } else if ( a[ chart1.orderByField ] == b[ chart1.orderByField ] ) {
      return 0;
    }
    return 1;
  } );
    chart1.dataProvider = chartData[event.mapObject.id];
    chart1.clearLabels();
 [ "serial" ];
    chart1.validateData();

                chart1.clearLabels();

// - - - - - -
// - - - - - - CHART 2 END
// - - - - - -

            document.getElementById( "tab-3-content" ).innerHTML = event.mapObject.AC;
            document.getElementById( "location" ).innerHTML = '<b>' + event.mapObject.title + '</b>';

            document.getElementById( "info" ).innerHTML = '<p><b>' + 'R&D in ' + event.mapObject.title + '</b></p><p>' + '</p>';

        });

        dataProvider.areas = [
            { title: "North East", id: "GBUKC", selectable: true, info: "Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus varius blandit sit amet non magna.", NOC: "£1,185", VC: "55", AC: "£46,414"},

            { title: "North West", id: "GBUKD", selectable: true, info: "Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus varius blandit sit amet non magna.", NOC: "3,845", VC: "160", AC: "£41,612" },

            { title: "Yorkshire & the Humber", id: "GBUKE", selectable: true, info: "Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus varius blandit sit amet non magna.", NOC: "2,275", VC: "85", AC: "£37,363"},

            { title: "East Midlands", id: "GBUKF", selectable: true, info: "Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus varius blandit sit amet non magna.", NOC: "2,080", VC: "100", AC: "£48,077" },

            { title: "West Midlands", id: "GBUKG", selectable: true, info: "Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus varius blandit sit amet non magna.", NOC: "2,905", VC: "110", AC: "£37,866" },

            { title: "East of England", id: "GBUKH", selectable: true, info: "Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus varius blandit sit amet non magna.", NOC: "3,315", VC: "210", AC: "£63,348" },

            { title: "London", id: "GBUKI", selectable: true, info: "Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus varius blandit sit amet non magna.", NOC: "6,560", VC: "490", AC: "£74,695" },

            { title: "South East", id: "GBUKJ", selectable: true, info: "Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus varius blandit sit amet non magna.", NOC: "5,250", VC: "330", AC: "£62,857" },

            { title: "South West", id: "GBUKK", selectable: true, info: "Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus varius blandit sit amet non magna.", NOC: "2,710", VC: "110", AC: "£40,590" },

            { title: "Wales", id: "GBUKL", selectable: true, info: "Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus varius blandit sit amet non magna.", NOC: "1,080", VC: "50", AC: "£46,590" },

            { title: "Scotland", id: "GBUKM", selectable: true, info: "Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus varius blandit sit amet non magna.", NOC: "1,425", VC: "75", AC: "£52,632"},

            { title: "Northern Ireland", id: "GBUKN", selectable: true, info: "Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus varius blandit sit amet non magna.", NOC: "995", VC: "40", AC: "£40,201"
        }
    ];

              var mapBalloon = map.balloon;
              mapBalloon.maxWidth = 0;
              mapBalloon.fontSize = 0;
              mapBalloon.fillAlpha = 0;
              mapBalloon.borderAlpha = 0;
              mapBalloonshadowAlpha = 0;
              mapBalloon.hide();
              mapBalloon.borderThickness = 0;

              map.areasSettings = {
                  unlistedAreasColor: "#DDDDDD",
                  rollOverOutlineColor: "#FFFFFF",
                  rollOverColor: "#CC0000",
                  zoomOnDoubleClick: false,
                  color: "#DFE0E2",
                  selectable: true,
                  selectedColor: "#78BB1E",
                  rollOverColor: "#5F676F",
                  outlineThickness: "1",
                  outlineColor: "#ffffff",
                  rollOverOutlineColor: "#ffffff",
              };

              function preSelectCountries(list) {
                for(var i = 0; i < list.length; i++) {
                  var area = map.getObjectById(list[i]);
                  area.showAsSelected = true;
                  map.returnInitialColor(area);
                }
              }

        map.zoomControl = {
            zoomControlEnabled: false,
            homeButtonEnabled: false,
            zoomOnDoubleClick: false,
            panControlEnabled: false,
            zoomFactor: 0
        };

        map.dataProvider = dataProvider;
        map.write("mapdiv");
        map.dragMap = false;

        map.showHandOnHover = true;

        $("#myid li").click(function() {

   if (this.id === 'GBUKC') {
chart.dataProvider = chartData.GBUKC;
chart1.dataProvider = chartData.GBUKC;
document.getElementById( "tab-3-content" ).innerHTML = "£46,414";
document.getElementById( "info" ).innerHTML = '<p><b>' + 'R&D in North East' + '</b></p><p>' + '</p>';
document.getElementById( "location" ).innerHTML = 'North East';
graph1.labelText = "[[label1]]";
dropdowntest();
   }
   if (this.id === 'GBUKD') {
chart.dataProvider = chartData.GBUKD;
chart1.dataProvider = chartData.GBUKD;
document.getElementById( "tab-3-content" ).innerHTML = "£41,612";
document.getElementById( "info" ).innerHTML = '<p><b>' + 'R&D in North West' + '</b></p><p>' + '</p>';
document.getElementById( "location" ).innerHTML = 'North West';
dropdowntest();
   }
   if (this.id === 'GBUKE') {
chart.dataProvider = chartData.GBUKE;
chart1.dataProvider = chartData.GBUKE;
document.getElementById( "tab-3-content" ).innerHTML = "£37,363";
document.getElementById( "info" ).innerHTML = '<p><b>' + 'R&D in Yorkshire & The Humber' + '</b></p><p>' + '</p>';
document.getElementById( "location" ).innerHTML = 'Yorkshire & The Humber';
dropdowntest();
   }
   if (this.id === 'GBUKF') {
chart.dataProvider = chartData.GBUKF;
chart1.dataProvider = chartData.GBUKF;
document.getElementById( "tab-3-content" ).innerHTML = "£48,077";
document.getElementById( "info" ).innerHTML = '<p><b>' + 'R&D in East Midlands' + '</b></p><p>' + '</p>';
document.getElementById( "location" ).innerHTML = 'East Midlands';
dropdowntest();
   }
   if (this.id === 'GBUKG') {
chart.dataProvider = chartData.GBUKG;
chart1.dataProvider = chartData.GBUKG;
document.getElementById( "tab-3-content" ).innerHTML = "£37,866";
document.getElementById( "info" ).innerHTML = '<p><b>' + 'R&D in West Midlands' + '</b></p><p>' + '</p>';
document.getElementById( "location" ).innerHTML = 'West Midlands';
dropdowntest();
   }
   if (this.id === 'GBUKH') {
chart.dataProvider = chartData.GBUKH;
chart1.dataProvider = chartData.GBUKH;
document.getElementById( "tab-3-content" ).innerHTML = "£63,348";
document.getElementById( "info" ).innerHTML = '<p><b>' + 'R&D in  East of England' + '</b></p><p>' + '</p>';
document.getElementById( "location" ).innerHTML = 'East of England';
dropdowntest();
   }
   if (this.id === 'GBUKI') {
chart.dataProvider = chartData.GBUKI;
chart1.dataProvider = chartData.GBUKI;
document.getElementById( "tab-3-content" ).innerHTML = "£74,695";
document.getElementById( "info" ).innerHTML = '<p><b>' + 'R&D in London' + '</b></p><p>' + '</p>';
document.getElementById( "location" ).innerHTML = 'London';
dropdowntest();
   }
   if (this.id === 'GBUKJ') {
chart.dataProvider = chartData.GBUKJ;
chart1.dataProvider = chartData.GBUKJ;
document.getElementById( "tab-3-content" ).innerHTML = "£62,857";
document.getElementById( "info" ).innerHTML = '<p><b>' + 'R&D in South East' + '</b></p><p>' + '</p>';
document.getElementById( "location" ).innerHTML = 'South East';
dropdowntest();
   }
   if (this.id === 'GBUKK') {
chart.dataProvider = chartData.GBUKK;
chart1.dataProvider = chartData.GBUKK;
document.getElementById( "tab-3-content" ).innerHTML = "£40,590";
document.getElementById( "info" ).innerHTML = '<p><b>' + 'R&D in South West' + '</b></p><p>' + '</p>';
document.getElementById( "location" ).innerHTML = 'South West';
dropdowntest();
   }
   if (this.id === 'GBUKL') {
chart.dataProvider = chartData.GBUKL;
chart1.dataProvider = chartData.GBUKL;
document.getElementById( "tab-3-content" ).innerHTML = "£46,590";
document.getElementById( "info" ).innerHTML = '<p><b>' + 'R&D in Wales' + '</b></p><p>' + '</p>';
document.getElementById( "location" ).innerHTML = 'Wales';
dropdowntest();
   }
   if (this.id === 'GBUKM') {
chart.dataProvider = chartData.GBUKM;
chart1.dataProvider = chartData.GBUKM;
document.getElementById( "tab-3-content" ).innerHTML = "£52,632";
document.getElementById( "info" ).innerHTML = '<p><b>' + 'R&D in Scotland' + '</b></p><p>' + '</p>';
document.getElementById( "location" ).innerHTML = 'Scotland';
dropdowntest();
   }
   if (this.id === 'GBUKN') {
chart.dataProvider = chartData.GBUKN;
chart1.dataProvider = chartData.GBUKN;
document.getElementById( "tab-3-content" ).innerHTML = "£40,201";
document.getElementById( "info" ).innerHTML = '<p><b>' + 'R&D in Northern Ireland' + '</b></p><p>' + '</p>';
document.getElementById( "location" ).innerHTML = 'Northern Ireland';
dropdowntest();
   }

});

function dropdowntest(){

        var tab_id = "tab-1";
        chart.animateAgain();
        chart1.animateAgain();
        $('ul.tabs li').removeClass('current');
        $("#tab-1-tab").addClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#tab-1").addClass('current');

    chart.validateData();
    chart.clearLabels();
    chart.dataProvider.sort( function( a, b ) {
    if ( a[ chart.orderByField ] > b[ chart.orderByField ] ) {
      return -1;
    } else if ( a[ chart.orderByField ] == b[ chart.orderByField ] ) {
      return 0;
    }
    return 1;
  } );
    chart.clearLabels();
 [ "serial" ];
    chart.animateAgain();
    chart.validateData();

    chart.clearLabels();

// - - - - - -

chart.dataProvider.sort( function( a, b ) {
    if ( a[ chart.orderByField ] > b[ chart.orderByField ] ) {
      return -1;
    } else if ( a[ chart.orderByField ] == b[ chart.orderByField ] ) {
      return 0;
    }
    return 1;
  } );
    chart.clearLabels();
 [ "serial" ];
    chart.validateData();
    chart.clearLabels();
                chart.animateAgain();
                chart.clearLabels();

    chart1.dataProvider.sort( function( a, b ) {
    if ( a[ chart1.orderByField ] > b[ chart1.orderByField ] ) {
      return -1;
    } else if ( a[ chart1.orderByField ] == b[ chart1.orderByField ] ) {
      return 0;
    }
    return 1;
  } );
    chart1.clearLabels();
 [ "serial" ];
    chart1.validateData();

                chart1.clearLabels();

                // - - - - - -

chart1.dataProvider.sort( function( a, b ) {
    if ( a[ chart1.orderByField ] > b[ chart1.orderByField ] ) {
      return -1;
    } else if ( a[ chart1.orderByField ] == b[ chart1.orderByField ] ) {
      return 0;
    }
    return 1;
  } );
    chart1.clearLabels();
 [ "serial" ];
    chart1.validateData();

                chart1.clearLabels();
}

function init() {
    var area1 = map.getObjectById("GBUKI");
    area1.color = '#72BA05';
    area1.colorReal = area1.color;
    map.returnInitialColor(area1);
    $(document).on('pagebeforeshow', '#index', function(){ 
        $("#tabs").tabs();      
    });

};

init();

// - - - - 

});

//DROP DOWN - - - - -