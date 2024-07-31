import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksBlocks extends Schema.Component {
  collectionName: 'components_blocks_blocks';
  info: {
    displayName: 'blocks';
  };
  attributes: {
    image: Attribute.Media;
    description: Attribute.Text;
  };
}

export interface DataAddressDetails extends Schema.Component {
  collectionName: 'components_data_address_details';
  info: {
    displayName: 'address details';
    description: '';
  };
  attributes: {
    address: Attribute.Text;
    cta_text: Attribute.String;
    address_map_link: Attribute.String & Attribute.DefaultTo<'#'>;
    address_tab_name: Attribute.Enumeration<
      ['Global Presence', 'Corporate Headquarters']
    >;
    section_image: Attribute.Media;
  };
}

export interface DataAllPostsSection extends Schema.Component {
  collectionName: 'components_data_all_posts_sections';
  info: {
    displayName: 'all_posts_section';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface DataBottomSection extends Schema.Component {
  collectionName: 'components_data_bottom_sections';
  info: {
    displayName: 'bottom_section';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    section_image: Attribute.Media;
    text_block: Attribute.Text;
  };
}

export interface DataBusinessLinks extends Schema.Component {
  collectionName: 'components_data_business_links';
  info: {
    displayName: 'business_links';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
  };
}

export interface DataBusinessesSection extends Schema.Component {
  collectionName: 'components_data_businesses_sections';
  info: {
    displayName: 'businesses_section';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface DataCareerOpportunities extends Schema.Component {
  collectionName: 'components_data_career_opportunities';
  info: {
    displayName: 'career_opportunities';
  };
  attributes: {
    title: Attribute.String;
    section_image: Attribute.Media;
    content: Attribute.Text;
  };
}

export interface DataContactForm extends Schema.Component {
  collectionName: 'components_data_contact_forms';
  info: {
    displayName: 'contact_form';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    section_image: Attribute.Media;
    cta_text: Attribute.String;
    purpose_of_contact: Attribute.Text;
  };
}

export interface DataContactUsSection extends Schema.Component {
  collectionName: 'components_data_contact_us_sections';
  info: {
    displayName: 'contact_us_section';
  };
  attributes: {
    title: Attribute.String;
    section_image: Attribute.Media;
    cta_text: Attribute.String;
  };
}

export interface DataEnergyBlocks extends Schema.Component {
  collectionName: 'components_data_energy_blocks';
  info: {
    displayName: 'energy_blocks';
  };
  attributes: {
    name: Attribute.String;
  };
}

export interface DataEnergyTransitionSection extends Schema.Component {
  collectionName: 'components_data_energy_transition_sections';
  info: {
    displayName: 'energy_transition_section';
    description: '';
  };
  attributes: {
    title: Attribute.Text;
    energy_blocks: Attribute.Component<'data.energy-blocks', true>;
  };
}

export interface DataEnquiryChannels extends Schema.Component {
  collectionName: 'components_data_enquiry_channels';
  info: {
    displayName: 'enquiry_channels';
    description: '';
  };
  attributes: {
    phone: Attribute.String;
    email_address: Attribute.Email;
    title: Attribute.String;
  };
}

export interface DataGuidingPrinciplesSection extends Schema.Component {
  collectionName: 'components_data_guiding_principles_sections';
  info: {
    displayName: 'guiding_principles_section';
  };
  attributes: {
    title: Attribute.String;
    block_1: Attribute.Text;
    block_2: Attribute.Text;
    cta_text: Attribute.String;
  };
}

export interface DataHomeBlogSection extends Schema.Component {
  collectionName: 'components_data_home_blog_sections';
  info: {
    displayName: 'home_blog_section';
  };
  attributes: {
    title: Attribute.String;
    cta_text: Attribute.String;
  };
}

export interface DataInvestmentBlocks extends Schema.Component {
  collectionName: 'components_data_investment_blocks';
  info: {
    displayName: 'investment_blocks';
  };
  attributes: {
    title: Attribute.String;
    section_image: Attribute.Media;
  };
}

export interface DataInvestmentOpportunities extends Schema.Component {
  collectionName: 'components_data_investment_opportunities';
  info: {
    displayName: 'investment_opportunities';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.Text;
    section_image: Attribute.Media;
  };
}

export interface DataLeaders extends Schema.Component {
  collectionName: 'components_data_leaders';
  info: {
    displayName: 'leaders';
    description: '';
  };
  attributes: {};
}

export interface DataLeadershipSection extends Schema.Component {
  collectionName: 'components_data_leadership_sections';
  info: {
    displayName: 'leadership_section';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    tagline: Attribute.Text;
  };
}

export interface DataLeaderships extends Schema.Component {
  collectionName: 'components_data_leaderships';
  info: {
    displayName: 'leaderships';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    position: Attribute.String;
    member_image: Attribute.Media;
    team_category: Attribute.Relation<
      'data.leaderships',
      'oneToOne',
      'api::team-category.team-category'
    >;
    linkedIn_link: Attribute.String & Attribute.DefaultTo<'#'>;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
  };
}

export interface DataMandateInner extends Schema.Component {
  collectionName: 'components_data_mandate_inners';
  info: {
    displayName: 'Mandate Inner';
    description: '';
  };
  attributes: {
    tagline: Attribute.String;
    bold_text: Attribute.String;
    description: Attribute.Text;
    section_image: Attribute.Media;
  };
}

export interface DataMandateSection extends Schema.Component {
  collectionName: 'components_data_mandate_sections';
  info: {
    displayName: 'Mandate Section';
    description: '';
  };
  attributes: {
    heading: Attribute.Text;
  };
}

export interface DataMiddleSection extends Schema.Component {
  collectionName: 'components_data_middle_sections';
  info: {
    displayName: 'middle_section';
    description: '';
  };
  attributes: {
    section_image_1: Attribute.Media;
    text_block_1: Attribute.Text;
    text_block_2: Attribute.Text;
    section_image_2: Attribute.Media;
    text_block_1_title: Attribute.String;
  };
}

export interface DataStrategySection extends Schema.Component {
  collectionName: 'components_data_strategy_sections';
  info: {
    displayName: 'strategy_section';
  };
  attributes: {
    title: Attribute.String;
    inner_title: Attribute.String;
    inner_block_1_text: Attribute.Text;
    inner_block_2_text: Attribute.Text;
  };
}

export interface DataSustainabilityImageFlexSection extends Schema.Component {
  collectionName: 'components_data_sustainability_image_flex_sections';
  info: {
    displayName: 'Sustainability Image Flex Section';
  };
  attributes: {
    content: Attribute.Text;
    section_image: Attribute.Media;
  };
}

export interface DataSustainabilityLeaderSection extends Schema.Component {
  collectionName: 'components_data_sustainability_leader_sections';
  info: {
    displayName: 'sustainability_leader_section';
    description: '';
  };
  attributes: {
    title: Attribute.Text;
    section_image: Attribute.Media;
    content: Attribute.Text;
  };
}

export interface DataTopSection extends Schema.Component {
  collectionName: 'components_data_top_sections';
  info: {
    displayName: 'top_section';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface DataValueBlocks extends Schema.Component {
  collectionName: 'components_data_value_blocks';
  info: {
    displayName: 'value_blocks';
    description: '';
  };
  attributes: {
    content: Attribute.Text;
  };
}

export interface DataValuesSection extends Schema.Component {
  collectionName: 'components_data_values_sections';
  info: {
    displayName: 'values_section';
  };
  attributes: {
    title: Attribute.String;
    section_image: Attribute.Media;
    block_item: Attribute.Component<'data.value-blocks', true>;
  };
}

export interface DataWhatWeDoSection extends Schema.Component {
  collectionName: 'components_data_what_we_do_sections';
  info: {
    displayName: 'what_we_do_section';
  };
  attributes: {
    top_section: Attribute.Component<'data.top-section'>;
    middle_section: Attribute.Component<'data.middle-section'>;
    bottom_section: Attribute.Component<'data.bottom-section'>;
  };
}

export interface DisclosuresDisclosuresSection extends Schema.Component {
  collectionName: 'components_disclosures_disclosures_sections';
  info: {
    displayName: 'disclosures_section';
    description: '';
  };
  attributes: {
    content: Attribute.RichText;
    image: Attribute.Media;
    description: Attribute.Text;
  };
}

export interface DiversityBlocksBlocks extends Schema.Component {
  collectionName: 'components_diversity_blocks_blocks';
  info: {
    displayName: 'blocks';
  };
  attributes: {
    section_image: Attribute.Media;
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface DiversityDiversity extends Schema.Component {
  collectionName: 'components_diversity_diversities';
  info: {
    displayName: 'diversity';
  };
  attributes: {
    blocks: Attribute.Component<'diversity-blocks.blocks', true>;
    heading: Attribute.String;
  };
}

export interface EthicsContactTransparencyAndEthics extends Schema.Component {
  collectionName: 'components_ethics_contact_transparency_and_ethics';
  info: {
    displayName: 'Contact transparency and Ethics';
  };
  attributes: {
    content: Attribute.RichText;
    image: Attribute.Media;
    cta_link: Attribute.String;
    cta_text: Attribute.String;
    description: Attribute.String;
  };
}

export interface GasActivities extends Schema.Component {
  collectionName: 'components_gas_activities';
  info: {
    displayName: 'activities';
  };
  attributes: {
    item: Attribute.String;
  };
}

export interface GasAddresses extends Schema.Component {
  collectionName: 'components_gas_addresses';
  info: {
    displayName: 'addresses';
    description: '';
  };
  attributes: {
    address: Attribute.String;
    cta_text: Attribute.String;
    map_link: Attribute.String;
    title: Attribute.String;
  };
}

export interface GasContact extends Schema.Component {
  collectionName: 'components_gas_contacts';
  info: {
    displayName: 'contact';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    email: Attribute.Email;
    phone_number: Attribute.String;
    addresses: Attribute.Component<'gas.addresses', true>;
    address_title: Attribute.String;
  };
}

export interface GasCsrActivites extends Schema.Component {
  collectionName: 'components_gas_csr_activites';
  info: {
    displayName: 'csr_activites';
    description: '';
  };
  attributes: {
    cta_link: Attribute.String;
    cta_text: Attribute.String;
    content: Attribute.RichText;
  };
}

export interface GasCsr extends Schema.Component {
  collectionName: 'components_gas_csrs';
  info: {
    displayName: 'csr';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    section_image: Attribute.Media;
    cta_link: Attribute.String;
    cta_text: Attribute.String;
    description: Attribute.Text;
    content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
  };
}

export interface GasIntroduction extends Schema.Component {
  collectionName: 'components_gas_introductions';
  info: {
    displayName: 'introduction';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
  };
}

export interface GasManagementTeam extends Schema.Component {
  collectionName: 'components_gas_management_teams';
  info: {
    displayName: 'management_team';
  };
  attributes: {
    team_image: Attribute.Media;
    full_name: Attribute.String;
    position: Attribute.String;
    linkedin_link: Attribute.String;
  };
}

export interface GasSections extends Schema.Component {
  collectionName: 'components_gas_sections';
  info: {
    displayName: 'sections';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
  };
}

export interface GasStrategic extends Schema.Component {
  collectionName: 'components_gas_strategics';
  info: {
    displayName: 'strategic';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    sub_title: Attribute.Text;
    cta_link: Attribute.String;
    cta_text: Attribute.String;
    content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
  };
}

export interface GlobalChoiceGlobalChoice extends Schema.Component {
  collectionName: 'components_global_choice_global_choices';
  info: {
    displayName: 'global_choice';
  };
  attributes: {
    section_image: Attribute.Media;
    title: Attribute.Text;
    sub_title: Attribute.Text;
    description: Attribute.Text;
  };
}

export interface GrowthGrowth extends Schema.Component {
  collectionName: 'components_growth_growths';
  info: {
    displayName: 'growth';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    icons: Attribute.Component<'growth.icons', true>;
  };
}

export interface GrowthIcons extends Schema.Component {
  collectionName: 'components_growth_icons';
  info: {
    displayName: 'icons';
  };
  attributes: {
    content: Attribute.Text;
    icon: Attribute.Media;
  };
}

export interface HeroAboutHero extends Schema.Component {
  collectionName: 'components_hero_about_heroes';
  info: {
    displayName: 'about_hero';
  };
  attributes: {
    hero_image: Attribute.Media;
    title: Attribute.String;
  };
}

export interface HeroHeroInsights extends Schema.Component {
  collectionName: 'components_hero_hero_insights';
  info: {
    displayName: 'hero_insights';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    hero_image: Attribute.Media;
  };
}

export interface HeroHero extends Schema.Component {
  collectionName: 'components_hero_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    heading: Attribute.String;
    sub_heading: Attribute.Text;
    featured_image: Attribute.Media;
  };
}

export interface HeroHomeHeroSlider extends Schema.Component {
  collectionName: 'components_hero_home_hero_sliders';
  info: {
    displayName: 'home hero slider';
    description: '';
  };
  attributes: {
    hero_image: Attribute.Media;
    hero_title: Attribute.Text;
    hero_content: Attribute.Text;
  };
}

export interface HeroInvHero extends Schema.Component {
  collectionName: 'components_hero_inv_heroes';
  info: {
    displayName: 'inv_hero';
  };
  attributes: {};
}

export interface HeroInvestorOpportunities extends Schema.Component {
  collectionName: 'components_hero_investor_opportunities_s';
  info: {
    displayName: 'investor opportunities ';
  };
  attributes: {
    title: Attribute.String;
    section_image: Attribute.Media;
    cta_text: Attribute.String;
  };
}

export interface HeroWhyNnpcBlocks extends Schema.Component {
  collectionName: 'components_hero_why_nnpc_blocks';
  info: {
    displayName: 'why nnpc blocks';
  };
  attributes: {
    title: Attribute.String;
    block_1_title: Attribute.String;
    block_1_description: Attribute.String;
    block_2_title: Attribute.String;
    block_2_description: Attribute.String;
  };
}

export interface HeroWhyNnpc extends Schema.Component {
  collectionName: 'components_hero_why_nnpcs';
  info: {
    displayName: 'Why NNPC';
    description: '';
  };
  attributes: {
    heading: Attribute.Text;
    title: Attribute.String;
    block_1_title: Attribute.String;
    block_1_description: Attribute.String;
    block_2_title: Attribute.String;
    block_2_description: Attribute.String;
  };
}

export interface ImagesPopupImages extends Schema.Component {
  collectionName: 'components_images_popup_images';
  info: {
    displayName: 'images';
  };
  attributes: {
    image: Attribute.Media;
    description: Attribute.String;
  };
}

export interface LastSectionLastSection extends Schema.Component {
  collectionName: 'components_last_section_last_sections';
  info: {
    displayName: 'last_section';
  };
  attributes: {
    description_one: Attribute.Text;
    description_two: Attribute.Text;
    cta_link: Attribute.String;
    cta_text: Attribute.String;
  };
}

export interface OtherItemsItems extends Schema.Component {
  collectionName: 'components_other_items_items';
  info: {
    displayName: 'items';
    icon: 'adjust';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    cta_text: Attribute.String;
    cta_link: Attribute.Text;
  };
}

export interface OtherSectionsSection extends Schema.Component {
  collectionName: 'components_other_sections_sections';
  info: {
    displayName: 'section';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.RichText;
  };
}

export interface OtherFaqsSection extends Schema.Component {
  collectionName: 'components_other_faqs_sections';
  info: {
    displayName: 'faqs_section';
  };
  attributes: {
    title: Attribute.String;
    faqs: Attribute.Component<'other.faqs', true>;
  };
}

export interface OtherFaqs extends Schema.Component {
  collectionName: 'components_other_faqs';
  info: {
    displayName: 'faqs';
  };
  attributes: {
    question: Attribute.String;
    answer: Attribute.Text;
  };
}

export interface OtherImageBlocksSection extends Schema.Component {
  collectionName: 'components_other_image_blocks_sections';
  info: {
    displayName: 'image_blocks_section';
  };
  attributes: {
    blocks: Attribute.Component<'blocks.blocks', true>;
    title: Attribute.String;
  };
}

export interface OtherLastSection extends Schema.Component {
  collectionName: 'components_other_last_sections';
  info: {
    displayName: 'last_section';
  };
  attributes: {
    title: Attribute.String;
    content_1: Attribute.Text;
    content_2: Attribute.Text;
    cta_text: Attribute.String;
    cta_link: Attribute.String;
  };
}

export interface OtherReport extends Schema.Component {
  collectionName: 'components_other_reports';
  info: {
    displayName: 'report';
  };
  attributes: {
    title: Attribute.String;
    reports: Attribute.Component<'reports.reports', true>;
  };
}

export interface OtherSectionAlt extends Schema.Component {
  collectionName: 'components_other_section_alts';
  info: {
    displayName: 'section_alt';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
    content: Attribute.RichText;
  };
}

export interface OtherSection extends Schema.Component {
  collectionName: 'components_other_sections';
  info: {
    displayName: 'section';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media;
    description: Attribute.Text;
  };
}

export interface PopupCsrPopup extends Schema.Component {
  collectionName: 'components_popup_csr_popups';
  info: {
    displayName: 'csr_popup';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    images: Attribute.Component<'images-popup.images', true>;
    main_image: Attribute.Media;
  };
}

export interface ReportsReports extends Schema.Component {
  collectionName: 'components_reports_reports';
  info: {
    displayName: 'reports';
  };
  attributes: {
    year: Attribute.Integer;
    cta_text: Attribute.String;
    file: Attribute.Media;
  };
}

export interface SectionTwoSectionTwo extends Schema.Component {
  collectionName: 'components_section_two_section_twos';
  info: {
    displayName: 'section_two';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
    content: Attribute.RichText;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media & Attribute.Required;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

export interface TermPagesContent extends Schema.Component {
  collectionName: 'components_term_pages_contents';
  info: {
    displayName: 'content';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
  };
}

export interface WorkTypesWorkTypes extends Schema.Component {
  collectionName: 'components_work_types_work_types';
  info: {
    displayName: 'work_types';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    cta_text: Attribute.String;
    cta_link: Attribute.String;
    content: Attribute.RichText;
  };
}

export interface WorkWorkWithNnpc extends Schema.Component {
  collectionName: 'components_work_work_with_nnpcs';
  info: {
    displayName: 'work_with_nnpc';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    work_types: Attribute.Component<'work-types.work-types', true>;
    description: Attribute.RichText;
  };
}

export interface YearYearsOfExperience extends Schema.Component {
  collectionName: 'components_year_years_of_experiences';
  info: {
    displayName: 'years_of_experience';
    description: '';
  };
  attributes: {
    top_title: Attribute.String;
    years_of_experience: Attribute.String;
    bottom_title: Attribute.String;
    description: Attribute.Text;
    section_image: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.blocks': BlocksBlocks;
      'data.address-details': DataAddressDetails;
      'data.all-posts-section': DataAllPostsSection;
      'data.bottom-section': DataBottomSection;
      'data.business-links': DataBusinessLinks;
      'data.businesses-section': DataBusinessesSection;
      'data.career-opportunities': DataCareerOpportunities;
      'data.contact-form': DataContactForm;
      'data.contact-us-section': DataContactUsSection;
      'data.energy-blocks': DataEnergyBlocks;
      'data.energy-transition-section': DataEnergyTransitionSection;
      'data.enquiry-channels': DataEnquiryChannels;
      'data.guiding-principles-section': DataGuidingPrinciplesSection;
      'data.home-blog-section': DataHomeBlogSection;
      'data.investment-blocks': DataInvestmentBlocks;
      'data.investment-opportunities': DataInvestmentOpportunities;
      'data.leaders': DataLeaders;
      'data.leadership-section': DataLeadershipSection;
      'data.leaderships': DataLeaderships;
      'data.mandate-inner': DataMandateInner;
      'data.mandate-section': DataMandateSection;
      'data.middle-section': DataMiddleSection;
      'data.strategy-section': DataStrategySection;
      'data.sustainability-image-flex-section': DataSustainabilityImageFlexSection;
      'data.sustainability-leader-section': DataSustainabilityLeaderSection;
      'data.top-section': DataTopSection;
      'data.value-blocks': DataValueBlocks;
      'data.values-section': DataValuesSection;
      'data.what-we-do-section': DataWhatWeDoSection;
      'disclosures.disclosures-section': DisclosuresDisclosuresSection;
      'diversity-blocks.blocks': DiversityBlocksBlocks;
      'diversity.diversity': DiversityDiversity;
      'ethics.contact-transparency-and-ethics': EthicsContactTransparencyAndEthics;
      'gas.activities': GasActivities;
      'gas.addresses': GasAddresses;
      'gas.contact': GasContact;
      'gas.csr-activites': GasCsrActivites;
      'gas.csr': GasCsr;
      'gas.introduction': GasIntroduction;
      'gas.management-team': GasManagementTeam;
      'gas.sections': GasSections;
      'gas.strategic': GasStrategic;
      'global-choice.global-choice': GlobalChoiceGlobalChoice;
      'growth.growth': GrowthGrowth;
      'growth.icons': GrowthIcons;
      'hero.about-hero': HeroAboutHero;
      'hero.hero-insights': HeroHeroInsights;
      'hero.hero': HeroHero;
      'hero.home-hero-slider': HeroHomeHeroSlider;
      'hero.inv-hero': HeroInvHero;
      'hero.investor-opportunities': HeroInvestorOpportunities;
      'hero.why-nnpc-blocks': HeroWhyNnpcBlocks;
      'hero.why-nnpc': HeroWhyNnpc;
      'images-popup.images': ImagesPopupImages;
      'last-section.last-section': LastSectionLastSection;
      'other-items.items': OtherItemsItems;
      'other-sections.section': OtherSectionsSection;
      'other.faqs-section': OtherFaqsSection;
      'other.faqs': OtherFaqs;
      'other.image-blocks-section': OtherImageBlocksSection;
      'other.last-section': OtherLastSection;
      'other.report': OtherReport;
      'other.section-alt': OtherSectionAlt;
      'other.section': OtherSection;
      'popup.csr-popup': PopupCsrPopup;
      'reports.reports': ReportsReports;
      'section-two.section-two': SectionTwoSectionTwo;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
      'term-pages.content': TermPagesContent;
      'work-types.work-types': WorkTypesWorkTypes;
      'work.work-with-nnpc': WorkWorkWithNnpc;
      'year.years-of-experience': YearYearsOfExperience;
    }
  }
}
