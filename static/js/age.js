div = d3.select('.age');
barGroup = div.append('g').attr('class','barGroup')

d3.csv('static/data/age_count.csv').then(d=>{
    var age = d.map(entry => entry.age)
    var count = d.map(entry => entry.education);
    
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
    barGroup.append('div').attr('id','ageCount')
    Plotly.newPlot('ageCount',data,layout);
})

