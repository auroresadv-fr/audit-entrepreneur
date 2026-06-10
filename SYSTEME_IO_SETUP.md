# 🎯 Intégration Systeme.io - Configuration Simple

## Vue d'ensemble

L'audit capture le prénom et l'email, puis envoie les résultats à **Systeme.io uniquement**.
Systeme.io gère ensuite:
- ✅ Ajout du contact à votre liste
- ✅ Envoi des résultats par email au client
- ✅ Notification à vous
- ✅ Relance automatique à 12 mois

**Aucun backend, aucun service tiers. Tout en HTML + Systeme.io.**

---

## ⚙️ Configuration Systeme.io (10 minutes)

### Étape 1: Créer un Webhook dans Systeme.io

1. Connectez-vous à https://www.systeme.io
2. Allez dans **Paramètres → Intégrations**
3. Cherchez **"Webhooks"** ou **"Zaps"**
4. Cliquez sur **Créer un nouveau webhook** (ou intégration)
5. Configuration:
   - **URL:** Copiez l'URL du webhook (format: `https://api.systeme.io/webhook/xxxxx`)
   - **Méthode:** POST
   - **Format:** JSON

**Important:** Systeme.io plan gratuit accepte les webhooks. Copiez l'URL complète.

---

### Étape 2: Ajouter l'URL Webhook au site

**Dans `Audit-Entrepreneur.html`, ligne ~1468:**

```javascript
const WEBHOOK_URL = 'https://api.systeme.io/webhook/xxxxx'; // ← Remplacez par votre URL
```

**Remplacez `xxxxx` par l'identifiant de votre webhook Systeme.io.**

---

### Étape 3: Configurer l'automation Systeme.io

**Pour envoyer automatiquement les résultats par email:**

1. Dans Systeme.io, allez dans **Automations** ou **Scenarios**
2. Créez une nouvelle automation:
   - **Déclencheur:** Webhook reçu (votre webhook)
   - **Action 1:** Ajouter le contact à la liste "Audit Entrepreneur"
   - **Action 2:** Envoyer un email avec les résultats

**Template d'email pour Systeme.io:**

```
Objet: Tes résultats d'audit - {{archetype}}

Contenu:
Bonjour {{prenom}},

Voici tes résultats d'audit Entrepreneur:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Ton Archétype: {{archetype}}
Score Global: {{score}}/160
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Scores par thème:
{{scores_detail}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Pour voir ton bilan complet avec recommandations:
[Lien vers ton offre]

À bientôt!
Équipe Persona Business Lab
```

**Variables disponibles (depuis le webhook):**
- `{{prenom}}` - Le prénom du client
- `{{email}}` - Email du client
- `{{archetype}}` - L'archétype (ex: "Le Stratège")
- `{{score}}` - Score global (ex: "125")
- `{{scores_detail}}` - Tous les scores détaillés
- `{{date_submission}}` - Date de soumission

---

### Étape 4: Configurer la notification admin

1. Créez une **deuxième automation**:
   - **Déclencheur:** Webhook reçu
   - **Action:** Envoyer un email à `aurore.s.adv@gmail.com` (votre email)

**Template pour vous (admin):**

```
Objet: [AUDIT] Nouvelle soumission - {{prenom}}

Contenu:
Nouvelle soumission d'audit:

Prénom: {{prenom}}
Email: {{email}}
Archétype: {{archetype}}
Score: {{score}}/160

Scores:
{{scores_detail}}

Date: {{date_submission}}

À relancer: {{date_relance_12_mois}}

→ Voir dans Systeme.io
```

---

### Étape 5: Relance automatique à 12 mois

1. Créez une **troisième automation**:
   - **Déclencheur:** Contact ajouté à la liste "Audit Entrepreneur"
   - **Action:** Attendre 365 jours
   - **Puis:** Envoyer un email de relance

**Template email de relance:**

```
Objet: Refaire votre audit - Mise à jour 12 mois

Contenu:
Bonjour {{prenom}},

Il y a 12 mois, vous aviez complété notre audit Entrepreneur 
et découvert que vous étiez {{archetype}}.

Les choses évoluent! Voulez-vous refaire l'audit pour voir 
comment votre score a changé?

[Refaire l'audit]

À bientôt!
```

---

## 🧪 Tester l'intégration

1. **Ouvrir:** `Audit-Entrepreneur.html` dans un navigateur
2. **Compléter:** Les 40 questions
3. **Remplir:** Prénom + Email
4. **Vérifier:** 
   - Email reçu dans votre boîte (résultats)
   - Contact visible dans Systeme.io
   - Email de notification admin reçu

---

## 📋 Checklist

- [ ] Créer webhook dans Systeme.io
- [ ] Copier l'URL du webhook
- [ ] Remplacer `REMPLACER_PAR_VOTRE_WEBHOOK_SYSTEME_IO` dans le code
- [ ] Créer automation 1: Ajouter contact + Email résultats
- [ ] Créer automation 2: Notification admin
- [ ] Créer automation 3: Relance 12 mois
- [ ] Tester avec un audit complet
- [ ] Vérifier les emails reçus
- [ ] Activer les automations

---

## 🔗 Variables webhook disponibles

Quand le client soumet le formulaire, Systeme.io reçoit:

```json
{
  "email": "client@email.com",
  "prenom": "Marie",
  "archetype": "Le Stratège",
  "score": 125,
  "scores_detail": "Administratif: 7/16 | Délégation: 8/16 | ...",
  "date_submission": "10/06/2026 19:30"
}
```

Utilisez ces variables dans vos emails Systeme.io avec la syntaxe `{{variable}}`.

---

## ❓ FAQ

**Q: Le webhook fonctionne sur plan gratuit Systeme.io?**
A: Oui, les webhooks sont disponibles même sur le plan gratuit.

**Q: Combien de contacts/emails par mois?**
A: Plan gratuit Systeme.io: 500 contacts, emails inclus.

**Q: Puis-je modifier le template d'email?**
A: Oui, directement dans Systeme.io. Utilisez les variables `{{variable}}`.

**Q: Comment tester avant de mettre en ligne?**
A: Utilisez un email de test d'abord, puis votre vrai email.

**Q: Où se trouve mon webhook URL?**
A: Systeme.io → Intégrations → Webhooks (vous la copier lors de création)

---

## 🚀 C'est tout!

Votre intégration est prête. **Aucun backend, aucun code à déployer.**
Tout passe par Systeme.io! 

**Les étapes:**
1. Client fait l'audit
2. Remplit prénom + email
3. Données → Webhook Systeme.io
4. Automation envoie email résultats au client
5. Automation envoie notification à vous
6. Après 12 mois: email de relance automatique

✨ **Simple et efficace!**

