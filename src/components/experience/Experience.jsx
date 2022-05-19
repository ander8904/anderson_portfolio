import React from 'react'
import './experience.css'
import image from '../../assets/coding.svg'
export const Experience = () => {
  return (
    <div>

      <figure class="bg-slate-100  justify-center text-center dark:bg-slate-800">
        <img class="w-96 max-h-96 mx-auto hover:blur-sm" src={image} alt="" />
        <div class="pt-6 space-y-4">
          <blockquote>
            <p class="text-lg ">
              “Estudiante actual de la carrera de Tecnologías de información del Colegio Universitario de Cartago. Soy una persona responsable, honesta y capaz de integrarme en un equipo y poder relacionarme de una manera positiva y tratar de conllevar siempre un ambiente sano y respetuoso, tratando de aprender con humildad de los demás. Abierto a conocer y aprender nuevas herramientas que me permitan crecer como programador, tratando de adquirir experiencia en diversos campos de la Tecnología de información.
-Lenguajes de programación: Competente en: C#, Java, C++, SQL. También habilidades básicas con: Python, Flutter, ORM(Entity Framework), JavaScript.
-Habilidades de software de la industria:  Rest API, Git(Básico),Office(Básico).”
            </p>
          </blockquote>
          <figcaption>
            <div>
              Anderson Camacho Brenes
            </div>
          
          </figcaption>
        </div>
      </figure>
    </div>
  )
}
