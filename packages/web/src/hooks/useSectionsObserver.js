/* eslint-disable import/prefer-default-export */

import { useEffect, useState, useRef } from 'react';

export function useSectionsObserver() {
  const observer = useRef();
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const handleObserver = (entries) => {
      entries.forEach((entry) => {
        if (entry?.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    observer.current = new IntersectionObserver(handleObserver, {
      threshold: 0.25,
    });

    const elements = document.querySelectorAll('section');
    elements.forEach((elem) => observer.current.observe(elem));

    return () => observer.current?.disconnect();
  }, []);

  return { activeId };
}
