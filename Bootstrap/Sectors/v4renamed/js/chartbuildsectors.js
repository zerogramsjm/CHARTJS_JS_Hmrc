$(document).ready(function(){
    
    $('ul.tabs li').click(function(event2){
        var tab_id = $(this).attr('data-tab');
        chart.animateAgain();
        chart1sectors.animateAgain();
        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');
        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
        })
    })

AmCharts.ready(function() {

    chart = new AmCharts.AmSerialChart();
        chart.dataProvider = chartData.worldsectors;
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
                valueAxis.minVerticalGap = 500;
                valueAxis.axisTitleOffset = 0;
                valueAxis.offset = 0;
                chart.addValueAxis(valueAxis);

                var categoryAxis = chart.categoryAxis;
                categoryAxis.labelRotation = 90;
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
                categoryAxis.color = "#fff";

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
                chartCursor.categoryBalloonEnabled = true;
                chartCursor.categoryBalloonColor = "#5D6770";
                chart.addChartCursor(chartCursor);

                chart.creditsPosition = "top-right";

                chart.write("chartdiv");

});

//END OF CHART 1
//END OF CHART 1
//END OF CHART 1

AmCharts.ready(function() {
    chart1sectors = new AmCharts.AmSerialChart();
    chart1sectors.dataProvider = chartData.worldsectors;
                chart1sectors.categoryField = "country";
                chart1sectors.orderByField = "VC";
                chart1sectors.startDuration = 1;
                chart1sectors.color = "#bbbbbb";
                chart1sectors.columnWidth = .6;
                chart1sectors.borderColor = "#fff";
                chart1sectors.lineAlpha = 0;
                chart1sectors.lineColor = "#ffffff";

                var valueAxis1sectors = new AmCharts.ValueAxis();
                valueAxis1sectors.axisAlpha = 0;
                valueAxis1sectors.dashLength = 8;
                valueAxis1sectors.fontSize = 8;
                valueAxis1sectors.minVerticalGap = 100;
                chart1sectors.addValueAxis(valueAxis1sectors);

                var categoryAxis1sectors = chart1sectors.categoryAxis;
                categoryAxis1sectors.labelRotation = 90;
                categoryAxis1sectors.fillAlpha = 0;
                categoryAxis1sectors.fillColor = "#ffffff";
                categoryAxis1sectors.axisAlpha = 0;
                categoryAxis1sectors.axisThickness = 0;
                categoryAxis1sectors.gridPosition = "start";
                categoryAxis1sectors.gridThicknes = 0;
                categoryAxis1sectors.labelsEnabled = true;
                categoryAxis1sectors.axisColor = "#ffffff";
                categoryAxis1sectors.fontSize = 8;
                categoryAxis1sectors.gridAlpha = 0;
                categoryAxis1sectors.equalSpacing = false;
                categoryAxis1sectors.autoGridCount = false;
                categoryAxis1sectors.maxSeries = 0;
                categoryAxis1sectors.gridCount = 1000;

                // GRAPH
                var graph1sectors = new AmCharts.AmGraph();
                graph1sectors.fillColorsField = "color";
                chart1sectors.addGraph(graph1sectors);
                graph1sectors.valueField = "VC";
                chart1sectors.orderByField = "VC";
                graph1sectors.balloonText = "£[[value]]";
                graph1sectors.type = "column";
                graph1sectors.lineAlpha = 0;
                graph1sectors.lineColor = "#ffffff";
                graph1sectors.fillAlphas = 1;
                graph1sectors.fillColors = "rgba(0, 153, 118, 0.5)";
                graph1sectors.backgroundAlpha = 0;
                graph1sectors.axisAlpha = 0;
                graph1sectors.axisThickness = 0;
                graph1sectors.labelText = "[[label1]]";
                graph1sectors.fontSize = 30;
                graph1sectors.color = "#72BA05";
                graph1sectors.labelAnchor = 100;
                graph1sectors.labelOffset = 0;
                categoryAxis1sectors.color = "#fff";

                var balloon1sectors = chart1sectors.balloon;
                balloon1sectors.enabled = false;

                chart1sectors.addListener( "rollOverGraph", function( event ) {
                setOpacity( event.graph1, 1 );
                } );

                // CURSOR
                var chartCursor1sectors = new AmCharts.ChartCursor();
                chartCursor1sectors.cursorAlpha = 0;
                chartCursor1sectors.zoomable = false;
                chartCursor1sectors.categoryBalloonEnabled = true;
                chartCursor1sectors.categoryBalloonColor = "#5D6770";
                chart1sectors.addChartCursor(chartCursor1sectors);

                chart1sectors.creditsPosition = "top-right";

                chart1sectors.write("chartdiv1sectors");

var $carouselMain = $('.carousel-main').flickity();

var $carouselNav = $('.carousel-nav').flickity({
  contain: true,
  pageDots: false,
});

$carouselNav.on( 'staticClick.flickity', function(  event, pointer, cellElement, cellIndex ) {
  if ( cellElement.id == 'GBUKCsectors' ) {
     document.getElementById("GBUKCsectors").style.background= "linear-gradient(#B0E55B, #81BC49)";
chart.dataProvider = chartData.GBUKCsectors;
chart1sectors.dataProvider = chartData.GBUKCsectors;
document.getElementById( "tab-3-contentsectors" ).innerHTML = "£48,780";
document.getElementById( "infosectors" ).innerHTML = '<p><b>' + 'Agriculture, Forestry, Fishing' + '</b></p><p>' + '</p>';
document.getElementById( "location" ).innerHTML = 'Agriculture, Forestry, Fishing';

document.getElementById( "body-text" ).innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud e';

graph1sectors.labelText = "[[label1]]";
dropdowntest();
  }
  if ( cellElement.id == 'GBUKDsectors' ) {
    document.getElementById("GBUKDsectors").style.background= "linear-gradient(#B0E55B, #81BC49)";
chart.dataProvider = chartData.GBUKDsectors;
chart1sectors.dataProvider = chartData.GBUKDsectors;
document.getElementById( "tab-3-contentsectors" ).innerHTML = "N/A";
document.getElementById( "infosectors" ).innerHTML = '<p><b>' + 'Mining & Quarrying' + '</b></p><p>' + '</p>';
document.getElementById( "location" ).innerHTML = 'Mining & Quarrying';

document.getElementById( "body-text" ).innerHTML = 'xercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cill';

dropdowntest();
  }
  if ( cellElement.id == 'GBUKEsectors' ) {
    document.getElementById("GBUKEsectors").style.background= "linear-gradient(#B0E55B, #81BC49)";
chart.dataProvider = chartData.GBUKEsectors;
chart1sectors.dataProvider = chartData.GBUKEsectors;
document.getElementById( "tab-3-contentsectors" ).innerHTML = "£47,016";
document.getElementById( "infosectors" ).innerHTML = '<p><b>' + 'Manufacturing' + '</b></p><p>' + '</p>';
document.getElementById( "location" ).innerHTML = 'Manufacturing';

document.getElementById( "body-text" ).innerHTML = 'um dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';

dropdowntest();
  }
  if ( cellElement.id == 'GBUKFsectors' ) {
    document.getElementById("GBUKFsectors").style.background= "linear-gradient(#B0E55B, #81BC49)";
chart.dataProvider = chartData.GBUKFsectors;
chart1sectors.dataProvider = chartData.GBUKFsectors;
document.getElementById( "tab-3-contentsectors" ).innerHTML = "£76,923";
document.getElementById( "infosectors" ).innerHTML = '<p><b>' + 'Electricity, Gas, Steam and Air Conditioning' + '</b></p><p>' + '</p>';
document.getElementById( "location" ).innerHTML = 'Electricity, Gas, Steam and Air Conditioning';

document.getElementById( "body-text" ).innerHTML = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ip';

dropdowntest();
  }
  if ( cellElement.id == 'GBUKGsectors' ) {
    document.getElementById("GBUKGsectors").style.background= "linear-gradient(#B0E55B, #81BC49)";
chart.dataProvider = chartData.GBUKGsectors;
chart1sectors.dataProvider = chartData.GBUKGsectors;
document.getElementById( "tab-3-contentsectors" ).innerHTML = "£52,632";
document.getElementById( "infosectors" ).innerHTML = '<p><b>' + 'Water, Sewerage and Waste' + '</b></p><p>' + '</p>';
document.getElementById( "location" ).innerHTML = 'Water, Sewerage and Waste';

document.getElementById( "body-text" ).innerHTML = 'quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas ';

dropdowntest();
  }
  if ( cellElement.id == 'GBUKHsectors' ) {
    document.getElementById("GBUKHsectors").style.background= "linear-gradient(#B0E55B, #81BC49)";
chart.dataProvider = chartData.GBUKHsectors;
chart1sectors.dataProvider = chartData.GBUKHsectors;
document.getElementById( "tab-3-contentsectors" ).innerHTML = "£48,246";
document.getElementById( "infosectors" ).innerHTML = '<p><b>' + 'Construction' + '</b></p><p>' + '</p>';
document.getElementById( "location" ).innerHTML = 'Construction';

document.getElementById( "body-text" ).innerHTML = ' sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,';

dropdowntest();
  }
  if ( cellElement.id == 'GBUKIsectors' ) {
    document.getElementById("GBUKIsectors").style.background= "linear-gradient(#B0E55B, #81BC49)";
chart.dataProvider = chartData.GBUKIsectors;
chart1sectors.dataProvider = chartData.GBUKIsectors;
document.getElementById( "tab-3-contentsectors" ).innerHTML = "£33,693";
document.getElementById( "infosectors" ).innerHTML = '<p><b>' + 'Wholesale & Retail Trade, Repairs' + '</b></p><p>' + '</p>';
document.getElementById( "location" ).innerHTML = 'Wholesale & Retail Trade, Repairs';

document.getElementById( "body-text" ).innerHTML = 'qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam';

dropdowntest();
  }
  if ( cellElement.id == 'GBUKJsectors' ) {
    document.getElementById("GBUKJsectors").style.background= "linear-gradient(#B0E55B, #81BC49)";
chart.dataProvider = chartData.GBUKJsectors;
chart1sectors.dataProvider = chartData.GBUKJsectors;
document.getElementById( "tab-3-contentsectors" ).innerHTML = "£37,736";
document.getElementById( "infosectors" ).innerHTML = '<p><b>' + 'Transport & Storage' + '</b></p><p>' + '</p>';
document.getElementById( "location" ).innerHTML = 'Transport & Storage';

document.getElementById( "body-text" ).innerHTML = 'aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi';

dropdowntest();
  }
  if ( cellElement.id == 'GBUKKsectors' ) {
    document.getElementById("GBUKKsectors").style.background= "linear-gradient(#B0E55B, #81BC49)";
chart.dataProvider = chartData.GBUKKsectors;
chart1sectors.dataProvider = chartData.GBUKKsectors;
document.getElementById( "tab-3-contentsectors" ).innerHTML = "£35,714";
document.getElementById( "infosectors" ).innerHTML = '<p><b>' + 'Accommodation & Food' + '</b></p><p>' + '</p>';
document.getElementById( "location" ).innerHTML = 'Accommodation & Food';

document.getElementById( "body-text" ).innerHTML = 'ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu';

dropdowntest();
  }
  if ( cellElement.id == 'GBUKLsectors' ) {
    document.getElementById("GBUKLsectors").style.background= "linear-gradient(#B0E55B, #81BC49)";
chart.dataProvider = chartData.GBUKLsectors;
chart1sectors.dataProvider = chartData.GBUKLsectors;
document.getElementById( "tab-3-contentsectors" ).innerHTML = "£55,978";
document.getElementById( "infosectors" ).innerHTML = '<p><b>' + 'Information & Communication' + '</b></p><p>' + '</p>';
document.getElementById( "location" ).innerHTML = 'Information & Communication';

document.getElementById( "body-text" ).innerHTML = ' vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

dropdowntest();
  }
  if ( cellElement.id == 'GBUKMsectors' ) {
    document.getElementById("GBUKMsectors").style.background= "linear-gradient(#B0E55B, #81BC49)";
chart.dataProvider = chartData.GBUKMsectors;
chart1sectors.dataProvider = chartData.GBUKMsectors;
document.getElementById( "tab-3-contentsectors" ).innerHTML = "£72,165";
document.getElementById( "infosectors" ).innerHTML = '<p><b>' + 'Financial & Insurance' + '</b></p><p>' + '</p>';
document.getElementById( "location" ).innerHTML = 'Financial & Insurance';

document.getElementById( "body-text" ).innerHTML = 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et';

dropdowntest();
  }
  if ( cellElement.id == 'GBUKNsectors' ) {
    document.getElementById("GBUKNsectors").style.background= "linear-gradient(#B0E55B, #81BC49)";
chart.dataProvider = chartData.GBUKNsectors;
chart1sectors.dataProvider = chartData.GBUKNsectors;
document.getElementById( "tab-3-contentsectors" ).innerHTML = "£37,037";
document.getElementById( "infosectors" ).innerHTML = '<p><b>' + 'Real Estate' + '</b></p><p>' + '</p>';
document.getElementById( "location" ).innerHTML = 'Real Estate';

document.getElementById( "body-text" ).innerHTML = 'quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est';

dropdowntest();
  }
  if ( cellElement.id == 'GBUKOsectors' ) {
    document.getElementById("GBUKOsectors").style.background= "linear-gradient(#B0E55B, #81BC49)";
chart.dataProvider = chartData.GBUKOsectors;
chart1sectors.dataProvider = chartData.GBUKOsectors;
document.getElementById( "tab-3-contentsectors" ).innerHTML = "£71,469";
document.getElementById( "infosectors" ).innerHTML = '<p><b>' + 'Professional, Scientific & Technical' + '</b></p><p>' + '</p>';
document.getElementById( "location" ).innerHTML = 'Professional, Scientific & Technical';

document.getElementById( "body-text" ).innerHTML = 'laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi';

dropdowntest();
  }
  if ( cellElement.id == 'GBUKPsectors' ) {
    document.getElementById("GBUKPsectors").style.background= "linear-gradient(#B0E55B, #81BC49)";
chart.dataProvider = chartData.GBUKPsectors;
chart1sectors.dataProvider = chartData.GBUKPsectors;
document.getElementById( "tab-3-contentsectors" ).innerHTML = "£51,813";
document.getElementById( "infosectors" ).innerHTML = '<p><b>' + 'Admin & Support Services' + '</b></p><p>' + '</p>';
document.getElementById( "location" ).innerHTML = 'Admin & Support Services';

document.getElementById( "body-text" ).innerHTML = 'optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus';

dropdowntest();
  }
  if ( cellElement.id == 'GBUKQsectors' ) {
    document.getElementById("GBUKQsectors").style.background= "linear-gradient(#B0E55B, #81BC49)";
chart.dataProvider = chartData.GBUKQsectors;
chart1sectors.dataProvider = chartData.GBUKQsectors;
document.getElementById( "tab-3-contentsectors" ).innerHTML = "N/A";
document.getElementById( "infosectors" ).innerHTML = '<p><b>' + 'Public Administration, Defence & Social Services P. Education' + '</b></p><p>' + '</p>';
document.getElementById( "location" ).innerHTML = 'Public Administration, Defence & Social Services P. Education';

document.getElementById( "body-text" ).innerHTML = 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint';

dropdowntest();
  }
  if ( cellElement.id == 'GBUKRsectors' ) {
    document.getElementById("GBUKRsectors").style.background= "linear-gradient(#B0E55B, #81BC49)";
chart.dataProvider = chartData.GBUKRsectors;
chart1sectors.dataProvider = chartData.GBUKRsectors;
document.getElementById( "tab-3-contentsectors" ).innerHTML = "£28,986";
document.getElementById( "infosectors" ).innerHTML = '<p><b>' + 'Education' + '</b></p><p>' + '</p>';
document.getElementById( "location" ).innerHTML = 'Education';

document.getElementById( "body-text" ).innerHTML = 'et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur';

dropdowntest();
  }
  if ( cellElement.id == 'GBUKSsectors' ) {
    document.getElementById("GBUKSsectors").style.background= "linear-gradient(#B0E55B, #81BC49)";
chart.dataProvider = chartData.GBUKSsectors;
chart1sectors.dataProvider = chartData.GBUKSsectors;
document.getElementById( "tab-3-contentsectors" ).innerHTML = "£34,483";
document.getElementById( "infosectors" ).innerHTML = '<p><b>' + 'Health & Social Work' + '</b></p><p>' + '</p>';
document.getElementById( "location" ).innerHTML = 'Health & Social Work';

document.getElementById( "body-text" ).innerHTML = 'ut perferendis doloribus asperiores repellat.';

dropdowntest();
  }
  if ( cellElement.id == 'GBUKTsectors' ) {
    document.getElementById("GBUKTsectors").style.background= "linear-gradient(#B0E55B, #81BC49)";
chart.dataProvider = chartData.GBUKTsectors;
chart1sectors.dataProvider = chartData.GBUKTsectors;
document.getElementById( "tab-3-contentsectors" ).innerHTML = "£111,111";
document.getElementById( "infosectors" ).innerHTML = '<p><b>' + 'Arts, Entertainm ent & Recreation' + '</b></p><p>' + '</p>';
document.getElementById( "location" ).innerHTML = 'Arts, Entertainm ent & Recreation';

document.getElementById( "body-text" ).innerHTML = 'sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia';

dropdowntest();
  }
  if ( cellElement.id == 'GBUKUsectors' ) {
    document.getElementById("GBUKUsectors").style.background= "linear-gradient(#B0E55B, #81BC49)";
chart.dataProvider = chartData.GBUKUsectors;
chart1sectors.dataProvider = chartData.GBUKUsectors;
document.getElementById( "tab-3-contentsectors" ).innerHTML = "£41,322";
document.getElementById( "infosectors" ).innerHTML = '<p><b>' + 'Other services activities' + '</b></p><p>' + '</p>';
document.getElementById( "location" ).innerHTML = 'Other services activities';

document.getElementById( "body-text" ).innerHTML = 'quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid -jf';

dropdowntest();
  }
  
})


//END OF CHART 2
//END OF CHART 2
//END OF CHART 2

                map = new AmCharts.AmMap();
                map.pathToImages = "http://www.ammap.com/lib/images/";
                var dataProvider = {
                    mapVar: AmCharts.maps.uksvg_cut_2
                };

                map.addListener("clickMapObject", function(event) {

        var tab_id = "tab-1";
        chart.animateAgain();
        chart1sectors.animateAgain();
        $('ul.tabs li').removeClass('current');
        $("#tab-1-tab").addClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#tab-1").addClass('current');
        
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

    chart1sectors.dataProvider.sort( function( a, b ) {
    if ( a[ chart1sectors.orderByField ] > b[ chart1sectors.orderByField ] ) {
      return -1;
    } else if ( a[ chart1sectors.orderByField ] == b[ chart1sectors.orderByField ] ) {
      return 0;
    }
    return 1;
  } );
    chart1sectors.dataProvider = chartData[event.mapObject.id];
    chart1sectors.clearLabels();
 [ "serial" ];
    chart1sectors.validateData();

                chart1sectors.clearLabels();

// - - - - - -

chart1sectors.dataProvider.sort( function( a, b ) {
    if ( a[ chart1sectors.orderByField ] > b[ chart1sectors.orderByField ] ) {
      return -1;
    } else if ( a[ chart1sectors.orderByField ] == b[ chart1sectors.orderByField ] ) {
      return 0;
    }
    return 1;
  } );
    chart1sectors.dataProvider = chartData[event.mapObject.id];
    chart1sectors.clearLabels();
 [ "serial" ];
    chart1sectors.validateData();

                chart1sectors.clearLabels();

// - - - - - -
// - - - - - - CHART 2 END
// - - - - - -

            document.getElementById( "tab-3-content" ).innerHTML = event.mapObject.AC;

            document.getElementById( "infosectors" ).innerHTML = '<p><b>' + 'R&D in ' + event.mapObject.title + '</b></p><p>' + '</p>';
            document.getElementById( "body-text" ).innerHTML = event.mapObject.title;

        });

        dataProvider.areas = [
            { title: "North East", id: "GBUKCsectors", selectable: true, info: "Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus varius blandit sit amet non magna.", NOC: "£1,185", VC: "55", AC: "£46,414"},

            { title: "North West", id: "GBUKDsectors", selectable: true, info: "Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus varius blandit sit amet non magna.", NOC: "3,845", VC: "160", AC: "£41,612" },

            { title: "Yorkshire & the Humber", id: "GBUKEsectors", selectable: true, info: "Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus varius blandit sit amet non magna.", NOC: "2,275", VC: "85", AC: "£37,363"},

            { title: "East Midlands", id: "GBUKFsectors", selectable: true, info: "Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus varius blandit sit amet non magna.", NOC: "2,080", VC: "100", AC: "£48,077" },

            { title: "West Midlands", id: "GBUKGsectors", selectable: true, info: "Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus varius blandit sit amet non magna.", NOC: "2,905", VC: "110", AC: "£37,866" },

            { title: "East of England", id: "GBUKHsectors", selectable: true, info: "Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus varius blandit sit amet non magna.", NOC: "3,315", VC: "210", AC: "£63,348" },

            { title: "London", id: "GBUKIsectors", selectable: true, info: "Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus varius blandit sit amet non magna.", NOC: "6,560", VC: "490", AC: "£74,695" },

            { title: "South East", id: "GBUKJsectors", selectable: true, info: "Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus varius blandit sit amet non magna.", NOC: "5,250", VC: "330", AC: "£62,857" },

            { title: "South West", id: "GBUKKsectors", selectable: true, info: "Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus varius blandit sit amet non magna.", NOC: "2,710", VC: "110", AC: "£40,590" },

            { title: "Wales", id: "GBUKLsectors", selectable: true, info: "Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus varius blandit sit amet non magna.", NOC: "1,080", VC: "50", AC: "£46,590" },

            { title: "Scotland", id: "GBUKMsectors", selectable: true, info: "Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus varius blandit sit amet non magna.", NOC: "1,425", VC: "75", AC: "£52,632"},

            { title: "Northern Ireland", id: "GBUKNsectors", selectable: true, info: "Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus varius blandit sit amet non magna.", NOC: "995", VC: "40", AC: "£40,201"
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

        map.showHandOnHover = true;// external js: flickity.pkgd.js

function dropdowntest(){

        var tab_id = "tab-1";
        chart.animateAgain();
        chart1sectors.animateAgain();
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

    chart1sectors.dataProvider.sort( function( a, b ) {
    if ( a[ chart1sectors.orderByField ] > b[ chart1sectors.orderByField ] ) {
      return -1;
    } else if ( a[ chart1sectors.orderByField ] == b[ chart1sectors.orderByField ] ) {
      return 0;
    }
    return 1;
  } );
    chart1sectors.clearLabels();
 [ "serial" ];
    chart1sectors.validateData();

                chart1sectors.clearLabels();

                // - - - - - -

chart1sectors.dataProvider.sort( function( a, b ) {
    if ( a[ chart1sectors.orderByField ] > b[ chart1sectors.orderByField ] ) {
      return -1;
    } else if ( a[ chart1sectors.orderByField ] == b[ chart1sectors.orderByField ] ) {
      return 0;
    }
    return 1;
  } );
    chart1sectors.clearLabels();
 [ "serial" ];
    chart1sectors.validateData();

                chart1sectors.clearLabels();
}

function init() {
    var area1 = map.getObjectById("GBUKIsectors");
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