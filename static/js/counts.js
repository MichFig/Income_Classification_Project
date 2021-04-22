div = d3.select('.counts');
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
    };
    barGroup.append('div').attr('id','ageCount')
    Plotly.newPlot('ageCount',data,layout);
})

d3.csv('static/data/education_count.csv').then(d=>{
    var age = d.map(entry => entry.education)
    var count = d.map(entry => entry.capital_gain);
    
    var trace1 = {
        type:'bar',
        x: age,
        y: count
    };

    var data = [trace1];

    var layout = {
        title: "Education Counts",
    };
    barGroup.append('div').attr('id','eduCount')
    Plotly.newPlot('eduCount',data,layout);
})