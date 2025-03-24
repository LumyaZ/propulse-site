import { Resend } from 'resend';

const resend = new Resend('re_fDV7Cn3k_HzYxMZ7KspqHUxNHv2PgBccC');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  try {
    const data = await resend.emails.send({
      from: 'Propulse <onboarding@resend.dev>', // Vous pourrez personnaliser cet email une fois votre domaine vérifié
      to: ['thomas.cornu@ynov.com'], // L'email où vous voulez recevoir les messages
      reply_to: email,
      subject: `Nouveau message de ${name}: ${subject}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Objet:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
} 