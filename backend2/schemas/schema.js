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

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    hero, whyus, services, aboutme, aboutus, faq, cta,     
  ]),
})
