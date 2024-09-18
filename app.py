from flask import Flask, jsonify, request # type: ignore

app = Flask(__name__)

@app.route('/tickets', methods=['GET'])
def get_tickets():
    # Example de données fictives
    tickets = [{"id": 1, "destination": "Paris", "price": 100}]
    return jsonify(tickets)

@app.route('/buy', methods=['POST'])
def buy_ticket():
    data = request.json
    # Logique d'achat de ticket
    return jsonify({"message": "Ticket acheté!", "ticket_id": data['id']}), 201

if __name__ == '__main__':
    app.run(debug=True)
