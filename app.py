from flask import Flask, render_template, redirect, url_for,request
from flask_cors import CORS, cross_origin
from flask import make_response
app = Flask(__name__)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/")
@cross_origin()
def home():
    return "hi"
@app.route("/index")

@app.route('/login', methods=['GET', 'POST'])
@cross_origin()
def login():
   message = None
   if request.method == 'POST':
        datafromjs = request.form['mydata']
        result = str(score(url_domain)) #What gets returned to Javascript
        resp = make_response('{"response": '+result+'}')
        resp.headers['Content-Type'] = "application/json"
        return resp
        return render_template('login.html', message='')

from urllib.parse import urlparse
url = 'https://www.npr.org/sections/news/'
url_domain = urlparse(url).netloc
#print(url_domain)

extension_dict = {
    ".com": 10,
    ".edu": 80,
    ".gov": 100,
    ".org": 69,
    ".us": 40
}

def score(url_domain):
    for x in extension_dict:
        if x in url_domain:
            # print(x)
            # print("score is:", extension_dict[x])
            return extension_dict[x]

if __name__ == "__main__":
    app.run(debug = True)
