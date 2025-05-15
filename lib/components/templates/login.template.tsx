import React from "react"

type LoginTemplate = {
  children: React.ReactNode
  bgImage?: string
}

export const LoginTemplate: React.FC<LoginTemplate> = ({ children, bgImage }) => {
  return (
    <main className="flex flex-col h-screen w-screen items-center justify-center p-2 bg-background-primary text-foreground-primary relative">
      {
        bgImage && (
          <img
            src={bgImage}
            alt="Background"
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          />
        )
      }
      <div className="z-10 bg-background-primary/80 rounded-2xl p-4 backdrop-blur-xl">
        {children}
      </div>
    </main>
  )
}