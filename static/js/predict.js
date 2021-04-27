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
    
};

function wcChanged(workclass){
    selections['Employment Status'][0] = workclass;
    
};

function edChanged(education){
    selections['Education Level'][0] = education;
    
};

function msChanged(maritalStatus){
    selections['Marital Status'][0] = maritalStatus;
    
};

function ocChanged(occupation){
    selections['Occupation'][0] = occupation;
    
};

function raceChanged(race){
    selections['Race'][0] = race;
    
};

function sexChanged(sex){
    selections['Sex'][0] = sex;
    
};

function hoursChanged(hours){
    selections['Hours per Week'][0] = hours;
    
};

function ncChanged(country){
    selections['Native Country'][0] = country;
    
};
makeDropdowns();

function clicked(){
    url = ''
    for (var key in selections){
        if (selections[key][0] == 'unselected'){
            d3.select('#button').attr('href','/predict')
            break
        }else{
            url += `/${selections[key][0]}`
            d3.select('#button').attr('href',url)
        }
    }
}