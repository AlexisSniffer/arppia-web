'use client'

import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const TermsPage = () => {
  return (
    <main className="flex flex-col min-h-screen bg-black">
      <Navbar />

      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-invert prose-blue">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-12 tracking-tight">
            Términos y <span className="text-primary">Condiciones</span>
          </h1>

          <div className="space-y-12 text-gray-400 leading-relaxed text-lg">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                1. Aceptación de los Términos
              </h2>
              <p>
                Al acceder y utilizar el sitio web de Arppia, usted acepta estar
                sujeto a estos Términos y Condiciones, a todas las leyes
                aplicables y acepta que es responsable del cumplimiento de
                cualquier ley local aplicable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                2. Uso de Licencia
              </h2>
              <p>
                Se concede permiso para descargar temporalmente una copia de los
                materiales (información o software) en el sitio web de Arppia
                para visualización transitoria personal y no comercial
                solamente. Esta es la concesión de una licencia, no una
                transferencia de título.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                3. Servicios de la Agencia
              </h2>
              <p>
                Arppia ofrece servicios de desarrollo de e-commerce,
                aplicaciones móviles, APIs, IA y automatización. Los términos
                específicos de cada proyecto se detallarán en contratos de
                servicios individuales que prevalecerán sobre estos términos
                generales en caso de conflicto.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                4. Propiedad Intelectual
              </h2>
              <p>
                Todo el contenido, diseños, logotipos y código fuente mostrados
                en este sitio son propiedad exclusiva de Arppia o se utilizan
                bajo licencia. Queda estrictamente prohibida su reproducción
                total o parcial sin consentimiento previo.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                5. Limitación de Responsabilidad
              </h2>
              <p>
                En ningún caso Arppia o sus proveedores serán responsables de
                ningún daño (incluyendo, sin limitación, daños por pérdida de
                datos o beneficios, o debido a la interrupción del negocio) que
                surja del uso o la incapacidad de usar los materiales en el
                sitio web.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                6. Ley Aplicable
              </h2>
              <p>
                Cualquier reclamación relacionada con el sitio web de Arppia se
                regirá por las leyes locales del país de operación, sin tener en
                cuenta sus disposiciones sobre conflictos de leyes.
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

export default TermsPage
