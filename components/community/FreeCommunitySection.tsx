'use client';

import { motion } from 'framer-motion';
import { FaDiscord, FaLinkedin, FaFacebook } from 'react-icons/fa';
import BenefitList from './BenefitList';

interface FreeCommunityProps {
  dict: any;
}

export default function FreeCommunitySection({ dict }: FreeCommunityProps) {
  const communities = [
    {
      name: dict.community.free.discord.title,
      description: dict.community.free.discord.description,
      icon: FaDiscord,
      link: 'https://discord.gg/expandmatrix',
      color: 'from-purple-500 to-indigo-600'
    },
    {
      name: dict.community.free.linkedin.title,
      description: dict.community.free.linkedin.description,
      icon: FaLinkedin,
      link: 'https://linkedin.com/company/expandmatrix',
      color: 'from-blue-500 to-blue-700'
    },
    {
      name: dict.community.free.facebook.title,
      description: dict.community.free.facebook.description,
      icon: FaFacebook,
      link: 'https://facebook.com/expandmatrix',
      color: 'from-blue-600 to-blue-800'
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {dict.community.free.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {dict.community.free.subtitle}
          </p>
        </motion.div>

        {/* Community Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {communities.map((community, index) => (
            <motion.div
              key={community.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <a
                href={community.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${community.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <community.icon className="text-2xl text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {community.name}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {community.description}
                  </p>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-2 gap-12">
          <BenefitList
            title={dict.community.free.benefits.title}
            items={dict.community.free.benefits.items}
            type="benefits"
          />
          <BenefitList
            title={dict.community.free.content.title}
            items={dict.community.free.content.items}
            type="content"
          />
        </div>
      </div>
    </section>
  );
}