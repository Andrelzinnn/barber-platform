import type React from "react";
import { useEffect, useState } from "react";

// Simulando os componentes do shadcn/ui com tipagem
interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className = "" }: CardProps) => (
  <div className={`bg-white rounded-lg border shadow-sm ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children, className = "" }: CardProps) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className}`}>{children}</div>
);

const CardTitle = ({ children, className = "" }: CardProps) => (
  <h3
    className={`text-2xl font-semibold leading-none tracking-tight ${className}`}
  >
    {children}
  </h3>
);

const CardContent = ({ children, className = "" }: CardProps) => (
  <div className={`p-6 pt-0 ${className}`}>{children}</div>
);

interface CardConfirmedProps {
  message: string;
  onClose?: () => void;
}

export function CardConfirmed({ message, onClose }: CardConfirmedProps) {
  const [showCard, setShowCard] = useState(false);
  const [showIcon, setShowIcon] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Sequência de animações
    const timer1 = setTimeout(() => setShowCard(true), 100);
    const timer2 = setTimeout(() => setShowIcon(true), 400);
    const timer3 = setTimeout(() => setShowText(true), 800);
    const timer4 = setTimeout(() => setShowContent(true), 1200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  // Estilos inline para as animações
  const cardStyle: React.CSSProperties = {
    opacity: showCard ? 1 : 0,
    transform: showCard ? "translateY(0)" : "translateY(30px)",
    transition: "all 0.6s ease-out",
  };

  const iconContainerStyle: React.CSSProperties = {
    transform: showIcon ? "scale(1)" : "scale(0)",
    transition: "transform 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  };

  const pulseRingStyle: React.CSSProperties = {
    animation: showIcon ? "pulse 2s infinite" : "none",
  };

  const textStyle: React.CSSProperties = {
    opacity: showText ? 1 : 0,
    transform: showText ? "translateY(0)" : "translateY(20px)",
    transition: "all 0.6s ease-out",
  };

  const contentStyle: React.CSSProperties = {
    opacity: showContent ? 1 : 0,
    transform: showContent ? "translateY(0)" : "translateY(20px)",
    transition: "all 0.6s ease-out",
  };

  return (
    <>
      {/* CSS Global para animações */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes pulse {
            0%, 100% {
              transform: scale(1);
              opacity: 0.3;
            }
            50% {
              transform: scale(1.1);
              opacity: 0.1;
            }
          }

          @keyframes drawCheck {
            from {
              stroke-dashoffset: 60;
            }
            to {
              stroke-dashoffset: 0;
            }
          }

          .checkmark-animate {
            stroke-dasharray: 60;
            stroke-dashoffset: 60;
            animation: drawCheck 0.8s ease-in-out 0.3s forwards;
          }
        `,
        }}
      />

      <div className="fixed w-full h-full inset-0 bg-black/50 flex justify-center items-center z-[9999] overflow-hidden">
        <Card
          className="w-[90%] max-w-md mx-4 flex justify-center items-center flex-col"
          style={cardStyle}
        >
          <CardHeader className="text-center px-4 sm:px-6">
            {/* Ícone de sucesso animado */}
            <div className="relative mx-auto mb-4 sm:mb-6">
              {/* Anel pulsante */}
              <div
                className="absolute inset-0 w-20 h-20 sm:w-24 sm:h-24 bg-green-500/20 rounded-full"
                style={pulseRingStyle}
              ></div>

              {/* Círculo principal */}
              <div
                className="relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg"
                style={iconContainerStyle}
              >
                <svg
                  className="w-8 h-8 sm:w-10 sm:h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    className={showIcon ? "checkmark-animate" : ""}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>

            <CardTitle
              className="text-gray-800 text-lg sm:text-2xl"
              style={textStyle}
            >
              {message}
            </CardTitle>
          </CardHeader>

          <CardContent className="text-center w-full px-4">
            <div style={contentStyle}>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
                Seu pedido foi processado com sucesso!
              </p>

              <button
                className="w-full bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 text-sm sm:text-base touch-manipulation"
                onClick={onClose}
              >
                Continuar
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
