import {API_KEY_ASSISTANT_AI, OPENAI_TOKEN} from '$env/static/private'
// import {
//     listAssistants,
//     createThread,
//     runThread,
//     listThreadMessages
// } from '$lib/service/assistantApi';
//continue set here all function calls
export async function load() {

    return {
        apiKey: API_KEY_ASSISTANT_AI,
        openAiToken: OPENAI_TOKEN
    };
}
