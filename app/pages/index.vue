<script setup>
import caseStudies from '../data/case_studies.json'
import clients from '../data/clients.json'
import faq from '../data/faq.json'
import services from '../data/services.json'
import home from '../data/home.json'
import pricing from '../data/pricing.json'
import global_settings from '../data/global_settings.json'
import newsletter from '../data/newsletter.json'
import testimonials from '../data/testimonials.json'
</script>

<template>

  <HeroSection
    :content="home.hero_content"
    :settings="global_settings"
    :title="home.hero_title"
  />

  <ServicesCarousel
    :services="services"
    :title="home.services_title"
  />

  <ClientsSection
    :clients="clients"
    :title="home.clients_title"
  />

  <QuoteSection
    :cite="home.quote_cite"
    :content="home.quote_content"
    :image="home.quote_image"
    :role="home.quote_role"
  />

  <CaseStudiesSection
    :caseStudies="caseStudies"
    :title="home.case_studies_title"
  />

  <TestimonialsSection
    :testimonials="testimonials"
    :title="home.testimonials_title"
    />

  <PricingSection
    :pricing="pricing"
    :title="home.pricing_title"
    />

  <FaqSection
    :faq="faq"
    :title="home.faq_title"
  />

  <NewsletterSection :newsletter="newsletter" />

</template>

