/**
 * API pour envoyer les résultats d'audit
 * Déployer sur Vercel, Railway, ou Heroku
 *
 * Variables d'environnement requises:
 * - RESEND_API_KEY: Clé API Resend
 * - ADMIN_EMAIL: Email de l'admin (aurore.s.adv@gmail.com)
 */

const handler = async (req, res) => {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { type, to, prenom, archetype, score, description, scores } = req.body;

  if (!type || !to) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'aurore.s.adv@gmail.com';

    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY not configured');
      return res.status(500).json({ error: 'Email service not configured' });
    }

    if (type === 'results') {
      // Email au client avec ses résultats
      const scoresHtml = scores
        .map(s => `<tr><td>${s.theme}</td><td><strong>${s.score}/16</strong></td></tr>`)
        .join('');

      const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #0a0a0a; color: #d4af37; padding: 20px; border-radius: 8px; text-align: center; }
    .content { padding: 20px; }
    .score { font-size: 28px; color: #d4af37; font-weight: bold; margin: 10px 0; }
    .archetype { background: #f5f5f5; padding: 15px; border-radius: 8px; margin: 15px 0; }
    table { width: 100%; border-collapse: collapse; margin: 15px 0; }
    th, td { padding: 10px; text-align: left; border-bottom: 1px solid #ddd; }
    th { background: #f0f0f0; font-weight: bold; }
    .cta { background: #d4af37; color: #0a0a0a; padding: 15px 20px; text-align: center; border-radius: 8px; margin: 20px 0; }
    .cta a { color: #0a0a0a; text-decoration: none; font-weight: bold; }
    .footer { color: #999; font-size: 12px; text-align: center; margin-top: 20px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Persona Business Lab</h1>
      <p>Tes résultats d'audit</p>
    </div>

    <div class="content">
      <p>Bonjour <strong>${prenom}</strong>,</p>

      <p>Voici tes résultats d'audit Entrepreneur:</p>

      <div class="archetype">
        <h2>${archetype}</h2>
        <div class="score">${score}/160</div>
        <p>${description}</p>
      </div>

      <h3>Scores par thème</h3>
      <table>
        <thead>
          <tr>
            <th>Thème</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          ${scoresHtml}
        </tbody>
      </table>

      <div class="cta">
        <p>Pour accéder à ton bilan complet avec recommandations personnalisées:</p>
        <p><a href="https://personabusinesslab.com/bilan-complet">Voir mon bilan détaillé →</a></p>
      </div>

      <p>Des questions? Réponds à cet email, on te répondra rapidement.</p>

      <p>À bientôt!</p>
      <p><strong>Équipe Persona Business Lab</strong></p>
    </div>

    <div class="footer">
      <p>© 2026 Persona Business Lab | by Aurore S</p>
      <p><a href="https://personabusinesslab.com">personabusinesslab.com</a></p>
    </div>
  </div>
</body>
</html>
      `;

      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${RESEND_API_KEY}`
        },
        body: JSON.stringify({
          from: 'noreply@personabusinesslab.com',
          to: to,
          subject: `Tes résultats d'audit - ${archetype}`,
          html: emailHtml
        })
      });

      if (!response.ok) {
        const error = await response.json();
        console.error('Resend error:', error);
        return res.status(500).json({ error: 'Failed to send email' });
      }

      return res.status(200).json({ success: true, message: 'Email sent to client' });

    } else if (type === 'admin_notification') {
      // Email à l'admin avec notification de nouvelle soumission
      const { followupDate } = req.body;

      const scoresHtml = scores
        .map(s => `<tr><td>${s.theme}</td><td><strong>${s.score}/16</strong></td></tr>`)
        .join('');

      const adminHtml = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #d4af37; color: #0a0a0a; padding: 15px; border-radius: 8px; }
    .content { padding: 15px; }
    .info { background: #f5f5f5; padding: 15px; border-radius: 8px; margin: 10px 0; }
    table { width: 100%; border-collapse: collapse; margin: 10px 0; }
    th, td { padding: 8px; text-align: left; border-bottom: 1px solid #ddd; }
    th { background: #f0f0f0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>Nouvelle soumission d'audit</h2>
    </div>

    <div class="content">
      <div class="info">
        <p><strong>Prénom:</strong> ${prenom}</p>
        <p><strong>Email:</strong> ${to}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString('fr-FR')}</p>
      </div>

      <h3>Résultats</h3>
      <p><strong>Archétype:</strong> ${archetype}</p>
      <p><strong>Score:</strong> ${score}/160</p>

      <h3>Scores par thème</h3>
      <table>
        <thead>
          <tr><th>Thème</th><th>Score</th></tr>
        </thead>
        <tbody>
          ${scoresHtml}
        </tbody>
      </table>

      <h3>Actions</h3>
      <ul>
        <li>✅ Email de résultats envoyé au client</li>
        <li>📝 Contact ajouté à Systeme.io</li>
        <li>🔄 Relance prévue: ${new Date(followupDate).toLocaleString('fr-FR')}</li>
      </ul>

      <p><a href="https://app.systeme.io">Voir dans Systeme.io →</a></p>
    </div>
  </div>
</body>
</html>
      `;

      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${RESEND_API_KEY}`
        },
        body: JSON.stringify({
          from: 'noreply@personabusinesslab.com',
          to: ADMIN_EMAIL,
          subject: `[AUDIT] Nouvelle soumission - ${prenom}`,
          html: adminHtml
        })
      });

      if (!response.ok) {
        console.error('Admin notification failed');
        // Ne pas échouer silencieusement, juste logger
      }

      return res.status(200).json({ success: true, message: 'Admin notified' });
    }

    return res.status(400).json({ error: 'Invalid type' });

  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = handler;
