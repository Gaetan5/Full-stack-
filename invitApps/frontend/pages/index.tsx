import React, { useState } from 'react';

// Composant principal de la page d'accueil
const Home = () => {
  // État pour stocker les données du formulaire
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    event: '',
    ticket_id: '',
  });

  // État pour stocker l'URL du ticket généré
  const [ticketUrl, setTicketUrl] = useState<string | null>(null);

  // Gestionnaire de changement pour les champs du formulaire
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Gestionnaire de soumission du formulaire
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Envoi des données du formulaire au serveur backend
      const response = await fetch('http://localhost:5000/generate-ticket', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Vérifiez si la réponse est correcte
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Récupération de l'URL du ticket généré
      const result = await response.json();
      setTicketUrl(result.qr_code);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-blue-200 shadow-md rounded-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">Invitation App</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col items-center">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="flex flex-col items-center">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="flex flex-col items-center">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="event">
              Event
            </label>
            <input
              type="text"
              name="event"
              placeholder="Event"
              value={formData.event}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="flex flex-col items-center">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ticket_id">
              Ticket ID
            </label>
            <input
              type="text"
              name="ticket_id"
              placeholder="Ticket ID"
              value={formData.ticket_id}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700">
            Generate Invitation
          </button>
        </form>
        {ticketUrl && (
          <div className="mt-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Your Ticket with QR Code</h2>
            <img src={ticketUrl} alt="QR Code Ticket" className="w-64 h-64 mx-auto" />
            <a href={ticketUrl} download="ticket.png" className="block mt-4 text-blue-500 underline">
              Download Ticket
            </a>
          </div>
        )}
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Event Image</h2>
          <div className="w-full h-64 bg-gray-200 rounded flex items-center justify-center">
            <span className="text-gray-500">Event Image Placeholder</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;