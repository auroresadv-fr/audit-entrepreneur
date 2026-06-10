// ============================================================
// RUBRIQUE 2, FEMMES 18–35 ans : Cycle menstruel
// ============================================================

window.wellbeingWomen1835 = {

  phaseIntro: {
    title: "Ton cycle est ton calendrier énergétique",
    body: `<p>Pendant une grande partie de ta vie d'entrepreneuse, tu vas vivre un cycle hormonal qui change ton énergie, ta concentration, ta communication et ta créativité, sur 28 jours en moyenne. Ce n'est pas un bug du système. C'est une horloge interne précise qui, si tu la respectes, devient un <strong>levier de performance</strong> au lieu d'un sabotage permanent.</p>
      <p>L'erreur la plus courante chez les entrepreneuses : essayer de fonctionner comme un homme, c'est-à-dire en cycle de 24h, mêmes performances chaque jour. C'est physiologiquement impossible pour toi. Et c'est l'une des grandes causes d'épuisement et de culpabilité chez les solos.</p>
      <p>Voici les 4 phases de ton cycle, leurs caractéristiques principales, et ce que tu peux orchestrer dessus :</p>`,
    phases: [
      { name: "Phase folliculaire, jours 1 à 13", body: "Après les règles, les œstrogènes remontent. Tu retrouves de l'énergie, de la créativité, du goût pour le nouveau. C'est ta phase d'<strong>idéation et de lancement</strong>. Tu apprends mieux, tu prends mieux le risque, tu as envie d'explorer." },
      { name: "Phase ovulatoire, jours 14 à 16", body: "Pic de testostérone et d'œstrogènes. C'est ton sommet d'énergie, de charisme, de communication. Tu es magnétique. C'est ta phase de <strong>vente, networking, prise de parole, négociation</strong>. Profite-en sans culpabilité." },
      { name: "Phase lutéale, jours 17 à 28", body: "Progestérone en montée. Énergie qui décroît progressivement. Tu es plus dans l'<strong>analyse, la finalisation, le détail</strong>. Moins de tolérance au bruit, à la frustration, aux interactions à faible valeur. Phase parfaite pour boucler, organiser, compter." },
      { name: "Phase menstruelle, jours 1 à 5", body: "Énergie au plus bas, mais intuition au plus haut. Phase de <strong>repli, bilan, perception fine</strong>. Tu vois ce qui ne va pas, tu sens les choses. Idéal pour repenser une stratégie, prendre du recul, faire des choix de fond." }
    ]
  },

  archetypes: {

    "Le Pionnier": [
      {
        eyebrow: "Impact du cycle",
        title: "Tu carbures aux pics, tu paies les creux",
        body: `<p>Ton fonctionnement haute énergie + adrénaline rentre en collision frontale avec ton cycle. En phase folliculaire et ovulatoire, tu es <strong>survoltée</strong>, tu prends 10 décisions, tu lances 3 projets, tu enchaînes les rendez-vous. Et en phase lutéale-menstruelle, ton corps réclame du repos que tu refuses de prendre.</p>
          <p>Résultat : tu vis des syndromes prémenstruels intenses (irritabilité explosive, ballonnements, pulsions alimentaires), des règles fatigantes voire douloureuses, des baisses d'énergie brutales que tu ne comprends pas. Tu te sens "instable" parce que tu ne te synchronises pas avec ton propre rythme.</p>`
      },
      {
        eyebrow: "Organisation par cycle",
        title: "Faire du cycle un cadre de pilotage",
        body: `<p>Tu as besoin d'une stratégie ferme pour ne pas tout faire à fond tout le temps.</p>
          <p><strong>Folliculaire :</strong> lance, explore, teste tes nouvelles idées. Tu vas vite et bien. <em>Période parfaite pour démarrer un nouveau projet ou une nouvelle offre.</em></p>
          <p><strong>Ovulatoire :</strong> bloque tes RDV commerciaux, tes présentations clients, tes prises de parole publique. Tu es au max de ton charisme. <em>Ne mets pas cette phase à faire de l'admin.</em></p>
          <p><strong>Lutéale :</strong> finalise, livre, range, structure. Évite de prendre de nouvelles décisions stratégiques importantes, tu serais portée à dire oui à tout puis à le regretter. <em>Phase pour clôturer.</em></p>
          <p><strong>Menstruelle :</strong> protège-la. 2-3 jours en mode minimum, mode "bilan et observation". <strong>Tu vas devoir t'y forcer</strong> parce que tu déteste t'arrêter, mais c'est ta vraie phase de régénération.</p>`
      },
      {
        eyebrow: "Alimentation par phase",
        title: "Ce qui soutient ton corps à chaque phase",
        body: `<p><strong>Folliculaire :</strong> aliments fermentés (kéfir, kombucha, choucroute), légumes verts crucifères (brocolis, chou kale) qui aident le foie à métaboliser les œstrogènes, graines germées.</p>
          <p><strong>Ovulatoire :</strong> légumes colorés et antioxydants (poivrons, baies, betterave), bons gras (avocat, noix), aliments légers et hydratants.</p>
          <p><strong>Lutéale :</strong> magnésium (chocolat noir 70%+, oléagineux, légumes verts), vitamines B (œufs, levure), aliments racines (patate douce, butternut). Réduire sucres rapides et café, ils aggravent le SPM.</p>
          <p><strong>Menstruelle :</strong> fer (lentilles, viande rouge si tu manges de la viande, épinards), bouillons, soupes, plats chauds et nourrissants. Évite le froid cru.</p>
          <p>Plantes utiles pour ton profil : <strong>onagre, bourrache</strong> (acides gras essentiels pour le SPM), <strong>gattilier</strong> en seconde partie de cycle si SPM sévère, <strong>achillée millefeuille</strong> ou <strong>framboisier</strong> pour règles douloureuses.</p>`,
        disclaimer: "Consulte un professionnel de santé pour affiner selon ta situation."
      },
      {
        eyebrow: "À retenir en priorité",
        title: "Arrête de combattre ton cycle",
        body: `<p>Le plus grand levier pour toi à cette période de ta vie, c'est <strong>d'arrêter de pousser à fond les 28 jours du mois</strong>. Tu n'es pas une machine, et ton corps n'est pas conçu pour 4 semaines de "go" identiques. C'est une force, pas une limitation, à condition de l'orchestrer au lieu de la combattre.</p>
          <p>Synchronise tes lancements, tes RDV, tes congés sur ton cycle, et tu vas constater que tu produis plus, mieux, avec moins de casse.</p>`
      }
    ],

    "L'Architecte": [
      {
        eyebrow: "Impact du cycle",
        title: "Ton cycle amplifie ta dissociation corps-tête",
        body: `<p>Tu vis déjà beaucoup dans ta tête. Avec le cycle, tu peux complètement ignorer ce que ton corps te dit pendant des semaines, jusqu'à ce que la phase lutéale tape fort et que tu te demandes pourquoi tu as soudainement envie de pleurer ou de tout brûler.</p>
          <p>Symptômes typiques chez toi : <strong>SPM émotionnel marqué</strong> (anxiété, ruminations amplifiées les 7-10 jours avant les règles), troubles du sommeil cycliques, fringales sucrées en lutéale que tu ne comprends pas parce que tu ne sens pas la faim "normale". Tu peux aussi avoir des règles tardives ou irrégulières si tu es en stress mental chronique.</p>`
      },
      {
        eyebrow: "Organisation par cycle",
        title: "Le cycle comme structure de pensée",
        body: `<p>Ton cerveau analytique va adorer travailler avec le cycle, à condition que tu te connectes à ton corps assez pour le sentir.</p>
          <p><strong>Folliculaire :</strong> phase parfaite pour toi, clarté mentale, capacité à concevoir, à structurer du neuf. <em>Profites-en pour formaliser ce qui est dans ta tête : process, offres, contenus.</em></p>
          <p><strong>Ovulatoire :</strong> mets-toi en visibilité même si ce n'est pas naturel pour toi. Tu auras le charisme et l'aisance pour parler de ton travail. <em>Crée un événement social pro pendant cette phase, sciemment.</em></p>
          <p><strong>Lutéale :</strong> phase d'analyse profonde, idéal pour toi. Documente, peaufine, structure. <strong>Attention :</strong> évite les décisions émotionnelles en fin de phase, tu vas surinterpréter tes ressentis. <em>Ne lis pas tes mails clients le soir en lutéale 2.</em></p>
          <p><strong>Menstruelle :</strong> intuition fine, prise de recul. <em>Phase parfaite pour la stratégie de fond, où tu en es, où tu veux aller. Évite l'exécution.</em></p>`
      },
      {
        eyebrow: "Alimentation par phase",
        title: "Manger pour ton cerveau et ton cycle",
        body: `<p><strong>Folliculaire :</strong> bons gras pour ton cerveau (avocat, noix, poisson gras), légumes verts à feuilles, fruits rouges. Petit-déj protéiné non négociable.</p>
          <p><strong>Ovulatoire :</strong> antioxydants à profusion, hydratation soutenue, repas légers et fréquents.</p>
          <p><strong>Lutéale :</strong> magnésium en quantité (chocolat noir, oléagineux, légumineuses), aliments riches en vitamine B6 (banane, pois chiches, saumon), réduit le SPM émotionnel. Glucides complexes pour stabiliser l'humeur (avoine, riz complet, patate douce). Évite sucre raffiné et alcool, qui amplifient les ruminations.</p>
          <p><strong>Menstruelle :</strong> fer, soupes nourrissantes, infusion. Réduire café, ton système nerveux est plus sensible.</p>
          <p>Plantes utiles : <strong>safran</strong> ou <strong>millepertuis</strong> en cure pour stabiliser l'humeur cyclique, <strong>gattilier</strong> si SPM marqué, <strong>magnésium en parallèle</strong>.</p>`,
        disclaimer: "Consulte un professionnel de santé pour affiner selon ta situation."
      },
      {
        eyebrow: "À retenir en priorité",
        title: "Ressentir au lieu d'analyser ton cycle",
        body: `<p>Tu vas être tentée de tracker ton cycle dans une appli, faire des graphiques, intellectualiser le tout. C'est un bon début, mais le vrai bond se fait quand tu commences à <strong>sentir</strong> dans ton corps que tu changes de phase, fatigue subtile en J21, énergie qui remonte en J6, etc. Ce ressenti est ton meilleur outil de pilotage entrepreneurial.</p>`
      }
    ],

    "Le Porteur": [
      {
        eyebrow: "Impact du cycle",
        title: "Tu pousses sur ton cycle comme sur tout le reste",
        body: `<p>Tu portes tout, y compris l'inconfort cyclique que tu refuses de reconnaître. Tu travailles le premier jour des règles avec des antidouleurs, tu ignores le SPM en disant "je n'ai pas le temps", tu pousses sur la phase lutéale comme si c'était la folliculaire. Et tu paies.</p>
          <p>Symptômes typiques chez toi : <strong>règles très douloureuses et lourdes</strong> liées au stress chronique, SPM long (10-14 jours) avec irritabilité et fatigue marquées, cycles parfois irréguliers ou raccourcis (signal d'épuisement surrénalien), aménorrhées passagères si tu es vraiment à bout.</p>
          <p>Ton cycle est un bon thermomètre de ton niveau d'épuisement général : s'il devient irrégulier, douloureux ou absent, c'est ton corps qui te dit qu'il en a trop.</p>`
      },
      {
        eyebrow: "Organisation par cycle",
        title: "Le cycle pour t'autoriser à ralentir",
        body: `<p>Pour toi, le cycle est <strong>une autorisation médicale de lever le pied</strong>. C'est un cadre qui t'oblige à accepter ce que tu refuses normalement.</p>
          <p><strong>Folliculaire :</strong> tu peux pousser, mais reste raisonnable. Ne mets pas tout sur cette phase.</p>
          <p><strong>Ovulatoire :</strong> rendez-vous clients importants, démarchage, networking. Tu seras plus efficace en 2 jours qu'en 10 sur ces sujets.</p>
          <p><strong>Lutéale :</strong> finalise et délègue ce que tu peux. <strong>Apprends à dire non</strong> aux nouvelles sollicitations sur la deuxième moitié de la lutéale, tu n'as pas l'énergie pour ajouter, tu as l'énergie pour clôturer.</p>
          <p><strong>Menstruelle :</strong> <strong>protège ces 2-3 premiers jours comme tu protégerais un client important</strong>. Bloque-les dans ton agenda, dis non aux rdv. Si tu ne peux pas, fais-toi une demi-journée OFF minimum. Ton corps a besoin de ce repos pour reconstituer ses réserves.</p>`
      },
      {
        eyebrow: "Alimentation par phase",
        title: "Soutenir un corps qui tire sur la corde",
        body: `<p><strong>Folliculaire :</strong> reconstitue les réserves épuisées, protéines de qualité, fer (épinards, lentilles, viande rouge si tu en manges), vitamine C.</p>
          <p><strong>Ovulatoire :</strong> hydratation +++ (eau, infusions, bouillons), antioxydants pour soutenir l'organisme sous stress.</p>
          <p><strong>Lutéale :</strong> magnésium en priorité absolue (oléagineux, chocolat noir, eaux riches), aliments riches en vitamines B (légumineuses, œufs, levure de bière). <strong>Réduis fortement café, alcool, sucres rapides</strong>, ils sabotent ton sommeil et amplifient le SPM.</p>
          <p><strong>Menstruelle :</strong> fer, soupes, bouillons d'os ou de légumes, plats chauds. Évite régimes restrictifs ou jeûnes pendant ces jours.</p>
          <p>Plantes utiles : <strong>gattilier</strong> si SPM lourd, <strong>achillée millefeuille</strong> ou <strong>alchémille</strong> pour règles abondantes/douloureuses, <strong>ashwagandha</strong> hors règles pour soutenir le terrain général.</p>`,
        disclaimer: "Consulte un professionnel de santé pour affiner selon ta situation."
      },
      {
        eyebrow: "À retenir en priorité",
        title: "Ton cycle te parle, écoute-le",
        body: `<p>Si ton cycle devient irrégulier, très douloureux, ou disparaît, <strong>c'est urgent, ce n'est pas normal</strong>. Ce n'est pas "ton corps qui s'adapte au stress", c'est ton corps qui te dit que tu vas casser quelque chose. Consulte. Et surtout, libère du temps, dans ton agenda, dans ta charge. Pas demain, pas après le projet. Maintenant.</p>`
      }
    ],

    "Le Bâtisseur": [
      {
        eyebrow: "Impact du cycle",
        title: "Tu peux structurer ton business avec ton cycle",
        body: `<p>Tu es dans une phase où tu structures ton activité, c'est exactement le bon moment pour intégrer ton cycle comme outil de pilotage. Tu as déjà de la structure, ajoute cette couche-là.</p>
          <p>Côté symptômes : tu as probablement des cycles plutôt réguliers (sauf gros stress), un SPM modéré que tu gères. Tu peux ressentir des variations d'énergie marquées que tu commences à percevoir comme cycliques sans encore les exploiter.</p>
          <p>Le risque chez toi : <strong>vouloir tout planifier au quart d'heure près</strong>, y compris ton cycle. Garde de la souplesse. Ton corps n'est pas un Gantt.</p>`
      },
      {
        eyebrow: "Organisation par cycle",
        title: "Synchroniser ton agenda avec ton cycle",
        body: `<p>Pour toi qui structure déjà, c'est le bon moment pour <strong>installer un agenda cyclique</strong> sur 3 mois.</p>
          <p><strong>Folliculaire :</strong> brainstorming, lancement de nouveaux contenus, conception. <em>Bloque tes "deep work" créatifs ici.</em></p>
          <p><strong>Ovulatoire :</strong> RDV commerciaux, ventes, prises de parole, partenariats. <em>Concentre les actions à fort enjeu relationnel ici.</em></p>
          <p><strong>Lutéale :</strong> structuration, documentation, finalisation. <em>Tes process et tes templates se construisent mieux dans cette phase.</em></p>
          <p><strong>Menstruelle :</strong> revue mensuelle, bilan, ajustement stratégique. <em>Une journée de "retreat" interne tous les mois, c'est ta réunion stratégique avec toi-même.</em></p>
          <p>Si tu peux : programme tes journées off, tes congés, et tes "journées admin chiantes" en lutéale fin / menstruel. Tes journées "vitrine" en ovulatoire.</p>`
      },
      {
        eyebrow: "Alimentation par phase",
        title: "Aliments qui soutiennent chaque phase",
        body: `<p><strong>Folliculaire :</strong> légumes verts crucifères (brocolis, chou), graines (lin, courge, tournesol qui équilibrent les hormones), fruits.</p>
          <p><strong>Ovulatoire :</strong> légumes colorés crus et cuits, antioxydants, bons gras (avocat, olive, noix).</p>
          <p><strong>Lutéale :</strong> magnésium (oléagineux, chocolat noir), aliments riches en vitamine B6 et tryptophane (banane, dinde, légumineuses). Augmente les glucides complexes pour stabiliser l'humeur. Limite alcool et sucre.</p>
          <p><strong>Menstruelle :</strong> fer biodisponible, bouillons, soupes chaudes. Réduis café (système nerveux plus sensible).</p>
          <p>Plantes : <strong>onagre, bourrache</strong> en huile pour soutenir équilibre hormonal, <strong>gattilier</strong> si déséquilibre lutéal, <strong>framboisier</strong> en cure pour les règles confortables.</p>`,
        disclaimer: "Consulte un professionnel de santé pour affiner selon ta situation."
      },
      {
        eyebrow: "À retenir en priorité",
        title: "Faire du cycle une infrastructure",
        body: `<p>Tu es dans une phase de construction de systèmes, fais-en un avec ton cycle. <strong>Trace 3 cycles complets</strong>, repère ton énergie, ton sommeil, tes envies, ton focus. À partir du 4e cycle, structure ton agenda en conséquence. C'est l'investissement temps le plus rentable que tu feras cette année.</p>`
      }
    ],

    "Le Stratège": [
      {
        eyebrow: "Impact du cycle",
        title: "Ton cycle te ramène à ton corps",
        body: `<p>Tu pilotes, tu délègues, tes systèmes tournent. Tu as quitté le mode "exécution permanente", donc tu as paradoxalement plus de marge pour te reconnecter à ton cycle, mais aussi plus de risque de l'ignorer parce que tu vis dans la stratégie.</p>
          <p>Symptômes possibles : cycle plutôt stable, SPM léger ou modéré, mais une <strong>déconnexion subtile</strong> à ce que tu ressens vraiment. Tu peux passer une phase lutéale sans la remarquer, te demander pourquoi tu es fatiguée alors que tu n'as "rien fait", ou au contraire surinvestir une phase ovulatoire sans en profiter consciemment.</p>`
      },
      {
        eyebrow: "Organisation par cycle",
        title: "Le cycle comme rythme de pilotage stratégique",
        body: `<p>À ton niveau, le cycle devient un <strong>cadre de leadership</strong>.</p>
          <p><strong>Folliculaire :</strong> vision, lancement de chantiers structurels, expérimentation. <em>C'est ta phase de "founder mode" créatif.</em></p>
          <p><strong>Ovulatoire :</strong> conversations stratégiques importantes, négociations majeures, prises de position publiques. <em>Tu as le maximum d'impact dans tes mots.</em></p>
          <p><strong>Lutéale :</strong> analyse de données, prise de décisions structurées, finalisation de chantiers en cours. <em>Phase parfaite pour faire le tri.</em></p>
          <p><strong>Menstruelle :</strong> phase d'intuition stratégique, prise de recul. <strong>Bloque cette phase comme une retraite mensuelle.</strong> <em>Décisions de fond sur où tu veux mener ton activité, les intuitions sont les plus justes ici.</em></p>`
      },
      {
        eyebrow: "Alimentation par phase",
        title: "Manger en présence à son cycle",
        body: `<p>À ton stade, l'enjeu nutrition c'est moins "quel aliment" que la <strong>présence à ce que tu manges</strong>. Tu connais déjà la qualité, réinvestis dans la conscience alimentaire.</p>
          <p><strong>Folliculaire :</strong> aliments vivants et frais, fermentés, crucifères pour soutien hormonal.</p>
          <p><strong>Ovulatoire :</strong> hydratation, antioxydants, repas légers et savoureux.</p>
          <p><strong>Lutéale :</strong> magnésium, oméga-3, glucides complexes. Limite franchement alcool et café, qui s'installent souvent à ton stade comme "récompense de fin de journée".</p>
          <p><strong>Menstruelle :</strong> bouillons, soupes, fer, plats chauds nourrissants. Ralenti alimentaire conscient.</p>
          <p>Compléments éventuels : <strong>oméga-3 de qualité, magnésium, vitamine D + K2</strong>. Plantes en cure de fond : <strong>onagre, bourrache, gattilier</strong> selon ton terrain.</p>`,
        disclaimer: "Consulte un professionnel de santé pour affiner selon ta situation."
      },
      {
        eyebrow: "À retenir en priorité",
        title: "Honorer ta menstruelle",
        body: `<p>À ton stade, le levier majeur c'est <strong>de t'autoriser à honorer ta phase menstruelle</strong>. Tu peux te le permettre, tes systèmes tournent sans toi. Profite-en pour faire 2-3 jours par mois en mode "retreat stratégique" : moins de calls, du temps long, de la lecture, de l'observation. Tu vas y trouver des intuitions qui n'arrivent pas dans le rythme normal, et qui peuvent réorienter ton activité entière.</p>`
      }
    ]
  }
};
