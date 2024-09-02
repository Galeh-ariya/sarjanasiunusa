import React, { useEffect, useRef } from 'react';
import Tilt from 'vanilla-tilt';

interface ImageProps {
  src: string;
  alt: string;
  cls: string;
}

const TiltImage: React.FC<ImageProps> = ({ src, alt, cls }) => {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imageRef.current) {
      Tilt.init(imageRef.current, {
        scale: 1.2,
        speed: 300,
        glare: true,
      });
    }
  }, [imageRef]);

  return (
    <img data-tilt data-tilt-scale="1.1" ref={imageRef} src={src} alt={alt} className={cls} />
  );
};

export default TiltImage;