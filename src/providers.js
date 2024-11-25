import posthog from 'posthog-js'

posthog.init('phc_I3HhE8gZufbartT15PrEjeJo3GVGJ5S4Dl6jN1SBa1',
    {
        api_host: 'https://eu.i.posthog.com',
        person_profiles: 'always' // or 'always' to create profiles for anonymous users as well
    }
)