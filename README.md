# Projet 11 — KASA

## Installation du projet
* Utilisation de vite plutôt que create react app (CRA)
* Permet de créer et d'initialiser le projet react

```
npm create vite@latest projet11 -- --template react
```

## Présentation de la structure globale de l'app
* Présenter la structure globale avec les différents dossiers (pages & composants notamment)
* Présentation brève de React router (qui est une librairie permettant la navigation entre les différentes pages d'une app React)
* Création des 4 pages: Accueil, détail d'un appartement, a propos et 404
* Chaque page est un composant React située dans le dossier pages
* On peut parler du loader sur la page de détail qui permet de précharger les données d'un appartement et router l'utilisateur vers la page 404 si l'appartement n'existe pas
* Mise en place d'un layout de base pour factoriser header et footer communs à toutes les pages
* -> Présenter la structure du router de l'app

## Présentation des composants unitaires
* Rappeler que le principes d'un composant, c'est qu'il soit réutilisable (par l'intermédiaire des props)
* Présenter brièvement les différents composants de l'app
* Présenter plus en détail les composants Carousel & accordéon
* Montrer comment les composants sont appelés sur les différentes pages

## Conclusion
* Rappeler que l'intérêt de React réside dans le découpage de composants autonomes
* Rapeler le découpage route / composant 
