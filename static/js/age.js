div = d3.select('.age');
barGroup = div.append('g').attr('class','barGroup')

d3.csv('static/data/age_counts.csv').then(d=>{
    var age = d.map(entry => entry.age)
    var count = d.map(entry => entry.total);
    var under50 = d.map(entry =>entry['<=50K'])
    var over50 = d.map(entry => entry['>50K'])
    
    var trace1 = {
        type:'bar',
        x: age,
        y: count
    };

    var data = [trace1];

    var layout = {
        title: "Age Counts",
        xaxis: {
            title: 'Age'
        },
        yaxis: {
            title:'Number of Datapoints'
        }
    };
    barGroup.append('div').attr('id','ageCount');
    Plotly.newPlot('ageCount',data,layout);

    var trace2 = {
        x: age,
        y: under50,
        name: '<=50K',
        type: 'bar'
    };

    var trace3 = {
        x: age,
        y: over50,
        name: '>50K',
        type: 'bar'
    };

    var data2 = [trace2, trace3];
    var layout2 = {
        barmode: 'relative',
        title:'Age with Income',
        xaxis:{
            title: 'Age'
        },
        yaxis: {
            title: 'Number of Datapoints'
        }
    };
    barGroup.append('div').attr('id','ageIncome');
    Plotly.newPlot('ageIncome',data2,layout2);

})

