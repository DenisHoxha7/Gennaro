from flask import Flask, render_template

app = Flask(__name__)

# Homepage
@app.route('/')
def home():
    return render_template('homepage.html')

# Storia
@app.route('/storia')
def history():
    return render_template('storia.html')

# Attrazioni
@app.route('/attrazioni')
def attractions():
    return render_template('attrazioni.html')

# Eventi
@app.route('/eventi')
def events():
    return render_template('eventi.html')

if __name__ == '__main__':
    app.run(debug=True)

