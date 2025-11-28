import { useState, useEffect } from 'react'
import Head from 'next/head'

export default function Home() {
  const [isVisible, setIsVisible] = useState({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Head>
        <title>Campus Russie - Etudes Superieures en Russie</title>
        <meta name="description" content="Poursuivez vos etudes superieures en Russie" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Navbar */}
      <nav className="navbar">
        <div className="container">
          <div className="nav-content">
            <div className="logo">Campus<span>Russie</span></div>
            <a href="#inscription" className="cta-button">
              Inscription
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content fade-in">
            <h1 className="hero-title">
              Etudiez en Russie
              <span className="gradient-text"> Votre Avenir Commence Ici</span>
            </h1>
            <p className="hero-subtitle">
              Rejoignez des milliers d'etudiants africains qui ont choisi l'excellence academique russe
            </p>
            <div className="hero-buttons">
              <a href="#inscription" className="primary-button">
                Je M'inscris Maintenant
              </a>
              <a href="#video" className="secondary-button">
                En Savoir Plus
              </a>
            </div>

            {/* Stats */}
            <div className="stats-grid">
              <div className="stat-card slide-up" style={{animationDelay: '0.2s'}}>
                <div className="stat-number">500+</div>
                <div className="stat-label">Etudiants Inscrits</div>
              </div>
              <div className="stat-card slide-up" style={{animationDelay: '0.4s'}}>
                <div className="stat-number">50+</div>
                <div className="stat-label">Universites Partenaires</div>
              </div>
              <div className="stat-card slide-up" style={{animationDelay: '0.6s'}}>
                <div className="stat-number">98%</div>
                <div className="stat-label">Taux de Reussite</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section" id="features" data-animate>
        <div className="container">
          <h2 className={`section-title ${isVisible.features ? 'fade-in' : ''}`}>
            Pourquoi Choisir la Russie?
          </h2>
          <div className="features-grid">
            <div className={`feature-card ${isVisible.features ? 'slide-up' : ''}`} style={{animationDelay: '0.1s'}}>
              <div className="feature-icon">🎓</div>
              <h3>Diplomes Reconnus</h3>
              <p>Diplomes reconnus internationalement et en Afrique</p>
            </div>
            <div className={`feature-card ${isVisible.features ? 'slide-up' : ''}`} style={{animationDelay: '0.2s'}}>
              <div className="feature-icon">💰</div>
              <h3>Couts Abordables</h3>
              <p>Frais de scolarite et cout de vie tres accessibles</p>
            </div>
            <div className={`feature-card ${isVisible.features ? 'slide-up' : ''}`} style={{animationDelay: '0.3s'}}>
              <div className="feature-icon">🌍</div>
              <h3>Diversite Culturelle</h3>
              <p>Rencontrez des etudiants du monde entier</p>
            </div>
            <div className={`feature-card ${isVisible.features ? 'slide-up' : ''}`} style={{animationDelay: '0.4s'}}>
              <div className="feature-icon">🏆</div>
              <h3>Excellence Academique</h3>
              <p>Universites classees parmi les meilleures au monde</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Section */}
      <section className="success-section" id="success" data-animate>
        <div className="container">
          <div className={`success-content ${isVisible.success ? 'fade-in' : ''}`}>
            <h2 className="section-title">Votre Succes, Notre Mission</h2>
            <p className="success-text">
              Nous accompagnons chaque etudiant depuis le choix de l'universite jusqu'a l'obtention du visa.
              Notre equipe experimentee vous guide a chaque etape de votre parcours.
            </p>
            <div className="success-features">
              <div className={`success-item ${isVisible.success ? 'slide-right' : ''}`} style={{animationDelay: '0.2s'}}>
                <span className="check-icon">✓</span>
                <span>Accompagnement personnalise</span>
              </div>
              <div className={`success-item ${isVisible.success ? 'slide-right' : ''}`} style={{animationDelay: '0.3s'}}>
                <span className="check-icon">✓</span>
                <span>Assistance visa garantie</span>
              </div>
              <div className={`success-item ${isVisible.success ? 'slide-right' : ''}`} style={{animationDelay: '0.4s'}}>
                <span className="check-icon">✓</span>
                <span>Support 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="section" id="video" data-animate>
        <div className="container">
          <h2 className={`section-title ${isVisible.video ? 'fade-in' : ''}`}>
            Decouvrez la Vie Etudiante en Russie
          </h2>
          <div className={`video-container ${isVisible.video ? 'scale-in' : ''}`}>
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/watch?v=nA0oGr2tKyg"
              title="Vie etudiante en Russie"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* REGISTRATION FORM SECTION - VISIBLE AND PROMINENT */}
      <section className="form-section" id="inscription" data-animate>
        <div className="container">
          <div className={`form-header ${isVisible.inscription ? 'fade-in' : ''}`}>
            <h2 className="form-section-title">Inscrivez-vous Maintenant</h2>
            <p className="form-section-subtitle">Remplissez le formulaire ci-dessous et recevez une reponse sous 24h</p>
          </div>
          <RegistrationForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Campus<span>Russie</span></h3>
              <p>Votre partenaire pour des etudes superieures en Russie</p>
            </div>
            <div className="footer-section">
              <h4>Universites Partenaires</h4>
              <ul>
                <li>Universite d'Etat de Moscou</li>
                <li>Universite d'Etat de Saint-Petersbourg</li>
                <li>Universite RUDN</li>
                <li>Universite Technique d'Etat de Kazan</li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contact</h4>
              <p>Email: info@campusrussie.com</p>
              <p>Tel: +237 XXX XXX XXX</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Campus Russie. Tous droits reserves.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    currentSchool: '',
    studyLevel: '',
    studyProject: '',
    howDidYouKnow: '',
    contactMethod: '',
    urgency: '',
    studyDomain: '',
    city: '',
    dataConsent: false
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  // Quick fill suggestions
  const quickFillSuggestions = {
    studyDomain: ['Medecine', 'Ingenierie', 'Informatique', 'Commerce', 'Architecture', 'Pharmacie', 'Droit'],
    city: ['Moscou', 'Saint-Petersbourg', 'Kazan', 'Novossibirsk', 'Ekaterinbourg']
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!formData.dataConsent) {
      setError('Vous devez accepter utilisation de vos donnees personnelles')
      return
    }

    setLoading(true)

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (data.success) {
        setSuccess(true)
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        setError(data.error || 'Une erreur est survenue')
      }
    } catch (err) {
      setError('Erreur de connexion. Veuillez reessayer.')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const quickFill = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  if (success) {
    return (
      <div className="success-message-large">
        <div className="success-icon-large">✓</div>
        <h3>Inscription Reussie!</h3>
        <p>Merci pour votre inscription. Notre equipe vous contactera sous 24h.</p>
        <button 
          className="back-button"
          onClick={() => {
            setSuccess(false)
            setFormData({
              fullName: '',
              email: '',
              phone: '',
              currentSchool: '',
              studyLevel: '',
              studyProject: '',
              howDidYouKnow: '',
              contactMethod: '',
              urgency: '',
              studyDomain: '',
              city: '',
              dataConsent: false
            })
          }}
        >
          Nouvelle Inscription
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="registration-form-visible">
      <div className="form-row">
        <div className="form-group">
          <label>Nom Complet *</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            placeholder="Ex: Jean Dupont"
          />
        </div>
        <div className="form-group">
          <label>Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="exemple@email.com"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Telephone (WhatsApp) *</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="+237 6XX XXX XXX"
          />
        </div>
        <div className="form-group">
          <label>Lycee/Universite Actuelle</label>
          <input
            type="text"
            name="currentSchool"
            value={formData.currentSchool}
            onChange={handleChange}
            placeholder="Nom de votre etablissement"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Niveau d'etudes souhaite *</label>
          <select
            name="studyLevel"
            value={formData.studyLevel}
            onChange={handleChange}
            required
          >
            <option value="">-- Choisissez --</option>
            <option value="Licence (Bachelor)">Licence (Bachelor)</option>
            <option value="Master">Master</option>
            <option value="Doctorat (PhD)">Doctorat (PhD)</option>
            <option value="Cours de langue">Cours de langue</option>
          </select>
        </div>
        <div className="form-group">
          <label>Domaine d'etudes *</label>
          <input
            type="text"
            name="studyDomain"
            value={formData.studyDomain}
            onChange={handleChange}
            required
            placeholder="Tapez ou cliquez ci-dessous"
            list="domainSuggestions"
          />
          <datalist id="domainSuggestions">
            {quickFillSuggestions.studyDomain.map(domain => (
              <option key={domain} value={domain} />
            ))}
          </datalist>
          <div className="quick-fill-buttons">
            {quickFillSuggestions.studyDomain.map(domain => (
              <button
                key={domain}
                type="button"
                className="quick-fill-btn"
                onClick={() => quickFill('studyDomain', domain)}
              >
                {domain}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Ville souhaitee en Russie *</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            placeholder="Tapez ou cliquez ci-dessous"
            list="citySuggestions"
          />
          <datalist id="citySuggestions">
            {quickFillSuggestions.city.map(city => (
              <option key={city} value={city} />
            ))}
          </datalist>
          <div className="quick-fill-buttons">
            {quickFillSuggestions.city.map(city => (
              <button
                key={city}
                type="button"
                className="quick-fill-btn"
                onClick={() => quickFill('city', city)}
              >
                {city}
              </button>
            ))}
          </div>
        </div>
        <div className="form-group">
          <label>Comment nous avez-vous connu? *</label>
          <select
            name="howDidYouKnow"
            value={formData.howDidYouKnow}
            onChange={handleChange}
            required
          >
            <option value="">-- Choisissez --</option>
            <option value="TikTok">TikTok</option>
            <option value="Facebook">Facebook</option>
            <option value="Instagram">Instagram</option>
            <option value="WhatsApp">WhatsApp</option>
            <option value="Amis/Famille">Amis/Famille</option>
            <option value="Google">Google</option>
            <option value="Autre">Autre</option>
          </select>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Comment souhaitez-vous etre contacte? *</label>
          <select
            name="contactMethod"
            value={formData.contactMethod}
            onChange={handleChange}
            required
          >
            <option value="">-- Choisissez --</option>
            <option value="WhatsApp">WhatsApp</option>
            <option value="Telephone">Telephone</option>
            <option value="Email">Email</option>
            <option value="Telegram">Telegram</option>
          </select>
        </div>
        <div className="form-group">
          <label>Urgence de contact *</label>
          <select
            name="urgency"
            value={formData.urgency}
            onChange={handleChange}
            required
          >
            <option value="">-- Choisissez --</option>
            <option value="Tres urgent (24h)">Tres urgent (24h)</option>
            <option value="Urgent (2-3 jours)">Urgent (2-3 jours)</option>
            <option value="Normal (1 semaine)">Normal (1 semaine)</option>
            <option value="Pas presse">Pas presse</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label>Parlez-nous de votre projet d'etudes (Optionnel)</label>
        <textarea
          name="studyProject"
          value={formData.studyProject}
          onChange={handleChange}
          rows="4"
          placeholder="Decrivez vos objectifs et motivations..."
        ></textarea>
      </div>

      <div className="form-group checkbox-group">
        <label className="checkbox-label">
          <input
            type="checkbox"
            name="dataConsent"
            checked={formData.dataConsent}
            onChange={handleChange}
            required
          />
          <span>
            J'accepte que mes donnees personnelles soient utilisees pour traiter ma demande d'inscription *
          </span>
        </label>
      </div>

      {error && (
        <div className="error-message">
          <span className="error-icon">⚠</span>
          {error}
        </div>
      )}

      <button type="submit" className="submit-button-large" disabled={loading}>
        {loading ? (
          <>
            <span className="spinner"></span>
            Envoi en cours...
          </>
        ) : (
          <>
            <span className="button-icon">✓</span>
            Envoyer Mon Inscription
          </>
        )}
      </button>

      <p className="form-footer">
        <span className="security-icon">🔒</span>
        Informations securisees - Reponse garantie sous 24h
      </p>
    </form>
  )
}
