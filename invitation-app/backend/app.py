from flask import Flask, request, jsonify
import qrcode
import os

app = Flask(__name__)

@app.route('/generate-invitation', methods=['POST'])
def generate_invitation():
    data = request.json
    name = data.get('name')
    email = data.get('email')
    event = data.get('event')
    
    if not name or not email or not event:
        return jsonify({'error': 'Missing required fields'}), 400

    # Génération du QR code
    qr_data = f"Name: {name}, Email: {email}, Event: {event}"
    qr_img = qrcode.make(qr_data)
    qr_code_path = os.path.join('static', f"{name}_qr.png")
    qr_img.save(qr_code_path)

    invitation = {
        'name': name,
        'email': email,
        'event': event,
        'qr_code': qr_code_path
    }

    return jsonify(invitation), 201

if __name__ == '__main__':
    app.run(debug=True)