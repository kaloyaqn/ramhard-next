// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import hero from './bg/title.js'
import whyus from './bg/whyus.js'
import services from './bg/ourservices.js'
import aboutme from './bg/aboutme.js'
import aboutus from './bg/aboutus.js'
import faq from './bg/faq.js'
import cta from './bg/cta.js'
import footer from './bg/footer.js'

import privacy_policy from './bg/privacy_policy.js'
import terms_and_conditions from './bg/terms_and_conditions.js'
import cancellation_policy from './bg/cancellation_policy.js'
import cookies_policy from './bg/cookies_policy.js'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    hero, whyus, services, aboutme, aboutus, faq, cta, footer,
    privacy_policy, terms_and_conditions, cancellation_policy, cookies_policy,     
  ]),
})
