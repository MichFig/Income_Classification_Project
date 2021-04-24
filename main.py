
from flask import Flask, render_template

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

@app.errorhandler(404)
def page_not_found(error):
    return render_template('404.html'), 404


if __name__ == '__main__':
    # Only run for local development.
    app.run(host='127.0.0.1', port=8080, debug=True)
