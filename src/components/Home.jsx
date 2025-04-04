import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const HomeContainer = styled.div`
  margin-top: 80px; // Account for fixed navbar
`;

const Hero = styled.section`
  background: var(--background);
  padding: 6rem 0 4rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: var(--gradient-primary);
    opacity: 0.05;
    transform: skewY(-6deg);
    transform-origin: top left;
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: var(--text-secondary);
  margin-bottom: 2.5rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const AccentText = styled.span`
  color: var(--text);
  font-weight: 600;
`;

const CTAText = styled.p`
  font-size: 1.15rem;
  color: var(--text);
  margin-bottom: 1.5rem;
  font-weight: 500;
  opacity: 0.9;
`;

const CTAButton = styled(Link)`
  display: inline-block;
  background: var(--gradient-primary);
  color: var(--text);
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: 500;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  margin-top: 1rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  }
`;

const ServicesSection = styled.section`
  background: var(--background-light);
  padding: 6rem 0;
`;

const ServicesSectionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: var(--text);
  opacity: 0.95;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ServiceCard = styled.div`
  background: var(--background);
  border-radius: 12px;
  padding: 2rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text);
`;

const ServiceDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
`;

const Footer = styled.footer`
  background: var(--background);
  color: var(--text-secondary);
  padding: 3rem 0;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const FooterText = styled.p`
  margin-bottom: 0.5rem;
`;

const EmailLink = styled.a`
  color: var(--text);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    color: var(--accent);
  }
`;

function Home() {
  return (
    <HomeContainer>
      <Helmet>
        <title>First Marketing - Strategic Copywriting & Marketing Services</title>
        <meta name="description" content="We craft strategic messages that speak directly to your ideal customers. From landing pages to email sequences that drive conversions and grow your business." />
        <meta name="keywords" content="copywriting, sales funnels, marketing strategy, conversion optimization" />
        <link rel="canonical" href="https://1st-marketing.com/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "First Marketing - Strategic Copywriting & Marketing Services",
            "description": "We craft strategic messages that speak directly to your ideal customers' deepest desires.",
            "mainEntity": {
              "@type": "Service",
              "name": "Marketing Services",
              "serviceType": "Marketing",
              "provider": {
                "@type": "Organization",
                "name": "First Marketing"
              },
              "offers": [
                {
                  "@type": "Offer",
                  "name": "Copywriting"
                },
                {
                  "@type": "Offer",
                  "name": "Sales Funnels"
                },
                {
                  "@type": "Offer",
                  "name": "Strategy & Optimization"
                }
              ]
            }
          })}
        </script>
      </Helmet>
      <Hero as="section" aria-labelledby="hero-title">
        <HeroContent>
          <Title id="hero-title">Strategize. Personalize. Optimize.</Title>
          <Subtitle>
            We don't just write word's - we craft <AccentText>strategic</AccentText> messages that speak directly to your ideal customers' deepest desires. From magentic landing page copy to email sequences that feel like they're reading your customers' mind.
          </Subtitle>
          <CTAText>
            If this sounds like something you need, All you need to do is...
          </CTAText>
          <CTAButton to="/contact">Schedule Your Free Strategy Call</CTAButton>
        </HeroContent>
      </Hero>

      <ServicesSection as="section" aria-labelledby="services-title">
        <ServicesSectionContent>
          <SectionTitle id="services-title">Our Services</SectionTitle>
          <ServicesGrid>
            <ServiceCard>
              <ServiceTitle>Copywriting</ServiceTitle>
              <ServiceDescription>
                Compelling, conversion-focused copy that speaks to your audience and drives results. From website content to email sequences.
              </ServiceDescription>
            </ServiceCard>
            <ServiceCard>
              <ServiceTitle>Sales Funnels</ServiceTitle>
              <ServiceDescription>
                Custom or Optimized designed sales funnels that guide prospects through their buyer's journey and maximize conversions.
              </ServiceDescription>
            </ServiceCard>
            <ServiceCard>
              <ServiceTitle>Strategy & Optimization</ServiceTitle>
              <ServiceDescription>
                Data-driven insights and continuous optimization to ensure your marketing efforts deliver maximum ROI.
              </ServiceDescription>
            </ServiceCard>
          </ServicesGrid>
        </ServicesSectionContent>
      </ServicesSection>

      <Footer as="footer">
        <FooterContent>
          <FooterText>
            Copyright © {new Date().getFullYear()} First Marketing - All Rights Reserved.
          </FooterText>
          <FooterText>
            Contact us: <EmailLink href="mailto:dawson@1st-marketing.com">dawson@1st-marketing.com</EmailLink>
          </FooterText>
        </FooterContent>
      </Footer>
    </HomeContainer>
  );
}

export default Home; 