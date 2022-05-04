# Projet GameOn 🎮

1. Forkez ce repo ;
2. Il est conseillé d'utiliser VisualStudio Code et vous pouvez utiliser Docker, mais ce n'est pas obligatoire ;
3. Il n'y a aucune dépendance ;
4. Vous ne devez utiliser que du CSS personnalisé et du JavaScript pur, sans jQuery, Bootstrap ou autre librairie.

- Repo forké à cette adresse : https://github.com/OpenClassrooms-Student-Center/GameOn-website-FR/
- Maquettes : https://www.figma.com/file/B7NKBDvSI18uoMLJgpnh48/UI-Design-GameOn-FR?node-id=106%3A630

# Quality Assurance comments ✔

- Travailler sur un repo GitHub forké ;
- Utiliser des fichiers séparés pour le HTML, le CSS et le JavaScript ;
- Toujours commenter ton code (décrire chaque fonction et chaque classe, ainsi que les parties du code qui nécessitent plus de détails) ;
- Tester manuellement les fonctionnalités, les entrées de formulaire et l'affichage responsive.

# Issues 🎯

Issues : https://github.com/OpenClassrooms-Student-Center/GameOn-website-FR/issues

## Fermer la modale 1️⃣

- [] Ajouter la fonctionnalité au bouton (x)

## Implémenter entrées du formulaire 2️⃣

- [] Lier les labels aux entrées dans le HTML en utilisant les attributs "for" et "id" dans le code existant. Corriger le code HTML quand nécessaire.
- [] Utiliser du JavaScript pur (pas de jQuery) pour terminer le formulaire : Le formulaire doit être valide quand l'utilisateur clique sur "Submit"
- Les données doivent être saisies correctement :
- [] Le champ Prénom a un minimum de 2 caractères / n'est pas vide.
- [] Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.
- [] L'adresse électronique est valide.
- [] Pour le nombre de concours, une valeur numérique est saisie.
- [] Un bouton radio est sélectionné.
- [] La case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée.
- [] Conserver les données du formulaire (ne pas effacer le formulaire) lorsqu'il ne passe pas la validation.

## Ajouter validation ou messages d'erreur 3️⃣

- [] Des messages d'erreur spécifiques doivent apparaître sous l'entrée qui n'est pas correcte. Les messages d'erreur doivent s'afficher sous le champ de saisie associé.
  _(ex :
  "Veuillez entrer 2 caractères ou plus pour le champ du nom."
  "Vous devez choisir une option."
  "Vous devez vérifier que vous acceptez les termes et conditions."
  "Vous devez entrer votre date de naissance."_

## Ajouter confirmation quand envoi réussi 4️⃣

- [] Après une validation réussie, inclure un message de confirmation de la soumission réussie pour l'utilisateur _(ex: "Merci ! Votre réservation a été reçue.")_

## Tests manuels 5️⃣

- [] Visualiser et tester l'interface utilisateur dans les dernières versions de Chrome et de Firefox, ainsi que dans les versions mobile et desktop. Corriger les erreurs d'affichage existantes.
- [] Tester toutes les fonctionnalités des boutons et des entrées de formulaire (tester les valeurs correctes et incorrectes)
