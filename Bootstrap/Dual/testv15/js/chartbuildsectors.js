$(document).ready(function(){
    
  $('.navigationsectors_2 li').click(function() {
              chartsectors.animateAgain();
        chart1sectors.animateAgain();
  var tab_id = $(this).attr('data-tab');
    $(this).closest('.wrap2').find('ul.navigationsectors_2 li').removeClass('current');
  $(this).closest('.wrap2').find('.tab-content').removeClass('current');
  $(this).addClass('current');
  $("#" + tab_id).addClass('current');

})

    })

AmCharts.ready(function() {

    chartsectors = new AmCharts.AmSerialChart();
    chartsectors.dataProvider = chartData.worldsectors;
        chartsectors.categoryField = "country";
                chartsectors.orderByField = "NOC";
                chartsectors.startDuration = 1;
                chartsectors.color = "#bbbbbb";
                chartsectors.columnWidth = .6;
                chartsectors.borderColor = "#fff";
                chartsectors.lineAlpha = 0;
                chartsectors.lineColor = "#ffffff";

                chartsectors.hideCredits = true;

                var valueAxissectors = new AmCharts.ValueAxis();
                valueAxissectors.axisAlpha = 0;
                valueAxissectors.dashLength = 2;
                valueAxissectors.fontSize = 8;
                valueAxissectors.includeAllValues = true;
                valueAxissectors.labelOffset = 0;
                valueAxissectors.minVerticalGap = 500;
                valueAxissectors.axisTitleOffset = 0;
                valueAxissectors.offset = 0;
                chartsectors.addValueAxis(valueAxissectors);

                var categoryAxissectors = chartsectors.categoryAxis;
                categoryAxissectors.labelRotation = 0;
                categoryAxissectors.fillAlpha = 0;
                categoryAxissectors.fillColor = "#ffffff";
                categoryAxissectors.axisAlpha = 0;
                categoryAxissectors.axisThickness = 0;
                categoryAxissectors.gridPosition = "start";
                categoryAxissectors.gridThicknes = 0;
                categoryAxissectors.labelsEnabled = true;
                categoryAxissectors.axisColor = "#ffffff";
                categoryAxissectors.fontSize = 8;
                categoryAxissectors.gridAlpha = 0;
                categoryAxissectors.equalSpacing = true;
                categoryAxissectors.autoGridCount = true;
                categoryAxissectors.maxSeries = 0;
                categoryAxissectors.gridCount = 1000;
                categoryAxissectors.labelFrequency = 1;
                categoryAxissectors.centerLabels = false;

                categoryAxissectors.fillAlpha = 0;
                categoryAxissectors.fillColor = "#ffffff";
                categoryAxissectors.axisAlpha = 0;
                categoryAxissectors.axisThickness = 0;
                categoryAxissectors.gridPosition = "start";
                categoryAxissectors.gridThicknes = 0;
                categoryAxissectors.labelsEnabled = true;
                categoryAxissectors.axisColor = "#ffffff";
                categoryAxissectors.fontSize = 8;
                categoryAxissectors.gridAlpha = 0;
                categoryAxissectors.equalSpacing = false;
                categoryAxissectors.autoGridCount = false;
                categoryAxissectors.maxSeries = 0;
                categoryAxissectors.gridCount = 1000;
                categoryAxissectors.color = "#fff";

                // GRAPH
                var graphsectors = new AmCharts.AmGraph();
                chartsectors.addGraph(graphsectors);
                graphsectors.valueField = "NOC";
                graphsectors.balloonText = "";
                graphsectors.type = "column";
                graphsectors.lineAlpha = 0;
                graphsectors.lineColor = "#ffffff";
                graphsectors.fillAlphas = 1;
                graphsectors.fillColors = "rgba(0, 153, 118, 0.5)";
                graphsectors.fillColorsField = "color";
                graphsectors.backgroundAlpha = 0;
                graphsectors.axisAlpha = 0;
                graphsectors.axisThickness = 0;
                graphsectors.labelText = "[[label]]";
                graphsectors.fontSize = 30;
                graphsectors.color = "#72BA05";
                graphsectors.labelAnchor = 2;

                var balloonsectors = chartsectors.balloon;
                balloonsectors.enabled = false;

                var chartCursorsectors = new AmCharts.ChartCursor();
                chartCursorsectors.cursorAlpha = 0;
                chartCursorsectors.zoomable = false;
                chartCursorsectors.categoryBalloonEnabled = true;
                chartCursorsectors.categoryBalloonColor = "#5D6770";
                chartsectors.addChartCursor(chartCursorsectors);

                chartsectors.creditsPosition = "top-right";

                chartsectors.write("chartdivsectors");



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

                chart1sectors.hideCredits = true;

                var valueAxis1sectors = new AmCharts.ValueAxis();
                valueAxis1sectors.axisAlpha = 0;
                valueAxis1sectors.dashLength = 8;
                valueAxis1sectors.fontSize = 8;
                valueAxis1sectors.minVerticalGap = 100;
                chart1sectors.addValueAxis(valueAxis1sectors);

                var categoryAxis1sectors = chart1sectors.categoryAxis;
                categoryAxis1sectors.labelRotation = 0;
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
                setOpacity( event.graph1sectors, 1 );
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

document.getElementById("GBUKLsectors").style.background= "linear-gradient(#B0E55B, #81BC49)";

$carouselNav.on( 'staticClick.flickity', function(  event, pointer, cellElement, cellIndex ) {
  if ( cellElement.id == 'GBUKCsectors' ) {
    colourall();
     document.getElementById("GBUKCsectors").style.background= "linear-gradient(#B0E55B, #81BC49)";
chartsectors.dataProvider = chartData.GBUKCsectors;
chart1sectors.dataProvider = chartData.GBUKCsectors;
document.getElementById( "tab-3-contentsectors" ).innerHTML = "£48,780";
document.getElementById( "location_2" ).innerHTML = 'Agriculture, Forestry, Fishing';

// document.getElementById( "body-text" ).innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud e';

graph1sectors.labelText = "[[label1]]";
dropdowntestsector();
  }
  if ( cellElement.id == 'GBUKDsectors' ) {
    colourall();
    document.getElementById("GBUKDsectors").style.background= "linear-gradient(#B0E55B, #81BC49)";
chartsectors.dataProvider = chartData.GBUKDsectors;
chart1sectors.dataProvider = chartData.GBUKDsectors;
document.getElementById( "tab-3-contentsectors" ).innerHTML = "N/A";
document.getElementById( "infosectors" ).innerHTML = '<p><b>' + 'Mining & Quarrying' + '</b></p><p>' + '</p>';
document.getElementById( "location_2" ).innerHTML = 'Mining & Quarrying';

// document.getElementById( "body-text" ).innerHTML = 'xercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cill';

dropdowntestsector();
  }
  if ( cellElement.id == 'GBUKEsectors' ) {
    colourall();
    document.getElementById("GBUKEsectors").style.background= "linear-gradient(#B0E55B, #81BC49)";
chartsectors.dataProvider = chartData.GBUKEsectors;
chart1sectors.dataProvider = chartData.GBUKEsectors;
document.getElementById( "tab-3-contentsectors" ).innerHTML = "£47,016";
document.getElementById( "infosectors" ).innerHTML = '<p><b>' + 'Manufacturing' + '</b></p><p>' + '</p>';
document.getElementById( "location_2" ).innerHTML = 'Manufacturing';

// document.getElementById( "body-text" ).innerHTML = 'um dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';

dropdowntestsector();
  }
  if ( cellElement.id == 'GBUKFsectors' ) {
    colourall();
    document.getElementById("GBUKFsectors").style.background= "linear-gradient(#B0E55B, #81BC49)";
chartsectors.dataProvider = chartData.GBUKFsectors;
chart1sectors.dataProvider = chartData.GBUKFsectors;
document.getElementById( "tab-3-contentsectors" ).innerHTML = "£76,923";
document.getElementById( "infosectors" ).innerHTML = '<p><b>' + 'Electricity, Gas, Steam and Air Conditioning' + '</b></p><p>' + '</p>';
document.getElementById( "location_2" ).innerHTML = 'Electricity, Gas, Steam and Air Conditioning';

// document.getElementById( "body-text" ).innerHTML = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ip';

dropdowntestsector();
  }
  if ( cellElement.id == 'GBUKGsectors' ) {
    colourall();
    document.getElementById("GBUKGsectors").style.background= "linear-gradient(#B0E55B, #81BC49)";
chartsectors.dataProvider = chartData.GBUKGsectors;
chart1sectors.dataProvider = chartData.GBUKGsectors;
document.getElementById( "tab-3-contentsectors" ).innerHTML = "£52,632";
document.getElementById( "infosectors" ).innerHTML = '<p><b>' + 'Water, Sewerage and Waste' + '</b></p><p>' + '</p>';
document.getElementById( "location_2" ).innerHTML = 'Water, Sewerage and Waste';

// document.getElementById( "body-text" ).innerHTML = 'quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas ';

dropdowntestsector();
  }
  if ( cellElement.id == 'GBUKHsectors' ) {
    colourall();
    document.getElementById("GBUKHsectors").style.background= "linear-gradient(#B0E55B, #81BC49)";
chartsectors.dataProvider = chartData.GBUKHsectors;
chart1sectors.dataProvider = chartData.GBUKHsectors;
document.getElementById( "tab-3-contentsectors" ).innerHTML = "£48,246";
document.getElementById( "infosectors" ).innerHTML = '<p><b>' + 'Construction' + '</b></p><p>' + '</p>';
document.getElementById( "location_2" ).innerHTML = 'Construction';

// document.getElementById( "body-text" ).innerHTML = ' sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,';

dropdowntestsector();
  }
  if ( cellElement.id == 'GBUKIsectors' ) {
    colourall();
    document.getElementById("GBUKIsectors").style.background= "linear-gradient(#B0E55B, #81BC49)";
chartsectors.dataProvider = chartData.GBUKIsectors;
chart1sectors.dataProvider = chartData.GBUKIsectors;
document.getElementById( "tab-3-contentsectors" ).innerHTML = "£33,693";
document.getElementById( "infosectors" ).innerHTML = '<p><b>' + 'Wholesale & Retail Trade, Repairs' + '</b></p><p>' + '</p>';
document.getElementById( "location_2" ).innerHTML = 'Wholesale & Retail Trade, Repairs';

// document.getElementById( "body-text" ).innerHTML = 'qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam';

dropdowntestsector();
  }
  if ( cellElement.id == 'GBUKJsectors' ) {
    colourall();
    document.getElementById("GBUKJsectors").style.background= "linear-gradient(#B0E55B, #81BC49)";
chartsectors.dataProvider = chartData.GBUKJsectors;
chart1sectors.dataProvider = chartData.GBUKJsectors;
document.getElementById( "tab-3-contentsectors" ).innerHTML = "£37,736";
document.getElementById( "infosectors" ).innerHTML = '<p><b>' + 'Transport & Storage' + '</b></p><p>' + '</p>';
document.getElementById( "location_2" ).innerHTML = 'Transport & Storage';

// document.getElementById( "body-text" ).innerHTML = 'aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi';

dropdowntestsector();
  }
  if ( cellElement.id == 'GBUKKsectors' ) {
    colourall();
    document.getElementById("GBUKKsectors").style.background= "linear-gradient(#B0E55B, #81BC49)";
chartsectors.dataProvider = chartData.GBUKKsectors;
chart1sectors.dataProvider = chartData.GBUKKsectors;
document.getElementById( "tab-3-contentsectors" ).innerHTML = "£35,714";
document.getElementById( "infosectors" ).innerHTML = '<p><b>' + 'Accommodation & Food' + '</b></p><p>' + '</p>';
document.getElementById( "location_2" ).innerHTML = 'Accommodation & Food';

// document.getElementById( "body-text" ).innerHTML = 'ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu';

dropdowntestsector();
  }
  if ( cellElement.id == 'GBUKLsectors' ) {
    colourall();
    document.getElementById("GBUKLsectors").style.background= "linear-gradient(#B0E55B, #81BC49)";
chartsectors.dataProvider = chartData.GBUKLsectors;
chart1sectors.dataProvider = chartData.GBUKLsectors;
document.getElementById( "tab-3-contentsectors" ).innerHTML = "£55,978";
document.getElementById( "infosectors" ).innerHTML = '<p><b>' + 'Information & Communication' + '</b></p><p>' + '</p>';
document.getElementById( "location_2" ).innerHTML = 'Information & Communication';

// document.getElementById( "body-text" ).innerHTML = ' vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

dropdowntestsector();
  }
  if ( cellElement.id == 'GBUKMsectors' ) {
    colourall();
    document.getElementById("GBUKMsectors").style.background= "linear-gradient(#B0E55B, #81BC49)";
chartsectors.dataProvider = chartData.GBUKMsectors;
chart1sectors.dataProvider = chartData.GBUKMsectors;
document.getElementById( "tab-3-contentsectors" ).innerHTML = "£72,165";
document.getElementById( "infosectors" ).innerHTML = '<p><b>' + 'Financial & Insurance' + '</b></p><p>' + '</p>';
document.getElementById( "location_2" ).innerHTML = 'Financial & Insurance';

// document.getElementById( "body-text" ).innerHTML = 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et';

dropdowntestsector();
  }
  if ( cellElement.id == 'GBUKNsectors' ) {
    colourall();
    document.getElementById("GBUKNsectors").style.background= "linear-gradient(#B0E55B, #81BC49)";
chartsectors.dataProvider = chartData.GBUKNsectors;
chart1sectors.dataProvider = chartData.GBUKNsectors;
document.getElementById( "tab-3-contentsectors" ).innerHTML = "£37,037";
document.getElementById( "infosectors" ).innerHTML = '<p><b>' + 'Real Estate' + '</b></p><p>' + '</p>';
document.getElementById( "location_2" ).innerHTML = 'Real Estate';

// document.getElementById( "body-text" ).innerHTML = 'quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est';

dropdowntestsector();
  }
  if ( cellElement.id == 'GBUKOsectors' ) {
    colourall();
    document.getElementById("GBUKOsectors").style.background= "linear-gradient(#B0E55B, #81BC49)";
chartsectors.dataProvider = chartData.GBUKOsectors;
chart1sectors.dataProvider = chartData.GBUKOsectors;
document.getElementById( "tab-3-contentsectors" ).innerHTML = "£71,469";
document.getElementById( "infosectors" ).innerHTML = '<p><b>' + 'Professional, Scientific & Technical' + '</b></p><p>' + '</p>';
document.getElementById( "location_2" ).innerHTML = 'Professional, Scientific & Technical';

// document.getElementById( "body-text" ).innerHTML = 'laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi';

dropdowntestsector();
  }
  if ( cellElement.id == 'GBUKPsectors' ) {
    colourall();
    document.getElementById("GBUKPsectors").style.background= "linear-gradient(#B0E55B, #81BC49)";
chartsectors.dataProvider = chartData.GBUKPsectors;
chart1sectors.dataProvider = chartData.GBUKPsectors;
document.getElementById( "tab-3-contentsectors" ).innerHTML = "£51,813";
document.getElementById( "infosectors" ).innerHTML = '<p><b>' + 'Admin & Support Services' + '</b></p><p>' + '</p>';
document.getElementById( "location_2" ).innerHTML =  'Admin & Support Services' ;

// document.getElementById( "body-text" ).innerHTML = 'optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus';

dropdowntestsector();
  }
  if ( cellElement.id == 'GBUKQsectors' ) {
    colourall();
    document.getElementById("GBUKQsectors").style.background= "linear-gradient(#B0E55B, #81BC49)";
chartsectors.dataProvider = chartData.GBUKQsectors;
chart1sectors.dataProvider = chartData.GBUKQsectors;
document.getElementById( "tab-3-contentsectors" ).innerHTML = "N/A";
document.getElementById( "infosectors" ).innerHTML = '<p><b>' + 'Public Administration, Defence & Social Services P. Education' + '</b></p><p>' + '</p>';
document.getElementById( "location_2" ).innerHTML = 'Public Administration, Defence & Social Services P. Education';

// document.getElementById( "body-text" ).innerHTML = 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint';

dropdowntestsector();
  }
  if ( cellElement.id == 'GBUKRsectors' ) {
    colourall();
    document.getElementById("GBUKRsectors").style.background= "linear-gradient(#B0E55B, #81BC49)";
chartsectors.dataProvider = chartData.GBUKRsectors;
chart1sectors.dataProvider = chartData.GBUKRsectors;
document.getElementById( "tab-3-contentsectors" ).innerHTML = "£28,986";
document.getElementById( "infosectors" ).innerHTML = '<p><b>' + 'Education' + '</b></p><p>' + '</p>';
document.getElementById( "location_2" ).innerHTML = 'Education';

// document.getElementById( "body-text" ).innerHTML = 'et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur';

dropdowntestsector();
  }
  if ( cellElement.id == 'GBUKSsectors' ) {
    colourall();
    document.getElementById("GBUKSsectors").style.background= "linear-gradient(#B0E55B, #81BC49)";
chartsectors.dataProvider = chartData.GBUKSsectors;
chart1sectors.dataProvider = chartData.GBUKSsectors;
document.getElementById( "tab-3-contentsectors" ).innerHTML = "£34,483";
document.getElementById( "infosectors" ).innerHTML = '<p><b>' + 'Health & Social Work' + '</b></p><p>' + '</p>';
document.getElementById( "location_2" ).innerHTML = 'Health & Social Work';

// document.getElementById( "body-text" ).innerHTML = 'ut perferendis doloribus asperiores repellat.';

dropdowntestsector();
  }
  if ( cellElement.id == 'GBUKTsectors' ) {
    colourall();
    document.getElementById("GBUKTsectors").style.background= "linear-gradient(#B0E55B, #81BC49)";
chartsectors.dataProvider = chartData.GBUKTsectors;
chart1sectors.dataProvider = chartData.GBUKTsectors;
document.getElementById( "tab-3-contentsectors" ).innerHTML = "£111,111";
document.getElementById( "infosectors" ).innerHTML = '<p><b>' + 'Arts, Entertainm ent & Recreation' + '</b></p><p>' + '</p>';
document.getElementById( "location_2" ).innerHTML = 'Arts, Entertainm ent & Recreation';

// document.getElementById( "body-text" ).innerHTML = 'sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia';

dropdowntestsector();
  }
  if ( cellElement.id == 'GBUKUsectors' ) {
    colourall();
    document.getElementById("GBUKUsectors").style.background= "linear-gradient(#B0E55B, #81BC49)";
chartsectors.dataProvider = chartData.GBUKUsectors;
chart1sectors.dataProvider = chartData.GBUKUsectors;
document.getElementById( "tab-3-contentsectors" ).innerHTML = "£41,322";
document.getElementById( "infosectors" ).innerHTML = '<p><b>' + 'Other services activities' + '</b></p><p>' + '</p>';
document.getElementById( "location_2" ).innerHTML = 'Other services activities';

// document.getElementById( "body-text" ).innerHTML = 'quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid -jf';

dropdowntestsector();
  }
  
})

        $("#tab-2-tab").click(function(event2){
        $("#tab-1-tab").removeClass('current');
        $("#tab-1-tab").removeClass('active');
        $("#tab-3-tab").removeClass('current');
        $("#tab-3-tab").removeClass('active');
        });
        $("#tab-3-tab").click(function(event2){
        $("#tab-2-tab").removeClass('current');
        $("#tab-2-tab").removeClass('active');
        $("#tab-1-tab").removeClass('current');
        $("#tab-1-tab").removeClass('active');
        });
        $("#tab-1-tab").click(function(event2){
        $("#tab-2-tab").removeClass('current');
        $("#tab-2-tab").removeClass('active');
        $("#tab-3-tab").removeClass('current');
        $("#tab-3-tab").removeClass('active');
        });

        $("#tab-5-tab").click(function(event2){
        $("#tab-6-tab").removeClass('current');
        $("#tab-6-tab").removeClass('active');
        $("#tab-7-tab").removeClass('current');
        $("#tab-7-tab").removeClass('active');
        });
        $("#tab-6-tab").click(function(event2){
        $("#tab-5-tab").removeClass('current');
        $("#tab-5-tab").removeClass('active');
        $("#tab-7-tab").removeClass('current');
        $("#tab-7-tab").removeClass('active');
        });
        $("#tab-7-tab").click(function(event2){
        $("#tab-6-tab").removeClass('current');
        $("#tab-6-tab").removeClass('active');
        $("#tab-5-tab").removeClass('current');
        $("#tab-5-tab").removeClass('active');
        });

function colourall(){
    document.getElementById("GBUKCsectors").style.background= "#91CABB";
    document.getElementById("GBUKDsectors").style.background= "#91CABB";
    document.getElementById("GBUKEsectors").style.background= "#91CABB";
    document.getElementById("GBUKFsectors").style.background= "#91CABB";
    document.getElementById("GBUKGsectors").style.background= "#91CABB";
    document.getElementById("GBUKHsectors").style.background= "#91CABB";
    document.getElementById("GBUKIsectors").style.background= "#91CABB";
    document.getElementById("GBUKJsectors").style.background= "#91CABB";
    document.getElementById("GBUKKsectors").style.background= "#91CABB";
    document.getElementById("GBUKLsectors").style.background= "#91CABB";
    document.getElementById("GBUKMsectors").style.background= "#91CABB";
    document.getElementById("GBUKNsectors").style.background= "#91CABB";
    document.getElementById("GBUKOsectors").style.background= "#91CABB";
    document.getElementById("GBUKPsectors").style.background= "#91CABB";
    document.getElementById("GBUKQsectors").style.background= "#91CABB";
    document.getElementById("GBUKRsectors").style.background= "#91CABB";
    document.getElementById("GBUKSsectors").style.background= "#91CABB";
    document.getElementById("GBUKTsectors").style.background= "#91CABB";
    document.getElementById("GBUKUsectors").style.background= "#91CABB";
}

function dropdowntestsector(){

        $("#tab-6-tab").removeClass('current');
        $("#tab-6-tab").removeClass('active');

        $("#tab-7-tab").removeClass('current');
        $("#tab-7-tab").removeClass('active');

        chartsectors.animateAgain();
        chart1sectors.animateAgain();
        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');
        $(this).addClass('current');
        $("#tab-1-tab").addClass('active');
        $("#tab-1").addClass('current');

        //SECTORS

        $("#tab-5").addClass('current');
        $("#tab-5-tab").addClass('active');

    chartsectors.validateData();
    chartsectors.clearLabels();
    chartsectors.dataProvider.sort( function( a, b ) {
    if ( a[ chartsectors.orderByField ] > b[ chartsectors.orderByField ] ) {
      return -1;
    } else if ( a[ chartsectors.orderByField ] == b[ chartsectors.orderByField ] ) {
      return 0;
    }
    return 1;
  } );
    chartsectors.clearLabels();
 [ "serial" ];
    chartsectors.animateAgain();
    chartsectors.validateData();

    chartsectors.clearLabels();

// - - - - - -

chartsectors.dataProvider.sort( function( a, b ) {
    if ( a[ chartsectors.orderByField ] > b[ chartsectors.orderByField ] ) {
      return -1;
    } else if ( a[ chartsectors.orderByField ] == b[ chartsectors.orderByField ] ) {
      return 0;
    }
    return 1;
  } );
    chartsectors.clearLabels();
 [ "serial" ];
    chartsectors.validateData();
    chartsectors.clearLabels();
                chartsectors.animateAgain();
                chartsectors.clearLabels();

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

// - - - - 

});
});
//DROP DOWN - - - - -