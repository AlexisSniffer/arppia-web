'use client'

import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const PrivacyPage = () => {
  return (
    <main className="flex flex-col min-h-screen bg-black">
      <Navbar />

      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-invert prose-blue">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-12 tracking-tight">
            Política de <span className="text-primary">Privacidad</span>
          </h1>

          <div className="space-y-12 text-gray-400 leading-relaxed text-lg">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                1. Introducción
              </h2>
              <p>
                En Arppia, la privacidad de nuestros usuarios y clientes es una
                prioridad fundamental. Esta Política de Privacidad describe cómo
                recopilamos, utilizamos y protegemos su información personal
                cuando visita nuestro sitio web o utiliza nuestros servicios.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                2. Información que Recopilamos
              </h2>
              <p>Recopilamos información de diversas maneras, incluyendo:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>
                  <strong>Información proporcionada por usted:</strong> Como su
                  nombre, correo electrónico y detalles del proyecto a través de
                  nuestro formulario de contacto.
                </li>
                <li>
                  <strong>Datos de navegación:</strong> Información técnica
                  capturada automáticamente como dirección IP, tipo de navegador
                  y comportamiento en el sitio.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                3. Uso de la Información
              </h2>
              <p>Utilizamos la información recopilada para:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Responder a sus consultas y proporcionar presupuestos.</li>
                <li>Mejorar nuestro sitio web y la experiencia del usuario.</li>
                <li>
                  Enviar boletines informativos (solo si se ha suscrito
                  explícitamente).
                </li>
                <li>Cumplir con obligaciones legales.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                4. Protección de Datos
              </h2>
              <p>
                Implementamos medidas de seguridad técnicas y organizativas para
                proteger sus datos personales contra el acceso no autorizado, la
                alteración o la eliminación. Utilizamos protocolos de cifrado y
                servidores seguros para garantizar la integridad de su
                información.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                5. Sus Derechos
              </h2>
              <p>
                Usted tiene derecho a acceder, rectificar o solicitar la
                eliminación de sus datos personales. Para ejercer estos
                derechos, puede contactarnos a través de{' '}
                <span className="text-primary">hola@arppia.com</span>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Cookies</h2>
              <p>
                Este sitio utiliza cookies para mejorar la navegación. Usted
                puede configurar su navegador para rechazar todas o algunas de
                las cookies, aunque esto podría afectar la funcionalidad del
                sitio.
              </p>
            </section>

            <div className="pt-12 border-t border-white/10 text-sm text-gray-500 italic">
              Última actualización: 29 de Marzo de 2024.
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default PrivacyPage
