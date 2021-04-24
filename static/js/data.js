function makeDropdowns(){
    d3.csv('static/data/no_spaces.csv').then(data =>{
        //age dropdown
        var age = data.map(d => +d.age);
        var ageUnique = _.uniq(age);
        ageUnique.sort((a,b)=>a-b)
        var ageSelect = d3.select('#ageSelect');
        ageUnique.forEach(age=>{
            ageSelect.append('option')
                .attr('value',age)
                .text(age)
        });

        //workclass dropdown
        var workclass = data.map(d => d.workclass);
        var workclassUnique = _.uniq(workclass);
        workclassUnique.sort();
        var wcSelect = d3.select('#wcSelect');
        workclassUnique.forEach(wc =>{
            wcSelect.append('option')
                .attr('value',wc)
                .text(wc);
        });

        //ed dropdown
        //need a specific order, so just typing them!
        var education =[
            'Preschool',
            '1st-4th',
            '5th-6th',
            '7th-8th',
            '10th',
            '11th',
            '12th',
            'HS-grad',
            'Some-college',
            'Assoc-voc',
            'Assoc-acdm',
            'Bachelors',
            'Masters',
            'Prof-school',
            'Doctorate'
        ];
        var edSelect = d3.select('#edSelect');
        education.forEach(ed => {
            edSelect.append('option')
                .attr('value',ed)
                .text(ed);
            
        });

        //maritalStatus dropdown
        var maritalStatus = data.map(d => d['marital-status']);
        var msUnique = _.uniq(maritalStatus);
        msUnique.sort();
        var msSelect = d3.select('#msSelect');
        msUnique.forEach(ms => {
            msSelect.append('option')
                .attr('value',ms)
                .text(ms);
        });

        //occupation dropdown
        var occupation = data.map(d => d.occupation);
        var ocUnique = _.uniq(occupation);
        ocUnique.sort();
        var ocSelect = d3.select('#ocSelect');
        ocUnique.forEach(oc => {
            ocSelect.append('option')
                .attr('value',oc)
                .text(oc);
        });

        //race dropdown
        var race = data.map(d => d.race);
        var raceUnique = _.uniq(race);
        raceUnique.sort();
        var raceSelect = d3.select('#raceSelect');
        raceUnique.forEach(race =>{
            raceSelect.append('option')
                .attr('value',race)
                .text(race);
        });

        //sex dropdown
        var sex = ['Male', 'Female'];
        var sexSelect = d3.select('#sexSelect');
        sex.forEach(sex =>{
            sexSelect.append('option')
                .attr('value',sex)
                .text(sex);
        });

        //hours dropdown
        var hours = data.map(d => +d['hours-per-week']);
        var hoursUnique = _.uniq(hours);
        hoursUnique.sort((a,b) => a-b);
        var hoursSelect = d3.select('#hoursSelect');
        hoursUnique.forEach(hours =>{
            hoursSelect.append('option')
                .attr('value',hours)
                .text(hours);
        });

        //native country dropdown
        var countries = data.map(d => d['native-country']);
        var ncUnique = _.uniq(countries);
        ncUnique.sort();
        var ncSelect = d3.select('#ncSelect');
        ncUnique.forEach(nc => {
            ncSelect.append('option')
                .attr('value',nc)
                .text(nc);
        });
    });

};

var selections = {
    'Age': ['unselected', 'age'],
    'Employment Status': ['unselected', 'workclass'],
    'Education Level': ['unselected', 'education'],
    'Marital Status': ['unselected', 'marital-status'],
    'Occupation': ['unselected', 'occupation'],
    'Race': ['unselected', 'race'],
    'Sex': ['unselected', 'sex'],
    'Hours per Week': ['unselected', 'hours-per-week'],
    'Native Country': ['unselected', 'native-country']
}

function ageChanged(age){
    selections['Age'][0] = age;
    makeTheGraph();
};

function wcChanged(workclass){
    selections['Employment Status'][0] = workclass;
    makeTheGraph();
};

function edChanged(education){
    selections['Education Level'][0] = education;
    makeTheGraph();
};

function msChanged(maritalStatus){
    selections['Marital Status'][0] = maritalStatus;
    makeTheGraph();
};

function ocChanged(occupation){
    selections['Occupation'][0] = occupation;
    makeTheGraph();
};

function raceChanged(race){
    selections['Race'][0] = race;
    makeTheGraph();
};

function sexChanged(sex){
    selections['Sex'][0] = sex;
    makeTheGraph();
};

function hoursChanged(hours){
    selections['Hours per Week'][0] = hours;
    makeTheGraph();
};

function ncChanged(country){
    selections['Native Country'][0] = country;
    makeTheGraph();
};

function makeTheGraph(){
    var printSelections = '';
    var printHere = d3.select('#printHere');
    for (var key in selections){
        if (selections[key][0] != 'unselected') {
            printSelections = printSelections.concat(' ', key, ': ', selections[key][0])
        };
    };
    if (printSelections.length == 0){
        printHere.text('Make a selection!');
        actuallyMakeTheGraph();
    }else{
        printHere.text(printSelections);
        actuallyMakeTheGraph();
        iPromiseThisMakesTheGraph();
    };


     
};

makeDropdowns();
makeTheGraph();

function actuallyMakeTheGraph(){
    d3.csv('static/data/no_spaces.csv').then(data =>{
        
        
        for (var key in selections){
            column = selections[key][1];
            selection = selections[key][0];
            if (selections[key][0] != 'unselected') {
                data = data.filter(d => d[column] == selections[key][0])

            };
        };
        
        var printHere2 = d3.select('#printHere2');
        if (data.length == 0){
            printHere2.text('No records match your selections');

        }else{
            var numberOfRecords = data.length;
            printHere2.text(`${numberOfRecords} records match your selections`)
            var numberOver50k = data.filter(d=> d['income'] == '>50K').length
            var printHere3 = d3.select('#printHere3');
            printHere3.text(`${numberOfRecords - numberOver50k} make 50K or less`)
        };

        
        

    });
    
}
function iPromiseThisMakesTheGraph(){
    d3.csv('static/data/no_spaces.csv').then(data =>{
        for (var key in selections){
            column = selections[key][1];
            selection = selections[key][0];
            if (selections[key][0] != 'unselected') {
                data = data.filter(d => d[column] == selections[key][0])

            };
        };

        d3.select('table').remove()
        var table = d3.select('#tableGoesHere').append('table').attr('class','table');
        var tableHead = table.append('thead');
        var tableHeadRow = tableHead.append('tr').attr('class','table-primary');
        for (key in selections){
            tableHeadRow.append('th').text(key)
        }

        var tableBody = table.append('tbody');
        data.forEach(d=>{
            row = tableBody.append('tr');
            for (key in selections){
                row.append('td')
                    .text(d[selections[key][1]])
            }
        });
    });
};