var div = d3.select('.chart');
var selection = div.attr('id').split(' ')[1];
console.log(selection)
var barGroup = div.append('g').attr('class','barGroup')
var filePath = `static/data/${selection}.csv`
d3.csv(filePath).then(d=>{
    var xData = d.map(entry => entry[selection])
    var count = d.map(entry => entry.total);
    var under50 = d.map(entry =>entry['<=50K'])
    var over50 = d.map(entry => entry['>50K'])
    
    var trace1 = {
        type:'bar',
        x: xData,
        y: count
    };

    var data = [trace1];

    var layout = {
        title: `${selection}`,
        xaxis: {
            title: `${selection}`
        },
        yaxis: {
            title:'Number of Datapoints'
        }
    };
    Plotly.newPlot('countChart',data,layout);

    var trace2 = {
        x: xData,
        y: under50,
        name: '<=50K',
        type: 'bar'
    };

    var trace3 = {
        x: xData,
        y: over50,
        name: '>50K',
        type: 'bar'
    };

    var data2 = [trace2, trace3];
    var layout2 = {
        barmode: 'relative',
        title:`${selection} with Income`,
        xaxis:{
            title: `${selection}`
        },
        yaxis: {
            title: 'Number of Datapoints'
        }
    };
    Plotly.newPlot('incomeChart',data2,layout2);

})

