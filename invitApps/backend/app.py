from flask import Flask, request, jsonify
from flask_cors import CORS
import qrcode
import io
from PIL import Image

app = Flask(__name__)
CORS(app)

@app.route('/generate-invitation', methods=['POST'])
def generate_invitation():
    data = request.json
    name = data.get('name')
    email = data.get('email')
    event = data.get('event')

    # Générer le QR code
    qr_data = f"Name: {name}, Email: {email}, Event: {event}"
    qr = qrcode.make(qr_data)
    
    # Sauvegarder le QR code dans un objet BytesIO
    img_byte_arr = io.BytesIO()
    qr.save(img_byte_arr, format='PNG')
    img_byte_arr.seek(0)

    # Retourner les données de l'invitation et le QR code
    return jsonify({
        'message': 'Invitation generated successfully',
        'qr_code': img_byte_arr.getvalue().decode('latin1'),  # Convertir en base64 si nécessaire
        'invitation': {
            'name': name,
            'email': email,
            'event': event
        }
    })

if __name__ == '__main__':
    app.run(debug=True)