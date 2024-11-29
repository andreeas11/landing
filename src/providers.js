import posthog from 'posthog-js'

posthog.init('phc_8smOkLccJGmGvpAWV79oJwJpEIqVLt3HZao5yAKLZR7',
    {
        api_host: 'https://eu.i.posthog.com',
        person_profiles: 'always' // or 'always' to create profiles for anonymous users as well
    }
)