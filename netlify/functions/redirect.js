exports.handler = async (event) => {
  const start = new Date('2026-05-06T00:00:00Z').getTime(); // modifiez la date de début
  const now = Date.now();
  const monthMs = 30 * 24 * 60 * 60 * 1000;
  if (now <= start + monthMs) {
    return {
      statusCode: 302,
      headers: { Location: 'https://www.diplomatie.gouv.fr/fr/services-aux-francaises-et-aux-francais/vie-administrative-et-elections/elections-a-l-etranger/elections-des-conseillers-des-francais-de-l-etranger-et-des-delegues-consulaires-2026' }, // remplacez par votre URL finale
      body: ''
    };
  } else {
    return {
      statusCode: 410,
      body: 'QR expiré'
    };
  }
};
