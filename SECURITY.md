# Politique de Sécurité

## Variables d'Environnement

Ne jamais committer de fichiers `.env` contenant des informations sensibles.
Utilisez `.env.example` comme modèle et créez votre propre fichier `.env` localement.

## Fichiers Sensibles à Protéger

Les fichiers suivants ne doivent **JAMAIS** être committés :
- `.env` et toutes ses variantes (`.env.local`, `.env.production`, etc.)
- Clés API et tokens d'authentification
- Certificats SSL (`.key`, `.pem`, `.p12`)
- Fichiers de configuration contenant des secrets
- Bases de données avec données réelles

## Bonnes Pratiques

1. **Vérifier avant chaque commit** : Utilisez `git status` pour vérifier qu'aucun fichier sensible n'est tracké
2. **Utiliser .gitignore** : Tous les patterns sensibles sont déjà dans `.gitignore`
3. **Ne pas exposer d'informations** : Les emails, numéros de téléphone et autres infos sensibles doivent être stockés dans des variables d'environnement
4. **Révocation immédiate** : Si une clé ou un secret a été exposé par erreur, le révoquer immédiatement

## Rapporter une Vulnérabilité

Si vous découvrez une vulnérabilité de sécurité, veuillez la signaler en privé.
