import React, { useEffect, useState } from 'react';
import Section from '../components/Section';
import SEO from '../components/SEO';
import seoConfig from '../seo-config';
import { Play, ExternalLink, Loader } from 'lucide-react';

interface Video {
  title: string;
  link: string;
  thumbnail: string;
  pubDate: string;
  guid: string;
}

const YOUTUBE_CHANNEL_ID = "UCqAvUIFQ8abPvkdVqGMRXYQ";
const RSS_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${YOUTUBE_CHANNEL_ID}`;

const Videos: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        // Utilisation de rss2json pour convertir le flux RSS YouTube en JSON utilisable sans Clé API complexe
        const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_URL)}`);
        const data = await response.json();
        
        if (data.items) {
          const formattedVideos = data.items.map((item: any) => {
            // Extraction de l'ID vidéo pour une meilleure miniature
            const videoId = item.guid.split(':')[2];
            return {
              title: item.title,
              link: item.link,
              // Utilisation de la miniature haute qualité standard de YouTube
              thumbnail: `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`, 
              pubDate: item.pubDate,
              guid: videoId
            };
          });
          setVideos(formattedVideos.slice(0, 6)); // Garder les 6 dernières
        }
      } catch (error) {
        console.error("Erreur lors du chargement des vidéos YouTube:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  return (
    <main className="pt-32">
      <SEO {...seoConfig.videos} />
      {/* Simple Header */}
      <div className="container mx-auto px-6 mb-12">
        <h1 className="text-5xl font-display font-bold text-black uppercase mb-4 text-left">
          Vidéos
        </h1>
        <div className="w-20 h-1 bg-brand-red mb-6"></div>
        <p className="text-gray-500 text-lg max-w-2xl text-left">
           Dernières vidéos de notre chaîne YouTube officielle.
        </p>
      </div>

      <Section gray className="pt-10">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Loader className="animate-spin text-brand-red" size={48} />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, idx) => (
                <a 
                  key={idx} 
                  href={video.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="aspect-video bg-black relative group cursor-pointer overflow-hidden shadow-2xl border-b-4 border-brand-red rounded-sm block"
                >
                    <img 
                      src={video.thumbnail} 
                      alt={video.title} 
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-500"
                      onError={(e) => {
                        // Fallback si maxresdefault n'existe pas
                        (e.target as HTMLImageElement).src = `https://i.ytimg.com/vi/${video.guid}/hqdefault.jpg`;
                      }}
                    />
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-brand-red/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                            <Play className="text-white fill-white ml-1" size={28} />
                        </div>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 p-4 w-full bg-gradient-to-t from-black via-black/80 to-transparent">
                        <h3 className="text-white font-display font-bold text-lg uppercase leading-tight line-clamp-2">
                          {video.title}
                        </h3>
                    </div>
                </a>
            ))}
          </div>
        )}

        <div className="mt-16 text-center">
          <a 
            href="https://www.youtube.com/channel/UCqAvUIFQ8abPvkdVqGMRXYQ?app=desktop" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-black text-black px-8 py-3 font-bold uppercase tracking-widest text-sm hover:bg-black hover:text-white transition-colors rounded-sm"
          >
            Voir toute la chaîne <ExternalLink size={16} />
          </a>
        </div>
      </Section>
    </main>
  );
};

export default Videos;