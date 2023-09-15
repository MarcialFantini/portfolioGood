import React, { useEffect, useRef, useState } from "react";
import style from "./style.module.css";

function Card(app: {
  appTitle: string;
  appName: string;
  appDescription: string;
  index: boolean;
  src: string;
}) {
  // Crear una referencia al elemento que deseamos observar
  const cardRef = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(false);
  const [end, setEnd] = useState(false);

  useEffect(() => {
    // Función para manejar las entradas de la intersección
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // El elemento es visible en la ventana
          console.log(`El elemento ${app.appName} es visible.`);
          setIsVisible(true);

          setTimeout(() => setEnd(true), 1000);
        }
      });
    };

    // Crear una instancia del Observador de Intersección
    const observer = new IntersectionObserver(handleIntersection, {
      root: null, // Usar el viewport como el elemento root
      rootMargin: "-10px", // No aplicar margen
      threshold: 1, // 50% del elemento debe ser visible para considerarse "intersectado"
    });

    // Si la referencia al elemento existe, comienza a observarlo
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    // Limpieza cuando el componente se desmonta
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [app.appName]); // Asegúrate de que el observador se actualice cuando el nombre de la aplicación cambie

  return (
    <div
      className={
        style.containerCard + " " + (isVisible && end ? style.overFlowNot : "")
      }
    >
      {!app.index ? (
        <div className={style.textContainer}>
          <h2 ref={cardRef}>{app.appTitle}</h2>
          <p>{app.appDescription}</p>
        </div>
      ) : (
        ""
      )}
      <picture className={style.picture + " " + (isVisible ? style.show : "")}>
        <img className={style.img} src={app.src} alt="" />
      </picture>
      {app.index ? (
        <div
          className={style.textContainer + " " + (isVisible ? style.show : "")}
        >
          <h2 ref={cardRef}>{app.appTitle}</h2>
          <p>{app.appDescription}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Card;
