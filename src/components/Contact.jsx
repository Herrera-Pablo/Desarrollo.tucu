import React, { useState } from 'react';
import '../styles/contact.css';
import successImage from '../assets/img/client (2).jpg';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    Nombre: '',
    Correo: '',
    Celular: '',
    TipoSitio: '',
    DescripcionSitio: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwucMdohq9ZORTX4-wKUegRRadAKlQrHFJ60srZlL9DAXkEMdZVE6ftX4vImWe02fFd/exec';
    
    // Validate form data
    let currentErrors = {};
    if (!formData.Nombre) currentErrors.Nombre = 'Este campo es obligatorio';
    if (!formData.Correo) currentErrors.Correo = 'Este campo es obligatorio';
    if (!formData.Celular) currentErrors.Celular = 'Este campo es obligatorio';
    if (!formData.TipoSitio) currentErrors.TipoSitio = 'Este campo es obligatorio';
    if (!formData.DescripcionSitio) currentErrors.DescripcionSitio = 'Este campo es obligatorio';

    if (Object.keys(currentErrors).length > 0) {
      setErrors(currentErrors);
      setIsSubmitted(false);
      return;
    } else {
      setErrors({});
    }

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: new URLSearchParams(formData)
      });
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          Nombre: '',
          Correo: '',
          Celular: '',
          TipoSitio: '',
          DescripcionSitio: ''
        });
      } else {
        alert('Hubo un problema al enviar los datos');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un error al enviar los datos');
    }
  };

  return (
    <div id="section-contact">
      <div className="contact-form-container">
        {!isSubmitted && (
          <form id="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="Nombre"
              placeholder="Nombre Persona/Entidad"
              value={formData.Nombre}
              onChange={handleChange}
              required
              maxLength="40"
            />
            {errors.Nombre && <span className="error">{errors.Nombre}</span>}
            
            <input
              type="email"
              name="Correo"
              placeholder="Correo Electrónico"
              value={formData.Correo}
              onChange={handleChange}
              required
              maxLength="40"
            />
            {errors.Correo && <span className="error">{errors.Correo}</span>}
            
            <input
              type="tel"
              name="Celular"
              placeholder="Número de Celular"
              value={formData.Celular}
              onChange={handleChange}
              required
              maxLength="18"
              pattern="[0-9]*"
            />
            {errors.Celular && <span className="error">{errors.Celular}</span>}
            <div className='subtitle-form-contact'><h3>Elije el tipo:</h3></div>
            <div className="radio-group">
                
              <input
                type="radio"
                id="landing"
                name="TipoSitio"
                value="landing"
                checked={formData.TipoSitio === 'landing'}
                onChange={handleChange}
              />
              <label htmlFor="landing">Landing</label>

              <input
                type="radio"
                id="corporativo"
                name="TipoSitio"
                value="corporativo"
                checked={formData.TipoSitio === 'corporativo'}
                onChange={handleChange}
              />
              <label htmlFor="corporativo">Corporativo</label>

              <input
                type="radio"
                id="onepage"
                name="TipoSitio"
                value="onepage"
                checked={formData.TipoSitio === 'onepage'}
                onChange={handleChange}
              />
              <label htmlFor="onepage">Onepage</label>
            </div>
            {errors.TipoSitio && <span className="error">{errors.TipoSitio}</span>}

            <textarea
              name="DescripcionSitio"
              placeholder="Breve Descripción del Sitio y/o Negocio"
              value={formData.DescripcionSitio}
              onChange={handleChange}
              required
              maxLength="250"
            />
            {errors.DescripcionSitio && <span className="error">{errors.DescripcionSitio}</span>}
            
            <button type="submit">Quiero mi sitio</button>
          </form>
        )}
        {isSubmitted && (
          <div className="confirmation">
            <div className="confirmation-text">
              <p className="bebas-neue-regular">¡Gracias por contactarnos!</p>
              <p>Pronto estaremos en contacto.</p>
            </div>
            <img src={successImage} alt="Cliente satisfecho" className="confirmation-image" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
