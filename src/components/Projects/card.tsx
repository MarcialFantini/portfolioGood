import React, { useEffect, useRef, useState } from "react";
import style from "./style.module.css";

function Card(app: {
  appTitle: string;
  appName: string;
  appDescription: string;
  index: boolean;
}) {
  // Crear una referencia al elemento que deseamos observar
  const cardRef = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Función para manejar las entradas de la intersección
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // El elemento es visible en la ventana
          console.log(`El elemento ${app.appName} es visible.`);
          setIsVisible(true);
          // Aquí puedes realizar la lógica que desees cuando el elemento es visible
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
    <div className={style.containerCard}>
      {!app.index ? (
        <div className={style.textContainer}>
          <h2 ref={cardRef}>{app.appTitle}</h2>
          <p>{app.appDescription}</p>
        </div>
      ) : (
        ""
      )}
      <picture className={style.picture + " " + (isVisible ? style.show : "")}>
        <h2 className={style.titleImage}>{app.appName}</h2>
        <img className={style.img} src="" alt="" />
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
