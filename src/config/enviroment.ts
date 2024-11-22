

const urlBase = 'http://localhost/'



export const api = {
    //Home
    apiCarousel: `${urlBase}conektion/wp-json/home/v1/carousel`,


    //About Us
    apiAboutUsHeader: `${urlBase}conektion/wp-json/about-us/v1/header`,
    apiAboutUsTeamMembers: `${urlBase}conektion/wp-json/about-us/v1/team`,
    apiAboutUsTeamHeader: `${urlBase}conektion/wp-json/about-us/v1/team-header`,

    //Case Studies
    apiCaseStudiesHeader: `${urlBase}conektion/wp-json/case-studies/v1/header`,

    //Coming Events
    apiComingEventsHeader: `${urlBase}conektion/wp-json/coming-events/v1/header`,
    apiComingEventsBlogEntries: `${urlBase}conektion/wp-json/coming-events/v1/blog-entries`,
}