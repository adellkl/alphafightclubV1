import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  canonicalUrl?: string;
  jsonLd?: object | object[];
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  ogImage = '/images/og-default.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  canonicalUrl,
  jsonLd
}) => {
  useEffect(() => {
    // Update title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (property: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${property}"]`);

      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, property);
        document.head.appendChild(element);
      }

      element.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    if (keywords) {
      updateMetaTag('keywords', keywords);
    }

    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:site_name', 'Alpha Fight Club', true);
    updateMetaTag('og:locale', 'fr_FR', true);

    // Twitter Card tags
    updateMetaTag('twitter:card', twitterCard);
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);

    // Canonical URL
    if (canonicalUrl) {
      let linkElement = document.querySelector('link[rel="canonical"]');
      if (!linkElement) {
        linkElement = document.createElement('link');
        linkElement.setAttribute('rel', 'canonical');
        document.head.appendChild(linkElement);
      }
      linkElement.setAttribute('href', canonicalUrl);
      
      // Alternate URL (.net) - Ajouter seulement si c'est un .com
      if (canonicalUrl.includes('.com')) {
        const alternateUrl = canonicalUrl.replace('.com', '.net');
        let alternateElement = document.querySelector('link[rel="alternate"][hreflang="x-alternate"]');
        if (!alternateElement) {
          alternateElement = document.createElement('link');
          alternateElement.setAttribute('rel', 'alternate');
          alternateElement.setAttribute('hreflang', 'x-alternate');
          document.head.appendChild(alternateElement);
        }
        alternateElement.setAttribute('href', alternateUrl);
      }
    }

    // JSON-LD structured data
    // Remove existing SEO schemas
    document.querySelectorAll('script[type="application/ld+json"][id^="seo-schema"]').forEach(el => el.remove());

    if (jsonLd) {
      const schemas = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      schemas.forEach((schema, index) => {
        const scriptElement = document.createElement('script');
        scriptElement.setAttribute('type', 'application/ld+json');
        scriptElement.setAttribute('id', `seo-schema-${index}`);
        scriptElement.textContent = JSON.stringify(schema);
        document.head.appendChild(scriptElement);
      });
    }
  }, [title, description, keywords, ogImage, ogType, twitterCard, canonicalUrl, jsonLd]);

  return null;
};

export default SEO;
