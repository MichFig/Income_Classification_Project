import pandas as pd 
import numpy as np 

def convert_to_label(wc, ed, ms, oc, r, s, nc):

    file = 'static/data/no_spaces.csv'
    data = pd.read_csv(file)

    education = data['education'].unique()
    ed_num = data['education-num'].unique()
    ed_label = ed_num[np.where(education==ed)][0]

    working_class = data['workclass'].unique()
    EmploymentLabels = {}
    for workclass in working_class:
        result = np.where((working_class==workclass))
        EmploymentLabels[workclass] = result[0][0]
    workclass_label = EmploymentLabels[wc]

    marital_statuses = data['marital-status'].unique()
    MaritalLabels = {}
    for status in marital_statuses:
        result = np.where((marital_statuses==status))
        MaritalLabels[status] = result[0][0]
    marital_label = MaritalLabels[ms]

    occupations = data['occupation'].unique()
    OccupationLabels = {}
    for occupation in occupations:
        result = np.where((occupations==occupation))
        OccupationLabels[occupation] = result[0][0]
    oc_label = OccupationLabels[oc] 

    races = data['race'].unique()
    RaceLabels = {}
    for race in races:
        result = np.where((races==race))
        RaceLabels[race] = result[0][0]
    race_label = RaceLabels[r]

    sexes = data['sex'].unique()
    SexLabels = {}
    for sex in sexes:
        result = np.where((sexes==sex))
        SexLabels[sex] = result[0][0]
    sex_label = SexLabels[s]

    countries = data['native-country'].unique()
    CountryLabels = {}
    for country in countries:
        result = np.where((countries==country))
        CountryLabels[country] = result[0][0]
    nc_label = CountryLabels[nc]

    return [workclass_label,ed_label,marital_label,oc_label,race_label,sex_label,nc_label]




