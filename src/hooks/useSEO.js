import { useEffect } from 'react';

const useSEO = (title, description, keywords) => {
    useEffect(() => {
        document.title = title ? `${title} | Parekh Linen` : 'Parekh Linen - Premium Bedsheets & Fabrics';
        
        // Update or create meta description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.name = 'description';
            document.head.appendChild(metaDescription);
        }
        metaDescription.content = description || 'Parekh Linen - Leading manufacturers and suppliers of premium bedsheets and fabrics in Kolkata, West Bengal.';
        
        // Update or create meta keywords
        let metaKeywords = document.querySelector('meta[name="keywords"]');
        if (!metaKeywords) {
            metaKeywords = document.createElement('meta');
            metaKeywords.name = 'keywords';
            document.head.appendChild(metaKeywords);
        }
        metaKeywords.content = keywords || 'bedsheets, fabrics, linen, Kolkata, manufacturer, supplier';
        
        // Update or create Open Graph tags
        let ogTitle = document.querySelector('meta[property="og:title"]');
        if (!ogTitle) {
            ogTitle = document.createElement('meta');
            ogTitle.setAttribute('property', 'og:title');
            document.head.appendChild(ogTitle);
        }
        ogTitle.content = title ? `${title} | Parekh Linen` : 'Parekh Linen - Premium Bedsheets & Fabrics';
        
        let ogDescription = document.querySelector('meta[property="og:description"]');
        if (!ogDescription) {
            ogDescription = document.createElement('meta');
            ogDescription.setAttribute('property', 'og:description');
            document.head.appendChild(ogDescription);
        }
        ogDescription.content = description || 'Parekh Linen - Leading manufacturers and suppliers of premium bedsheets and fabrics in Kolkata, West Bengal.';
        
    }, [title, description, keywords]);
};

export default useSEO;
