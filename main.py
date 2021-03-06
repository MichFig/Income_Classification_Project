
from flask import Flask, render_template, redirect, url_for, session
from make_labels import convert_to_label
from tensorflow.keras.models import load_model
import requests
import json

import numpy as np

app = Flask(__name__)


@app.route('/')
@app.route('/home')
def home():
    return render_template('home.html')

@app.route('/counts')
def counts():
    return render_template('counts.html')

@app.route('/age')
def age():
    return render_template('chart_base.html',selected='age', title='Age')

@app.route('/education')
def education():
    return render_template('chart_base.html',selected='education', title='Education Level')

@app.route('/hours_per_week')
def hours_per_week():
    return render_template('chart_base.html',selected='hours_per_week', title='Hours Per Week')

@app.route('/marital_status')
def marital_status():
    return render_template('chart_base.html',selected='marital_status', title='Marital Status')

@app.route('/native_country')
def native_country():
    return render_template('chart_base.html',selected='native_country', title='Native Country')

@app.route('/occupation')
def occupation():
    return render_template('chart_base.html',selected='occupation', title='Occupation')

@app.route('/race')
def race():
    return render_template('chart_base.html',selected='race', title='Race')

@app.route('/sex')
def sex():
    return render_template('chart_base.html',selected='sex', title='Sex')

@app.route('/work_class')
def work_class():
    return render_template('chart_base.html',selected='work_class', title='Employment Status')

@app.route('/data')
def data():
    return render_template('data.html')

@app.route('/predict')
def predict():
    if ('results' not in session):
        session['results'] = json.dumps({'score':"nope"})
    
    results = session['results']
    session['results'] = json.dumps({'score':"nope"})
    return render_template('predict.html',results=json.loads(results))

@app.route('/<age>/<wc>/<ed>/<ms>/<oc>/<r>/<s>/<hpw>/<nc>')
def make_prediction(age,wc,ed,ms,oc,r,s,hpw,nc):
    converted_labels = convert_to_label(wc,ed,ms,oc,r,s,nc)

    test = np.array([[int(age),converted_labels[1],converted_labels[0],converted_labels[2],converted_labels[3],converted_labels[4],converted_labels[5],int(hpw),converted_labels[6]]])
    model = load_model('neural_network_trained.h5')

    under50 = model.predict(test)[0][0]

    results = json.dumps({'Age':str(age),'Employment Status':wc,'Education Level':ed,
                    'Marital Status':ms,'Occupation':oc,'Race':r, 'Sex':s,
                    'Hours per Week':str(hpw),'Native Country':nc,'score':str(under50)})
    session['results'] = results
    return redirect(url_for('.predict'))

    

@app.route('/models')
def models():
    return render_template('models.html')


@app.errorhandler(404)
def page_not_found(error):
    return render_template('404.html'), 404


if __name__ == '__main__':
    # Only run for local development.
    app.secret_key = 'super secret key'
    app.run(host='127.0.0.1', port=8080, debug=True)
