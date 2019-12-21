var map;

var chart;
var chartData = {};

//     AmCharts.addInitHandler( function( chart1 ) {

//   if ( chart1.orderByField === undefined ) {

//     return;
//   }

//   chart1.dataProvider.sort( function( a, b ) {
//     if ( a[ chart1.orderByField ] > b[ chart1.orderByField ] ) {
//       return -1;
//     } else if ( a[ chart1.orderByField ] == b[ chart1.orderByField ] ) {
//       return 0;
//     }
//     return 1;
//   } );

// }, [ "serial" ] );

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

chartData.worldsectors = [{
                    "country": "Agriculture, Forestry, Fishing",
                    "NOC": 205,
                    "VC": 10,
                    "AC": 48780
                },
                {
                    "country": "Mining & Quarrying",
                    "NOC": 30,
                    "VC": 0,
                    "AC": 0
                },
                {
                    "country": "Manufacturing",
                    "NOC": 8295,
                    "VC": 390,
                    "AC": 47016
                },
                {
                    "country": "Electricity, Gas, Steam and Air Conditioning ",
                    "NOC": 65,
                    "VC": 5,
                    "AC": 76923
                },
                {
                    "country": "Water, Sewerage and Waste",
                    "NOC": 190,
                    "VC": 10,
                    "AC": 52632
                },
                {
                    "country": "Construction",
                    "NOC": 1140,
                    "VC": 55,
                    "AC": 48246
                },
                {
                    "country": "Wholesale & Retail Trade, Repairs",
                    "NOC": 3710,
                    "VC": 125,
                    "AC": 33693
                },
                {
                    "country": "Transport & Storage",
                    "NOC": 265,
                    "VC": 10,
                    "AC": 37736
                },
                {
                    "country": "Accommodation & Food",
                    "NOC": 140,
                    "VC": 5,
                    "AC": 35714
                },
                {
                    "country": "Information & Communication",
                    "NOC": 9200,
                    "VC": 515,
                    "AC": 55978,
                    "color": "#77BC1F",
                    "label": 9200,
                    "label1": 515
                },
                {
                    "country": "Financial & Insurance",
                    "NOC": 485,
                    "VC": 35,
                    "AC": 72165
                },
                {
                    "country": "Real Estate",
                    "NOC": 135,
                    "VC": 5,
                    "AC": 37037
                },
                {
                    "country": "Professional, Scientific & Technical",
                    "NOC": 6490,
                    "VC": 465,
                    "AC": 71649
                },
                {
                    "country": "Admin & Support Services",
                    "NOC": 1930,
                    "VC": 100,
                    "AC": 51813
                },
                {
                    "country": "Public Administration, Defence & Social Services P. Education",
                    "NOC": 0,
                    "VC": 0,
                    "AC": 0
                },
                {
                    "country": "Education",
                    "NOC": 345,
                    "VC": 10,
                    "AC": 28986
                },
                {
                    "country": "Health & Social Work",
                    "NOC": 290,
                    "VC": 10,
                    "AC": 34483
                },
                {
                    "country": "Arts, Entertainm ent & Recreation",
                    "NOC": 360,
                    "VC": 40,
                    "AC": 111111
                },
                {
                    "country": "Other services activities",
                    "NOC": 605,
                    "VC": 25,
                    "AC": 41322
                }
            ];

chartData.GBUKCsectors = [{
                    "country": "Agriculture, Forestry, Fishing",
                    "NOC": 205,
                    "VC": 10,
                    "AC": 48780,
                    "label": 205,
                    "label1": 10,
                    "color": "#77BC1F"
                },
                {
                    "country": "Mining & Quarrying",
                    "NOC": 30,
                    "VC": 0,
                    "AC": 0
                },
                {
                    "country": "Manufacturing",
                    "NOC": 8295,
                    "VC": 390,
                    "AC": 47016
                },
                {
                    "country": "Electricity, Gas, Steam and Air Conditioning ",
                    "NOC": 65,
                    "VC": 5,
                    "AC": 76923,
                },
                {
                    "country": "Water, Sewerage and Waste",
                    "NOC": 190,
                    "VC": 10,
                    "AC": 52632,
                },
                {
                    "country": "Construction",
                    "NOC": 1140,
                    "VC": 55,
                    "AC": 48246,
                },
                {
                    "country": "Wholesale & Retail Trade, Repairs",
                    "NOC": 3710,
                    "VC": 125,
                    "AC": 33693,
                },
                {
                    "country": "Transport & Storage",
                    "NOC": 265,
                    "VC": 10,
                    "AC": 37736,
                },
                {
                    "country": "Accommodation & Food",
                    "NOC": 140,
                    "VC": 5,
                    "AC": 35714,
                },
                {
                    "country": "Information & Communication",
                    "NOC": 9200,
                    "VC": 515,
                    "AC": 55978
                },
                {
                    "country": "Financial & Insurance",
                    "NOC": 485,
                    "VC": 35,
                    "AC": 72165,
                },
                {
                    "country": "Real Estate",
                    "NOC": 135,
                    "VC": 5,
                    "AC": 37037,
                },
                {
                    "country": "Professional, Scientific & Technical",
                    "NOC": 6490,
                    "VC": 465,
                    "AC": 71649,
                },
                {
                    "country": "Admin & Support Services",
                    "NOC": 1930,
                    "VC": 100,
                    "AC": 51813,
                },
                {
                    "country": "Public Administration, Defence & Social Services P. Education",
                    "NOC": 0,
                    "VC": 0,
                    "AC": 0,
                },
                {
                    "country": "Education",
                    "NOC": 345,
                    "VC": 10,
                    "AC": 28986,
                },
                {
                    "country": "Health & Social Work",
                    "NOC": 290,
                    "VC": 10,
                    "AC": 34483,
                },
                {
                    "country": "Arts, Entertainm ent & Recreation",
                    "NOC": 360,
                    "VC": 40,
                    "AC": 111111,
                },
                {
                    "country": "Other services activities",
                    "NOC": 605,
                    "VC": 25,
                    "AC": 41322,
                }
            ];

chartData.GBUKDsectors = [{
                    "country": "Agriculture, Forestry, Fishing",
                    "NOC": 205,
                    "VC": 10,
                    "AC": 48780
                },
                {
                    "country": "Mining & Quarrying",
                    "NOC": 30,
                    "VC": 0,
                    "AC": 0,
                    "color": "#77BC1F",
                    "label": 30,
                    "label1": 10
                },
                {
                    "country": "Manufacturing",
                    "NOC": 8295,
                    "VC": 390,
                    "AC": 47016,
                },
                {
                    "country": "Electricity, Gas, Steam and Air Conditioning ",
                    "NOC": 65,
                    "VC": 5,
                    "AC": 76923,
                },
                {
                    "country": "Water, Sewerage and Waste",
                    "NOC": 190,
                    "VC": 10,
                    "AC": 52632,
                },
                {
                    "country": "Construction",
                    "NOC": 1140,
                    "VC": 55,
                    "AC": 48246,
                },
                {
                    "country": "Wholesale & Retail Trade, Repairs",
                    "NOC": 3710,
                    "VC": 125,
                    "AC": 33693,
                },
                {
                    "country": "Transport & Storage",
                    "NOC": 265,
                    "VC": 10,
                    "AC": 37736,
                },
                {
                    "country": "Accommodation & Food",
                    "NOC": 140,
                    "VC": 5,
                    "AC": 35714,
                },
                {
                    "country": "Information & Communication",
                    "NOC": 9200,
                    "VC": 515,
                    "AC": 55978,
                },
                {
                    "country": "Financial & Insurance",
                    "NOC": 485,
                    "VC": 35,
                    "AC": 72165,
                },
                {
                    "country": "Real Estate",
                    "NOC": 135,
                    "VC": 5,
                    "AC": 37037,
                },
                {
                    "country": "Professional, Scientific & Technical",
                    "NOC": 6490,
                    "VC": 465,
                    "AC": 71649
                },
                {
                    "country": "Admin & Support Services",
                    "NOC": 1930,
                    "VC": 100,
                    "AC": 51813,
                },
                {
                    "country": "Public Administration, Defence & Social Services P. Education",
                    "NOC": 0,
                    "VC": 0,
                    "AC": 0,
                },
                {
                    "country": "Education",
                    "NOC": 345,
                    "VC": 10,
                    "AC": 28986,
                },
                {
                    "country": "Health & Social Work",
                    "NOC": 290,
                    "VC": 10,
                    "AC": 34483,
                },
                {
                    "country": "Arts, Entertainm ent & Recreation",
                    "NOC": 360,
                    "VC": 40,
                    "AC": 111111,
                },
                {
                    "country": "Other services activities",
                    "NOC": 605,
                    "VC": 25,
                    "AC": 41322,
                }
            ];

chartData.GBUKEsectors = [{
                    "country": "Agriculture, Forestry, Fishing",
                    "NOC": 205,
                    "VC": 10,
                    "AC": 48780
                },
                {
                    "country": "Mining & Quarrying",
                    "NOC": 30,
                    "VC": 0,
                    "AC": 0
                },
                {
                    "country": "Manufacturing",
                    "NOC": 8295,
                    "VC": 390,
                    "AC": 47016,
                    "color": "#77BC1F",
                    "label": 8295,
                    "label1": 390
                },
                {
                    "country": "Electricity, Gas, Steam and Air Conditioning ",
                    "NOC": 65,
                    "VC": 5,
                    "AC": 76923,
                },
                {
                    "country": "Water, Sewerage and Waste",
                    "NOC": 190,
                    "VC": 10,
                    "AC": 52632,
                },
                {
                    "country": "Construction",
                    "NOC": 1140,
                    "VC": 55,
                    "AC": 48246,
                },
                {
                    "country": "Wholesale & Retail Trade, Repairs",
                    "NOC": 3710,
                    "VC": 125,
                    "AC": 33693
                },
                {
                    "country": "Transport & Storage",
                    "NOC": 265,
                    "VC": 10,
                    "AC": 37736,
                },
                {
                    "country": "Accommodation & Food",
                    "NOC": 140,
                    "VC": 5,
                    "AC": 35714,
                },
                {
                    "country": "Information & Communication",
                    "NOC": 9200,
                    "VC": 515,
                    "AC": 55978,
                },
                {
                    "country": "Financial & Insurance",
                    "NOC": 485,
                    "VC": 35,
                    "AC": 72165,
                },
                {
                    "country": "Real Estate",
                    "NOC": 135,
                    "VC": 5,
                    "AC": 37037,
                },
                {
                    "country": "Professional, Scientific & Technical",
                    "NOC": 6490,
                    "VC": 465,
                    "AC": 71649,
                },
                {
                    "country": "Admin & Support Services",
                    "NOC": 1930,
                    "VC": 100,
                    "AC": 51813,
                },
                {
                    "country": "Public Administration, Defence & Social Services P. Education",
                    "NOC": 0,
                    "VC": 0,
                    "AC": 0,
                },
                {
                    "country": "Education",
                    "NOC": 345,
                    "VC": 10,
                    "AC": 28986,
                },
                {
                    "country": "Health & Social Work",
                    "NOC": 290,
                    "VC": 10,
                    "AC": 34483,
                },
                {
                    "country": "Arts, Entertainm ent & Recreation",
                    "NOC": 360,
                    "VC": 40,
                    "AC": 111111,
                },
                {
                    "country": "Other services activities",
                    "NOC": 605,
                    "VC": 25,
                    "AC": 41322,
                }
            ];

chartData.GBUKFsectors = [{
                    "country": "Agriculture, Forestry, Fishing",
                    "NOC": 205,
                    "VC": 10,
                    "AC": 48780
                },
                {
                    "country": "Mining & Quarrying",
                    "NOC": 30,
                    "VC": 0,
                    "AC": 0
                },
                {
                    "country": "Manufacturing",
                    "NOC": 8295,
                    "VC": 390,
                    "AC": 47016,
                },
                {
                    "country": "Electricity, Gas, Steam and Air Conditioning ",
                    "NOC": 65,
                    "VC": 5,
                    "AC": 76923,
                    "color": "#77BC1F",
                    "label": 65,
                    "label1": 5
                },
                {
                    "country": "Water, Sewerage and Waste",
                    "NOC": 190,
                    "VC": 10,
                    "AC": 52632,
                },
                {
                    "country": "Construction",
                    "NOC": 1140,
                    "VC": 55,
                    "AC": 48246,
                },
                {
                    "country": "Wholesale & Retail Trade, Repairs",
                    "NOC": 3710,
                    "VC": 125,
                    "AC": 33693,
                },
                {
                    "country": "Transport & Storage",
                    "NOC": 265,
                    "VC": 10,
                    "AC": 37736,
                },
                {
                    "country": "Accommodation & Food",
                    "NOC": 140,
                    "VC": 5,
                    "AC": 35714,
                },
                {
                    "country": "Information & Communication",
                    "NOC": 9200,
                    "VC": 515,
                    "AC": 55978,
                },
                {
                    "country": "Financial & Insurance",
                    "NOC": 485,
                    "VC": 35,
                    "AC": 72165,
                },
                {
                    "country": "Real Estate",
                    "NOC": 135,
                    "VC": 5,
                    "AC": 37037,
                },
                {
                    "country": "Professional, Scientific & Technical",
                    "NOC": 6490,
                    "VC": 465,
                    "AC": 71649,
                },
                {
                    "country": "Admin & Support Services",
                    "NOC": 1930,
                    "VC": 100,
                    "AC": 51813
                },
                {
                    "country": "Public Administration, Defence & Social Services P. Education",
                    "NOC": 0,
                    "VC": 0,
                    "AC": 0,
                },
                {
                    "country": "Education",
                    "NOC": 345,
                    "VC": 10,
                    "AC": 28986,
                },
                {
                    "country": "Health & Social Work",
                    "NOC": 290,
                    "VC": 10,
                    "AC": 34483,
                },
                {
                    "country": "Arts, Entertainm ent & Recreation",
                    "NOC": 360,
                    "VC": 40,
                    "AC": 111111,
                },
                {
                    "country": "Other services activities",
                    "NOC": 605,
                    "VC": 25,
                    "AC": 41322,
                }
            ];

chartData.GBUKGsectors = [{
                    "country": "Agriculture, Forestry, Fishing",
                    "NOC": 205,
                    "VC": 10,
                    "AC": 48780
                },
                {
                    "country": "Mining & Quarrying",
                    "NOC": 30,
                    "VC": 0,
                    "AC": 0
                },
                {
                    "country": "Manufacturing",
                    "NOC": 8295,
                    "VC": 390,
                    "AC": 47016,
                },
                {
                    "country": "Electricity, Gas, Steam and Air Conditioning ",
                    "NOC": 65,
                    "VC": 5,
                    "AC": 76923,
                },
                {
                    "country": "Water, Sewerage and Waste",
                    "NOC": 190,
                    "VC": 10,
                    "AC": 52632,
                    "color": "#77BC1F",
                    "label": 190,
                    "label1": 10
                },
                {
                    "country": "Construction",
                    "NOC": 1140,
                    "VC": 55,
                    "AC": 48246
                },
                {
                    "country": "Wholesale & Retail Trade, Repairs",
                    "NOC": 3710,
                    "VC": 125,
                    "AC": 33693,
                },
                {
                    "country": "Transport & Storage",
                    "NOC": 265,
                    "VC": 10,
                    "AC": 37736,
                },
                {
                    "country": "Accommodation & Food",
                    "NOC": 140,
                    "VC": 5,
                    "AC": 35714,
                },
                {
                    "country": "Information & Communication",
                    "NOC": 9200,
                    "VC": 515,
                    "AC": 55978,
                },
                {
                    "country": "Financial & Insurance",
                    "NOC": 485,
                    "VC": 35,
                    "AC": 72165,
                },
                {
                    "country": "Real Estate",
                    "NOC": 135,
                    "VC": 5,
                    "AC": 37037,
                },
                {
                    "country": "Professional, Scientific & Technical",
                    "NOC": 6490,
                    "VC": 465,
                    "AC": 71649,
                },
                {
                    "country": "Admin & Support Services",
                    "NOC": 1930,
                    "VC": 100,
                    "AC": 51813,
                },
                {
                    "country": "Public Administration, Defence & Social Services P. Education",
                    "NOC": 0,
                    "VC": 0,
                    "AC": 0,
                },
                {
                    "country": "Education",
                    "NOC": 345,
                    "VC": 10,
                    "AC": 28986,
                },
                {
                    "country": "Health & Social Work",
                    "NOC": 290,
                    "VC": 10,
                    "AC": 34483,
                },
                {
                    "country": "Arts, Entertainm ent & Recreation",
                    "NOC": 360,
                    "VC": 40,
                    "AC": 111111,
                },
                {
                    "country": "Other services activities",
                    "NOC": 605,
                    "VC": 25,
                    "AC": 41322,
                }
            ];

chartData.GBUKHsectors = [{
                    "country": "Agriculture, Forestry, Fishing",
                    "NOC": 205,
                    "VC": 10,
                    "AC": 48780
                },
                {
                    "country": "Mining & Quarrying",
                    "NOC": 30,
                    "VC": 0,
                    "AC": 0
                },
                {
                    "country": "Manufacturing",
                    "NOC": 8295,
                    "VC": 390,
                    "AC": 47016,
                },
                {
                    "country": "Electricity, Gas, Steam and Air Conditioning ",
                    "NOC": 65,
                    "VC": 5,
                    "AC": 76923,
                },
                {
                    "country": "Water, Sewerage and Waste",
                    "NOC": 190,
                    "VC": 10,
                    "AC": 52632,
                },
                {
                    "country": "Construction",
                    "NOC": 1140,
                    "VC": 55,
                    "AC": 48246,
                    "color": "#77BC1F",
                    "label": 1140,
                    "label1": 55
                },
                {
                    "country": "Wholesale & Retail Trade, Repairs",
                    "NOC": 3710,
                    "VC": 125,
                    "AC": 33693,
                },
                {
                    "country": "Transport & Storage",
                    "NOC": 265,
                    "VC": 10,
                    "AC": 37736,
                },
                {
                    "country": "Accommodation & Food",
                    "NOC": 140,
                    "VC": 5,
                    "AC": 35714,
                },
                {
                    "country": "Information & Communication",
                    "NOC": 9200,
                    "VC": 515,
                    "AC": 55978,
                },
                {
                    "country": "Financial & Insurance",
                    "NOC": 485,
                    "VC": 35,
                    "AC": 72165,
                },
                {
                    "country": "Real Estate",
                    "NOC": 135,
                    "VC": 5,
                    "AC": 37037,
                },
                {
                    "country": "Professional, Scientific & Technical",
                    "NOC": 6490,
                    "VC": 465,
                    "AC": 71649,
                },
                {
                    "country": "Admin & Support Services",
                    "NOC": 1930,
                    "VC": 100,
                    "AC": 51813,
                },
                {
                    "country": "Public Administration, Defence & Social Services P. Education",
                    "NOC": 0,
                    "VC": 0,
                    "AC": 0,
                },
                {
                    "country": "Education",
                    "NOC": 345,
                    "VC": 10,
                    "AC": 28986,
                },
                {
                    "country": "Health & Social Work",
                    "NOC": 290,
                    "VC": 10,
                    "AC": 34483,
                },
                {
                    "country": "Arts, Entertainm ent & Recreation",
                    "NOC": 360,
                    "VC": 40,
                    "AC": 111111,
                },
                {
                    "country": "Other services activities",
                    "NOC": 605,
                    "VC": 25,
                    "AC": 41322,
                }
            ];

chartData.GBUKIsectors = [{
                    "country": "Agriculture, Forestry, Fishing",
                    "NOC": 205,
                    "VC": 10,
                    "AC": 48780
                },
                {
                    "country": "Mining & Quarrying",
                    "NOC": 30,
                    "VC": 0,
                    "AC": 0
                },
                {
                    "country": "Manufacturing",
                    "NOC": 8295,
                    "VC": 390,
                    "AC": 47016,
                },
                {
                    "country": "Electricity, Gas, Steam and Air Conditioning ",
                    "NOC": 65,
                    "VC": 5,
                    "AC": 76923,
                },
                {
                    "country": "Water, Sewerage and Waste",
                    "NOC": 190,
                    "VC": 10,
                    "AC": 52632,
                },
                {
                    "country": "Construction",
                    "NOC": 1140,
                    "VC": 55,
                    "AC": 48246,
                },
                {
                    "country": "Wholesale & Retail Trade, Repairs",
                    "NOC": 3710,
                    "VC": 125,
                    "AC": 33693,
                    "color": "#77BC1F",
                    "label": 3710,
                    "label1": 135
                },
                {
                    "country": "Transport & Storage",
                    "NOC": 265,
                    "VC": 10,
                    "AC": 37736,
                },
                {
                    "country": "Accommodation & Food",
                    "NOC": 140,
                    "VC": 5,
                    "AC": 35714,
                },
                {
                    "country": "Information & Communication",
                    "NOC": 9200,
                    "VC": 515,
                    "AC": 55978,
                },
                {
                    "country": "Financial & Insurance",
                    "NOC": 485,
                    "VC": 35,
                    "AC": 72165,
                },
                {
                    "country": "Real Estate",
                    "NOC": 135,
                    "VC": 5,
                    "AC": 37037,
                },
                {
                    "country": "Professional, Scientific & Technical",
                    "NOC": 6490,
                    "VC": 465,
                    "AC": 71649,
                },
                {
                    "country": "Admin & Support Services",
                    "NOC": 1930,
                    "VC": 100,
                    "AC": 51813,
                },
                {
                    "country": "Public Administration, Defence & Social Services P. Education",
                    "NOC": 0,
                    "VC": 0,
                    "AC": 0,
                },
                {
                    "country": "Education",
                    "NOC": 345,
                    "VC": 10,
                    "AC": 28986,
                },
                {
                    "country": "Health & Social Work",
                    "NOC": 290,
                    "VC": 10,
                    "AC": 34483,
                },
                {
                    "country": "Arts, Entertainm ent & Recreation",
                    "NOC": 360,
                    "VC": 40,
                    "AC": 111111,
                },
                {
                    "country": "Other services activities",
                    "NOC": 605,
                    "VC": 25,
                    "AC": 41322,
                }
            ];

chartData.GBUKJsectors = [{
                    "country": "Agriculture, Forestry, Fishing",
                    "NOC": 205,
                    "VC": 10,
                    "AC": 48780
                },
                {
                    "country": "Mining & Quarrying",
                    "NOC": 30,
                    "VC": 0,
                    "AC": 0
                },
                {
                    "country": "Manufacturing",
                    "NOC": 8295,
                    "VC": 390,
                    "AC": 47016,
                },
                {
                    "country": "Electricity, Gas, Steam and Air Conditioning ",
                    "NOC": 65,
                    "VC": 5,
                    "AC": 76923,
                },
                {
                    "country": "Water, Sewerage and Waste",
                    "NOC": 190,
                    "VC": 10,
                    "AC": 52632,
                },
                {
                    "country": "Construction",
                    "NOC": 1140,
                    "VC": 55,
                    "AC": 48246,
                },
                {
                    "country": "Wholesale & Retail Trade, Repairs",
                    "NOC": 3710,
                    "VC": 125,
                    "AC": 33693,
                },
                {
                    "country": "Transport & Storage",
                    "NOC": 265,
                    "VC": 10,
                    "AC": 37736,
                    "color": "#77BC1F",
                    "label": 265,
                    "label1": 10
                },
                {
                    "country": "Accommodation & Food",
                    "NOC": 140,
                    "VC": 5,
                    "AC": 35714,
                },
                {
                    "country": "Information & Communication",
                    "NOC": 9200,
                    "VC": 515,
                    "AC": 55978,
                },
                {
                    "country": "Financial & Insurance",
                    "NOC": 485,
                    "VC": 35,
                    "AC": 72165,
                },
                {
                    "country": "Real Estate",
                    "NOC": 135,
                    "VC": 5,
                    "AC": 37037,
                },
                {
                    "country": "Professional, Scientific & Technical",
                    "NOC": 6490,
                    "VC": 465,
                    "AC": 71649,
                },
                {
                    "country": "Admin & Support Services",
                    "NOC": 1930,
                    "VC": 100,
                    "AC": 51813,
                },
                {
                    "country": "Public Administration, Defence & Social Services P. Education",
                    "NOC": 0,
                    "VC": 0,
                    "AC": 0,
                },
                {
                    "country": "Education",
                    "NOC": 345,
                    "VC": 10,
                    "AC": 28986,
                },
                {
                    "country": "Health & Social Work",
                    "NOC": 290,
                    "VC": 10,
                    "AC": 34483,
                },
                {
                    "country": "Arts, Entertainm ent & Recreation",
                    "NOC": 360,
                    "VC": 40,
                    "AC": 111111,
                },
                {
                    "country": "Other services activities",
                    "NOC": 605,
                    "VC": 25,
                    "AC": 41322,
                }
            ];

chartData.GBUKKsectors = [{
                    "country": "Agriculture, Forestry, Fishing",
                    "NOC": 205,
                    "VC": 10,
                    "AC": 48780
                },
                {
                    "country": "Mining & Quarrying",
                    "NOC": 30,
                    "VC": 0,
                    "AC": 0
                },
                {
                    "country": "Manufacturing",
                    "NOC": 8295,
                    "VC": 390,
                    "AC": 47016,
                },
                {
                    "country": "Electricity, Gas, Steam and Air Conditioning ",
                    "NOC": 65,
                    "VC": 5,
                    "AC": 76923,
                },
                {
                    "country": "Water, Sewerage and Waste",
                    "NOC": 190,
                    "VC": 10,
                    "AC": 52632,
                },
                {
                    "country": "Construction",
                    "NOC": 1140,
                    "VC": 55,
                    "AC": 48246,
                },
                {
                    "country": "Wholesale & Retail Trade, Repairs",
                    "NOC": 3710,
                    "VC": 125,
                    "AC": 33693,
                },
                {
                    "country": "Transport & Storage",
                    "NOC": 265,
                    "VC": 10,
                    "AC": 37736,
                },
                {
                    "country": "Accommodation & Food",
                    "NOC": 140,
                    "VC": 5,
                    "AC": 35714,
                    "color": "#77BC1F",
                    "label": 140,
                    "label1": 5
                },
                {
                    "country": "Information & Communication",
                    "NOC": 9200,
                    "VC": 515,
                    "AC": 55978,
                },
                {
                    "country": "Financial & Insurance",
                    "NOC": 485,
                    "VC": 35,
                    "AC": 72165,
                },
                {
                    "country": "Real Estate",
                    "NOC": 135,
                    "VC": 5,
                    "AC": 37037,
                },
                {
                    "country": "Professional, Scientific & Technical",
                    "NOC": 6490,
                    "VC": 465,
                    "AC": 71649,
                },
                {
                    "country": "Admin & Support Services",
                    "NOC": 1930,
                    "VC": 100,
                    "AC": 51813,
                },
                {
                    "country": "Public Administration, Defence & Social Services P. Education",
                    "NOC": 0,
                    "VC": 0,
                    "AC": 0,
                },
                {
                    "country": "Education",
                    "NOC": 345,
                    "VC": 10,
                    "AC": 28986,
                },
                {
                    "country": "Health & Social Work",
                    "NOC": 290,
                    "VC": 10,
                    "AC": 34483,
                },
                {
                    "country": "Arts, Entertainm ent & Recreation",
                    "NOC": 360,
                    "VC": 40,
                    "AC": 111111,
                },
                {
                    "country": "Other services activities",
                    "NOC": 605,
                    "VC": 25,
                    "AC": 41322,
                }
            ];

chartData.GBUKLsectors = [{
                    "country": "Agriculture, Forestry, Fishing",
                    "NOC": 205,
                    "VC": 10,
                    "AC": 48780
                },
                {
                    "country": "Mining & Quarrying",
                    "NOC": 30,
                    "VC": 0,
                    "AC": 0
                },
                {
                    "country": "Manufacturing",
                    "NOC": 8295,
                    "VC": 390,
                    "AC": 47016,
                },
                {
                    "country": "Electricity, Gas, Steam and Air Conditioning ",
                    "NOC": 65,
                    "VC": 5,
                    "AC": 76923,
                },
                {
                    "country": "Water, Sewerage and Waste",
                    "NOC": 190,
                    "VC": 10,
                    "AC": 52632,
                },
                {
                    "country": "Construction",
                    "NOC": 1140,
                    "VC": 55,
                    "AC": 48246,
                },
                {
                    "country": "Wholesale & Retail Trade, Repairs",
                    "NOC": 3710,
                    "VC": 125,
                    "AC": 33693,
                },
                {
                    "country": "Transport & Storage",
                    "NOC": 265,
                    "VC": 10,
                    "AC": 37736,
                },
                {
                    "country": "Accommodation & Food",
                    "NOC": 140,
                    "VC": 5,
                    "AC": 35714,
                },
                {
                    "country": "Information & Communication",
                    "NOC": 9200,
                    "VC": 515,
                    "AC": 55978,
                    "color": "#77BC1F",
                    "label": 9200,
                    "label1": 515
                },
                {
                    "country": "Financial & Insurance",
                    "NOC": 485,
                    "VC": 35,
                    "AC": 72165,
                },
                {
                    "country": "Real Estate",
                    "NOC": 135,
                    "VC": 5,
                    "AC": 37037,
                },
                {
                    "country": "Professional, Scientific & Technical",
                    "NOC": 6490,
                    "VC": 465,
                    "AC": 71649,
                },
                {
                    "country": "Admin & Support Services",
                    "NOC": 1930,
                    "VC": 100,
                    "AC": 51813,
                },
                {
                    "country": "Public Administration, Defence & Social Services P. Education",
                    "NOC": 0,
                    "VC": 0,
                    "AC": 0,
                },
                {
                    "country": "Education",
                    "NOC": 345,
                    "VC": 10,
                    "AC": 28986,
                },
                {
                    "country": "Health & Social Work",
                    "NOC": 290,
                    "VC": 10,
                    "AC": 34483,
                },
                {
                    "country": "Arts, Entertainm ent & Recreation",
                    "NOC": 360,
                    "VC": 40,
                    "AC": 111111,
                },
                {
                    "country": "Other services activities",
                    "NOC": 605,
                    "VC": 25,
                    "AC": 41322,
                }
            ];

chartData.GBUKMsectors = [{
                    "country": "Agriculture, Forestry, Fishing",
                    "NOC": 205,
                    "VC": 10,
                    "AC": 48780
                },
                {
                    "country": "Mining & Quarrying",
                    "NOC": 30,
                    "VC": 0,
                    "AC": 0
                },
                {
                    "country": "Manufacturing",
                    "NOC": 8295,
                    "VC": 390,
                    "AC": 47016,
                },
                {
                    "country": "Electricity, Gas, Steam and Air Conditioning ",
                    "NOC": 65,
                    "VC": 5,
                    "AC": 76923,
                },
                {
                    "country": "Water, Sewerage and Waste",
                    "NOC": 190,
                    "VC": 10,
                    "AC": 52632,
                },
                {
                    "country": "Construction",
                    "NOC": 1140,
                    "VC": 55,
                    "AC": 48246,
                },
                {
                    "country": "Wholesale & Retail Trade, Repairs",
                    "NOC": 3710,
                    "VC": 125,
                    "AC": 33693,
                },
                {
                    "country": "Transport & Storage",
                    "NOC": 265,
                    "VC": 10,
                    "AC": 37736,
                },
                {
                    "country": "Accommodation & Food",
                    "NOC": 140,
                    "VC": 5,
                    "AC": 35714,
                },
                {
                    "country": "Information & Communication",
                    "NOC": 9200,
                    "VC": 515,
                    "AC": 55978,
                },
                {
                    "country": "Financial & Insurance",
                    "NOC": 485,
                    "VC": 35,
                    "AC": 72165,
                    "color": "#77BC1F",
                    "label": 485,
                    "label1": 35
                },
                {
                    "country": "Real Estate",
                    "NOC": 135,
                    "VC": 5,
                    "AC": 37037,
                },
                {
                    "country": "Professional, Scientific & Technical",
                    "NOC": 6490,
                    "VC": 465,
                    "AC": 71649,
                },
                {
                    "country": "Admin & Support Services",
                    "NOC": 1930,
                    "VC": 100,
                    "AC": 51813,
                },
                {
                    "country": "Public Administration, Defence & Social Services P. Education",
                    "NOC": 0,
                    "VC": 0,
                    "AC": 0,
                },
                {
                    "country": "Education",
                    "NOC": 345,
                    "VC": 10,
                    "AC": 28986,
                },
                {
                    "country": "Health & Social Work",
                    "NOC": 290,
                    "VC": 10,
                    "AC": 34483,
                },
                {
                    "country": "Arts, Entertainm ent & Recreation",
                    "NOC": 360,
                    "VC": 40,
                    "AC": 111111,
                },
                {
                    "country": "Other services activities",
                    "NOC": 605,
                    "VC": 25,
                    "AC": 41322,
                }
            ];

chartData.GBUKNsectors = [{
                    "country": "Agriculture, Forestry, Fishing",
                    "NOC": 205,
                    "VC": 10,
                    "AC": 48780
                },
                {
                    "country": "Mining & Quarrying",
                    "NOC": 30,
                    "VC": 0,
                    "AC": 0
                },
                {
                    "country": "Manufacturing",
                    "NOC": 8295,
                    "VC": 390,
                    "AC": 47016,
                },
                {
                    "country": "Electricity, Gas, Steam and Air Conditioning ",
                    "NOC": 65,
                    "VC": 5,
                    "AC": 76923,
                },
                {
                    "country": "Water, Sewerage and Waste",
                    "NOC": 190,
                    "VC": 10,
                    "AC": 52632,
                },
                {
                    "country": "Construction",
                    "NOC": 1140,
                    "VC": 55,
                    "AC": 48246,
                },
                {
                    "country": "Wholesale & Retail Trade, Repairs",
                    "NOC": 3710,
                    "VC": 125,
                    "AC": 33693,
                },
                {
                    "country": "Transport & Storage",
                    "NOC": 265,
                    "VC": 10,
                    "AC": 37736,
                },
                {
                    "country": "Accommodation & Food",
                    "NOC": 140,
                    "VC": 5,
                    "AC": 35714,
                },
                {
                    "country": "Information & Communication",
                    "NOC": 9200,
                    "VC": 515,
                    "AC": 55978,
                },
                {
                    "country": "Financial & Insurance",
                    "NOC": 485,
                    "VC": 35,
                    "AC": 72165,
                },
                {
                    "country": "Real Estate",
                    "NOC": 135,
                    "VC": 5,
                    "AC": 37037,
                    "color": "#77BC1F",
                    "label": 135,
                    "label1": 5
                },
                {
                    "country": "Professional, Scientific & Technical",
                    "NOC": 6490,
                    "VC": 465,
                    "AC": 71649,
                },
                {
                    "country": "Admin & Support Services",
                    "NOC": 1930,
                    "VC": 100,
                    "AC": 51813,
                },
                {
                    "country": "Public Administration, Defence & Social Services P. Education",
                    "NOC": 0,
                    "VC": 0,
                    "AC": 0,
                },
                {
                    "country": "Education",
                    "NOC": 345,
                    "VC": 10,
                    "AC": 28986,
                },
                {
                    "country": "Health & Social Work",
                    "NOC": 290,
                    "VC": 10,
                    "AC": 34483,
                },
                {
                    "country": "Arts, Entertainm ent & Recreation",
                    "NOC": 360,
                    "VC": 40,
                    "AC": 111111,
                },
                {
                    "country": "Other services activities",
                    "NOC": 605,
                    "VC": 25,
                    "AC": 41322,
                }
            ];
chartData.GBUKOsectors = [{
                    "country": "Agriculture, Forestry, Fishing",
                    "NOC": 205,
                    "VC": 10,
                    "AC": 48780
                },
                {
                    "country": "Mining & Quarrying",
                    "NOC": 30,
                    "VC": 0,
                    "AC": 0
                },
                {
                    "country": "Manufacturing",
                    "NOC": 8295,
                    "VC": 390,
                    "AC": 47016,
                },
                {
                    "country": "Electricity, Gas, Steam and Air Conditioning ",
                    "NOC": 65,
                    "VC": 5,
                    "AC": 76923,
                },
                {
                    "country": "Water, Sewerage and Waste",
                    "NOC": 190,
                    "VC": 10,
                    "AC": 52632,
                },
                {
                    "country": "Construction",
                    "NOC": 1140,
                    "VC": 55,
                    "AC": 48246,
                },
                {
                    "country": "Wholesale & Retail Trade, Repairs",
                    "NOC": 3710,
                    "VC": 125,
                    "AC": 33693,
                },
                {
                    "country": "Transport & Storage",
                    "NOC": 265,
                    "VC": 10,
                    "AC": 37736,
                },
                {
                    "country": "Accommodation & Food",
                    "NOC": 140,
                    "VC": 5,
                    "AC": 35714,
                },
                {
                    "country": "Information & Communication",
                    "NOC": 9200,
                    "VC": 515,
                    "AC": 55978,
                },
                {
                    "country": "Financial & Insurance",
                    "NOC": 485,
                    "VC": 35,
                    "AC": 72165,
                },
                {
                    "country": "Real Estate",
                    "NOC": 135,
                    "VC": 5,
                    "AC": 37037,
                },
                {
                    "country": "Professional, Scientific & Technical",
                    "NOC": 6490,
                    "VC": 465,
                    "AC": 71649,
                    "color": "#77BC1F",
                    "label": 6490,
                    "label1": 465
                },
                {
                    "country": "Admin & Support Services",
                    "NOC": 1930,
                    "VC": 100,
                    "AC": 51813,
                },
                {
                    "country": "Public Administration, Defence & Social Services P. Education",
                    "NOC": 0,
                    "VC": 0,
                    "AC": 0,
                },
                {
                    "country": "Education",
                    "NOC": 345,
                    "VC": 10,
                    "AC": 28986,
                },
                {
                    "country": "Health & Social Work",
                    "NOC": 290,
                    "VC": 10,
                    "AC": 34483,
                },
                {
                    "country": "Arts, Entertainm ent & Recreation",
                    "NOC": 360,
                    "VC": 40,
                    "AC": 111111,
                },
                {
                    "country": "Other services activities",
                    "NOC": 605,
                    "VC": 25,
                    "AC": 41322,
                }
            ];
chartData.GBUKPsectors = [{
                    "country": "Agriculture, Forestry, Fishing",
                    "NOC": 205,
                    "VC": 10,
                    "AC": 48780
                },
                {
                    "country": "Mining & Quarrying",
                    "NOC": 30,
                    "VC": 0,
                    "AC": 0
                },
                {
                    "country": "Manufacturing",
                    "NOC": 8295,
                    "VC": 390,
                    "AC": 47016,
                },
                {
                    "country": "Electricity, Gas, Steam and Air Conditioning ",
                    "NOC": 65,
                    "VC": 5,
                    "AC": 76923,
                },
                {
                    "country": "Water, Sewerage and Waste",
                    "NOC": 190,
                    "VC": 10,
                    "AC": 52632,
                },
                {
                    "country": "Construction",
                    "NOC": 1140,
                    "VC": 55,
                    "AC": 48246,
                },
                {
                    "country": "Wholesale & Retail Trade, Repairs",
                    "NOC": 3710,
                    "VC": 125,
                    "AC": 33693,
                },
                {
                    "country": "Transport & Storage",
                    "NOC": 265,
                    "VC": 10,
                    "AC": 37736,
                },
                {
                    "country": "Accommodation & Food",
                    "NOC": 140,
                    "VC": 5,
                    "AC": 35714,
                },
                {
                    "country": "Information & Communication",
                    "NOC": 9200,
                    "VC": 515,
                    "AC": 55978,
                },
                {
                    "country": "Financial & Insurance",
                    "NOC": 485,
                    "VC": 35,
                    "AC": 72165,
                },
                {
                    "country": "Real Estate",
                    "NOC": 135,
                    "VC": 5,
                    "AC": 37037,
                },
                {
                    "country": "Professional, Scientific & Technical",
                    "NOC": 6490,
                    "VC": 465,
                    "AC": 71649,
                },
                {
                    "country": "Admin & Support Services",
                    "NOC": 1930,
                    "VC": 100,
                    "AC": 51813,
                    "color": "#77BC1F",
                    "label": 1930,
                    "label1": 100
                },
                {
                    "country": "Public Administration, Defence & Social Services P. Education",
                    "NOC": 0,
                    "VC": 0,
                    "AC": 0,
                },
                {
                    "country": "Education",
                    "NOC": 345,
                    "VC": 10,
                    "AC": 28986,
                },
                {
                    "country": "Health & Social Work",
                    "NOC": 290,
                    "VC": 10,
                    "AC": 34483,
                },
                {
                    "country": "Arts, Entertainm ent & Recreation",
                    "NOC": 360,
                    "VC": 40,
                    "AC": 111111,
                },
                {
                    "country": "Other services activities",
                    "NOC": 605,
                    "VC": 25,
                    "AC": 41322,
                }
            ];
chartData.GBUKQsectors = [{
                    "country": "Agriculture, Forestry, Fishing",
                    "NOC": 205,
                    "VC": 10,
                    "AC": 48780
                },
                {
                    "country": "Mining & Quarrying",
                    "NOC": 30,
                    "VC": 0,
                    "AC": 0
                },
                {
                    "country": "Manufacturing",
                    "NOC": 8295,
                    "VC": 390,
                    "AC": 47016,
                },
                {
                    "country": "Electricity, Gas, Steam and Air Conditioning ",
                    "NOC": 65,
                    "VC": 5,
                    "AC": 76923,
                },
                {
                    "country": "Water, Sewerage and Waste",
                    "NOC": 190,
                    "VC": 10,
                    "AC": 52632,
                },
                {
                    "country": "Construction",
                    "NOC": 1140,
                    "VC": 55,
                    "AC": 48246,
                },
                {
                    "country": "Wholesale & Retail Trade, Repairs",
                    "NOC": 3710,
                    "VC": 125,
                    "AC": 33693,
                },
                {
                    "country": "Transport & Storage",
                    "NOC": 265,
                    "VC": 10,
                    "AC": 37736,
                },
                {
                    "country": "Accommodation & Food",
                    "NOC": 140,
                    "VC": 5,
                    "AC": 35714,
                },
                {
                    "country": "Information & Communication",
                    "NOC": 9200,
                    "VC": 515,
                    "AC": 55978,
                },
                {
                    "country": "Financial & Insurance",
                    "NOC": 485,
                    "VC": 35,
                    "AC": 72165,
                },
                {
                    "country": "Real Estate",
                    "NOC": 135,
                    "VC": 5,
                    "AC": 37037,
                },
                {
                    "country": "Professional, Scientific & Technical",
                    "NOC": 6490,
                    "VC": 465,
                    "AC": 71649,
                },
                {
                    "country": "Admin & Support Services",
                    "NOC": 1930,
                    "VC": 100,
                    "AC": 51813,
                },
                {
                    "country": "Public Administration, Defence & Social Services P. Education",
                    "NOC": 0,
                    "VC": 0,
                    "AC": 0,
                    "color": "#77BC1F",
                    "label": 0,
                    "label1": 10
                },
                {
                    "country": "Education",
                    "NOC": 345,
                    "VC": 10,
                    "AC": 28986,
                },
                {
                    "country": "Health & Social Work",
                    "NOC": 290,
                    "VC": 10,
                    "AC": 34483,
                },
                {
                    "country": "Arts, Entertainm ent & Recreation",
                    "NOC": 360,
                    "VC": 40,
                    "AC": 111111,
                },
                {
                    "country": "Other services activities",
                    "NOC": 605,
                    "VC": 25,
                    "AC": 41322,
                }
            ];
chartData.GBUKRsectors = [{
                    "country": "Agriculture, Forestry, Fishing",
                    "NOC": 205,
                    "VC": 10,
                    "AC": 48780
                },
                {
                    "country": "Mining & Quarrying",
                    "NOC": 30,
                    "VC": 0,
                    "AC": 0
                },
                {
                    "country": "Manufacturing",
                    "NOC": 8295,
                    "VC": 390,
                    "AC": 47016,
                },
                {
                    "country": "Electricity, Gas, Steam and Air Conditioning ",
                    "NOC": 65,
                    "VC": 5,
                    "AC": 76923,
                },
                {
                    "country": "Water, Sewerage and Waste",
                    "NOC": 190,
                    "VC": 10,
                    "AC": 52632,
                },
                {
                    "country": "Construction",
                    "NOC": 1140,
                    "VC": 55,
                    "AC": 48246,
                },
                {
                    "country": "Wholesale & Retail Trade, Repairs",
                    "NOC": 3710,
                    "VC": 125,
                    "AC": 33693,
                },
                {
                    "country": "Transport & Storage",
                    "NOC": 265,
                    "VC": 10,
                    "AC": 37736,
                },
                {
                    "country": "Accommodation & Food",
                    "NOC": 140,
                    "VC": 5,
                    "AC": 35714,
                },
                {
                    "country": "Information & Communication",
                    "NOC": 9200,
                    "VC": 515,
                    "AC": 55978,
                },
                {
                    "country": "Financial & Insurance",
                    "NOC": 485,
                    "VC": 35,
                    "AC": 72165,
                },
                {
                    "country": "Real Estate",
                    "NOC": 135,
                    "VC": 5,
                    "AC": 37037,
                },
                {
                    "country": "Professional, Scientific & Technical",
                    "NOC": 6490,
                    "VC": 465,
                    "AC": 71649,
                },
                {
                    "country": "Admin & Support Services",
                    "NOC": 1930,
                    "VC": 100,
                    "AC": 51813,
                },
                {
                    "country": "Public Administration, Defence & Social Services P. Education",
                    "NOC": 0,
                    "VC": 0,
                    "AC": 0,
                },
                {
                    "country": "Education",
                    "NOC": 345,
                    "VC": 10,
                    "AC": 28986,
                    "color": "#77BC1F",
                    "label": 345,
                    "label1": 10
                },
                {
                    "country": "Health & Social Work",
                    "NOC": 290,
                    "VC": 10,
                    "AC": 34483,
                },
                {
                    "country": "Arts, Entertainm ent & Recreation",
                    "NOC": 360,
                    "VC": 40,
                    "AC": 111111,
                },
                {
                    "country": "Other services activities",
                    "NOC": 605,
                    "VC": 25,
                    "AC": 41322,
                }
            ];
chartData.GBUKSsectors = [{
                    "country": "Agriculture, Forestry, Fishing",
                    "NOC": 205,
                    "VC": 10,
                    "AC": 48780
                },
                {
                    "country": "Mining & Quarrying",
                    "NOC": 30,
                    "VC": 0,
                    "AC": 0
                },
                {
                    "country": "Manufacturing",
                    "NOC": 8295,
                    "VC": 390,
                    "AC": 47016,
                },
                {
                    "country": "Electricity, Gas, Steam and Air Conditioning ",
                    "NOC": 65,
                    "VC": 5,
                    "AC": 76923,
                },
                {
                    "country": "Water, Sewerage and Waste",
                    "NOC": 190,
                    "VC": 10,
                    "AC": 52632,
                },
                {
                    "country": "Construction",
                    "NOC": 1140,
                    "VC": 55,
                    "AC": 48246,
                },
                {
                    "country": "Wholesale & Retail Trade, Repairs",
                    "NOC": 3710,
                    "VC": 125,
                    "AC": 33693,
                },
                {
                    "country": "Transport & Storage",
                    "NOC": 265,
                    "VC": 10,
                    "AC": 37736,
                },
                {
                    "country": "Accommodation & Food",
                    "NOC": 140,
                    "VC": 5,
                    "AC": 35714,
                },
                {
                    "country": "Information & Communication",
                    "NOC": 9200,
                    "VC": 515,
                    "AC": 55978,
                },
                {
                    "country": "Financial & Insurance",
                    "NOC": 485,
                    "VC": 35,
                    "AC": 72165,
                },
                {
                    "country": "Real Estate",
                    "NOC": 135,
                    "VC": 5,
                    "AC": 37037,
                },
                {
                    "country": "Professional, Scientific & Technical",
                    "NOC": 6490,
                    "VC": 465,
                    "AC": 71649,
                },
                {
                    "country": "Admin & Support Services",
                    "NOC": 1930,
                    "VC": 100,
                    "AC": 51813,
                },
                {
                    "country": "Public Administration, Defence & Social Services P. Education",
                    "NOC": 0,
                    "VC": 0,
                    "AC": 0,
                },
                {
                    "country": "Education",
                    "NOC": 345,
                    "VC": 10,
                    "AC": 28986,
                },
                {
                    "country": "Health & Social Work",
                    "NOC": 290,
                    "VC": 10,
                    "AC": 34483,
                    "color": "#77BC1F",
                    "label": 290,
                    "label1": 10
                },
                {
                    "country": "Arts, Entertainm ent & Recreation",
                    "NOC": 360,
                    "VC": 40,
                    "AC": 111111,
                },
                {
                    "country": "Other services activities",
                    "NOC": 605,
                    "VC": 25,
                    "AC": 41322,
                }
            ];
chartData.GBUKTsectors = [{
                    "country": "Agriculture, Forestry, Fishing",
                    "NOC": 205,
                    "VC": 10,
                    "AC": 48780
                },
                {
                    "country": "Mining & Quarrying",
                    "NOC": 30,
                    "VC": 0,
                    "AC": 0
                },
                {
                    "country": "Manufacturing",
                    "NOC": 8295,
                    "VC": 390,
                    "AC": 47016,
                },
                {
                    "country": "Electricity, Gas, Steam and Air Conditioning ",
                    "NOC": 65,
                    "VC": 5,
                    "AC": 76923,
                },
                {
                    "country": "Water, Sewerage and Waste",
                    "NOC": 190,
                    "VC": 10,
                    "AC": 52632,
                },
                {
                    "country": "Construction",
                    "NOC": 1140,
                    "VC": 55,
                    "AC": 48246,
                },
                {
                    "country": "Wholesale & Retail Trade, Repairs",
                    "NOC": 3710,
                    "VC": 125,
                    "AC": 33693,
                },
                {
                    "country": "Transport & Storage",
                    "NOC": 265,
                    "VC": 10,
                    "AC": 37736,
                },
                {
                    "country": "Accommodation & Food",
                    "NOC": 140,
                    "VC": 5,
                    "AC": 35714,
                },
                {
                    "country": "Information & Communication",
                    "NOC": 9200,
                    "VC": 515,
                    "AC": 55978,
                },
                {
                    "country": "Financial & Insurance",
                    "NOC": 485,
                    "VC": 35,
                    "AC": 72165,
                },
                {
                    "country": "Real Estate",
                    "NOC": 135,
                    "VC": 5,
                    "AC": 37037,
                },
                {
                    "country": "Professional, Scientific & Technical",
                    "NOC": 6490,
                    "VC": 465,
                    "AC": 71649,
                },
                {
                    "country": "Admin & Support Services",
                    "NOC": 1930,
                    "VC": 100,
                    "AC": 51813,
                },
                {
                    "country": "Public Administration, Defence & Social Services P. Education",
                    "NOC": 0,
                    "VC": 0,
                    "AC": 0,
                },
                {
                    "country": "Education",
                    "NOC": 345,
                    "VC": 10,
                    "AC": 28986,
                },
                {
                    "country": "Health & Social Work",
                    "NOC": 290,
                    "VC": 10,
                    "AC": 34483,
                },
                {
                    "country": "Arts, Entertainm ent & Recreation",
                    "NOC": 360,
                    "VC": 40,
                    "AC": 111111,
                    "color": "#77BC1F",
                    "label": 360,
                    "label1": 40
                },
                {
                    "country": "Other services activities",
                    "NOC": 605,
                    "VC": 25,
                    "AC": 41322,
                }
            ];
chartData.GBUKUsectors = [{
                    "country": "Agriculture, Forestry, Fishing",
                    "NOC": 205,
                    "VC": 10,
                    "AC": 48780
                },
                {
                    "country": "Mining & Quarrying",
                    "NOC": 30,
                    "VC": 0,
                    "AC": 0
                },
                {
                    "country": "Manufacturing",
                    "NOC": 8295,
                    "VC": 390,
                    "AC": 47016,
                },
                {
                    "country": "Electricity, Gas, Steam and Air Conditioning ",
                    "NOC": 65,
                    "VC": 5,
                    "AC": 76923,
                },
                {
                    "country": "Water, Sewerage and Waste",
                    "NOC": 190,
                    "VC": 10,
                    "AC": 52632,
                },
                {
                    "country": "Construction",
                    "NOC": 1140,
                    "VC": 55,
                    "AC": 48246,
                },
                {
                    "country": "Wholesale & Retail Trade, Repairs",
                    "NOC": 3710,
                    "VC": 125,
                    "AC": 33693,
                },
                {
                    "country": "Transport & Storage",
                    "NOC": 265,
                    "VC": 10,
                    "AC": 37736,
                },
                {
                    "country": "Accommodation & Food",
                    "NOC": 140,
                    "VC": 5,
                    "AC": 35714,
                },
                {
                    "country": "Information & Communication",
                    "NOC": 9200,
                    "VC": 515,
                    "AC": 55978,
                },
                {
                    "country": "Financial & Insurance",
                    "NOC": 485,
                    "VC": 35,
                    "AC": 72165,
                },
                {
                    "country": "Real Estate",
                    "NOC": 135,
                    "VC": 5,
                    "AC": 37037,
                },
                {
                    "country": "Professional, Scientific & Technical",
                    "NOC": 6490,
                    "VC": 465,
                    "AC": 71649,
                },
                {
                    "country": "Admin & Support Services",
                    "NOC": 1930,
                    "VC": 100,
                    "AC": 51813,
                },
                {
                    "country": "Public Administration, Defence & Social Services P. Education",
                    "NOC": 0,
                    "VC": 0,
                    "AC": 0,
                },
                {
                    "country": "Education",
                    "NOC": 345,
                    "VC": 10,
                    "AC": 28986,
                },
                {
                    "country": "Health & Social Work",
                    "NOC": 290,
                    "VC": 10,
                    "AC": 34483,
                },
                {
                    "country": "Arts, Entertainm ent & Recreation",
                    "NOC": 360,
                    "VC": 40,
                    "AC": 111111,
                },
                {
                    "country": "Other services activities",
                    "NOC": 605,
                    "VC": 25,
                    "AC": 41322,
                    "color": "#77BC1F",
                    "label": 605,
                    "label1": 25
                }
            ];
//     AmCharts.addInitHandler( function( chart ) {

//   if ( chart.orderByField === undefined ) {
//     return;
//   }

//   chart.dataProvider.sort( function( a, b ) {
//     if ( a[ chart.orderByField ] > b[ chart.orderByField ] ) {
//       return -1;
//     } else if ( a[ chart.orderByField ] == b[ chart.orderByField ] ) {
//       return 0;
//     }
//     return 1;
//   } );

// }, [ "serial" ] );

//     AmCharts.addInitHandler( function( chart ) {

//   if ( chart.orderByField === undefined ) {
//     return;
//   }

//   chart.dataProvider.sort( function( a, b ) {
//     if ( a[ chart.orderByField ] > b[ chart.orderByField ] ) {
//       return -1;
//     } else if ( a[ chart.orderByField ] == b[ chart.orderByField ] ) {
//       return 0;
//     }
//     return 1;
//   } );

// }, [ "serial" ] );