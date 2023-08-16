import { Client, GatewayIntentBits, REST, Routes } from "discord.js";
import dotenv from "dotenv";

// Lis le fichier .env et l'injecte dans le process.env 
dotenv.config({
    path : '.env'
});

const COMMANDS = [
    {
        name : "citation",
        description : "Envoie une citation d'un philosophe connu ou méconnu"
    }
];

// LE TOKEN DU BOT
const TOKEN = process.env.TOKEN;
// LE NUMERO UNIQUE DE l'APPLICATION
const CLIENT_ID = process.env.CLIENT_ID;

const rest = new REST({ version : '10'}).setToken(TOKEN);

// ça enregistre les commandes pour votre bot à discord
await rest.put(Routes.applicationCommands(CLIENT_ID), { body: COMMANDS });




// Connexion du bot
async function init(){
    // On crée le client discord
    const client = new Client({
        intents : [GatewayIntentBits.Guilds]
    });

    // Gestion des erreurs
    client.on('error', console.error);

    try {
        await client.login(TOKEN);
        console.log('Je suis connecté !');
    } catch (error) {
        console.error('Erreur lors de la connexion du PlopsiBot:', error);
    }
};




init();