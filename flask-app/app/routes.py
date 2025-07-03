from flask import Blueprint, render_template

main = Blueprint('main', __name__)

@main.route('/')
def home():
    title = 'Book a Room'
    return render_template('/App/Booking/booking.html', title=title)

@main.route('/account/manage')
def account():
    title = 'Manage Account'
    return render_template('/App/Account/account.html', title=title)