div = d3.select('.education');
barGroup = div.append('g').attr('class','barGroup')

d3.csv('static/data/edu_counts.csv').then(d=>{
    var education = d.map(entry => entry.education)
    var count = d.map(entry => entry.total);
    var under50 = d.map(entry =>entry['<=50K'])
    var over50 = d.map(entry => entry['>50K'])
    
    var trace1 = {
        type:'bar',
        x: education,
        y: count
    };

    var data = [trace1];

    var layout = {
        title: "Level of Education",
        xaxis: {
            title: 'Educatoin'
        },
        yaxis: {
            title:'Number of Datapoints'
        }
    };
    barGroup.append('div').attr('id','eduCount');
    Plotly.newPlot('eduCount',data,layout);

    var trace2 = {
        x: education,
        y: under50,
        name: '<=50K',
        type: 'bar'
    };

    var trace3 = {
        x: education,
        y: over50,
        name: '>50K',
        type: 'bar'
    };

    var data2 = [trace2, trace3];
    var layout2 = {
        barmode: 'relative',
        title:'Education with Income',
        xaxis:{
            title: 'Educatoin'
        },
        yaxis: {
            title: 'Number of Datapoints'
        }
    };
    barGroup.append('div').attr('id','eduIncome');
    Plotly.newPlot('eduIncome',data2,layout2);

})

