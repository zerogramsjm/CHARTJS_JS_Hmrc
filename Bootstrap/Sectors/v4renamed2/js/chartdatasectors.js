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