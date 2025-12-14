# Guide de modification des Combattants

## 📁 Fichier de données

Toutes les informations des combattants se trouvent dans le fichier :
**`fighters-data.ts`**

## ✏️ Comment modifier les combattants

### Structure d'un combattant

```typescript
{
  name: "Nom du combattant",
  nickname: "Le Surnom",
  weight: "-84kg",
  belt: "Ceinture Marron Grappling",
  record: {
    wins: 15,      // Nombre de victoires
    losses: 3,     // Nombre de défaites
    draws: 1       // Nombre de matchs nuls
  },
  achievements: [
    "Premier titre",
    "Deuxième titre",
    "Troisième titre"
  ],
  image: "/images/competitor/photo.jpg",
  specialty: "Spécialité 1 • Spécialité 2",
  quote: "Citation du combattant"
}
```

### Modifier un combattant existant

1. Ouvrir le fichier `fighters-data.ts`
2. Trouver le combattant à modifier
3. Changer les valeurs souhaitées
4. Sauvegarder

### Ajouter un nouveau combattant

1. Ouvrir `fighters-data.ts`
2. Copier un combattant existant
3. Modifier toutes les valeurs
4. Ajouter à la fin du tableau `FIGHTERS_DATA`

### Supprimer un combattant

1. Ouvrir `fighters-data.ts`
2. Supprimer l'objet complet du combattant (y compris les accolades)
3. Faire attention à la virgule (le dernier combattant n'en a pas)

## 🖼️ Images

Les photos des combattants sont dans :
**`/images/competitor/`**

Pour changer une photo :
1. Placer la nouvelle photo dans `/images/competitor/`
2. Mettre à jour le chemin dans `image: "/images/competitor/nouvelle-photo.jpg"`

## 💡 Exemples

### Modifier le surnom
```typescript
nickname: "Le Nouveau Surnom",
```

### Ajouter une réussite au palmarès
```typescript
achievements: [
  "Prix Ville de Saint-Ouen 2015",
  "Médaille d'Or Paris Open 2016",
  "Champion Régional 2017",
  "Top 3 Championnat de France 2018",
  "Nouvelle réussite 2024"  // ← Ajouté
],
```

### Mettre à jour le bilan
```typescript
record: { wins: 20, losses: 3, draws: 2 },
```

## ⚠️ Important

- Ne pas oublier les virgules entre les éléments
- Les guillemets doivent être droits `"` et non typographiques `""`
- Le dernier combattant du tableau n'a PAS de virgule après l'accolade fermante
- Toutes les autres propriétés ont une virgule à la fin
