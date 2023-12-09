import axios from 'axios';

const url = 'https://nuvolaris.app/api/v1/web/apiga/slack/slack';

export async function sendMessage(userMessage: string) {
    const headers = {
        'Content-Type': 'application/json',
      };
    const data = {
        userMessage: userMessage,
    };

    axios.post(url, data, { headers })
        .then(response => {
    console.log('Risposta:', response.data);
    })
        .catch(error => {
    console.error('Errore nella richiesta:', error.message);
    });
}