from flask import Blueprint, render_template

main = Blueprint('main', __name__)

@main.route('/')
def index():
    return render_template('/App/index.html')

@main.route('/booking')
def home():
    title = 'Book a Room'
    return render_template('/App/Booking/booking.html', title=title)

@main.route('/rooms')
def recomendations():
    return render_template('/App/Rooms/recomendations.html')