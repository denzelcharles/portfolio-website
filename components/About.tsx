'use client'

import { useEffect, useRef, useState } from 'react'

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const [skillsVisible, setSkillsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Trigger skills animation after a short delay
          setTimeout(() => setSkillsVisible(true), 300)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const skills = [
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Python',
    'Tailwind CSS',
    'MongoDB',
    'PostgreSQL',
  ]

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4 text-gray-900 dark:text-white">
            About Me
          </h2>
          <div
            className={`w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8 sm:mb-12 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}
          ></div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6 order-2 md:order-1">
              <p
                className={`text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed transition-all duration-1000 delay-100 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
              >
                I'm a passionate full-stack developer with a love for creating
                elegant solutions to complex problems. With a strong foundation
                in modern web technologies, I bring ideas to life through clean
                code and thoughtful design.
              </p>
              <p
                className={`text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed transition-all duration-1000 delay-200 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
              >
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>
              <div className="pt-2 sm:pt-4">
                <h3
                  className={`text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-gray-900 dark:text-white transition-all duration-1000 delay-300 ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4'
                  }`}
                >
                  Skills & Technologies
                </h3>
                <div ref={skillsRef} className="flex flex-wrap gap-2 sm:gap-3">
                  {skills.map((skill, index) => (
                    <span
                      key={skill}
                      className={`px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 text-purple-800 dark:text-purple-200 rounded-full text-xs sm:text-sm font-medium transition-all duration-500 hover:scale-110 ${
                        skillsVisible
                          ? 'opacity-100 translate-y-0 scale-100'
                          : 'opacity-0 translate-y-4 scale-95'
                      }`}
                      style={{
                        transitionDelay: `${400 + index * 50}ms`,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div
              className={`relative transition-all duration-1000 delay-300 order-1 md:order-2 ${
                isVisible
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-8 scale-95'
              }`}
            >
              <div className="aspect-square rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-400 to-pink-400 p-1 max-w-xs sm:max-w-none mx-auto overflow-hidden">
                <div className="w-full h-full rounded-xl sm:rounded-2xl bg-gray-200 dark:bg-gray-800 relative overflow-hidden">
                  <img
                    src="/images/profile-picture.jpeg"
                    alt="Denzel Charles - Police Officer and Developer"
                    className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
                  />
                </div>
              </div>
              <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-yellow-400 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 w-20 h-20 sm:w-32 sm:h-32 bg-purple-400 rounded-full opacity-20 blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

