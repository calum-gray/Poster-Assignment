from flask import Blueprint, render_template

main = Blueprint('main', __name__)

@main.route('/')
def home():
    return render_template('booking.html')

@main.route('/recommendations')
def recomendations():
    return render_template('recomendations.html')