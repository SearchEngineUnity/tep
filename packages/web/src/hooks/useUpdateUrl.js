/* eslint-disable import/prefer-default-export */
import { useEffect, useRef } from 'react';

export function useUpdateUrl() {
  const observer = useRef();

  useEffect(() => {
    const { pathname } = window.location;

    const handleObserver = (entries) => {
      entries.forEach((entry) => {
        if (entry?.isIntersecting) {
          window.history.replaceState(
            null,
            null,
            `${entry.target.id ? `#${entry.target.id}` : pathname}`,
          );
        }
      });
    };

    observer.current = new IntersectionObserver(handleObserver, {
      rootMargin: '-10% 0% -80% 0px',
    });

    const elements = document.querySelectorAll(
      'section[id], h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]',
    );
    elements.forEach((elem) => observer.current.observe(elem));

    return () => observer.current?.disconnect();
  }, []);
}
