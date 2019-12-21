var map;

var chart;
var chartData = {};

    AmCharts.addInitHandler( function( chart1 ) {

  if ( chart1.orderByField === undefined ) {

    return;
  }

  chart1.dataProvider.sort( function( a, b ) {
    if ( a[ chart1.orderByField ] > b[ chart1.orderByField ] ) {
      return -1;
    } else if ( a[ chart1.orderByField ] == b[ chart1.orderByField ] ) {
      return 0;
    }
    return 1;
  } );

}, [ "serial" ] );

chartData.world = [{
                    "country": "London",
                    "NOC": 6560,
                    "VC": 490,
                    "AC": 74695,
                    "color": "#77BC1F",
                    "label": 6560,
                    "thousands": 6,
                    "hundreds": 560,
                    "label1": 490
                },
                {
                    "country": "East of England",
                    "NOC": 3315,
                    "VC": 210,
                    "AC": 63348
                },
                {
                    "country": "South East",
                    "NOC": 5250,
                    "VC": 330,
                    "AC": 62857,
                },
                {
                    "country": "Scotland",
                    "NOC": 1425,
                    "VC": 75,
                    "AC": 52632,
                },
                {
                    "country": "East Midlands",
                    "NOC": 2080,
                    "VC": 100,
                    "AC": 48077,
                },
                {
                    "country": "North East",
                    "NOC": 1185,
                    "VC": 55,
                    "AC": 46414,
                },
                {
                    "country": "Wales",
                    "NOC": 1080,
                    "VC": 50,
                    "AC": 46296,
                },
                {
                    "country": "North West",
                    "NOC": 3845,
                    "VC": 160,
                    "AC": 41612,
                },
                {
                    "country": "South West",
                    "NOC": 2710,
                    "VC": 110,
                    "AC": 40590,
                },
                {
                    "country": "Northern Ireland",
                    "NOC": 995,
                    "VC": 40,
                    "AC": 40201,
                },
                {
                    "country": "Yorkshire and the Humber",
                    "NOC": 2275,
                    "VC": 85,
                    "AC": 37362,
                },
                {
                    "country": "West Midlands",
                    "NOC": 2905,
                    "VC": 110,
                    "AC": 37866,
                }
            ];

chartData.GBUKC = [{ //North East
                    "country": "London",
                    "NOC": 6560,
                    "VC": 490,
                    "AC": 74695,
                },
                {
                    "country": "East of England",
                    "NOC": 3315,
                    "VC": 210,
                    "AC": 63348
                },
                {
                    "country": "South East",
                    "NOC": 5250,
                    "VC": 330,
                    "AC": 62857,
                },
                {
                    "country": "Scotland",
                    "NOC": 1425,
                    "VC": 75,
                    "AC": 52632,
                },
                {
                    "country": "East Midlands",
                    "NOC": 2080,
                    "VC": 100,
                    "AC": 48077,
                },
                {
                    "country": "North East",
                    "NOC": 1185,
                    "VC": 55,
                    "AC": 46414,
                    "color": "#77BC1F",
                    "label": 1185,
                    "thousands": 1,
                    "hundreds": 185,
                    "label1": 55
                },
                {
                    "country": "Wales",
                    "NOC": 1080,
                    "VC": 50,
                    "AC": 46296,
                },
                {
                    "country": "North West",
                    "NOC": 3845,
                    "VC": 160,
                    "AC": 41612,
                },
                {
                    "country": "South West",
                    "NOC": 2710,
                    "VC": 110,
                    "AC": 40590,
                },
                {
                    "country": "Northern Ireland",
                    "NOC": 995,
                    "VC": 40,
                    "AC": 40201,
                },
                {
                    "country": "Yorkshire and the Humber",
                    "NOC": 2275,
                    "VC": 85,
                    "AC": 37362,
                },
                {
                    "country": "West Midlands",
                    "NOC": 2905,
                    "VC": 110,
                    "AC": 37866,
                }
            ];

chartData.GBUKD = [{ //North West
                    "country": "London",
                    "NOC": 6560,
                    "VC": 490,
                    "AC": 74695
                },
                {
                    "country": "East of England",
                    "NOC": 3315,
                    "VC": 210,
                    "AC": 63348
                },
                {
                    "country": "South East",
                    "NOC": 5250,
                    "VC": 330,
                    "AC": 62857,
                },
                {
                    "country": "Scotland",
                    "NOC": 1425,
                    "VC": 75,
                    "AC": 52632,
                },
                {
                    "country": "East Midlands",
                    "NOC": 2080,
                    "VC": 100,
                    "AC": 48077,
                },
                {
                    "country": "North East",
                    "NOC": 1185,
                    "VC": 55,
                    "AC": 46414,
                },
                {
                    "country": "Wales",
                    "NOC": 1080,
                    "VC": 50,
                    "AC": 46296,
                },
                {
                    "country": "North West",
                    "NOC": 3845,
                    "VC": 160,
                    "AC": 41612,
                    "color": "#77BC1F",
                    "label": 3845,
                    "label1": 160
                },
                {
                    "country": "South West",
                    "NOC": 2710,
                    "VC": 110,
                    "AC": 40590,
                },
                {
                    "country": "Northern Ireland",
                    "NOC": 995,
                    "VC": 40,
                    "AC": 40201,
                },
                {
                    "country": "Yorkshire and the Humber",
                    "NOC": 2275,
                    "VC": 85,
                    "AC": 37362,
                },
                {
                    "country": "West Midlands",
                    "NOC": 2905,
                    "VC": 110,
                    "AC": 37866,
                }
            ];

chartData.GBUKE = [{ //Y & H
                    "country": "London",
                    "NOC": 6560,
                    "VC": 490,
                    "AC": 74695
                },
                {
                    "country": "East of England",
                    "NOC": 3315,
                    "VC": 210,
                    "AC": 63348
                },
                {
                    "country": "South East",
                    "NOC": 5250,
                    "VC": 330,
                    "AC": 62857,
                },
                {
                    "country": "Scotland",
                    "NOC": 1425,
                    "VC": 75,
                    "AC": 52632,
                },
                {
                    "country": "East Midlands",
                    "NOC": 2080,
                    "VC": 100,
                    "AC": 48077,
                },
                {
                    "country": "North East",
                    "NOC": 1185,
                    "VC": 55,
                    "AC": 46414,
                },
                {
                    "country": "Wales",
                    "NOC": 1080,
                    "VC": 50,
                    "AC": 46296,
                },
                {
                    "country": "North West",
                    "NOC": 3845,
                    "VC": 160,
                    "AC": 41612,
                },
                {
                    "country": "South West",
                    "NOC": 2710,
                    "VC": 110,
                    "AC": 40590,
                },
                {
                    "country": "Northern Ireland",
                    "NOC": 995,
                    "VC": 40,
                    "AC": 40201,
                },
                {
                    "country": "Yorkshire and the Humber",
                    "NOC": 2275,
                    "VC": 85,
                    "AC": 37362,
                    "color": "#77BC1F",
                    "label": 2275,
                    "label1": 85
                },
                {
                    "country": "West Midlands",
                    "NOC": 2905,
                    "VC": 110,
                    "AC": 37866,
                }
            ];

chartData.GBUKF = [{ //EAST MIDLANDS
                    "country": "London",
                    "NOC": 6560,
                    "VC": 490,
                    "AC": 74695
                },
                {
                    "country": "East of England",
                    "NOC": 3315,
                    "VC": 210,
                    "AC": 63348
                },
                {
                    "country": "South East",
                    "NOC": 5250,
                    "VC": 330,
                    "AC": 62857,
                },
                {
                    "country": "Scotland",
                    "NOC": 1425,
                    "VC": 75,
                    "AC": 52632,
                },
                {
                    "country": "East Midlands",
                    "NOC": 2080,
                    "VC": 100,
                    "AC": 48077,
                    "color": "#77BC1F",
                    "label": 2080,
                    "label1": 100
                },
                {
                    "country": "North East",
                    "NOC": 1185,
                    "VC": 55,
                    "AC": 46414,
                },
                {
                    "country": "Wales",
                    "NOC": 1080,
                    "VC": 50,
                    "AC": 46296,
                },
                {
                    "country": "North West",
                    "NOC": 3845,
                    "VC": 160,
                    "AC": 41612,
                },
                {
                    "country": "South West",
                    "NOC": 2710,
                    "VC": 110,
                    "AC": 40590,
                },
                {
                    "country": "Northern Ireland",
                    "NOC": 995,
                    "VC": 40,
                    "AC": 40201,
                },
                {
                    "country": "Yorkshire and the Humber",
                    "NOC": 2275,
                    "VC": 85,
                    "AC": 37362,
                },
                {
                    "country": "West Midlands",
                    "NOC": 2905,
                    "VC": 110,
                    "AC": 37866,
                }
            ];

chartData.GBUKG = [{ //West Midlands
                    "country": "London",
                    "NOC": 6560,
                    "VC": 490,
                    "AC": 74695
                },
                {
                    "country": "East of England",
                    "NOC": 3315,
                    "VC": 210,
                    "AC": 63348
                },
                {
                    "country": "South East",
                    "NOC": 5250,
                    "VC": 330,
                    "AC": 62857,
                },
                {
                    "country": "Scotland",
                    "NOC": 1425,
                    "VC": 75,
                    "AC": 52632,
                },
                {
                    "country": "East Midlands",
                    "NOC": 2080,
                    "VC": 100,
                    "AC": 48077,
                },
                {
                    "country": "North East",
                    "NOC": 1185,
                    "VC": 55,
                    "AC": 46414,
                },
                {
                    "country": "Wales",
                    "NOC": 1080,
                    "VC": 50,
                    "AC": 46296,
                },
                {
                    "country": "North West",
                    "NOC": 3845,
                    "VC": 160,
                    "AC": 41612,
                },
                {
                    "country": "South West",
                    "NOC": 2710,
                    "VC": 110,
                    "AC": 40590,
                },
                {
                    "country": "Northern Ireland",
                    "NOC": 995,
                    "VC": 40,
                    "AC": 40201,
                },
                {
                    "country": "Yorkshire and the Humber",
                    "NOC": 2275,
                    "VC": 85,
                    "AC": 37362,
                },
                {
                    "country": "West Midlands",
                    "NOC": 2905,
                    "VC": 110,
                    "AC": 37866,
                    "color": "#77BC1F",
                    "label": 2905,
                    "label1": 110
                }
            ];

chartData.GBUKH = [{ //East of England
                    "country": "London",
                    "NOC": 6560,
                    "VC": 490,
                    "AC": 74695
                },
                {
                    "country": "East of England",
                    "NOC": 3315,
                    "VC": 210,
                    "AC": 63348,
                    "color": "#77BC1F",
                    "label": 3315,
                    "label1": 210
                },
                {
                    "country": "South East",
                    "NOC": 5250,
                    "VC": 330,
                    "AC": 62857,
                },
                {
                    "country": "Scotland",
                    "NOC": 1425,
                    "VC": 75,
                    "AC": 52632,
                },
                {
                    "country": "East Midlands",
                    "NOC": 2080,
                    "VC": 100,
                    "AC": 48077,
                },
                {
                    "country": "North East",
                    "NOC": 1185,
                    "VC": 55,
                    "AC": 46414,
                },
                {
                    "country": "Wales",
                    "NOC": 1080,
                    "VC": 50,
                    "AC": 46296,
                },
                {
                    "country": "North West",
                    "NOC": 3845,
                    "VC": 160,
                    "AC": 41612,
                },
                {
                    "country": "South West",
                    "NOC": 2710,
                    "VC": 110,
                    "AC": 40590,
                },
                {
                    "country": "Northern Ireland",
                    "NOC": 995,
                    "VC": 40,
                    "AC": 40201,
                },
                {
                    "country": "Yorkshire and the Humber",
                    "NOC": 2275,
                    "VC": 85,
                    "AC": 37362,
                },
                {
                    "country": "West Midlands",
                    "NOC": 2905,
                    "VC": 110,
                    "AC": 37866,
                }
            ];

chartData.GBUKI = [{
                    "country": "London",
                    "NOC": 6560,
                    "VC": 490,
                    "AC": 74695,
                    "color": "#77BC1F",
                    "label": 6560,
                    "label1": 490
                },
                {
                    "country": "East of England",
                    "NOC": 3315,
                    "VC": 210,
                    "AC": 63348
                },
                {
                    "country": "South East",
                    "NOC": 5250,
                    "VC": 330,
                    "AC": 62857,
                },
                {
                    "country": "Scotland",
                    "NOC": 1425,
                    "VC": 75,
                    "AC": 52632,
                },
                {
                    "country": "East Midlands",
                    "NOC": 2080,
                    "VC": 100,
                    "AC": 48077,
                },
                {
                    "country": "North East",
                    "NOC": 1185,
                    "VC": 55,
                    "AC": 46414,
                },
                {
                    "country": "Wales",
                    "NOC": 1080,
                    "VC": 50,
                    "AC": 46296,
                },
                {
                    "country": "North West",
                    "NOC": 3845,
                    "VC": 160,
                    "AC": 41612,
                },
                {
                    "country": "South West",
                    "NOC": 2710,
                    "VC": 110,
                    "AC": 40590,
                },
                {
                    "country": "Northern Ireland",
                    "NOC": 995,
                    "VC": 40,
                    "AC": 40201,
                },
                {
                    "country": "Yorkshire and the Humber",
                    "NOC": 2275,
                    "VC": 85,
                    "AC": 37362,
                },
                {
                    "country": "West Midlands",
                    "NOC": 2905,
                    "VC": 110,
                    "AC": 37866,
                }
            ];

chartData.GBUKJ = [{ //South East
                    "country": "London",
                    "NOC": 6560,
                    "VC": 490,
                    "AC": 74695
                },
                {
                    "country": "East of England",
                    "NOC": 3315,
                    "VC": 210,
                    "AC": 63348
                },
                {
                    "country": "South East",
                    "NOC": 5250,
                    "VC": 330,
                    "AC": 62857,
                    "color": "#77BC1F",
                    "label": 5250,
                    "label1": 330
                },
                {
                    "country": "Scotland",
                    "NOC": 1425,
                    "VC": 75,
                    "AC": 52632,
                },
                {
                    "country": "East Midlands",
                    "NOC": 2080,
                    "VC": 100,
                    "AC": 48077,
                },
                {
                    "country": "North East",
                    "NOC": 1185,
                    "VC": 55,
                    "AC": 46414,
                },
                {
                    "country": "Wales",
                    "NOC": 1080,
                    "VC": 50,
                    "AC": 46296,
                },
                {
                    "country": "North West",
                    "NOC": 3845,
                    "VC": 160,
                    "AC": 41612,
                },
                {
                    "country": "South West",
                    "NOC": 2710,
                    "VC": 110,
                    "AC": 40590,
                },
                {
                    "country": "Northern Ireland",
                    "NOC": 995,
                    "VC": 40,
                    "AC": 40201,
                },
                {
                    "country": "Yorkshire and the Humber",
                    "NOC": 2275,
                    "VC": 85,
                    "AC": 37362,
                },
                {
                    "country": "West Midlands",
                    "NOC": 2905,
                    "VC": 110,
                    "AC": 37866,
                }
            ];

chartData.GBUKK = [{ //South West
                    "country": "London",
                    "NOC": 6560,
                    "VC": 490,
                    "AC": 74695
                },
                {
                    "country": "East of England",
                    "NOC": 3315,
                    "VC": 210,
                    "AC": 63348
                },
                {
                    "country": "South East",
                    "NOC": 5250,
                    "VC": 330,
                    "AC": 62857,
                },
                {
                    "country": "Scotland",
                    "NOC": 1425,
                    "VC": 75,
                    "AC": 52632,
                },
                {
                    "country": "East Midlands",
                    "NOC": 2080,
                    "VC": 100,
                    "AC": 48077,
                },
                {
                    "country": "North East",
                    "NOC": 1185,
                    "VC": 55,
                    "AC": 46414,
                },
                {
                    "country": "Wales",
                    "NOC": 1080,
                    "VC": 50,
                    "AC": 46296,
                },
                {
                    "country": "North West",
                    "NOC": 3845,
                    "VC": 160,
                    "AC": 41612,
                },
                {
                    "country": "South West",
                    "NOC": 2710,
                    "VC": 110,
                    "AC": 40590,
                    "color": "#77BC1F",
                    "label": 2710,
                    "label1": 110
                },
                {
                    "country": "Northern Ireland",
                    "NOC": 995,
                    "VC": 40,
                    "AC": 40201,
                },
                {
                    "country": "Yorkshire and the Humber",
                    "NOC": 2275,
                    "VC": 85,
                    "AC": 37362,
                },
                {
                    "country": "West Midlands",
                    "NOC": 2905,
                    "VC": 110,
                    "AC": 37866,
                }
            ];

chartData.GBUKL = [{ //Wales
                    "country": "London",
                    "NOC": 6560,
                    "VC": 490,
                    "AC": 74695
                },
                {
                    "country": "East of England",
                    "NOC": 3315,
                    "VC": 210,
                    "AC": 63348
                },
                {
                    "country": "South East",
                    "NOC": 5250,
                    "VC": 330,
                    "AC": 62857,
                },
                {
                    "country": "Scotland",
                    "NOC": 1425,
                    "VC": 75,
                    "AC": 52632,
                },
                {
                    "country": "East Midlands",
                    "NOC": 2080,
                    "VC": 100,
                    "AC": 48077,
                },
                {
                    "country": "North East",
                    "NOC": 1185,
                    "VC": 55,
                    "AC": 46414,
                },
                {
                    "country": "Wales",
                    "NOC": 1080,
                    "VC": 50,
                    "AC": 46296,
                    "color": "#77BC1F",
                    "label": 1080,
                    "label1": 50
                },
                {
                    "country": "North West",
                    "NOC": 3845,
                    "VC": 160,
                    "AC": 41612,
                },
                {
                    "country": "South West",
                    "NOC": 2710,
                    "VC": 110,
                    "AC": 40590,
                },
                {
                    "country": "Northern Ireland",
                    "NOC": 995,
                    "VC": 40,
                    "AC": 40201,
                },
                {
                    "country": "Yorkshire and the Humber",
                    "NOC": 2275,
                    "VC": 85,
                    "AC": 37362,
                },
                {
                    "country": "West Midlands",
                    "NOC": 2905,
                    "VC": 110,
                    "AC": 37866,
                }
            ];

chartData.GBUKM = [{ //Scotland
                    "country": "London",
                    "NOC": 6560,
                    "VC": 490,
                    "AC": 74695
                },
                {
                    "country": "East of England",
                    "NOC": 3315,
                    "VC": 210,
                    "AC": 63348
                },
                {
                    "country": "South East",
                    "NOC": 5250,
                    "VC": 330,
                    "AC": 62857,
                },
                {
                    "country": "Scotland",
                    "NOC": 1425,
                    "VC": 75,
                    "AC": 52632,
                    "color": "#77BC1F",
                    "label": 1425,
                    "label1": 75
                },
                {
                    "country": "East Midlands",
                    "NOC": 2080,
                    "VC": 100,
                    "AC": 48077,
                },
                {
                    "country": "North East",
                    "NOC": 1185,
                    "VC": 55,
                    "AC": 46414,
                },
                {
                    "country": "Wales",
                    "NOC": 1080,
                    "VC": 50,
                    "AC": 46296,
                },
                {
                    "country": "North West",
                    "NOC": 3845,
                    "VC": 160,
                    "AC": 41612,
                },
                {
                    "country": "South West",
                    "NOC": 2710,
                    "VC": 110,
                    "AC": 40590,
                },
                {
                    "country": "Northern Ireland",
                    "NOC": 995,
                    "VC": 40,
                    "AC": 40201,
                },
                {
                    "country": "Yorkshire and the Humber",
                    "NOC": 2275,
                    "VC": 85,
                    "AC": 37362,
                },
                {
                    "country": "West Midlands",
                    "NOC": 2905,
                    "VC": 110,
                    "AC": 37866,
                }
            ];

chartData.GBUKN = [{ //NI
                    "country": "London",
                    "NOC": 6560,
                    "VC": 490,
                    "AC": 74695
                },
                {
                    "country": "East of England",
                    "NOC": 3315,
                    "VC": 210,
                    "AC": 63348
                },
                {
                    "country": "South East",
                    "NOC": 5250,
                    "VC": 330,
                    "AC": 62857,
                },
                {
                    "country": "Scotland",
                    "NOC": 1425,
                    "VC": 75,
                    "AC": 52632,
                },
                {
                    "country": "East Midlands",
                    "NOC": 2080,
                    "VC": 100,
                    "AC": 48077,
                },
                {
                    "country": "North East",
                    "NOC": 1185,
                    "VC": 55,
                    "AC": 46414,
                },
                {
                    "country": "Wales",
                    "NOC": 1080,
                    "VC": 50,
                    "AC": 46296,
                },
                {
                    "country": "North West",
                    "NOC": 3845,
                    "VC": 160,
                    "AC": 41612,
                },
                {
                    "country": "South West",
                    "NOC": 2710,
                    "VC": 110,
                    "AC": 40590,
                },
                {
                    "country": "Northern Ireland",
                    "NOC": 995,
                    "VC": 40,
                    "AC": 40201,
                    "color": "#77BC1F",
                    "label": 995,
                    "label1": 40
                },
                {
                    "country": "Yorkshire and the Humber",
                    "NOC": 2275,
                    "VC": 85,
                    "AC": 37362,
                },
                {
                    "country": "West Midlands",
                    "NOC": 2905,
                    "VC": 110,
                    "AC": 37866,
                }
            ];

var account1 = [
{
    "date": "2014-01-01",
    "acc1": 80,
    "acc2": 40
},
{
    "date": "2014-02-01",
    "acc1": 72,
    "acc2": 20
},
{
    "date": "2014-03-01",
    "acc1": 80,
    "acc2": 30
},
{
    "date": "2014-06-01",
    "acc1": 20,
    "acc2": 80
}
];

var account2 = [
{
    "date": "2014-02-01",
    "acc1": 54,
    "acc2": 20
},

{
    "date": "2014-04-01",
    "acc1": 60,
    "acc2": 60
},
{
    "date": "2014-05-01",
    "acc1": 50,
    "acc2": 40
},
{
    "date": "2014-06-01",
    "acc1": 18,
    "acc2": 56
}
];

var account3 = [
{
    "date": "2014-01-01",
    "acc1": 40,
    "acc2": 20
},
{
    "date": "2014-02-01",
    "acc1": 35,
    "acc2": 20
},
{
    "date": "2014-03-01",
    "acc1": 60,
    "acc2": 40
},
{
    "date": "2014-04-01",
    "acc1": 50,
    "acc2": 30
},
{
    "date": "2014-05-01",
    "acc1": 25,
    "acc2": 50
},
{
    "date": "2014-06-01",
    "acc1": 25,
    "acc2": 60
}
];

    AmCharts.addInitHandler( function( chart ) {

  if ( chart.orderByField === undefined ) {
    return;
  }

  chart.dataProvider.sort( function( a, b ) {
    if ( a[ chart.orderByField ] > b[ chart.orderByField ] ) {
      return -1;
    } else if ( a[ chart.orderByField ] == b[ chart.orderByField ] ) {
      return 0;
    }
    return 1;
  } );

}, [ "serial" ] );