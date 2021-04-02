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
        result = "return this"
        resp = make_response('{"response": '+result+'}')
        resp.headers['Content-Type'] = "application/json"
        return resp
        return render_template('login.html', message='')

if __name__ == "__main__":
    app.run(debug = True)
