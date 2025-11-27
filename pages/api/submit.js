export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const {
    fullName,
    email,
    phone,
    currentSchool,
    studyLevel,
    studyProject,
    howDidYouKnow,
    contactMethod,
    urgency,
    studyDomain,
    city,
    dataConsent
  } = req.body

  if (!fullName || !email || !phone || !studyLevel || !howDidYouKnow || !contactMethod || !urgency || !studyDomain || !city) {
    return res.status(400).json({ error: 'Tous les champs obligatoires doivent etre remplis' })
  }

  if (!dataConsent) {
    return res.status(400).json({ error: 'Vous devez accepter utilisation de vos donnees' })
  }

  const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
  const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID

  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.error('Missing Telegram credentials')
    return res.status(500).json({ error: 'Configuration serveur manquante' })
  }

  const message = `🎓 *NOUVELLE INSCRIPTION - CAMPUS RUSSIE*

👤 *Informations Personnelles:*
• Nom: ${fullName}
• Email: ${email}
• Telephone: ${phone}
• Etablissement actuel: ${currentSchool || 'Non specifie'}

📚 *Projet d'Etudes:*
• Niveau: ${studyLevel}
• Domaine: ${studyDomain}
• Ville souhaitee: ${city}
• Description: ${studyProject || 'Non specifie'}

📢 *Informations de Contact:*
• Source: ${howDidYouKnow}
• Methode de contact preferee: ${contactMethod}
• Urgence: ${urgency}

✅ *Consentement donnees:* Accepte

⏰ Date: ${new Date().toLocaleString('fr-FR', { timeZone: 'Africa/Douala' })}`

  try {
    const telegramUrl = 'https://api.telegram.org/bot' + TELEGRAM_BOT_TOKEN + '/sendMessage'

    const telegramResponse = await fetch(telegramUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'Markdown'
      })
    })

    const telegramData = await telegramResponse.json()

    if (!telegramData.ok) {
      console.error('Telegram API Error:', telegramData)
      return res.status(500).json({ 
        error: 'Erreur lors de envoi',
        details: telegramData.description 
      })
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Inscription envoyee avec succes!' 
    })

  } catch (error) {
    console.error('Server Error:', error)
    return res.status(500).json({ 
      error: 'Erreur serveur',
      details: error.message 
    })
  }
}