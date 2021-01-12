// Use D3 fetch to read the JSON file
// The data from the JSON file is arbitrarily named importedData as the argument
d3.json("samples.json").then((importedData) => {
 console.log(importedData);
 var data = importedData;
 
 

 function init() {

    //  Create the Traces for bar plot
    var trace1 = {
        x: data.samples[0].sample_values.slice(0,10).reverse(),
        y: data.samples[0].otu_ids.slice(0,10).reverse().map(d => "OTU " + d),
        text: data.samples[0].otu_labels.slice(0,10).reverse(),
        marker: {color: '005a99'},
        type: "bar",
        orientation:"h",      
       };


    // Create the data array for the bar plot
    var data1 = [trace1];


    // Define the bar plot layout
    var layout1 = {
        font: {family:"Arial Rounded MT Bold "},
        title: "Top 10 OTU",
       yaxis: { tickmode: "linear", },
       margin: {
         l:100,
         r:50,
         t:100,
         b:30  
       }
       };
    // Plot the chart to a div tag with id "plot"
    Plotly.newPlot("bar", data1, layout1);


    function upDatePlotly(newdata) {
   // Use plotly.restyle to update the the bar chart with the newdata array
   var BAR = document.getElementById("bar")
   // Note the extra brackets around 'x' and 'y'
     Plotly.restyle(BAR, "x", [x]);
     Plotly.restyle(BAR, "y", [y]);
    }


    function optionChanged(dataset){
        var x=[];
        var y=[];
        switch (dataset) {
             case"940":
             x = data.samples[0].sample_values.slice(0,10).reverse();
             y = data.samples[0].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"941":
             x = data.samples[1].sample_values.slice(0,10).reverse();
             y = data.samples[1].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"943":
             x = data.samples[2].sample_values.slice(0,10).reverse();
             y = data.samples[2].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"944":
             x = data.samples[3].sample_values.slice(0,10).reverse();
             y = data.samples[3].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"945":
             x = data.samples[4].sample_values.slice(0,10).reverse();
             y = data.samples[4].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"946":
             x = data.samples[5].sample_values.slice(0,10).reverse();
             y = data.samples[5].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"947":
             x = data.samples[6].sample_values.slice(0,10).reverse();
             y = data.samples[6].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"948":
             x = data.samples[7].sample_values.slice(0,10).reverse();
             y = data.samples[7].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"949":
             x = data.samples[8].sample_values.slice(0,10).reverse();
             y = data.samples[8].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"950":
             x = data.samples[9].sample_values.slice(0,10).reverse();
             y = data.samples[9].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"952":
             x = data.samples[10].sample_values.slice(0,10).reverse();
             y = data.samples[10].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"953":
             x = data.samples[11].sample_values.slice(0,10).reverse();
             y = data.samples[11].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"954":
             x = data.samples[12].sample_values.slice(0,10).reverse();
             y = data.samples[12].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"955":
             x = data.samples[13].sample_values.slice(0,10).reverse();
             y = data.samples[13].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"956":
             x = data.samples[14].sample_values.slice(0,10).reverse();
             y = data.samples[14].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"958":
             x = data.samples[15].sample_values.slice(0,10).reverse();
             y = data.samples[15].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"959":
             x = data.samples[16].sample_values.slice(0,10).reverse();
             y = data.samples[16].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"960":
             x = data.samples[17].sample_values.slice(0,10).reverse();
             y = data.samples[17].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"961":
             x = data.samples[18].sample_values.slice(0,10).reverse();
             y = data.samples[18].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"962":
             x = data.samples[19].sample_values.slice(0,10).reverse();
             y = data.samples[19].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"963":
             x = data.samples[20].sample_values.slice(0,10).reverse();
             y = data.samples[20].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"964":
             x = data.samples[21].sample_values.slice(0,10).reverse();
             y = data.samples[21].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"966":
             x = data.samples[22].sample_values.slice(0,10).reverse();
             y = data.samples[22].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"967":
             x = data.samples[23].sample_values.slice(0,10).reverse();
             y = data.samples[23].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"968":
             x = data.samples[24].sample_values.slice(0,10).reverse();
             y = data.samples[24].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"969":
             x = data.samples[25].sample_values.slice(0,10).reverse();
             y = data.samples[25].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"970":
             x = data.samples[26].sample_values.slice(0,10).reverse();
             y = data.samples[26].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"971":
             x = data.samples[27].sample_values.slice(0,10).reverse();
             y = data.samples[27].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"972":
             x = data.samples[28].sample_values.slice(0,10).reverse();
             y = data.samples[28].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"973":
             x = data.samples[29].sample_values.slice(0,10).reverse();
             y = data.samples[29].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"974":
             x = data.samples[30].sample_values.slice(0,10).reverse();
             y = data.samples[30].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"975":
             x = data.samples[31].sample_values.slice(0,10).reverse();
             y = data.samples[31].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"978":
             x = data.samples[32].sample_values.slice(0,10).reverse();
             y = data.samples[32].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1233":
             x = data.samples[33].sample_values.slice(0,10).reverse();
             y = data.samples[33].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1234":
             x = data.samples[34].sample_values.slice(0,10).reverse();
             y = data.samples[34].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1235":
             x = data.samples[35].sample_values.slice(0,10).reverse();
             y = data.samples[35].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1236":
             x = data.samples[36].sample_values.slice(0,10).reverse();
             y = data.samples[36].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1237":
             x = data.samples[37].sample_values.slice(0,10).reverse();
             y = data.samples[37].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1238":
             x = data.samples[38].sample_values.slice(0,10).reverse();
             y = data.samples[38].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1242":
             x = data.samples[39].sample_values.slice(0,10).reverse();
             y = data.samples[39].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1243":
             x = data.samples[40].sample_values.slice(0,10).reverse();
             y = data.samples[40].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1246":
             x = data.samples[41].sample_values.slice(0,10).reverse();
             y = data.samples[41].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1253":
             x = data.samples[42].sample_values.slice(0,10).reverse();
             y = data.samples[42].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1254":
             x = data.samples[43].sample_values.slice(0,10).reverse();
             y = data.samples[43].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1258":
             x = data.samples[44].sample_values.slice(0,10).reverse();
             y = data.samples[44].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1259":
             x = data.samples[45].sample_values.slice(0,10).reverse();
             y = data.samples[45].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1260":
             x = data.samples[46].sample_values.slice(0,10).reverse();
             y = data.samples[46].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1264":
             x = data.samples[47].sample_values.slice(0,10).reverse();
             y = data.samples[47].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1265":
             x = data.samples[48].sample_values.slice(0,10).reverse();
             y = data.samples[48].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1273":
             x = data.samples[49].sample_values.slice(0,10).reverse();
             y = data.samples[49].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1275":
             x = data.samples[50].sample_values.slice(0,10).reverse();
             y = data.samples[50].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1276":
             x = data.samples[51].sample_values.slice(0,10).reverse();
             y = data.samples[51].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1277":
             x = data.samples[52].sample_values.slice(0,10).reverse();
             y = data.samples[52].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1278":
             x = data.samples[53].sample_values.slice(0,10).reverse();
             y = data.samples[53].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1279":
             x = data.samples[54].sample_values.slice(0,10).reverse();
             y = data.samples[54].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1280":
             x = data.samples[55].sample_values.slice(0,10).reverse();
             y = data.samples[55].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1281":
             x = data.samples[56].sample_values.slice(0,10).reverse();
             y = data.samples[56].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1282":
             x = data.samples[57].sample_values.slice(0,10).reverse();
             y = data.samples[57].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1283":
             x = data.samples[58].sample_values.slice(0,10).reverse();
             y = data.samples[58].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1284":
             x = data.samples[59].sample_values.slice(0,10).reverse();
             y = data.samples[59].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1285":
             x = data.samples[60].sample_values.slice(0,10).reverse();
             y = data.samples[60].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1286":
             x = data.samples[61].sample_values.slice(0,10).reverse();
             y = data.samples[61].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1287":
             x = data.samples[62].sample_values.slice(0,10).reverse();
             y = data.samples[62].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1288":
             x = data.samples[63].sample_values.slice(0,10).reverse();
             y = data.samples[63].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1289":
             x = data.samples[64].sample_values.slice(0,10).reverse();
             y = data.samples[64].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1290":
             x = data.samples[65].sample_values.slice(0,10).reverse();
             y = data.samples[65].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1291":
             x = data.samples[66].sample_values.slice(0,10).reverse();
             y = data.samples[66].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1292":
             x = data.samples[67].sample_values.slice(0,10).reverse();
             y = data.samples[67].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1293":
             x = data.samples[68].sample_values.slice(0,10).reverse();
             y = data.samples[68].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1294":
             x = data.samples[69].sample_values.slice(0,10).reverse();
             y = data.samples[69].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1295":
             x = data.samples[70].sample_values.slice(0,10).reverse();
             y = data.samples[70].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1296":
             x = data.samples[71].sample_values.slice(0,10).reverse();
             y = data.samples[71].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1297":
             x = data.samples[72].sample_values.slice(0,10).reverse();
             y = data.samples[72].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1298":
             x = data.samples[73].sample_values.slice(0,10).reverse();
             y = data.samples[73].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1308":
             x = data.samples[74].sample_values.slice(0,10).reverse();
             y = data.samples[74].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1309":
             x = data.samples[75].sample_values.slice(0,10).reverse();
             y = data.samples[75].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1310":
             x = data.samples[76].sample_values.slice(0,10).reverse();
             y = data.samples[76].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1374":
             x = data.samples[77].sample_values.slice(0,10).reverse();
             y = data.samples[77].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1415":
             x = data.samples[78].sample_values.slice(0,10).reverse();
             y = data.samples[78].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1439":
             x = data.samples[79].sample_values.slice(0,10).reverse();
             y = data.samples[79].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1441":
             x = data.samples[80].sample_values.slice(0,10).reverse();
             y = data.samples[80].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1443":
             x = data.samples[81].sample_values.slice(0,10).reverse();
             y = data.samples[81].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1486":
             x = data.samples[82].sample_values.slice(0,10).reverse();
             y = data.samples[82].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1487":
             x = data.samples[83].sample_values.slice(0,10).reverse();
             y = data.samples[83].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1489":
             x = data.samples[84].sample_values.slice(0,10).reverse();
             y = data.samples[84].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1490":
             x = data.samples[85].sample_values.slice(0,10).reverse();
             y = data.samples[85].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1491":
             x = data.samples[86].sample_values.slice(0,10).reverse();
             y = data.samples[86].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1494":
             x = data.samples[87].sample_values.slice(0,10).reverse();
             y = data.samples[87].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1495":
             x = data.samples[88].sample_values.slice(0,10).reverse();
             y = data.samples[88].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1497":
             x = data.samples[89].sample_values.slice(0,10).reverse();
             y = data.samples[89].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1499":
             x = data.samples[90].sample_values.slice(0,10).reverse();
             y = data.samples[90].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1500":
             x = data.samples[91].sample_values.slice(0,10).reverse();
             y = data.samples[91].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1501":
             x = data.samples[92].sample_values.slice(0,10).reverse();
             y = data.samples[92].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1502":
             x = data.samples[93].sample_values.slice(0,10).reverse();
             y = data.samples[93].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1503":
             x = data.samples[94].sample_values.slice(0,10).reverse();
             y = data.samples[94].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1504":
             x = data.samples[95].sample_values.slice(0,10).reverse();
             y = data.samples[95].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1505":
             x = data.samples[96].sample_values.slice(0,10).reverse();
             y = data.samples[96].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1506":
             x = data.samples[97].sample_values.slice(0,10).reverse();
             y = data.samples[97].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1507":
             x = data.samples[98].sample_values.slice(0,10).reverse();
             y = data.samples[98].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1508":
             x = data.samples[99].sample_values.slice(0,10).reverse();
             y = data.samples[99].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1510":
             x = data.samples[100].sample_values.slice(0,10).reverse();
             y = data.samples[100].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1511":
             x = data.samples[101].sample_values.slice(0,10).reverse();
             y = data.samples[101].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1512":
             x = data.samples[102].sample_values.slice(0,10).reverse();
             y = data.samples[102].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1513":
             x = data.samples[103].sample_values.slice(0,10).reverse();
             y = data.samples[103].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1514":
             x = data.samples[104].sample_values.slice(0,10).reverse();
             y = data.samples[104].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1515":
             x = data.samples[105].sample_values.slice(0,10).reverse();
             y = data.samples[105].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1516":
             x = data.samples[106].sample_values.slice(0,10).reverse();
             y = data.samples[106].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1517":
             x = data.samples[107].sample_values.slice(0,10).reverse();
             y = data.samples[107].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1518":
             x = data.samples[108].sample_values.slice(0,10).reverse();
             y = data.samples[108].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1519":
             x = data.samples[109].sample_values.slice(0,10).reverse();
             y = data.samples[109].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1521":
             x = data.samples[110].sample_values.slice(0,10).reverse();
             y = data.samples[110].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1524":
             x = data.samples[111].sample_values.slice(0,10).reverse();
             y = data.samples[111].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1526":
             x = data.samples[112].sample_values.slice(0,10).reverse();
             y = data.samples[112].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1527":
             x = data.samples[113].sample_values.slice(0,10).reverse();
             y = data.samples[113].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1530":
             x = data.samples[114].sample_values.slice(0,10).reverse();
             y = data.samples[114].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1531":
             x = data.samples[115].sample_values.slice(0,10).reverse();
             y = data.samples[115].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1532":
             x = data.samples[116].sample_values.slice(0,10).reverse();
             y = data.samples[116].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1533":
             x = data.samples[117].sample_values.slice(0,10).reverse();
             y = data.samples[117].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1534":
             x = data.samples[118].sample_values.slice(0,10).reverse();
             y = data.samples[118].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1535":
             x = data.samples[119].sample_values.slice(0,10).reverse();
             y = data.samples[119].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1536":
             x = data.samples[120].sample_values.slice(0,10).reverse();
             y = data.samples[120].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1537":
             x = data.samples[121].sample_values.slice(0,10).reverse();
             y = data.samples[121].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1539":
             x = data.samples[122].sample_values.slice(0,10).reverse();
             y = data.samples[122].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1540":
             x = data.samples[123].sample_values.slice(0,10).reverse();
             y = data.samples[123].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1541":
             x = data.samples[124].sample_values.slice(0,10).reverse();
             y = data.samples[124].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1542":
             x = data.samples[125].sample_values.slice(0,10).reverse();
             y = data.samples[125].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1543":
             x = data.samples[126].sample_values.slice(0,10).reverse();
             y = data.samples[126].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1544":
             x = data.samples[127].sample_values.slice(0,10).reverse();
             y = data.samples[127].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1545":
             x = data.samples[128].sample_values.slice(0,10).reverse();
             y = data.samples[128].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1546":
             x = data.samples[129].sample_values.slice(0,10).reverse();
             y = data.samples[129].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1547":
             x = data.samples[130].sample_values.slice(0,10).reverse();
             y = data.samples[130].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1548":
             x = data.samples[131].sample_values.slice(0,10).reverse();
             y = data.samples[131].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1549":
             x = data.samples[132].sample_values.slice(0,10).reverse();
             y = data.samples[132].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1550":
             x = data.samples[133].sample_values.slice(0,10).reverse();
             y = data.samples[133].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1551":
             x = data.samples[134].sample_values.slice(0,10).reverse();
             y = data.samples[134].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1552":
             x = data.samples[135].sample_values.slice(0,10).reverse();
             y = data.samples[135].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1553":
             x = data.samples[136].sample_values.slice(0,10).reverse();
             y = data.samples[136].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1554":
             x = data.samples[137].sample_values.slice(0,10).reverse();
             y = data.samples[137].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1555":
             x = data.samples[138].sample_values.slice(0,10).reverse();
             y = data.samples[138].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1556":
             x = data.samples[139].sample_values.slice(0,10).reverse();
             y = data.samples[139].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1557":
             x = data.samples[140].sample_values.slice(0,10).reverse();
             y = data.samples[140].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1558":
             x = data.samples[141].sample_values.slice(0,10).reverse();
             y = data.samples[141].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1561":
             x = data.samples[142].sample_values.slice(0,10).reverse();
             y = data.samples[142].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1562":
             x = data.samples[143].sample_values.slice(0,10).reverse();
             y = data.samples[143].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1563":
             x = data.samples[144].sample_values.slice(0,10).reverse();
             y = data.samples[144].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1564":
             x = data.samples[145].sample_values.slice(0,10).reverse();
             y = data.samples[145].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1572":
             x = data.samples[146].sample_values.slice(0,10).reverse();
             y = data.samples[146].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1573":
             x = data.samples[147].sample_values.slice(0,10).reverse();
             y = data.samples[147].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1574":
             x = data.samples[148].sample_values.slice(0,10).reverse();
             y = data.samples[148].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1576":
             x = data.samples[149].sample_values.slice(0,10).reverse();
             y = data.samples[149].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1577":
             x = data.samples[150].sample_values.slice(0,10).reverse();
             y = data.samples[150].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1581":
             x = data.samples[151].sample_values.slice(0,10).reverse();
             y = data.samples[151].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);
             break;
             case"1601":
             x = data.samples[152].sample_values.slice(0,10).reverse();
             y = data.samples[152].otu_ids.slice(0,10).reverse().map(d => "OTU " + d);            
        }
        upDatePlotly(x);
        upDatePlotly(y);
        }


 } 
init();
}) 