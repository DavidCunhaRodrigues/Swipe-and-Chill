# 🎬 Swipe&Chill

Application web full-stack qui permet à deux personnes de trouver un film à regarder
ensemble : chacune swipe de son côté dans un salon privé synchronisé, et l'application
s'arrête dès qu'un même film est liké par les deux.

## Le problème

Choisir un film à deux prend souvent plus de temps que de le regarder. Swipe&Chill
transforme ce choix en jeu rapide : plus besoin de proposer ni de justifier ses envies,
le match se fait tout seul.

## Fonctionnement

1. Deux joueurs rejoignent le même salon privé depuis leur téléphone.
2. Chacun voit les films un par un (affiche, note, synopsis, réalisateur, acteurs)
   et choisit de liker ou disliker.
3. Dès qu'un film est liké par les deux, la partie s'arrête et le match s'affiche
   sur les deux écrans.

## Choix de conception

- **Listes de 5 films, mélangées par joueur** : chaque joueur reçoit les mêmes films dans
  un ordre différent, ce qui évite d'être influencé par les choix de l'autre.
- **Flux infini côté utilisateur** : une nouvelle liste est générée dès qu'un joueur termine
  la sienne, sans attendre l'autre.
- **Aucun doublon dans un salon** : un film déjà proposé n'apparaît plus jamais.
- **Données légères** : seuls les identifiants de films et les likes sont stockés ;
  les détails sont récupérés auprès de TMDB à la demande, avec mise en cache.
- **Secrets protégés** : le token de l'API TMDB n'est utilisé que côté serveur.

## Stack technique

- **Next.js** (App Router) et **React**
- **TypeScript**
- **Tailwind CSS**
- **API TMDB** pour les données des films
- **Supabase** (prévu) pour la synchronisation en temps réel

## Avancement

- [x] Initialisation du projet
- [x] Récupération des films tendances via TMDB (appel côté serveur, avec cache)
- [ ] Carte de film avec like / dislike
- [ ] Génération de listes de 5 films sans doublons
- [ ] Salons privés et synchronisation en temps réel
- [ ] Détection et affichage du match
- [ ] Comptes utilisateurs et watchlists
- [ ] Recherche de films

## Lancer le projet

1. Installer les dépendances :
   ```bash
   npm install
   ```
2. Créer un compte sur [TMDB](https://www.themoviedb.org/) et récupérer un *API Read Access Token*.
3. Copier `.env.example` en `.env.local` et renseigner le token.
4. Lancer le serveur de développement :
   ```bash
   npm run dev
   ```
5. Ouvrir http://localhost:3000

## Auteur

David Cunha Rodrigues, étudiant en L3 MIAGE, Université d'Orléans.