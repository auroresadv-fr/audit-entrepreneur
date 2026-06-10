# 🎯 Intégration Systeme.io - Configuration Simple

## Vue d'ensemble

L'audit capture le prénom et l'email, puis:
1. ✅ Ajoute le contact directement via **l'API Systeme.io**
2. ✅ Systeme.io envoie les résultats par email au client
3. ✅ Systeme.io vous envoie une notification
4. ✅ Relance automatique à 12 mois

**Aucun backend, aucun service tiers. Tout en HTML + Systeme.io API.**

---

## 🔌 Intégration API (Déjà configurée!)

La clé API Systeme.io est **déjà intégrée** dans le code:
- Endpoint: `https://api.systeme.io/api/contacts`
- Clé API: Configurée dans `Audit-Entrepreneur.html` ligne ~1476
- Données envoyées: `prénom`, `email`, `archétype`, `score`, `scores détaillés`

**Quand le client soumet le formulaire:**
1. Le prénom et email sont capturés
2. Les résultats sont calculés (archétype + scores)
3. Un appel API ajoute le contact à Systeme.io
4. Les résultats s'affichent au client

---

## ⚙️ Configuration Systeme.io (15 minutes)

### Étape 1: Créer une liste de contacts

1. Connectez-vous à https://www.systeme.io
2. Allez dans **Contacts → Mes listes**
3. Cliquez sur **+ Créer une nouvelle liste**
4. Nommez-la: `"Audit Entrepreneur"`
5. Sauvegardez

---

### Étape 2: Configurer l'automation pour les résultats

1. Allez dans **Automations** (ou **Workflows**)
2. Créez une **nouvelle automation**:

**Déclencheur:**
- Type: **Contact ajouté à une liste**
- Liste: **"Audit Entrepreneur"**

**Actions:**

**Action 1: Attendre un peu**
- Délai: 2 secondes (pour s'assurer que le contact est bien ajouté)

**Action 2: Envoyer un email au client**
- Type: **Envoyer un email**
- À: L'email du contact
- De: Votre email
- Objet: `Tes résultats d'audit - {{archetype}}`

**Contenu de l'email:**

```
Bonjour {{first_name}},

Voici tes résultats d'audit Entrepreneur:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Ton Archétype: {{archetype}}
Score Global: {{score}}/160
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Scores par thème:
{{scores_detail}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Pour accéder à ton bilan complet avec recommandations personnalisées:
[Ajouter votre lien vers l'offre premium]

À bientôt!
Équipe Persona Business Lab
```

**Pour utiliser les variables:**
- `{{first_name}}` = Le prénom
- `{{email}}` = L'email
- `{{archetype}}` = L'archétype (Ex: "Le Stratège")
- `{{score}}` = Score global (Ex: "125")
- `{{scores_detail}}` = Tous les scores (Ex: "Administratif: 7/16 | ...")
- `{{date_submission}}` = Date de soumission

---

### Étape 3: Configurer la notification pour vous

1. Créez une **deuxième automation**

**Déclencheur:**
- Type: **Contact ajouté à une liste**
- Liste: **"Audit Entrepreneur"**

**Actions:**

**Action 1: Envoyer un email à l'admin**
- À: **Votre email** (aurore.s.adv@gmail.com)
- De: Systeme.io
- Objet: `[AUDIT] {{first_name}} - {{archetype}}`

**Contenu complet:**

```
═══════════════════════════════════════════════
NOUVELLE SOUMISSION D'AUDIT ENTREPRENEUR
═══════════════════════════════════════════════

INFOS CONTACT
─────────────
Prénom: {{first_name}}
Email: {{email}}
Date: {{date_submission}}

DONNÉES PERSONNELLES
────────────────────
Sexe: {{sexe}}
Tranche d'âge: {{age}}
Taille entreprise: {{taille_entreprise}}

RÉSULTATS GÉNÉRAUX
──────────────────
Archétype: {{archetype}}
Score global: {{score}}/160
Axe prioritaire: {{axe_prioritaire}}

Description:
{{description_archetype}}

SCORES PAR THÈME
────────────────
{{scores_detail}}

═══════════════════════════════════════════════
RÉPONSES DÉTAILLÉES QUESTION PAR QUESTION
═══════════════════════════════════════════════

{{detailed_answers}}

═══════════════════════════════════════════════
ACTION
─────
→ Voir le contact dans Systeme.io
→ À relancer: {{date_submission_12_mois}}
═══════════════════════════════════════════════
```

---

## 📊 Variables disponibles dans l'email d'admin

**Données personnelles:**
- `{{first_name}}` = Prénom
- `{{email}}` = Email
- `{{sexe}}` = Sexe (Femme/Homme)
- `{{age}}` = Tranche d'âge (18-35/35-40/40-50/50+)
- `{{taille_entreprise}}` = Taille de l'entreprise

**Résultats:**
- `{{archetype}}` = L'archétype identifié
- `{{score}}` = Score global (ex: 125)
- `{{axe_prioritaire}}` = Axe principal à travailler
- `{{description_archetype}}` = Description complète de l'archétype
- `{{scores_detail}}` = Tous les scores par thème

**Réponses détaillées:**
- `{{detailed_answers}}` = **TOUTES les réponses question par question** (40 questions avec les réponses choisies)

**Autres:**
- `{{date_submission}}` = Date/heure de soumission

---

### Étape 4: Configurer la relance à 12 mois

1. Créez une **troisième automation**

**Déclencheur:**
- Type: **Contact ajouté à une liste**
- Liste: **"Audit Entrepreneur"**

**Actions:**

**Action 1: Attendre 365 jours**
- Délai: 365 jours

**Action 2: Envoyer un email de relance**
- À: L'email du contact
- Objet: `Refaire votre audit - Mise à jour 12 mois`

**Contenu:**

```
Bonjour {{first_name}},

Il y a un an, vous aviez complété notre audit Entrepreneur 
et découvert que vous étiez {{archetype}} (score: {{score}}/160).

Les choses ont évolué! Nous aimerions savoir comment 
votre business a progressé.

Voulez-vous refaire l'audit pour voir comment votre score a changé?

[Refaire l'audit]

À bientôt!
Équipe Persona Business Lab
```

---

## 🧪 Tester l'intégration

**Test local:**

1. Ouvrir `Audit-Entrepreneur.html` dans un navigateur
2. **Compléter les 40 questions** (répondre rapidement)
3. **Remplir le formulaire:**
   - Prénom: Test
   - Email: votre-email@gmail.com
4. **Vérifier:**
   - ✓ Les résultats s'affichent immédiatement
   - ✓ Email reçu avec vos résultats (dans 1-2 min)
   - ✓ Nouveau contact dans Systeme.io (Contacts → Audit Entrepreneur)

---

## 📋 Checklist

- [ ] Créer la liste "Audit Entrepreneur" dans Systeme.io
- [ ] Créer automation 1: Email résultats au client
- [ ] Créer automation 2: Notification à l'admin
- [ ] Créer automation 3: Relance 12 mois
- [ ] Activer toutes les automations
- [ ] Tester avec un audit complet
- [ ] Vérifier que les emails sont reçus
- [ ] Ajouter le lien vers l'offre premium dans l'email

---

## 🔐 Sécurité de la clé API

La clé API est **stockée dans le code HTML client**. 
C'est acceptable pour Systeme.io car:
- ✅ L'API est en lecture/écriture (ajouter contacts)
- ✅ Pas d'accès destructeur
- ✅ Plan gratuit avec limite de contacts

Si vous voulez plus de sécurité, vous pouvez:
- Créer un backend simple (Node.js, Python)
- Le backend utilise la clé API
- Le client appelle le backend au lieu de l'API directe

Mais pour une simple intégration, c'est fine! 👍

---

## 📊 Variables disponibles dans Systeme.io

Quand un contact est ajouté, Systeme.io a accès à:

```
{{first_name}} = Prénom du client
{{email}} = Email
{{archetype}} = L'archétype identifié
{{score}} = Score global (/160)
{{scores_detail}} = Tous les scores thème par thème
{{date_submission}} = Date/heure de soumission
```

Vous pouvez utiliser ces variables dans n'importe quel email Systeme.io!

---

## ❓ FAQ

**Q: L'API fonctionne sur plan gratuit Systeme.io?**
A: Oui, l'API accepte jusqu'à 500 contacts sur le plan gratuit.

**Q: Où voir les contacts ajoutés?**
A: Systeme.io → Contacts → Sélectionner la liste "Audit Entrepreneur"

**Q: Comment modifier un email d'automation?**
A: Systeme.io → Automations → Cliquer sur l'automation → Modifier l'email

**Q: Combien de temps avant l'email?**
A: Les automations s'exécutent généralement en 1-3 minutes.

**Q: Puis-je tester le formulaire avec un email de test?**
A: Oui! Utilisez n'importe quel email pour tester.

---

## 🚀 C'est tout!

Votre intégration est prête! 

**Le flux complet:**
1. ✅ Client complète les 40 questions
2. ✅ Remplit prénom + email
3. ✅ API ajoute le contact à Systeme.io
4. ✅ Automation 1 envoie les résultats
5. ✅ Automation 2 vous notifie
6. ✅ Après 12 mois: Automation 3 propose de refaire l'audit

**Aucun backend, aucun code à déployer.**
Tout est en HTML + Systeme.io! ✨

