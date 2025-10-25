// Este arquivo atua como um backend "adaptador" serverless.
// Ele é projetado para ser hospedado em plataformas como Vercel ou Netlify,
// que transformam arquivos nesta pasta `/api` em endpoints de API automaticamente.

export const config = {
  runtime: 'edge',
};

// Este é o handler principal da nossa API. Ele será executado
// toda vez que uma requisição chegar em /api/chat.
export default async function handler(req: Request) {
  // 1. Validar a requisição recebida do Chat Demo (frontend)
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Método não permitido. Use POST.' }), { 
        status: 405, headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const { message } = await req.json();

    if (!message || typeof message !== 'string') {
      return new Response(JSON.stringify({ error: 'A propriedade "message" é obrigatória e deve ser uma string.' }), { 
          status: 400, headers: { 'Content-Type': 'application/json' }
      });
    }

    // 2. Chamar o seu webhook de IA já existente
    const YOUR_AI_WEBHOOK_URL = 'https://inteligencepro-n8n.g9wajy.easypanel.host/webhook/b9dbd78a-f291-4ebb-a8db-a8ea44a08290';

    // 3. Formatar os dados para simular uma requisição da Z-API, como seu webhook espera.
    // O objeto abaixo imita a estrutura que seu n8n recebe.
    const requestBodyToYourAI = [{
        headers: {
            "host": "inteligencepro-n8n.g9wajy.easypanel.host",
            "content-type": "application/json; charset=utf-8",
            "user-agent": "AxtorLabs-Chat-Demo/1.0"
        },
        body: {
            // Dados simulados para compatibilidade
            instanceId: "3E74750424FFF0FA8C3ECA96DF7E30C8",
            phone: "5513999999999", // Telefone de exemplo para o usuário do chat
            fromMe: false,
            momment: Date.now(),
            type: "chat",
            // A mensagem real do usuário do chat demo vai aqui
            text: message
        },
    }];

    const aiResponse = await fetch(YOUR_AI_WEBHOOK_URL, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBodyToYourAI),
    });

    if (!aiResponse.ok) {
        console.error('Erro ao chamar o webhook de IA:', await aiResponse.text());
        throw new Error('A IA não conseguiu processar a sua solicitação no momento.');
    }

    // 4. Extrair a resposta de texto da sua IA.
    // IMPORTANTE: Seu fluxo no n8n DEVE usar um nó "Respond to Webhook" no final
    // para retornar a resposta da IA no formato: { "reply": "texto da resposta aqui" }
    const aiData = await aiResponse.json();
    const replyText = aiData.reply;
    
    if (!replyText) {
        console.error("Resposta do n8n não continha a propriedade 'reply'. Resposta recebida:", aiData);
        throw new Error('A resposta da IA está em um formato inesperado. Verifique a configuração do nó "Respond to Webhook" no seu n8n.');
    }

    // 5. Enviar a resposta final de volta para o Chat Demo (frontend)
    return new Response(JSON.stringify({ reply: replyText }), {
      status: 200,
      headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*', 
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
      },
    });

  } catch (error: any) {
    console.error('Ocorreu um erro no adaptador da API:', error);
    return new Response(JSON.stringify({ error: error.message || 'Erro interno no servidor.' }), { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
    });
  }
}
