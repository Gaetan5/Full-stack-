from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
import qrcode
import io

app = Flask(__name__)
CORS(app)

@app.route('/generate-invitation', methods=['POST'])
def generate_invitation():
    data = request.json
    name = data.get('name')
    email = data.get('email')
    event = data.get('event')

    if not all([name, email, event]):
        return jsonify({"error": "Missing required fields"}), 400

    # Générer le QR code
    qr_data = f"Name: {name}, Email: {email}, Event: {event}"
    qr = qrcode.QRCode(version=1, box_size=10, border=5)
    qr.add_data(qr_data)
    qr.make(fit=True)

    # Sauvegarder le QR code dans un objet BytesIO
    img = qr.make_image(fill='black', back_color='white')
    img_byte_arr = io.BytesIO()
    img.save(img_byte_arr, format='PNG')
    img_byte_arr.seek(0)

    # Retourner les données de l'invitation et le QR code en tant que fichier téléchargeable
    return send_file(img_byte_arr, mimetype='image/png', as_attachment=True, download_name=f"{name}_invitation.png")

@app.route('/generate-ticket', methods=['POST'])
def generate_ticket():
    data = request.json
    guest_name = data.get('name')
    event = data.get('event')
    ticket_id = data.get('ticket_id')

    if not all([guest_name, event, ticket_id]):
        return jsonify({"error": "Missing required fields"}), 400

    # Génération du QR code
    qr_data = f"Name: {guest_name}, Event: {event}, Ticket ID: {ticket_id}"
    qr = qrcode.QRCode(version=1, box_size=10, border=5)
    qr.add_data(qr_data)
    qr.make(fit=True)

    # Sauvegarde dans un flux mémoire
    img = qr.make_image(fill='black', back_color='white')
    buffer = io.BytesIO()
    img.save(buffer, 'PNG')
    buffer.seek(0)

    return send_file(buffer, mimetype='image/png', as_attachment=True, download_name=f"{guest_name}_ticket.png")

if __name__ == '__main__':
    app.run(debug=True)