import { useEffect, useRef } from 'react';

interface AdSenseAdProps {
  className?: string;
  style?: React.CSSProperties;
  slot?: string;
  format?: 'auto' | 'fluid' | 'rectangle' | 'vertical' | 'horizontal';
}

export function AdSenseAd({ className = '', style = {}, slot = 'YOUR_AD_SLOT_HERE', format = 'auto' }: AdSenseAdProps) {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      // Check if AdSense is loaded
      if (typeof window !== 'undefined' && (window as any).adsbygoogle) {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      }
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, []);

  return (
    <div ref={adRef} className={`adsense-container ${className}`} style={style}>
      {/* 
        IMPORTANT: Replace YOUR_PUBLISHER_ID and YOUR_AD_SLOT_HERE with your actual AdSense credentials
        Get your Publisher ID from: https://www.google.com/adsense/
        Ad slot will be generated when you create an ad unit in AdSense
      */}
      <ins
        className="adsbygoogle"
        style={{ display: 'block', ...style }}
        data-ad-client="ca-pub-YOUR_PUBLISHER_ID"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
