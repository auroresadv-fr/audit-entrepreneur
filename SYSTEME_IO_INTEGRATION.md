# 🔗 Intégration Systeme.io + Audit Entrepreneur

## Vue d'ensemble

Cette intégration permet:
1. ✅ Capturer les contacts dans Systeme.io
2. ✅ Envoyer les résultats par email au client
3. ✅ Notifier l'administrateur
4. ✅ Relancer à 12 mois pour refaire l'audit

---

## ⚙️ Configuration requise

### 1. Systeme.io (Plan Gratuit)

**Étape 1: Créer un formulaire Systeme.io**
1. Allez sur https://www.systeme.io
2. Créez un nouveau formulaire
3. Notez l'ID du formulaire ou créez un webhook personnalisé
4. **Important**: Sur le plan gratuit, utilisez un webhook POST personnalisé

**Étape 2: Configurer le webhook**
```
URL du webhook: https://api.systeme.io/api/contacts
Méthode: POST
Authentification: API Key (Bearer token)
```

**Étape 3: Créer une automation pour la relance**
- Déclencheur: Contact ajouté
- Action: Envoyer un email initial
- Attendre 12 mois
- Envoyer email de relance "Refaire votre audit"

---

### 2. Service d'Email (Gratuit)

**Option A: Resend (Recommandé)**
- Plan gratuit: 100 emails/jour
- Inscription: https://resend.com
- Clé API: https://resend.com/api-keys
- Domaine: Configure un domaine ou utilise Resend default

**Option B: SendGrid**
- Plan gratuit: 100 emails/jour
- Inscription: https://sendgrid.com
- Clé API: https://app.sendgrid.com/settings/api_keys

**Option C: Backend Node.js (Nodemailer)**
- Gratuit si vous utilisez Gmail + App Password
- Voir `api/send-email.js` ci-dessous

---

## 🚀 Mise en place

### Étape 1: Obtenir vos clés API

**Systeme.io:**
1. Allez dans Paramètres → Intégrations
2. Créez une clé API (plan gratuit peut avoir des limitations)
3. Copiez: `YOUR_SYSTEME_IO_WEBHOOK_URL`

**Resend:**
1. Allez sur https://resend.com/api-keys
2. Créez une clé API
3. Copiez: `re_xxxxxxxxxxxxxxxxxxxxx`

---

### Étape 2: Configurer l'HTML

**Dans Audit-Entrepreneur.html, ajoutez ces attributs au tag `<body>`:**

```html
<body
  data-systeme-webhook="https://votre-webhook-systeme.io/api"
  data-send-email-url="https://votre-backend.com/api/send-email"
>
```

**OU si vous utilisez Resend directement (JavaScript):**

```html
<body data-resend-api-key="re_xxxxxxxxxxxxxxxxxxxxx">
```

---

### Étape 3: Backend Node.js (Optionnel mais recommandé)

**Créer `/api/send-email.js`:**

```javascript
const nodemailer = require('nodemailer');

// Configuration Gmail + App Password
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'votre-email@gmail.com',
    pass: 'votre-app-password' // Générer sur https://myaccount.google.com/apppasswords
  }
});

// OU Resend
const resend = require('resend');
const client = new resend.Resend('re_xxxxxxxxxxxxxxxxxxxxx');

exports.sendEmail = async (req, res) => {
  const { type, to, prenom, archetype, score, description, scores } = req.body;

  try {
    if (type === 'results') {
      // Email au client
      const scoresText = scores.map(s => `${s.theme}: ${s.score}/16`).join('\n');

      const mailOptions = {
        from: 'noreply@personabusinesslab.com',
        to: to,
        subject: `Tes résultats d'audit - ${archetype}`,
        html: `
          <h1>Bonjour ${prenom}!</h1>
          <h2>Tes résultats d'audit Entrepreneur</h2>
          
          <h3>Ton Archétype: ${archetype}</h3>
          <p>Score Global: ${score}/160</p>
          
          <p>${description}</p>
          
          <h3>Scores par thème:</h3>
          <pre>${scoresText}</pre>
          
          <p><strong>Prochaine étape:</strong> 
            <a href="https://personabusinesslab.com/bilan-complet">
              Accéder à ton bilan complet avec recommandations
            </a>
          </p>
        `
      };

      await transporter.sendMail(mailOptions);
      // OU avec Resend:
      // await client.emails.send(mailOptions);

    } else if (type === 'admin_notification') {
      // Email à l'admin
      const adminMail = {
        from: 'noreply@personabusinesslab.com',
        to: 'aurore.s.adv@gmail.com',
        subject: `[AUDIT] Nouvelle soumission - ${prenom}`,
        html: `
          <h2>NOUVELLE SOUMISSION D'AUDIT</h2>
          <p><strong>Prénom:</strong> ${prenom}</p>
          <p><strong>Email:</strong> ${to}</p>
          <p><strong>Archétype:</strong> ${archetype}</p>
          <p><strong>Score:</strong> ${score}/160</p>
          <p><strong>À relancer:</strong> ${followupDate}</p>
        `
      };

      await transporter.sendMail(adminMail);
    }

    res.json({ success: true });
  } catch (error) {
    console.error('Erreur email:', error);
    res.status(500).json({ error: error.message });
  }
};
```

---

### Étape 4: Déployer le Backend

**Options de déploiement gratuit:**

1. **Vercel** (Recommandé)
   - Inscription: https://vercel.com
   - Connecter votre repo GitHub
   - Ajouter variables d'environnement:
     ```
     GMAIL_USER=votre-email@gmail.com
     GMAIL_PASS=votre-app-password
     RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx
     ```

2. **Railway**
   - https://railway.app
   - Plan gratuit: $5/mois de crédit

3. **Heroku** (Gratuit avec compte)
   - https://heroku.com
   - Déployer depuis GitHub

---

## 🔄 Flux complet

```
Client remplit le formulaire
        ↓
Données envoyées à Systeme.io
        ↓
Email résultats → Client
        ↓
Notification → Admin (avec date relance)
        ↓
Systeme.io ajoute le contact à la liste
        ↓
Automation Systeme.io déclenche après 12 mois
        ↓
Email de relance → Client
```

---

## 📋 Checklist d'intégration

- [ ] Créer compte Resend et obtenir clé API
- [ ] Configurer Systeme.io et créer webhook
- [ ] Configurer Gmail App Password (ou utiliser SendGrid)
- [ ] Déployer backend sur Vercel/Railway/Heroku
- [ ] Tester formulaire avec un email de test
- [ ] Configurer automation Systeme.io pour relance 12 mois
- [ ] Tester email reçu par client et admin
- [ ] Mettre à jour lien vers "bilan complet" dans l'email

---

## 🧪 Test

**Tester localement:**

```bash
# Terminal 1: Backend
npm install nodemailer
node api/send-email.js

# Terminal 2: Frontend
python3 -m http.server 8000
```

**Tester l'intégration:**
1. Ouvrir http://localhost:8000/Audit-Entrepreneur.html
2. Faire l'audit (répondre aux 40 questions)
3. Remplir prénom + email
4. Vérifier que l'email est reçu
5. Vérifier Systeme.io pour le nouveau contact

---

## ❓ FAQ

**Q: Systeme.io plan gratuit supporte les webhooks?**
A: Oui, avec limitations. Utilisez un webhook simple POST.

**Q: Combien d'emails par jour avec Resend gratuit?**
A: 100 emails/jour, suffisant pour un audit.

**Q: Comment configurer la relance 12 mois?**
A: Via automation Systeme.io (créer une tâche programmée).

**Q: Puis-je utiliser Gmail gratuitement?**
A: Oui, avec un App Password (pas le mot de passe Gmail direct).

---

## 🆘 Support

Si vous avez besoin d'aide:
1. Vérifiez les logs dans la console du navigateur (F12)
2. Vérifiez les logs du serveur
3. Testez avec Postman l'endpoint `/api/send-email`
4. Vérifiez les clés API Resend/Systeme.io

