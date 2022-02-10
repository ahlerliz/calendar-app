from flask import Flask, request
from flask_debugtoolbar import DebugToolbarExtension
from models import db, connect_db, Event
from uuid import uuid4
from flask_cors import CORS, cross_origin


app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql:///calendar"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = 'secret-key'
toolbar = DebugToolbarExtension(app)

connect_db(app)
db.create_all()


@app.get('/')
@cross_origin()
def show_events():

    events = Event.fs_get_delete_put_post()
    return events

@app.post('/')
@cross_origin()
def add_event():
    new_event = Event(
        id=uuid4(),
        date=request.json['date'],
        title=request.json['title'],
        description=request.json['description']
    )

    db.session.add(new_event)
    db.session.commit()

    return "post successful"

@app.route('/', methods=['DELETE'])
@cross_origin()
def delete_event():
    id = request.json['id']
    event = Event.query.get_or_404(id)
    db.session.delete(event)
    db.session.commit()

    return "delete successful"