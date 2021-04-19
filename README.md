# Income Classification Project.
Connor Mackenzie
Ismahan Adan
Michelle Fegatelli

TOPIC – For our final project, we examined 1994 Census Income data from to predict whether an individuals’ income will exceed $50,000.00 per annum based on a variety of factors.  

**Built with**:
- [Bootstrap v4.1](https://getbootstrap.com/docs/4.1/getting-started/introduction/)
- [Flask v1.0.2](http://flask.pocoo.org/)
- [Jinja2](http://jinja.pocoo.org/docs/2.10/)

Hosted on [Google App Engine](https://cloud.google.com/appengine/).

# Usage

First off, go to [Google Cloud Console](https://console.cloud.google.com/) and create a new project. Then install the [Google Cloud SDK](https://cloud.google.com/sdk/).

## Development

1. Open a shell.

2. `pipenv install` to install Flask to a virtual environment (must have [pipenv](https://docs.pipenv.org/) already installed).

3. `pipenv shell` to open a new shell with the virtual environment activated.

4. `python main.py` to start a local development server at http://127.0.0.1:8080/

## Deployment

If Google Cloud SDK is set to this project:

1. Open shell in the directory containing "app.yaml"

2. Run `gcloud app deploy`

If Google Cloud SDK **is not** set to this project you can switch to it with

```bash
    gcloud config set project PROJECT_ID
```

### References

Bootstrap's [starter template](https://getbootstrap.com/docs/4.1/examples/starter-template/) was adapted slightly (navbar made semi-automatic with Jinja2, removed a bunch of stuff).
