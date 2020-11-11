import time
from flask import Flask, request, jsonify

# from flask_cors import CORS

# app = Flask(__name__,
#             static_url_path='',
#             static_folder='client/build')

app = Flask(__name__)

@app.route('/')
def index():
    return app.send_static_file('index.html')


@app.route('/time')
def get_current_time():
    return {'time': time.time()}

if __name__ == '__main__':
    app.run()
