# ia-mongodb-cours-2021

## Initialisation 

Pour installer le serveur : 

`docker compose up`
> Attention de bien être en LF (pour les retour à la ligne)

`docker compose down`
> Coupe le serveur entièrement (un ctrl+c ne fait que le stopper)

## Se connecter à la machine docker

`docker exec -it mongo-db /bin/bash`

## Se connecter au serveur mongodb avec mongobosh

`mongosh --username root --authenticationDatabase admin --password`
> Entrer le mot de passe : test123*

### Commandes utiles

`show dbs` : lister les bases de données
`use <db>` : se connecter à une base de données spécifique
`show collections` : lister les collections
`show role`
`show users`
`show log`
`show helpex`


### Cas de figure

> si on fait `use technocite` on va switcher de db vers `technocite` même si elle n'existe pas.
> on ne fait que changer de contexte
> docker créera la db qu'une fois qu'il y aura un contenu
>
> `technocite> db.classrooms.insertOne( { code: 'Leonard' } );` 

{
  acknowledged: true,
  insertedId: ObjectId("64d363620f6279e879a63238")
}

> Indique qu'il a bien pris en compte et inséré
>
> `show dbs`

admin               100.00 KiB
sample_training      61.25 MiB
sample_weatherdata    2.56 MiB
shop                 80.00 KiB
technocite           40.00 KiB

> `show collections`

technocite> show collections
classrooms

> `bash <script.sh>`

Permet de langer un script dispo dans le workspace

Executer un script via mongosh = 
`load ('/scripts/coucou.js');`
ou
`mongosh --nodb --file scripts/coucou.js`


