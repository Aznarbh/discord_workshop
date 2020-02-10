async function kick(message) {
        /**
         * Vérifier les permissions (si l'utilisateur n'est pas administrateur, on refuse la commande)
         * Parser la commande
         * Isoler l'utilisateur mentionné
         * Intégrer une raison au kick
         * Kick
         */

        message.channel.send("This function is not yet developped, but I assume you will write it soon :wink:");
}

module.exports = {
        kick
}